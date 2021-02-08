import React from 'react';

const CardBP = (props) => {
    return(
        <div className="row--1">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="card__picture">
                            &nbsp;
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span">{props.name}</span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>{props.age}</li>
                                <li>{props.weight}</li>
                                <li>{props.temperment}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                         <div className="card__cta">
                            <div className="card__breed-box">
                                <p className="card__breed-name">{props.name}</p>
                                <p className="card__breed-name">DOB:</p><h5>{props.dob}</h5>
                                <p className="card__breed-name">Breed:</p><h5>{props.breed}</h5>
                                <p className="card__breed-name">Colors:</p><h5>{props.color}</h5>
                                <p className="card__breed-name">Parents:</p><h5>{props.parents}</h5>
                            </div>
                            <a href="/contact" className="btn btn--pink">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardBP;