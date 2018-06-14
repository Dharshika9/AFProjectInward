'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Data                from './Data';


class Datas extends Component {
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
            <table>
                <thead>
                <tr>
                    <th>Ward No</th>
                    <th>Ward Type</th>
                    <th>No Of Beds</th>
                    <th>Available Beds</th>
                    <th>Location</th>
                    <th>Visiting Times</th>
                    <th>Incharge</th>
                    <th>Phone</th>
                    <th>Note</th>
                </tr>
                </thead>
                <tbody>
                {

                    this.wards.map(ward => {
                        return <Data key={ward._id || ward.id} ward={ward} getWardDetails={() => this.props.getWardDetails()}/>
                    })
                }
                </tbody>
            </table>






        </div>;
    }
}
export default Datas
