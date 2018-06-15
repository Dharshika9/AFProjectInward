'use strict';
import React, {Component}   from 'react';
import PropTypes from 'prop-types';
import Ward from './Ward';


class Wards extends Component {
    static get propTypes() {
        return {
            wards: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        this.wards = this.props.wards;
        return <div>

            {

                this.wards.map(ward => {
<<<<<<< HEAD
                    return <Ward username={this.props.username} key={ward._id || ward.id} ward={ward} getWardDetails={() => this.props.getWardDetails()}/>
=======
                    return <Ward key={ward._id || ward.id} ward={ward} getWardDetails={() => this.props.getPatientDetails()}/>
>>>>>>> 7d2e7f0e2de9f7b60f9af0f68dc37e665e0b9837
                })
            }

        </div>;
    }
}
export default Wards
