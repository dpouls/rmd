import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Gallery from './Components/Gallery/Gallery';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/Gallery' component={Gallery} />
    </Switch>
)