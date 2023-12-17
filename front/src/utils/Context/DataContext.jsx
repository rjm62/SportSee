import {createContext, useContext, useState} from 'react'
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from '../../data/dataMocked'

export const DataContext = createContext();

 export const DataContextProvider = ({children}) =>{
    const [userData, setUserData] = useState(USER_MAIN_DATA)
    const [activityData, setActivityData] = useState(USER_ACTIVITY)
    const [averageSessionsData, setAverageSessionsData] = useState(USER_AVERAGE_SESSIONS)
    const [performanceData, setPerformanceData] = useState(USER_PERFORMANCE)
    const [choosenData, setChoosenData] = useState('dataMocked')
    console.log(choosenData)
   
    const change =(newchoice) => {
        setChoosenData(newchoice)
    }

    // choosenData==='dataMocked'? setUserData(USER_MAIN_DATA) : setUserData("")
    
    return (
        <DataContext.Provider value ={{ userData, activityData, averageSessionsData, performanceData, choosenData, setChoosenData}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider