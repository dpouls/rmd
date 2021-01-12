import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Gallery from './Components/Gallery/Gallery';
import Upload from './Components/Upload/Upload';
export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/Upload' component={Upload}/>
    </Switch>
)