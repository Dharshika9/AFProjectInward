import React , {Component} from 'react';
import PropTypes from "prop-types";
import axios from 'axios'

const API = require('../static.Config');

export default class PatientmainBody extends Component{
    static get propTypes() {
        return {

            username: PropTypes.string,
            wardno: PropTypes.string,
            patientno : PropTypes.string
        }
    }

    constructor(props) {
        super(props);
        this.username = this.props.username;
        this.wardno = this.props.wardno;
        this.patientno = this.props.patientno;

        this.getDetails(this.patientno);

        this.state = {
            details: {}
        }
    }

    getDetails(patientno){
        console.log(patientno)
        axios.get(API.nodeAPI+'/admission/information/'+patientno).then(data => {
            this.setState({details: data.data});
        }).catch(err =>{
            alert('Some thing went wrong :)')
        })
    }

    componentWillReceiveProps(props){
        this.setState(props);
    }
    render(){



        let style={width: 300, height: 220};
        let textAlign={textAlign: "center"};

        return <div>
            <div className="content-wrapper">
                <div className="container-fluid">


                    <label>BHT NO           :{this.state.details.BHTNumber} </label><br/>
                    <label>Ward NO      :{this.state.details.wardNo} </label><br/>
                    <label>Patient ID      :{this.state.details.patientId} </label><br/>
                    <label>Patient Name  :{this.state.details.patientName} </label><br/>
                    <label>Admitted Date     :{this.state.details.admittedDate} </label><br/>
                    <label>Doctor In charge  :{this.state.details.DoctorInCharge} </label><br/>
                    <label>Patient Complain :{this.state.details.patientComplain} </label><br/>


                </div>
            </div>
        </div>
    }
}