import React from 'react';
import CardBP from './util/_cardBP';
import parents from '../Data/parents';




const Parents = () => {
   
    return(
        <div className="newpups u-center-text u-margin-top-3">
            <h1 className="newpups__heading heading-page">Meet the Parents</h1>
            <div className="newpups__images">
                {parents.map(parent => <CardBP 
                    key={parent.id}
                    id={parent.id}
                    name = {parent.name}
                    age = {parent.age}
                    weight = {parent.weight}
                    temperment = {parent.temperment}
                    dob = {parent.dob}
                    breed = {parent.breed}
                    color = {parent.color}
                    parents = {parent.parents}
                    img = {parent.img}
                    />)}  
            </div>
        </div>
    )
}

export default Parents;