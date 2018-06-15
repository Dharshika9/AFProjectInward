import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import PatientTransfer from './PatientTransfer';

export default class PatienttransferBody extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <PatientTransfer/>
        </div>
    }
}
