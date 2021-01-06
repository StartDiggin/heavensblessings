import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return(
        <div className="navigation">
            <ul className="navigation__menu">
                <NavLink to='/about' className="navigation__link">About Us</NavLink>
                <NavLink to='/newpuppies' className="navigation__link">New Puppies</NavLink>
                <NavLink to='/contact' className="navigation__link">Contact Us</NavLink>
            </ul>
        </div>
    )
}

export default Navigation;