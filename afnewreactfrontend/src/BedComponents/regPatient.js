import React, { Component } from 'react';
import BedNavigation        from './BedNavigation';
import regPatientBody       from './regPatientBody';
import axios                from 'axios';

export default class RegPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: [],
            username : this.props.location.state.referrer.username,
            wardno :this.props.location.state.referrer.wardno
        }
        console.log(this.props.location.state.referrer)
    }

    regPatient(patient) {
        axios.post("http://localhost:8081" + '/admission', {
            patientId: patient.patientId,
            patientName: patient.patientName,
            patientDOB: patient.patientDOB,
            patientAge: patient.patientAge,
            patientGender: patient.patientGender,
            patientNIC: patient.patientNIC,
            patientStatus: patient.patientStatus,
            patientContactNo: patient.patientContactNo,
            patientAddress: patient.patientAddress
        }).then(result => {
            if(result.status == 200) {
                console.log("Patient SuccessFully registered!");
            }
        }).catch(err => {
            alert(err);
        })
    }





    render() {
        return<div>
            <BedNavigation username ={this.state.username} wardno = {this.state.wardno}/>
            <regPatientBody regPatient={patient => this.regPatient(patient)}/>
        </div>
    }
}
