import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import ViewWardsBody from './ViewWardsBody';

class ViewWards extends Component {

    render() {
        return<div>
            <WardNavigation/>
            {this.props.location.state.referrer}
            <ViewWardsBody referrer = {this.props.location.state.referrer}/>
        </div>
    }
}
export default ViewWards;