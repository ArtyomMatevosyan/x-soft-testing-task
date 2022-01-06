import PetHempIcon from '../../assets/logo.svg'
import HeaderSettings from '../HeaderSettings/HeaderSettings'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return(
        <div className='header'>
            <div className='header_container'>
                <img src={PetHempIcon} alt="PetHempIcon" />
                <Navbar />
                <HeaderSettings />
            </div>
        </div>
    )
}

export default Header