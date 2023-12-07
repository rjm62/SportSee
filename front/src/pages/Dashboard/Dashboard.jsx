import {useState} from 'react'
import ActivityBarCharts from '../../components/ActivityBarCharts/ActivityBarCharts'
import EnergyBurnedData from '../../components/EnergyBurnedData/EnergyBurnedData'
import UserSwitch from '../../components/UserSwitch/UserSwitch'
import felicitations from '../../assets/pictures/felicitations.png'
import {USER_MAIN_DATA} from '../../data/dataMocked'
import energy from '../../assets/pictures/energy.svg'
import chicken from '../../assets/pictures/chicken.svg'
import apple from '../../assets/pictures/apple.svg'
import cheeseburger from '../../assets/pictures/cheeseburger.svg'
import '../../style/Dashboard.css'

function Dashboard() {
    //state pour récupérer le prénom
    const [firstName, setFirstName] = useState("Karl")
    const [firstNameId, setFirstNameId] = useState("0")
    const [userEnergies, setUserEnergies] = useState(USER_MAIN_DATA[firstNameId]["keyData"])

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
    
        for(let i=0; i<USER_MAIN_DATA.length; i++) {
            if(USER_MAIN_DATA[i].userInfos.firstName.toLowerCase().trim()===stringreceived) {
                setFirstNameId(i)
                setUserEnergies(USER_MAIN_DATA[i]["keyData"])
                console.log(userEnergies)
            }
        }
    }

    return (
      <main className='mainContainer'>
        <div className='userChoiceAndCommentContainer'>
            <div className='commentContainer'>
                <h1>Bonjour <strong>{firstName}</strong></h1>
                <img src={felicitations} alt="texte de félicitations"/>
            </div>
            <UserSwitch buttonText='Choix utilisateur' recoveryInChild={firstNameChange} champText="Entrez votre prénom"/>
        </div>
        <div className='activityAndEnergyContainer'>
            <div className='activityContainer'> 
                <div className='ActivityBarCharts'>
                    <ActivityBarCharts />
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