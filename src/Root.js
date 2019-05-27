import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tab from './Tab';

import { HashRouter,Switch,Route } from 'react-router-dom';

const Root = () => {
    return (
        <Switch basename='/a'>
            <Route path='/' component={App}></Route>
            <Route path='/tab' component={Tab}></Route>
        </Switch>
    )

}

export default Root;

