import React, { Component } from 'react';
import WardNavigation from './WardNavigation';
import AddWardsBody from './AddWardsBody';

class AddWards extends Component {

    render() {
        return<div>
            <WardNavigation/>
            <AddWardsBody/>
        </div>
    }
}
export default  AddWards;