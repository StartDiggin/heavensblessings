import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <div className="header">
            <div className="header__logo">
                <NavLink to='/' className="header__logo--link">LOGO</NavLink>   
            </div>
        </div>
    )
}

export default Header;