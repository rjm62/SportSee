import {createContext, useContext, useState} from 'react'
import {USER_MAIN_DATA} from '../../data/dataMocked'

export const DataContext = createContext();

 export const DataContextProvider = ({children}) =>{
    const [userData, setUserData] = useState(USER_MAIN_DATA)
    const [activityData, setActivityData] = useState("Milou")
    const [averageSessionsData, setAverageSessionsData] = useState("Haddock")
    const [performanceData, setPerformanceData] = useState("Tournesol")
    
    return (
        <DataContext.Provider value ={{ userData, activityData, averageSessionsData, performanceData}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider