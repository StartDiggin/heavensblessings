import React from 'react';
// import img1 from '../images/cardImgs/img6.jpg';
// import img2 from '../images/cardImgs/img17.jpg';
// import img3 from '../images/cardImgs/img23.jpg';




const Card = () => {

    return (
        <div className="row">
            {/* card 1 */}
            <div className="row--1">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1">
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--2">Samantha</span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>9 weeks</li>
                                <li>23 Lbs.</li>
                                <li>Playful</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                         <div className="card__cta">
                            <div className="card__breed-box">
                                <p className="card__breed-name--1">Samantha</p>
                                <p className="card__breed-name">DOB:<h5>01/01/2021</h5></p>
                                <p className="card__breed-name">Breed:<h5>Aussiedoodle</h5></p>
                                <p className="card__breed-name">Colors:<h5>Merle / Wavy</h5></p>
                                <p className="card__breed-name">Parents:<h5>Pixie & Copper</h5></p>
                            </div>
                            <a href="/" className="btn btn--pink">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* card 2 */}
             <div className="row--1">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">Ranger</span>
                        </h4>
                        <div className="card__details">
                             <ul>
                                <li>9 weeks</li>
                                <li>21 Lbs.</li>
                                <li>Playful</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                         <div className="card__cta">
                            <div className="card__breed-box">
                                <p className="card__breed-name--2">Ranger</p>
                                <p className="card__breed-name">DOB:<h5>01/01/2021</h5></p>
                                <p className="card__breed-name">Breed:<h5>Aussiedoodle</h5></p>
                                <p className="card__breed-name">Colors:<h5>Merle / Wavy</h5></p>
                                <p className="card__breed-name">Parents:<h5>Autumn & Copper</h5></p>
                            </div>
                            <a href="/" className="btn btn--blue">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* card 3  */}
             <div className="row--1">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">Shaggy</span> 
                        </h4>
                        <div className="card__details">
                             <ul>
                                <li>9 weeks</li>
                                <li>22 Lbs.</li>
                                <li>Bashful</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                        <div className="card__cta">
                            <div className="card__breed-box">
                                <p className="card__breed-name card__breed-name--2">Shaggy</p>
                                <p className="card__breed-name">DOB:<h5>01/01/2021</h5></p>
                                <p className="card__breed-name">Breed:<h5>Aussiedoodle</h5></p>
                                <p className="card__breed-name">Colors:<h5>Phantom & Wavy</h5></p>
                                <p className="card__breed-name">Parents:<h5>Luna & Copper</h5></p>
                            </div>
                            <a href="/" className="btn btn--blue">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Card;