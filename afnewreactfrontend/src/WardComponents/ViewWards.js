import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import ViewWardsBody from './ViewWardsBody';

class ViewWards extends Component {

    render() {
        return<div>
            <WardNavigation/>
            <ViewWardsBody/>
        </div>
    }
}
export default ViewWards;