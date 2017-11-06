import React from 'react';
import { Route } from 'react-router';

import { constants } from './constants';

import About from './components/About';
import App from './components/App';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import WorkWithMe from './components/WorkWithMe';

export const routes = (
    <Route component={App}>
        <Route path={constants.pathAbout} component={About} />
        <Route path={constants.pathHome} component={Home} />
        <Route path={constants.pathPortfolio} component={Portfolio} />
        <Route path={constants.pathWorkWithMe} component={WorkWithMe} />
    </Route>
)
