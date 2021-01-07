import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo.svg';


const Header = () => {
    return(
        <div className="header">
            <div className="header__logo">
                <NavLink to='/' className="header__logo--link"><img src={Logo} alt="Logo"/> </NavLink>   
            </div>
        </div>
    )
}

export default Header;