import {useState, useEffect} from 'react'
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
    const {index} = useContext(DataContext)
    const [visibility, setVisibility] = useState("on")
    const {firstName} = useContext(DataContext)
    const{comment} = useContext(DataContext)
    const{choosenData} = useContext(DataContext)
    const score = (userData[index].todayScore)*100 || (userData[index].score)*100 
    const firstNameChange = (newVisibility) => {
        newVisibility=== "off" ? setVisibility("off"): setVisibility("on")
    }

    useEffect(() => {
        setVisibility("on")
    }, [choosenData])

    //changement du point en virgule dans la valeur des calories brulées
    const PointVirguleChange = (number) =>{
        number = number.replace(".",",")
        return number
    }



    return (
        <main className='mainContainer'>
        <SideBar /> 
        <div className='articleContainer'>
            <div className='userChoiceAndCommentContainer'>
                <div className='firstNameAndCommentContainer'>
                    {visibility==="off" && comment!=="Félicitations ! vous avez explosé vos objectifs hier"? <h1>Bonjour</h1> :
                    <h1>Bonjour <strong>{firstName}</strong></h1> }
                    <div className='comment'>
                        <h4>{comment}</h4>
                        {comment==="Félicitations ! vous avez explosé vos objectifs hier" ? <img  className="on"  src={felicitations} alt="applaudissements" /> : console.log("rien")}
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
                    <EnergyBurnedData value={PointVirguleChange(userData[index].keyData.calorieCount/1000+"kcal")} color={"transparentRed"} energyType={"Calories"} energyIcon={energy} />
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













