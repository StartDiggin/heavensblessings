import React from 'react';
import CardBP from './_cardBP';
// import pupsInfo from '../Data/pups';





const NewPups = () => {
   
    return(
        <div className="newpups u-center-text u-margin-top-3">
            <h1 className="newpups__heading heading-page">NewPups</h1>
            <div className="newpups__images">
                <CardBP />
            </div>
        </div>
    )
}

export default NewPups;