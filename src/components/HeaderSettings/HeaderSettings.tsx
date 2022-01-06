import SearchIcon from '../../assets/icons/search.svg';
import UserIcon from '../../assets/icons/user.svg';
import ShoppingIcon from '../../assets/icons/shopping-cart.svg';

const HeaderSettings = () => {
    return (
        <div className='hotelSettings'>
            <div className="search">
                <img src={SearchIcon} alt='search' />
            </div>
            <div className='user'>
                <img src={UserIcon} alt='user' />
            </div>
            <div className='price'>
                <span>2  -  $56.90</span>
            </div>
            <div className='shopping-card'>
                <img src={ShoppingIcon} alt="shopping-cart" />
            </div>
        </div>
    )
}

export default HeaderSettings;