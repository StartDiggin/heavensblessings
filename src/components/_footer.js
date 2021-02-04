import React from 'react';
// import { NavLink } from 'react-router-dom';
import FBimg from '../images/fb.svg';
import instimg from '../images/insta.svg';

const Footer = () => { 
    return(
        <div className="footer">
            <ul className="footer__links">
                <li className="footer__link">About Us</li>
                <li className="footer__link">Contact Us</li>
                <li className="footer__link">Health Cert</li>
                <li className="footer__link"><img className="footer__link--img"src={FBimg} alt="Facebook"/></li>
                <li className="footer__link"><img className="footer__link--img"src={instimg} alt="Instagram"/></li>
            </ul>
        </div>
    )
}

export default Footer;