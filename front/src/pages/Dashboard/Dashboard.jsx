import {useState} from 'react'
import { useContext } from 'react'
import {DataContext}  from '../../utils/Context/DataContext'
import SideBar from '../../components/SideBar/SideBar';
import ActivityBarCharts from '../../components/ActivityBarCharts/ActivityBarCharts'
import LineCharts from '../../components/LineCharts/LineCharts'
import RadialBarCharts from '../../components/RadialBarCharts/RadialBarCharts'
import EnergyBurnedData from '../../components/EnergyBurnedData/EnergyBurnedData'
import RadarCharts from '../../components/RadarCharts/RadarCharts'
import UserSwitch from '../../components/UserSwitch/UserSwitch'
import felicitations from '../../assets/pictures/felicitations.png'
import energy from '../../assets/pictures/energy.svg'
import chicken from '../../assets/pictures/chicken.svg'
import apple from '../../assets/pictures/apple.svg'
import cheeseburger from '../../assets/pictures/cheeseburger.svg'
import '../../style/Dashboard.css'

function Dashboard() {
    const {userData, activityData, averageSessionsData, performanceData} = useContext(DataContext)
    const [firstNameId, setFirstNameId] = useState(0)
    const {index, setIndex} = useContext(DataContext)
    const [userEnergies, setUserEnergies] = useState(userData[index].keyData)
    const [visibility, setVisibility] = useState("on")
    const {usersId, setUsersId}= useContext(DataContext)
    const {firstName, setFirstName} = useContext(DataContext)
    const{comment, setComment} = useContext(DataContext)
    // const [score, setScore] = useState(userData[index].todayScore )
    const score = (userData[index].todayScore)*100 || (userData[index].score)*100 

   
    // {score === undefined ? setScore(userData[index].score) : setScore(score)}
 
    //fonction pour récupérer le prénom dans l'enfant userSwitch
    const firstNameChange = (newVisibility) => {
        console.log(newVisibility)
        newVisibility=== "off" ? setVisibility("off"): setVisibility("on")
    }

    return (
        <main className='mainContainer'>
        <SideBar /> 
        <div className='articleContainer'>
            <div className='userChoiceAndCommentContainer'>
                <div className='firstNameAndCommentContainer'>
                    <h1>Bonjour <strong>{firstName}</strong></h1>
                    <div className='comment'>
                        <h4>{comment}</h4>
                        <img className={visibility} src={felicitations} alt="applaudissements" />
                    </div>
                </div>
            <UserSwitch buttonText='Choix utilisateur' recoveryInChild={firstNameChange}  champText="Entrez votre prénom"/>
            </div>
            <div className='activityAndEnergyContainer'>
                <div className='activityContainer'> 
                    <div className='ActivityBarCharts'>
                        <ActivityBarCharts user = {activityData[index]} />
                    </div>
                    <div className='graphsTwoThreeFourContainer'>
                            <div className='graph'> 
                                <LineCharts  user ={averageSessionsData[index]} /> 
                            </div>
                            <div className='graph'>
                                <RadarCharts user={performanceData[index]}  />
                            </div>
                            <div className='graph four'>
                                <RadialBarCharts user = {userData[index]} />
                                <div className='circle'>
                                    <h3 className='pourcent'>{score}%</h3>
                                    <p>de votre objectif</p>
                                </div>
                            </div>
                    </div>
                </div>  
                <section className='energiesContainer'>
                    <EnergyBurnedData value={userData[index].keyData.calorieCount+"kcal"} color={"transparentRed"} energyType={"Calories"} energyIcon={energy} />
                    <EnergyBurnedData value={userData[index].keyData.proteinCount+"g"} color={"transparentBlue"} energyType={"Proteines"}  energyIcon={chicken}/>
                    <EnergyBurnedData value={userData[index].keyData.carbohydrateCount+"g"} color={"transparentYellow"} energyType={"Glucides"} energyIcon={apple} />
                    <EnergyBurnedData value={userData[index].keyData.lipidCount+"g"} color={"transparentRed"} energyType={"Lipides"} energyIcon={cheeseburger} />                     
                </section>     
            </div>
        </div>
      </main>
    )
}

export default Dashboard