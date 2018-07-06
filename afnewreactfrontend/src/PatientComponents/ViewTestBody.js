import React , {Component} from 'react';

import axios from 'axios';
import Tests from './maincomponents/Tests';
import PropTypes from "prop-types";

export default class ViewTestsBody extends Component{

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

        this.state = {
            tests: []
        }
        this.getTestDetails(this.patientno);
    }
    getTestDetails(id) {
        axios.get("http://localhost:8081/Test/"+id).then(res => {
            this.setState({
                tests: res.data.data || res.data
            });
        })
    }



    render(){
        return <div className="content-wrapper">
            <div className="container-fluid">
                <Tests wards={this.state.tests} getTestDetails = {() => this.getTestDetails()}  username ={this.username} wardno = {this.wardno} patientno = {this.patientno}/>

            </div>
        </div>
    }
}