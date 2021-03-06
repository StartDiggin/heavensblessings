import React from 'react';
import CardBP from './util/_cardBP';
import puppies from '../Data/puppies';




const NewPups = () => {
   
    return(
        <div className="newpups u-center-text u-margin-top-3">
            <h1 className="newpups__heading heading-page">NewPups</h1>
            <div className="newpups__images">
                {puppies.map(pup => <CardBP 
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
                    />)}  
            </div>
        </div>
    )
}

export default NewPups;