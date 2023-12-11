import {useState} from 'react'

import { useContext } from 'react'
import {DataContext}  from '../../utils/Context/DataContext'
import ActivityBarCharts from '../../components/ActivityBarCharts/ActivityBarCharts'
import EnergyBurnedData from '../../components/EnergyBurnedData/EnergyBurnedData'
import UserSwitch from '../../components/UserSwitch/UserSwitch'
import felicitations from '../../assets/pictures/felicitations.png'
import energy from '../../assets/pictures/energy.svg'
import chicken from '../../assets/pictures/chicken.svg'
import apple from '../../assets/pictures/apple.svg'
import cheeseburger from '../../assets/pictures/cheeseburger.svg'
import '../../style/Dashboard.css'

function Dashboard() {
    const {userData, activityData, averageSessionsData} = useContext(DataContext)
    //state pour récupérer le prénom
    const [firstName, setFirstName] = useState("Karl")
    const [firstNameId, setFirstNameId] = useState("0")
    const [userEnergies, setUserEnergies] = useState(userData[firstNameId]["keyData"])
    const [comment, setComment] = useState(felicitations)

  


    //fonction pour récupérer le prénom dans l'enfant userSwitch
    const firstNameChange = (newFirstName) => {
        setFirstName(newFirstName)

        var stringreceived = newFirstName.toLowerCase().trim();
        const accentLetterArray =  ['à','á','â','é','è','ê','ë','ì','í','ï','î','ò','ó','ô','ù','ú','û','ü','ç'];
        const withoutletterArray = ['a','a','a','e','e','e','e','i','i','i','i','o','o','o','u','u','u','u','c'];
        
        
        for(let k =0; k<stringreceived.length; k++){
            for(let l=0; l<accentLetterArray.length; l++) {
                if (stringreceived.charAt(k)=== accentLetterArray[l]) {
                     stringreceived = stringreceived.replace(stringreceived[k], withoutletterArray[l]);
                }
            }
        } 
    
        for( let i=0; i<userData.length; i++) {
            if(userData[i].userInfos.firstName.toLowerCase().trim()===stringreceived) {
                setFirstNameId(i)
                setUserEnergies(userData[i]["keyData"])
                console.log(i)
                setComment(felicitations)           
            }
        }
    }

    return (
      <main className='mainContainer'>
        <div className='userChoiceAndCommentContainer'>
            <div className='commentContainer'>
                <h1>Bonjour <strong>{firstName}</strong></h1>
                <img src ={comment} alt="texte de félicitations"/>
                {/* <h2> Bonjour, désolé le prénom est inconnu de SportSee</h2> */}
            </div>
            <UserSwitch buttonText='Choix utilisateur' recoveryInChild={firstNameChange} champText="Entrez votre prénom"/>
        </div>
        <div className='activityAndEnergyContainer'>
            <div className='activityContainer'> 
                <div className='ActivityBarCharts'>
                    <ActivityBarCharts user = {firstNameId}/>
                </div>
                <div className='graphsTwoThreeFourContainer'> seconde partie</div>
            </div>  
            <section className='energiesContainer'>
                <EnergyBurnedData value={userEnergies["calorieCount"]+"kcal"} color={"transparentRed"} energyType={"Calories"} energyIcon={energy} />
                <EnergyBurnedData value={userEnergies["proteinCount"]+"g"} color={"transparentBlue"} energyType={"Proteines"}  energyIcon={chicken}/>
                <EnergyBurnedData value={userEnergies["carbohydrateCount"]+"g"} color={"transparentYellow"} energyType={"Glucides"} energyIcon={apple} />
                <EnergyBurnedData value={userEnergies["lipidCount"]+"g"} color={"transparentRed"} energyType={"Lipides"} energyIcon={cheeseburger} />                     
            </section>     
        </div>
      </main>
    )
}

export default Dashboard