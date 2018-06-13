'use strict'

import React, {Component}   from 'react';

import Header from './loginHeader';
import BodySlider from './bodySlide';
import Footer from './Footer';

export default class Homepage extends Component {

    render(){
        return <div>
            <Header/>
            <BodySlider/>
            <Footer/>
        </div>
    }
}