import {NavLink} from 'react-router-dom'
import '../../style/SideBar.css'
import yogaIcon from '../../assets/pictures/yogaIcon.png'
import swimmingIcon from '../../assets/pictures/swimmingIcon.png'
import cyclingIcon from '../../assets/pictures/cyclingIcon.png'
import weightLiftingIcon from '../../assets/pictures/weightLiftingIcon.png'


function SideBar() {
    return (
        <div className='blackVerticalBand'>
            <div className='sportsIconsContainer'>          
                <NavLink to='/#' className='sportsIcons'>
                    <img src= {yogaIcon} alt='icone du sport'/>
                </NavLink>                        
                <NavLink to="/#" className='sportsIcons'>
                    <img src= {swimmingIcon} alt='icone du sport'/>
                </NavLink>                   
                <NavLink to="/#" className='sportsIcons'>
                    <img src= {cyclingIcon} alt='icone du sport'/>
                </NavLink>                
                <NavLink to="/#" className='sportsIcons'>
                    <img src= {weightLiftingIcon} alt='icone du sport'/>
                </NavLink>              
            </div>
            <div className='copyrightContainer'>
                <p className='copyrightText'>copyright, Sportsee 2020</p>
            </div>
        </div>
    
    )
}

export default SideBar