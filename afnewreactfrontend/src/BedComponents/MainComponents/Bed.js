'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import {Redirect} from 'react-router-dom';



export  default class Bed extends Component{
    static get propTypes() {
        return {
            bed : PropTypes.object,
            getBeDetails: PropTypes.func,
            username: PropTypes.string,
            wardno: PropTypes.string
        }
    }

    constructor(props) {
        super(props);
        this.bed = this.props.bed;
        this.getBeDetails = this.props.getBeDetails;

        this.state = {
            access : false,

        }

    }

    componentWillReceiveProps(props){
        this.setState(props);
    }

    onClick(event) {
        event.preventDefault();
        event.stopPropagation();

        this.setState({access:true});

    }

    render(){

        this.username = this.props.username;
        this.wardno = this.props.wardno;


        if(this.state.access){
            return <Redirect to={{
                pathname: '/PatientMainpage',
                state: { referrer: { username:this.username, wardno : this.wardNo , patientid : this.bed.patientId} }
            }}/>
        }

        var style={width: 300, height: 220}
        var textAlign={textAlign: "center"}

        return <div>


                    <div className="card bg-light mb-3" style={style}>
                        <div className="card-header" style={textAlign}>Bed No - {this.bed.BHTNumber}</div>
                        <div className="card-body">

                            <label>Patient ID       :{this.bed.patientId} </label><br/>
                            <label>Patient Name     :{this.bed.patientName} </label><br/>
                            <label>Admitted Date    :{this.bed.admittedDate} </label><br/>


                            <button type="button" className="bttn btn btn-info" onClick={event =>{this.onClick(event)}}>View</button>


                        </div>
                    </div>

            </div>

    }
}