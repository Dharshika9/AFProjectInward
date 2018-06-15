import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import ManageWardsBody from './ManageWardsBody';

class ManageWards extends Component {

    constructor(props){
        super(props);

        this.state = {
            username : this.props.location.state.referrer.username
        }
    }

    render() {
        return<div>
            <WardNavigation username = {this.state.username}/>
            <ManageWardsBody/>
        </div>
    }
}
export default  ManageWards;