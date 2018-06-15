import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import PatientDischarge from './PatientDischarge';

export default class PatientdischargeBody extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <PatientDischarge/>
        </div>
    }
}