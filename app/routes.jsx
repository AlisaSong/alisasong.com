import React from 'react';
import { Route } from 'react-router';

import { constants } from './constants';

import App from './components/App';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

export const routes = (
    <Route component={App}>
        <Route path={constants.pathHome} component={Home} />
        <Route path={constants.pathAbout} component={About} />
        <Route path={constants.pathPortfolio} component={Portfolio} />
        <Route path={constants.pathContact} component={Contact} />
    </Route>
)
