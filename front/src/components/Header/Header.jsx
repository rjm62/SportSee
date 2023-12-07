import {NavLink} from 'react-router-dom'
import '../../style/Header.css'
import logoFirstPart from'../../assets/pictures/logoFirstPart.png'
import logoSecondPart from'../../assets/pictures/logoSecondPart.png'


function Header() {
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
                <NavLink to="/#" className='text'>Réglage</NavLink>
                <NavLink to="/#" className='text'>Communauté</NavLink>
            </div>
        </div>
    )
}

export default Header