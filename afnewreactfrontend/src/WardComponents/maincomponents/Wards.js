'use strict';
import React, {Component}   from 'react';
import PropTypes from 'prop-types';
import Ward from './Ward';


class Wards extends Component {
    static get propTypes() {
        return {
            wards: PropTypes.array,
            username: PropTypes.string
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
        this.username = this.props.username;
        return <div>

            {

                this.wards.map(ward => {

                    return <Ward username={this.username} key={ward._id || ward.id} ward={ward} getWardDetails={() => this.props.getWardDetails()}/>


                })
            }

        </div>;
    }
}
export default Wards
