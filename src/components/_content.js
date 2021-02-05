import React from 'react';
import { Route } from 'react-router-dom';


// Pages 
import About from './about';
import Aussies from './aboutAuss';
import Contact from './contact';
import Health from './_health';
import NewPups from './newPups';
import Parents from './meetParents';
import PastPups from './pastPups';
import PlannedLitters from './plannedLitters';
import Poodles from './aboutPood';
import Sidebar from './_sidebar';


const Content = () => {
    return(
        <div className="content">
            <Sidebar />
            <div className="content__container u-margin-bottom-8">
                <Route path="/about" component={About}  />
                <Route path="/newpuppies" component={NewPups}  />
                <Route path="/contact" component={Contact}  />
                <Route path="/health" component={Health}  />
                <Route path="/aussies" component={Aussies}  />
                <Route path="/poodles" component={Poodles}  />
                <Route path="/parents" component={Parents}  />
                <Route path="/pastpups" component={PastPups}  />
                <Route path="/litters" component={PlannedLitters}  />
            </div>
        </div>
    )
}

export default Content;