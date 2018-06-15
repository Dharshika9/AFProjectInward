'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import {Redirect} from 'react-router-dom';


export default class Ward extends Component {
    static get propTypes() {
        return {
            ward: PropTypes.object,
            getWardDetails: PropTypes.func,
            username: PropTypes.string
        }
    }



    constructor(props) {
        super(props);
        this.ward = this.props.ward;
        this.getWardDetails = this.props.getPatientDetails;


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

    render() {

        this.username = this.props.username;
        console.log(this.username)
        if(this.state.access){
            return <Redirect to={{
                pathname: '/viewBeds',
                state: { referrer: { username:this.username, wardno : this.ward.wardNo} }
            }}/>
        }


        var style={width: 300, height: 220}
        var textAlign={textAlign: "center"}


        return<div>




                <div className="card bg-light mb-3 Row" style={style}>
                    <div className="card-header" style={textAlign}>Ward No - {this.ward.wardNo}</div>
                    <div className="card-body">


                        <label>Ward Type:{this.ward.wardType} </label><br/>
                        <label>Number of Beds:{this.ward.noOfBeds} </label><br/>
                        <label>Available Beds:{this.ward.availableBeds} </label><br/>

                        <button type="button" className="bttn btn btn-info" onClick={event =>{this.onClick(event)}}>View</button>

                </div>
            </div>
        </div>
    }
}

