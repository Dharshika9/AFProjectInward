'use strict';
import React, {Component}   from 'react';
import Datas				from './Datas';

import axios                from 'axios';

var Base  					= require('./Statics.Common');

export default class AllDataBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wards: []
        }
        this.getWardDetails();
    }

    getWardDetails() {
        axios.get(Base.API + '/').then(res => {
            this.setState({
                wards: res.data.data || res.data
            });
        })
    }



    render() {
        return <div>

            <Datas users={this.state.wards} getWardDetails = {() => this.getWardDetails()}/>
        </div>;
    }
}
