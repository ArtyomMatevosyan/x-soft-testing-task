import { FC, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SearchIcon from '../../assets/icons/search.svg';
import UserIcon from '../../assets/icons/user.svg';
import ShoppingIcon from '../../assets/icons/shopping-cart.svg';

const HeaderSettings: FC = () => {

    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(true)
    
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
            <div
                className='burger_menu'
                onClick={() => (setIsOpenBurgerMenu(!isOpenBurgerMenu))}>
                <HamburgerMenu
                    isOpen={isOpenBurgerMenu}
                    color='#000'
                    menuClicked={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
                    width={40}
                    height={30}
                />
            </div>
        </div>
    )
}

export default HeaderSettings;