import React, { Component } from 'react';
import PatientNavigation from './PatientNavigation';
import ViewTestsBody from './ViewTestBody';

class ViewTests extends Component {

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
        return<div>
            <PatientNavigation username ={this.state.username} wardno = {this.state.wardno} patientno = {this.state.patientno}/>
            <ViewTestsBody  username ={this.state.username} wardno = {this.state.wardno} patientno = {this.state.patientno}/>
        </div>
    }
}
export default ViewTests;