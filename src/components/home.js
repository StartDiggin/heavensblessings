import React from 'react';

import img1 from "../images/slideshow/img1.jpeg";
import img2 from "../images/slideshow/img2.jpeg";
import img3 from "../images/slideshow/img3.jpeg";
import img4 from "../images/slideshow/img4.jpeg";
import img5 from "../images/slideshow/img5.jpeg";

const Home = () => {
    return(
        <div className="home u-center-text">
            <h1 className="heading-primary u-margin-top-2">Welcome to Heavens Blessings</h1>
            <div className="home__container">
                <div className="home__carousel">
                   <img className="home__images home__images--active" src={img1} alt="puppy"/>
                   <img className="home__images " src={img2} alt="puppy"/>
                   <img className="home__images " src={img3} alt="puppy"/>
                   <img className="home__images " src={img4} alt="puppy"/>
                   <img className="home__images " src={img5} alt="puppy"/>
                </div>
            </div>
            <div className="home__msg u-margin-TB-3 ">
                <h3 className="home__msg-1">Thank you so much for visiting our site!</h3>
                <h3 className="home__msg-1">We hope you find your perfect puppy with us!</h3>
            </div>

            {/* single images front and back card  */}
            <div className="row">
                {/* col-1  */}
                <div className="row--1">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <h2>text front</h2>
                        </div>
                        <div className="card__side card__side--back">
                            <h2>text back</h2>
                        </div>
                    </div>
                </div>
                {/* col-2  */}
                <div className="row--1">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <h2>text front</h2>
                        </div>
                        <div className="card__side card__side--back">
                            <h2>text back</h2>
                        </div>
                    </div>
                </div>
                {/* col-3  */}
                <div className="row--1">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <h2>text front</h2>
                        </div>
                        <div className="card__side card__side--back">
                            <h2>text back</h2>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;