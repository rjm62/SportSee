import {createContext, useEffect, useState} from 'react'
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../../data/dataMocked'
import {getUserFetchData, getActivityFetchData, getAverageSessionsFetchData, getPerformanceFetchData} from '../../services/DatasAPI.jsx'

export const DataContext = createContext();

 export const DataContextProvider = ({children}) =>{
    const [firstName, setFirstName] = useState(USER_MAIN_DATA[0].userInfos.firstName)
    const[comment, setComment] = useState("Félicitations ! vous avez explosé vos objectifs hier")
    const [usersId, setUsersId] = useState("")
    const [userData, setUserData] = useState(USER_MAIN_DATA)
    const [index, setIndex] = useState("0")
    const [activityData, setActivityData] = useState(USER_ACTIVITY)
    const [averageSessionsData, setAverageSessionsData] = useState(USER_AVERAGE_SESSIONS)
    const [performanceData, setPerformanceData] = useState(USER_PERFORMANCE)
    const [choosenData, setChoosenData] = useState('dataMocked')
   
    // const change =(newchoice) => {
    //     setChoosenData(newchoice)
    // }

    useEffect(() => { 
        getUserFetchData().then((data) =>  data[0] === "error" || choosenData==="dataMocked" ? setUserData(USER_MAIN_DATA) : setUserData(data)) 
        getActivityFetchData().then((data) =>  data[0] === "error" || choosenData==="dataMocked" ? setActivityData(USER_ACTIVITY) : setActivityData(data) );
        getAverageSessionsFetchData().then((data) =>  data[0] === "error" || choosenData==="dataMocked" ? setAverageSessionsData(USER_AVERAGE_SESSIONS) : setAverageSessionsData(data) );   
        getPerformanceFetchData().then((data) =>  data[0] === "error" || choosenData==="dataMocked" ? setPerformanceData(USER_PERFORMANCE) : setPerformanceData(data) );  

    }, [firstName]); 

    return (
        <DataContext.Provider value ={{ userData, activityData, averageSessionsData, performanceData, choosenData, setChoosenData, usersId, setUsersId, firstName, setFirstName, setIndex, index, comment, setComment}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider