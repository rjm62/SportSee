import {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import '../../style/Header.css'
import {useContext} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import logoFirstPart from'../../assets/pictures/logoFirstPart.png'
import logoSecondPart from'../../assets/pictures/logoSecondPart.png'

function Header() {
    const {userData, activityData, averageSessionsData, performanceData} = useContext(DataContext)
    const {index, setIndex} =useContext(DataContext)
    const [setting, setSetting] = useState(["settingContainer text"])
    const [settingForm, setSettingForm] =  useState(["formContainer close"])
    const [APIChoice, setAPIChoice] = useState(true)
    const [mockedChoice, setMockedChoice] = useState(false)
    const {choosenData, setChoosenData}= useContext(DataContext)
    const {firstName, setFirstName} = useContext(DataContext)
    // const {firstName, setFirstName} = useContext(DataContext)
    const [visibilityError, setVisibilityError] = useState("errorContainer close")
    const {APError} = useContext(DataContext)
    const {comment, setComment} = useContext(DataContext)
    const [alertDisplay, setAlertDisplay] = useState(false)
   


useEffect(() => {
    // choosenData==="dataMocked" ? setAlertDisplay(false) :setAlertDisplay(APError)
    // console.log(choosenData)
    // console.log(APIChoice)
   
    choosenData==="dataMocked" && APIChoice=== true ? alert("Désolé nous rencontrons un problème de connexion à l'API , vous allez être redirigé sur les données mockées"): console.log("RIEN")
    
   choosenData==="dataMocked" && APIChoice=== true ? setFirstName("Apolline") : console.log("RIEN")
    choosenData==="dataMocked" ? setAPIChoice(false) : setAPIChoice(true)
    choosenData==="API" ? setMockedChoice(false) : setMockedChoice(true)
    
    // alertDisplay === true ? alert("Désolé nous rencontrons un problème de connexion à l'API , vous allez être redirigé sur les données mockées"): setVisibilityError(["errorContainer close"])
    // setAlertDisplay(!alertDisplay)
    // }
    // if(choosenData==="dataMocked") {
    //     setAlertDisplay(false)
    
    },[choosenData, APError])


    const handleChangeData = (event) => {
        event.preventDefault()
        setSetting(["settingContainer noText"])
        setSettingForm(["formContainer open"])
    }
    const handleClose = (event) => {
        event.preventDefault()
        setSetting(["settingContainer text"])
        setSettingForm(["formContainer close"])
    }

    const onChangeValue = (event) => {
        if(APIChoice==="API") {
            setIndex("0")
        }
        setAPIChoice(!APIChoice)

        setMockedChoice(!mockedChoice)
        setChoosenData(event.target.value)
        window.localStorage.setItem("userId", "12")
        choosenData=== "dataMocked" ? setFirstName("Karl") :  setFirstName("Apolline") 
        setComment("Félicitations ! vous avez explosé vos objectifs hier") 
        

        setIndex("0")
      
        
    }
   

    return (
        <div className='blackHorizontalBand'>
            <div className='logoContainer'>
                <div className='logoFirstPartContainer'>
                    <img src = {logoFirstPart} alt="logoRunner" />
                </div>
                <img className='logoText' src = {logoSecondPart} alt="logoText" />
            </div>
            <div className='navContainer'>
                <NavLink to="/#" className='text'>Accueil</NavLink>
                <NavLink to="/#" className='text'>Profil</NavLink>
                <div >
                    <button className={setting} onClick={handleChangeData}>Réglage</button>
                    <div className={settingForm} onChange={onChangeValue}>
                        Données: 
                        <label for="APIChoice">
                        <input type="radio" name="login" id="APIChoice" value="API" checked={APIChoice} /> <span> API</span>
                        </label>
                        <label for="mockedChoice">
                        <input type="radio" name="login" id="mockedChoice" value="dataMocked" checked={mockedChoice} />  <span> Mockées</span>
                        </label>
                        <input  className="closeButton" onClick={handleClose} type="button" value='Fermer' />
                    </div>
                    <div className= {visibilityError}>
                        <p>Désolé nous rencontrons un problème pour connecter l'API, nous allons vous rebasculer sur les données mockées</p>
                    </div>
                </div>

                <NavLink to="/#" className='text'>Communauté</NavLink>
            </div>
        </div>
    )
}

export default Header