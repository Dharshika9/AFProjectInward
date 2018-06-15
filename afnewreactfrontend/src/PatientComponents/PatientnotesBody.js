import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import PatientNotes from './PatientNotes';

export default class PatientnotesBody extends Component {

    render() {
        return<div>
            <PatientNavigation/>
            <PatientNotes/>
        </div>
    }
}