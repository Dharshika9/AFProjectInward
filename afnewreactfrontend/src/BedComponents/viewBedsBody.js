import React , {Component} from 'react';

import axios from 'axios';
import Beds	from './MainComponents/Beds';
import PropTypes from "prop-types";

const API = require('../static.Config');

export  default class viewBedsBody extends  Component{

        static get propTypes() {
            return {
                ward: PropTypes.array,
                username: PropTypes.string,
                wardid: PropTypes.string
            }
        }

        componentWillReceiveProps(props) {
            this.setState(props)
        }

        constructor(props) {
            super(props);
            this.state = {
                beds: []
            }
            this.getBedDetails(this.props.wardno);
        }

        getBedDetails(wardno)
        {
            axios.get(API.nodeAPI +'/admission/'+wardno).then(res => {
                this.setState({
                    beds : res.data.data || res.data
                });
            })
        }


        render(){
            return <div className="content-wrapper">
                <div className="container-fluid">

                    <Beds username={this.props.username} wardno ={this.props.wardno} beds={this.state.beds} getBedDetails = {(ward) => this.getBedDetails(ward)}/>


                </div>
            </div>
        }

}