import {useState, useContext} from 'react'
import '../../style/UserSwitch.css'
import { DataContext } from '../../utils/Context/DataContext'

function UserSwitch({buttonText, champText, recoveryInChild, recoveryIsKnown}) {
    const [userId, setUserId] = useState("")
    const [openContainerClassName, setOpenContainerClassName] = useState(['displayOpen','type', 'colorRed','true'])
    const [displayChoiceClassName, setDisplayChoiceClassName] = useState(['displayChoice', 'type','colorBlack','false'])
    const [newUser, setNewUser] = useState("")
    const {userData} = useContext(DataContext)
    const {choosenData} = useContext(DataContext)
    const {firstName, setFirstName} = useContext(DataContext)
    const {comment, setComment} = useContext(DataContext)
    const {usersId, setUsersId} = useContext(DataContext)
    const {index, setIndex} = useContext(DataContext)
    const[visibilityFelicitations, setVisibilityFelicitations] = useState("on")
    const[toutou, setToutou] = useState("yes")
    recoveryInChild(visibilityFelicitations)
    // recoveryIsKnown(toutou)
   
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

        setFirstName(newUser)
  
        var stringreceived = newUser.toLowerCase().trim();
        const accentLetterArray =  ['à','á','â','é','è','ê','ë','ì','í','ï','î','ò','ó','ô','ù','ú','û','ü','ç'];
        const withoutletterArray = ['a','a','a','e','e','e','e','i','i','i','i','o','o','o','u','u','u','u','c'];
            
        for(let k =0; k<stringreceived.length; k++){
            for(let l=0; l<accentLetterArray.length; l++) {
                if (stringreceived.charAt(k)=== accentLetterArray[l]) {
                     stringreceived = stringreceived.replace(stringreceived[k], withoutletterArray[l]);         
                }
            }
        }

        setFirstName(stringreceived);

       if (choosenData==="dataMocked") {
            var t=0;
            for( let i=0; i<userData.length; i++) {
                if(userData[i].userInfos.firstName.toLowerCase().trim()===stringreceived && t===0) {
                    setFirstName(userData[i].userInfos.firstName)
                    setUsersId(userData[i].id)
                    setIndex(i)
                    t=1
                }
            }
            
            if(t===0) {
                setComment("Désolé "+stringreceived.toUpperCase()+", vous ne faites pas  encore partie de nos adhérents") 
                setFirstName("") 
                setVisibilityFelicitations("off")  
                setToutou("no")              
            } 
            
            if(t===1) {
                setComment("Félicitations ! vous avez explosé vos objectifs hier")
                setVisibilityFelicitations("on")
                setToutou("yes")
            }
        }

        if(choosenData==="API") {
            const mainDataAPIList = [{id:12, userId:12, name:"Karl"}, {id:18, userId:18, name:"Cecilia"}]
            var t=0;
          
            for( let i=0; i<mainDataAPIList.length; i++) {
                if(mainDataAPIList[i].name.toLowerCase().trim()===stringreceived && t===0) {
                    const riri = mainDataAPIList[i].id
                    setFirstName(mainDataAPIList[i].name)
                    window.localStorage.setItem("userId", riri)
                    setUsersId(mainDataAPIList[i].id)
                    setIndex("0")
                    t=1
                }
            }
            
            if(t===0) {
                setFirstName("") 
                setComment("Désolé "+stringreceived.toUpperCase()+", vous ne faites pas  encore partie de nos adhérents") 
                setVisibilityFelicitations("off")                    
            } 
            
            if(t===1) {
                setComment("Félicitations ! vous avez explosé vos objectifs hier")
                setVisibilityFelicitations("on")
            }
        }
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