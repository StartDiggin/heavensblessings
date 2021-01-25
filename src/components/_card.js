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
                        <div className="card__heading">
                            Heading
                        </div>
                        <div className="card__details">
                            Details
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                        <h2>text back</h2>
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
                        <div className="card__heading">
                            Heading
                        </div>
                        <div className="card__details">
                            Details
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                        <h2>text back</h2>
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
                        <div className="card__heading">
                            Heading
                        </div>
                        <div className="card__details">
                            Details
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                        <h2>text back</h2>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Card;