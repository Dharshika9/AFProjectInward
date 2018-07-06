
import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import PatientmainBody from './PatientmainBody';

class PatientMainpage extends Component {

    constructor(props){
        super(props);

        console.log(this.props.location.state.referrer)
        this.state = {
            username : this.props.location.state.referrer.username,
            patientno : this.props.location.state.referrer.patientid,
            wardno : this.props.location.state.referrer.wardno

        }

    }

    componentWillReceiveProps(props){
        this.setState(props);
    }
    render() {
        console.log(this.state.patientno);
        return<div>
            <PatientNavigation username ={this.state.username} wardno = {this.state.wardno} patientno = {this.state.patientno}/>
            <PatientmainBody  username ={this.state.username} wardno = {this.state.wardno} patientno = {this.state.patientno}/>
        </div>
    }
}
export default PatientMainpage;