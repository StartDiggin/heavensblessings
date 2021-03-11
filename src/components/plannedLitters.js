import React from 'react';
import CardBP from './util/_cardBP';
import parents from '../Data/parents';






const PlannedLitters = () => {
   let parent1 = parents.filter(parent => parent.id === 1)[0];
   let parent2 = parents.filter(parent => parent.id === 2)[0];
   let parent3 = parents.filter(parent => parent.id === 3)[0];
   let parent4 = parents.filter(parent => parent.id === 4)[0];
   let parent5 = parents.filter(parent => parent.id === 5)[0];
   let parent6 = parents.filter(parent => parent.id === 6)[0];
    return(
        <div className="litters u-center-text u-margin-top-3">
            <h1 className="litters__heading heading-page">Planned Litters</h1>
            <div className="litters__container">
                <div className="litters__container--box">
                    <CardBP 
                        key={parent1.id} 
                        name = {parent1.name}
                        age = {parent1.age}
                        weight = {parent1.weight}
                        temperment = {parent1.temperment}
                        dob = {parent1.dob}
                        breed = {parent1.breed}
                        color = {parent1.color}
                        parents = {parent1.parents}
                        img = {parent1.img}
                    />
                </div>
                <div className="litters__container--box">Scheduled:</div>
                <div className="litters__container--box">
                    <CardBP 
                        key={parent2.id} 
                        name = {parent2.name}
                        age = {parent2.age}
                        weight = {parent2.weight}
                        temperment = {parent2.temperment}
                        dob = {parent2.dob}
                        breed = {parent2.breed}
                        color = {parent2.color}
                        parents = {parent2.parents}
                        img = {parent2.img}
                    />
                </div>
                <div className="litters__container--box">
                    <CardBP 
                        key={parent3.id} 
                        name = {parent3.name}
                        age = {parent3.age}
                        weight = {parent3.weight}
                        temperment = {parent3.temperment}
                        dob = {parent3.dob}
                        breed = {parent3.breed}
                        color = {parent3.color}
                        parents = {parent3.parents}
                        img = {parent3.img}
                    />
                </div>
                <div className="litters__container--box">Scheduled:</div>
                <div className="litters__container--box">
                    <CardBP 
                        key={parent4.id} 
                        name = {parent4.name}
                        age = {parent4.age}
                        weight = {parent4.weight}
                        temperment = {parent4.temperment}
                        dob = {parent4.dob}
                        breed = {parent4.breed}
                        color = {parent4.color}
                        parents = {parent4.parents}
                        img = {parent4.img}
                    />
                </div>
                <div className="litters__container--box">
                    <CardBP 
                        key={parent5.id} 
                        name = {parent5.name}
                        age = {parent5.age}
                        weight = {parent5.weight}
                        temperment = {parent5.temperment}
                        dob = {parent5.dob}
                        breed = {parent5.breed}
                        color = {parent5.color}
                        parents = {parent5.parents}
                        img = {parent5.img}
                    />
                </div>
                <div className="litters__container--box">Scheduled:</div>
                <div className="litters__container--box">
                    <CardBP 
                        key={parent6.id} 
                        name = {parent6.name}
                        age = {parent6.age}
                        weight = {parent6.weight}
                        temperment = {parent6.temperment}
                        dob = {parent6.dob}
                        breed = {parent6.breed}
                        color = {parent6.color}
                        parents = {parent6.parents}
                        img = {parent6.img}
                    />
                </div>
            </div>
        </div>
    )
}

export default PlannedLitters;

//  age = {pup.age}
//                     weight = {pup.weight}
//                     temperment = {pup.temperment}
//                     dob = {pup.dob}
//                     breed = {pup.breed}
//                     color = {pup.color}
//                     parents = {pup.parents}
//                     img = {pup.img}