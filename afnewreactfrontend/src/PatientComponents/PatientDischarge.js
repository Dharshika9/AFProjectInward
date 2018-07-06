import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from "axios/index";
import {Redirect} from 'react-router-dom';

const API = require('../static.Config');

export default class PatientDischarge extends Component {

    static get propTypes() {
        return {

            username: PropTypes.string,
            wardno: PropTypes.string,
            patientno: PropTypes.string
        }
    }

    constructor(props) {
        super(props);

        this.username = this.props.username;
        this.wardno = this.props.wardno;
        this.patientno = this.props.patientno;

        this.state = {
            details: {},
            access : false
        }

        this.getDetails(this.patientno);
    }

    componentWillReceiveProps(props){
        this.setState(props);
    }

    onClick(event) {
        event.preventDefault();
        event.stopPropagation();

        console.log(this.patientno)
        this.removePatient(this.patientno);


    }

    removePatient(id){
        console.log('i am called')
        axios.delete(API.nodeAPI+'/admission/'+id).then(data =>{
            console.log(data);
            if(data.status===200) {
                alert('Patient Discharged')
                this.setState({access:true});
            }
            else{
                alert('Failed to Discharge Patient')
            }
        }).catch(err =>{
            alert('Some thing went wrong :)')
        })
    }

    getDetails(patientno){
        console.log(patientno)
        axios.get(API.nodeAPI+'/admission/information/'+patientno).then(data => {
            this.setState({details: data.data});
        }).catch(err =>{
                alert('Some thing went wrong :)')
        })
    }


    render() {

        if(this.state.access){
            return <Redirect to={{
                pathname: '/viewwards',
                state: { referrer: { username:this.username} }
            }}/>
        }

        let style={width: 300, height: 220};
        let textAlign={textAlign: "center"};

        return <div>
            <div className="content-wrapper">
                <div className="container-fluid">

                    <label>Patient Name     :{this.state.details.patientName} </label><br/>
                    <label>Doctor Incharge  :{this.state.details.DoctorInCharge} </label><br/>
                    <label>Admitted Date    :{this.state.details.admittedDate} </label><br/>
                    <label>Patient Complain :{this.state.details.patientComplain} </label><br/>

                    <button type="button" className="bttn btn btn-info" onClick={event =>{this.onClick(event)}}>Discharge</button>


                </div>
            </div>
        </div>
    }
}