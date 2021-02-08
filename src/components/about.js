import React from 'react';
import img1 from '../images/img7.jpg';

const About = () => {
    return(
        <div className="about u-center-text u-margin-top-3">
            <h1 className="about__heading heading-page">About Us</h1>
            <img className="about__img u-margin-top-3" src={img1} alt=""/>
            <div className="about__desc">
                <p className="about__desc--p">
                    We have safely been breeding our dogs for 12 years. We take great pride and care in our dogs and puppies. At Heavens Blessings, quality of the breed is of utmost importance to us because when it is time for our puppies to join a loving home, they will be able to stay with you for a long time.
                </p>
            </div>
        </div>
    )
}

export default About;