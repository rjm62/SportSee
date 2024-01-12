import {createContext, useEffect, useState} from 'react'
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../../data/dataMocked'
import {getUserFetchData, getActivityFetchData, getAverageSessionsFetchData, getPerformanceFetchData} from '../../services/DatasAPI.jsx'

export const DataContext = createContext();

 export const DataContextProvider = ({children}) =>{
    const [firstName, setFirstName] = useState("")
    const[comment, setComment] = useState("Félicitations ! vous avez explosé vos objectifs hier")
    const [usersId, setUsersId] = useState("")
    const [userData, setUserData] = useState(USER_MAIN_DATA)
    const [index, setIndex] = useState("0")
    const [activityData, setActivityData] = useState(USER_ACTIVITY)
    const [averageSessionsData, setAverageSessionsData] = useState(USER_AVERAGE_SESSIONS)
    const [performanceData, setPerformanceData] = useState(USER_PERFORMANCE)
    const [choosenData, setChoosenData] = useState('API')
    const [APError, setAPError] = useState(true)

    useEffect(() => { 
        setAPError(false)
        
        getUserFetchData().then((data) =>  (data)=== "error" || choosenData=== "dataMocked" ? (setUserData(USER_MAIN_DATA), setChoosenData("dataMocked")): (setUserData(data), setFirstName(data[0].userInfos.firstName)) )
        getActivityFetchData().then((data) => (data)=== "error" || choosenData=== "dataMocked" ? (setActivityData(USER_ACTIVITY), setChoosenData("dataMocked") ): (setActivityData(data)))
        getAverageSessionsFetchData().then((data) => (data)=== "error" || choosenData=== "dataMocked" ? (setAverageSessionsData(USER_AVERAGE_SESSIONS), setChoosenData("dataMocked")) : setAverageSessionsData(data));   
        getPerformanceFetchData().then((data) => (data)=== "error" || choosenData=== "dataMocked"   ? (setPerformanceData(USER_PERFORMANCE), setChoosenData("dataMocked")) : setPerformanceData(data));  
        // if (choosenData==="API") {
            getPerformanceFetchData().then((data) => (data)==="error" ? setAPError(true) : setAPError(false))
            // getAverageSessionsFetchData().then((data) => (data)==="error" ? setAPError(true) : setAPError(false))
            // getActivityFetchData().then((data) => (data)==="error" ? setAPError(true) : setAPError(false))
            // getUserFetchData().then((data) => (data)==="error" ? setAPError(true) : setAPError(false))

            // getUserFetchData().then((data) => (data)==="error") && getActivityFetchData().then((data) => (data)==="error") && getAverageSessionsFetchData().then((data) => (data)==="error") && getPerformanceFetchData().then((data) => (data)==="error") ? setAPError(true) : setAPError(false)
        // }
        
        // if (choosenData==="dataMocked") {
        //     setAPError(false)              
        // }   
        
        
    }, [choosenData, firstName]); 

    return (
        
        <DataContext.Provider value ={{ userData, activityData, averageSessionsData, performanceData, choosenData,APError, setChoosenData, usersId, setUsersId, firstName, setFirstName, setIndex, index, comment, setComment}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider