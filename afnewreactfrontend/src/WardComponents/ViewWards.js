import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import ViewWardsBody from './ViewWardsBody';

class ViewWards extends Component {

    render() {
        return<div>
            <WardNavigation/>
            {console.log(this.props.location)}
            <ViewWardsBody referrer = {this.props.location.state.referrer}/>
        </div>
    }
}
export default ViewWards;