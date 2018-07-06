import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import PatientDischarge from './PatientDischarge';

export default class PatientdischargeBody extends Component {

    constructor(props){
        super(props);

        this.state = {
            username : this.props.location.state.referrer.username,
            wardno : this.props.location.state.referrer.wardno,
            patientno : this.props.location.state.referrer.patientno
        }

    }

    render() {
        return<div>
            <PatientNavigation username ={this.state.username} wardno = {this.state.wardno} patientno = {this.state.patientno}/>
            <PatientDischarge username ={this.state.username} wardno = {this.state.wardno} patientno = {this.state.patientno}/>
        </div>
    }
}