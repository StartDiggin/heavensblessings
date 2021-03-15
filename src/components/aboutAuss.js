import React from 'react';
import CardBP from './util/_cardBP';
import parents from '../Data/parents';



const Aussies = () => {
    const poodle = parents.filter(parent => parent.id === 3)[0]
    console.log(poodle)

    return(
        <div className="aussies u-center-text u-margin-top-3">
            <h1 className="heading-page">About Aussiedoodles</h1>
            <div className="aussies__container">
                <div className="aussies__weight">
                    <div className="aussies__details">
                        <h3>Typical weight:</h3>
                        <span>The Standard Poodle stands 15 inches and taller (usually 22 inches); males weigh 45 to 70 pounds and females weigh 45 to 60 pounds.</span>
                    </div>
                </div>
              <CardBP 
                    key={poodle.id}
                    id={poodle.id}
                    name = {poodle.name}
                    age = {poodle.age}
                    weight = {poodle.weight}
                    temperment = {poodle.temperment}
                    dob = {poodle.dob}
                    breed = {poodle.breed}
                    color = {poodle.color}
                    parents = {poodle.parents}
                    img = {poodle.img}
                    />
                <div className="aussies__life">
                    <div className="aussies__details">
                        <h3>Life Expectancy:</h3>
                        <span>The Poodle is a dog breed that comes in three varieties: Standard Poodle, Miniature Poodle, and Toy Poodle. The breed’s origin is disputed: whether it descends from Germany as a type of water dog, or from the French Barbet.</span>
                    </div>
                </div>
                <div className="aussies__temper u-margin-top-3">
                    <h3>Temperment:</h3>
                    <span>Ranked second most intelligent dog breed just behind the Border Collie, the Poodle is skillful in many dog sports and activities, including agility, obedience, tracking, herding, circus performance, and assistance dogs. Poodles have taken top honors in many conformation shows, including "Best in Show" at the Westminster Kennel Club Dog Show in 1991, 2002, and 2020 and at the World Dog Show in 2007 and 2010. They are recorded as the seventh most popular dog breed in the United States.</span>
                </div>
            </div>
           
        </div>
    )
};

export default Aussies;