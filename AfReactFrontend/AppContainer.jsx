'use strict';

import React, {Component}   from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './LoginContainer/Homepage';
import Login from './LoginContainer/Loginbody';

export default class AppContainer extends Component {

    render() {
        return <BrowserRouter>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/login" component={Login}/>
            </div>
        </BrowserRouter>

    }
}