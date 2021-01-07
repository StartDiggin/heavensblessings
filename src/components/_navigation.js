import React from 'react';
import { NavLink } from 'react-router-dom';

import boneImg from '../images/bone.svg';


const Navigation = () => {
    return(
        <div className="navigation">
            <ul className="navigation__menu">
                <li className="navigation__links u-center-text">
                    <NavLink to='/about' className="navigation__link">About Us</NavLink>
                    <img className="navigation__img" src={boneImg} alt=""/>
                </li>
                <li className="navigation__links u-center-text">
                    <NavLink to='/newpuppies' className="navigation__link">New Puppies</NavLink>
                    <img className="navigation__img" src={boneImg} alt=""/>
                </li>
                <li className="navigation__links u-center-text">
                    <NavLink to='/contact' className="navigation__link">Contact Us</NavLink>
                    <img className="navigation__img" src={boneImg} alt=""/>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;