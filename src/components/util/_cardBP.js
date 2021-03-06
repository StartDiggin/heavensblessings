import React from 'react';

const CardBP = ({id, name, age, weight, temperment, dob, breed, color, parents, img}) => {

    return(

        <div className="row--1">
                <div className="card">
                    <div className="card__side card__side--front">
                        <div className="picture">
                            <img className="newpups__img" src={img} alt="puppy"/>
                        </div>
                        <h4 className="card__heading">
                            <span className="card__heading-span newpups__heading-span--default">{name}</span>
                        </h4>
                        <div className="card__details">
                            <ul>
                                <li>9 weeks</li>
                                <li>{weight} Lbs.</li>
                                <li>{temperment}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__side card__side--back">
                         <div className="card__cta">
                            <div className="card__breed-box">
                                <p className="card__breed-name">{name}</p>
                                <p className="card__breed-name">DOB:</p><h5>{dob}</h5>
                                <p className="card__breed-name">Breed:</p><h5>{breed}</h5>
                                <p className="card__breed-name">Colors:</p><h5>{color}</h5>
                                <p className="card__breed-name">Parents:</p><h5>{parents}</h5>
                            </div>
                            <a href="/contact" className="btn btn--pink">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CardBP;