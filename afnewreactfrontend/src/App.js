import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './LoginContainer/Homepage';
import Login from './LoginContainer/Loginbody';
import Register from './LoginContainer/RegisterBody';


export default class App extends Component {
    render() {
        return <BrowserRouter>
            <div>
                <Route path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </div>
        </BrowserRouter>

    }
}


