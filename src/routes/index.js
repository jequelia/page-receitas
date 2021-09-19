import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Details from '../pages/details';
import Register from '../pages/register';
import Home from '../pages/home';
import Update from '../pages/update'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/update" component={Update}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route path="/details" component={Details}></Route>
        </Switch>
    );
}

export default Routes;