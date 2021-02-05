import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar u-margin-top-3">
            <ul className="sidebar__links u-center-text">
                <li className="sidebar__link u-margin-TB-3">
                    <NavLink to='/poodles' className="navigation__link">
                    <p className="sidebar__link--1">About
                    <span className="sidebar__link--2">&nbsp;</span>
                    </p>Poodles
                    </NavLink>
                </li>
                <li className="sidebar__link u-margin-TB-3">
                    <NavLink to='/aussies' className="navigation__link">
                    <p className="sidebar__link--1">About
                    <span className="sidebar__link--2">&nbsp;
                    </span>
                    </p>Aussiedoodles
                    </NavLink>
                </li>
                <li className="sidebar__link u-margin-TB-3"><NavLink to='/litters' className="navigation__link">Planned Litters</NavLink></li>
                <li className="sidebar__link u-margin-TB-3"><NavLink to='/pastpups' className="navigation__link">Past Puppies</NavLink></li>
                <li className="sidebar__link u-margin-TB-3"><NavLink to='/parents' className="navigation__link">Meet the Parents</NavLink></li>
            </ul>
        </div>
    )
};

export default Sidebar;


