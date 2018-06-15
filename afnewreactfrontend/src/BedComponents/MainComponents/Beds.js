'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Bed                from './Bed';

class Beds extends Component{

    static get propTypes() {
        return {
            beds: PropTypes.array,
            username: PropTypes.string,
            wardno: PropTypes.string
        }
    }

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render(){

        this.beds = this.props.beds;
        this.username = this.props.username;
        this.wardno = this.props.wardno;

        return <div>

            {

                this.beds.map(bed => {

                    return <Bed username={this.username} wardno = {this.wardno} key={bed._id || bed.id} bed={bed} getBedDetails={(wardno) => this.props.getBedDetails(wardno)}/>
                })
            }

        </div>;
    }
}

export default Beds;