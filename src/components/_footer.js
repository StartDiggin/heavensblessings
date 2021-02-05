import React from 'react';
import { NavLink } from 'react-router-dom';
import FBimg from '../images/fb.svg';
import instimg from '../images/insta.svg';

const Footer = () => { 
    return(
        <div className="footer">
            <ul className="footer__links">
                <li className="footer__link"><NavLink to='/about' className="navigation__link footer__link--1">About Us</NavLink></li>
                <li className="footer__link"><NavLink to='/contact' className="navigation__link footer__link--1">Contact Us</NavLink></li>
                <li className="footer__link"><NavLink to='/health' className="navigation__link footer__link--1">Health Cert</NavLink></li>
                <li className="footer__link"><a href="https://www.facebook.com/johnny.gonzales.161/" target="_blank" rel="noopener noreferrer"><img className="footer__link--img"src={FBimg} alt="Facebook"/></a></li>
                <li className="footer__link"><a href="https://www.instagram.com/dimension_122/" target="_blank" rel="noopener noreferrer"><img className="footer__link--img"src={instimg} alt="Instagram"/></a></li>
            </ul>
        </div>
    )
}

export default Footer;



// https://www.facebook.com/johnny.gonzales.161/ 
// {/* <a href="https://www.instagram.com/dimension_122/" target="_blank" rel="noopener noreferrer"></a> */}