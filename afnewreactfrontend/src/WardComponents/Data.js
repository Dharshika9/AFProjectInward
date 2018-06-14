'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';
import reactDOM from 'react-dom';

export default class Data extends Component {
    static get propTypes() {
        return {
            ward: PropTypes.object,
            getWardDetails: PropTypes.func
        }
    }

    constructor(props) {
        super(props);
        this.ward = this.props.ward;
        this.getWardDetails = this.props.getWardDetails;
        this.click=this.click.bind(this);

    }

    click(event) {
        event.preventDefault();
        event.stopPropagation();

    }
    delete(wardNo) {
        axios.delete('http://localhost:8081/wards/delete_specific_ward/'+wardNo).then(results => {
            if(results.status == 200) {
                this.getWardDetails();
            }
        })
    }

    render() {

                return <tr>
                <td>{this.ward.wardNo}</td>
                <td>{this.ward.wardType}</td>
                <td>{this.ward.noOfBeds}</td>
                <td>{this.ward.availableBeds}</td>
                <td>{this.ward.location}</td>
                <td>{this.ward.visitingTimes}</td>
                <td>{this.ward.incharge}</td>
                <td>{this.ward.phone}</td>
                <td>{this.ward.note}</td>

                <button onClick={(e) => this.delete(this.ward.wardNo || this.ward.wardNo)}>Delete</button>
            </tr>

    }
}

