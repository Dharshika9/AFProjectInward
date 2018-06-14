import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import AllDataBody from './AllDataBody';

class AllData extends Component {

    render() {
        return<div>
            <WardNavigation/>
            <AllDataBody/>
        </div>
    }
}
export default  AllData;