import React, { Component } from 'react';
import BedNavigation from './BedNavigation';
import ViewBedsBody from './viewBedsBody';

class viewBeds extends Component {

    constructor(props){
        super(props);

        this.state = {
            username : this.props.location.state.referrer.username,
            wardno : this.props.location.state.referrer.wardno
        }

    }

    render() {
        return<div>
            <BedNavigation username ={this.state.username} wardno = {this.state.wardno}/>
            <ViewBedsBody username ={this.state.username} wardno = {this.state.wardno}/>
        </div>
    }
}
export default viewBeds;