import React from 'react';
import CardBP from './util/_cardBP';
import parents from '../Data/puppies';






const PlannedLitters = () => {
   
    return(
        <div className="litters u-center-text u-margin-top-3">
            <h1 className="litters__heading heading-page">Planned Litters</h1>
            <div className="litters__container">
                <div className="litters__container__image">image-1</div>
                <div className="litters__container__image">image-2</div>
                <div className="litters__container__image">image-3</div>
                <div className="litters__container__image">image-4</div>
                <div className="litters__container__image">image-5</div>
                <div className="litters__container__image">image-6</div>


          {/* {parents.map(pup => <div className="litters__image"><CardBP 
                    key={pup.id}
                    id={pup.id}
                    name = {pup.name}
                    age = {pup.age}
                    weight = {pup.weight}
                    temperment = {pup.temperment}
                    dob = {pup.dob}
                    breed = {pup.breed}
                    color = {pup.color}
                    parents = {pup.parents}
                    img = {pup.img}
                    /></div>)} */}
            </div>
        </div>
    )
}

export default PlannedLitters;