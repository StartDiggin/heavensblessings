import React from 'react';
import img1 from '../images/img7.jpg';

const About = () => {
    return(
        <div className="about u-center-text u-margin-top-3">
            <h1 className="about__heading heading-page">About Us</h1>
            <img src={img1} alt=""/>
        </div>
    )
}

export default About;