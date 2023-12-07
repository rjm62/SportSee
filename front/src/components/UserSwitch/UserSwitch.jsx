import {useState} from 'react'
import '../../style/UserSwitch.css'

function UserSwitch({buttonText, champText, recoveryInChild}) {
    const [openContainerClassName, setOpenContainerClassName] = useState(['displayOpen','type', 'colorRed','true'])
    const [displayChoiceClassName, setDisplayChoiceClassName] = useState(['displayChoice', 'type','colorBlack','false'])
    const [newUser, setNewUser] = useState("")

    const handleClickOpen = (event) => {
        event.preventDefault()
        setOpenContainerClassName(['displayOpen','type','colorRed','false'])
        setDisplayChoiceClassName(['displayChoice', 'type','colorBlack','true'])
        setNewUser("")

    }

    const handleClickChoice = (event) => {
        event.preventDefault()
        setDisplayChoiceClassName(['displayChoice', 'type','colorBlack','false'])
        setOpenContainerClassName(['displayOpen', 'type','colorRed','true'])
        recoveryInChild(newUser)
    }

    const handleChange = (event) => {
        setNewUser(event.target.value);
    }

    return (
        <div  className='userChoiceContainer'>
            <button className={openContainerClassName.join(" ")} onClick={handleClickOpen}>{buttonText}</button>
            <form className={displayChoiceClassName.join(" ")}>
                <div className="userChoiceChamp">
                    <label>{champText}</label>
                    <input type="text" value={newUser} onChange={handleChange}></input>
                </div>
                <input className='containerStyle' type="submit" onClick={handleClickChoice} value="Valider"></input>
            </form>
        </div>
    )
}

export default UserSwitch