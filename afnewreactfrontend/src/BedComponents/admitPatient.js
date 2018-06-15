import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import AdmitPatientBody from './admitPatientBody';
import axios                from 'axios';

export default class AdmitPatient extends Component{

    constructor(props) {
        super(props);
        this.state = {
            patientAdmission: [],
            wardDetails:Object,
            username : this.props.location.state.referrer.username,
            wardno :this.props.location.state.referrer.wardno
        }
        this.getWardDetails()

    }


    getWardDetails(wardNo){

        axios.get("http://localhost:8081"+'/wards',wardNo).then(res =>{
            this.setState.wardDetails(res.data)
            // wardDetails(res.data.data||res.data)

        }).catch()
    }


    admitPatient(patientAdmission) {
        axios.post("http://localhost:8081" + '/wards', {
            BHTNumber: patientAdmission.BHTNumber,
            wardNo: patientAdmission.wardNo,
            bedNumber: patientAdmission.bedNumber,
            patientId: patientAdmission.patientId,
            patientName: patientAdmission.patientName,
            admittedDate: patientAdmission.admittedDate,
            admittedTime: patientAdmission.admittedTime,
            DoctorInCharge: patientAdmission.DoctorInCharge,
            patientComplain: patientAdmission.patientComplain
        }).then(result => {
            if(result.status == 200) {
                console.log("Admission SuccessFully Added!");
            }
        }).catch(err => {
            alert(err);
        })
    }



    render() {
        return<div>
            <BedNavigation username ={this.state.username} wardno = {this.state.wardno}/>
            <AdmitPatientBody admitPatient={patientAdmission => this.admitPatient(patientAdmission)}/>
        </div>
    }

}