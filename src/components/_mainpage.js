import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './_footer';
import Header from './_header';
import Navigation from './_navigation';


// Pages 
import Home from './home';
// import About from './about';
// import Contact from './contact';
// import Health from './_health';
// import NewPups from './newPups';
// import Poodles from './aboutPood';
// import Aussies from './aboutAuss';
// import Parents from './meetParents';
// import PastPups from './pastPups';
// import PlannedLitters from './plannedLitters';
import Content from './_content';

const MainContent = () => {
    return(
        <div className="mainContent">
            <BrowserRouter>
                <div className="mainContent__header">
                    <Header />
                </div>
                <div className="mainContent__navigation">
                    <Navigation />
                </div>
                <div className="mainContent__content u-margin-bottom-8">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Content />
                        {/* <Route path="/about" component={About}  />
                        <Route path="/newpuppies" component={NewPups}  />
                        <Route path="/contact" component={Contact}  />
                        <Route path="/health" component={Health}  />
                        <Route path="/aussies" component={Aussies}  />
                        <Route path="/poodles" component={Poodles}  />
                        <Route path="/parents" component={Parents}  />
                        <Route path="/pastpups" component={PastPups}  />
                        <Route path="/litters" component={PlannedLitters}  /> */}
                    </Switch>
                </div>
                <div className="mainContent__footer">
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default MainContent;