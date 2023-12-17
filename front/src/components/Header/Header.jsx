import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../../style/Header.css'
import {useContext} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import logoFirstPart from'../../assets/pictures/logoFirstPart.png'
import logoSecondPart from'../../assets/pictures/logoSecondPart.png'



function Header() {
    const [setting, setSetting] = useState(["settingContainer text"])
    const [settingForm, setSettingForm] =  useState(["formContainer close"])
    const [APIChoice, setAPIChoice] = useState(false)
    const [mockedChoice, setMockedChoice] = useState(true)
    const {choosenData, setChoosenData}= useContext(DataContext)
    console.log(choosenData)

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
        setAPIChoice(!APIChoice)
        setMockedChoice(!mockedChoice)
        setChoosenData(event.target.value)
      
        
    }


    // const onChangeValue = (event.target.value) => {
    //     for (let i=0; i< radio.length; i++) {
    //         if(radio[i].checked) {
    //             alert(radio[i].value)
    //         }
    //     }
    // }

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
                </div>

                <NavLink to="/#" className='text'>Communauté</NavLink>
            </div>
        </div>
    )
}

export default Header