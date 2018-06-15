import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import ViewWardsBody from './ViewWardsBody';

class ViewWards extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : this.props.location.state.referrer.username
        }
    }

    render() {
        return<div>
            <WardNavigation username = {this.state.username}/>
            <ViewWardsBody/>
        </div>
    }
}
export default ViewWards;