import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home';
import Detail from '../components/Detail/Detail';



const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:talent" component={Detail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;