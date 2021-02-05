import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './_footer';
import Header from './_header';
import Navigation from './_navigation';


// Pages 
import Home from './home';
import About from './about';
import NewPups from './newPups';
import Contact from './contact';
import Health from './_health';

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
                        <Route path="/about" component={About}  />
                        <Route path="/newpuppies" component={NewPups}  />
                        <Route path="/contact" component={Contact}  />
                        <Route path="/health" component={Health}  />
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