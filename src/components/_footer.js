import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => { 
    return(
        <div className="footer">
            <div className="footer__logo">
                <NavLink to='/' className="footer__link">LOGO</NavLink>   
            </div>
        </div>
    )
}

export default Footer;