import React , {Component} from 'react';
import PropTypes from "prop-types";
import {Redirect} from 'react-router-dom';



export default class PatientNavigation extends Component{

    static get propTypes(){
        return {
            username: PropTypes.string,
            wardno: PropTypes.string,
            patientno: PropTypes.string
        }
    }

    constructor(props){
        super(props);
        this.state = {
            profile: false,
            tests : false,
            medicine : false,
            transfer : false,
            discharge : false,
            notes : false,
            logout: false
        }
    }

    onClickprofile(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({profile: true})
    }

    onClicktests(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({tests: true})
    }

    onClickmedicine(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({medicine: true})
    }

    onClicktransfer(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({transfer: true})
    }

    onClickdischarge(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({discharge: true})
    }

    onClicknotes(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({notes: true})
    }

    logoutclicked(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({logout: true})
    }

    componentWillReceiveProps(props){
        this.setState(props)
    }


    render(){

        this.username = this.props.username;
        this.wardno =this.props.wardno;
        this.patientno = this.props.patientno;


        if(this.state.logout){
            return <Redirect to= '/'/>
        }


        if(this.state.profile){
            return <Redirect to={{
                pathname: '/PatientMainpage',
                state: { referrer: { username:this.username , wardno: this.wardno , patientno: this.patientno} }
            }}/>
        }

        if(this.state.tests){
            return <Redirect to={{
                pathname: '/tests',
                state: { referrer: { username:this.username , wardno: this.wardno , patientno: this.patientno} }
            }}/>
        }

        if(this.state.medicine){
            return <Redirect to={{
                pathname: '/medicines',
                state: { referrer: { username:this.username , wardno: this.wardno , patientno: this.patientno} }
            }}/>
        }

        if(this.state.transfer){
            return <Redirect to={{
                pathname: '/transfer',
                state: { referrer: { username:this.username , wardno: this.wardno , patientno: this.patientno} }
            }}/>
        }

        if(this.state.discharge){
            return <Redirect to={{
                pathname: '/discharge',
                state: { referrer: { username:this.username , wardno: this.wardno , patientno: this.patientno} }
            }}/>
        }

        if(this.state.notes){
            return <Redirect to={{
                pathname: '/notes',
                state: { referrer: { username:this.username , wardno: this.wardno , patientno: this.patientno} }
            }}/>
        }


        return<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">Patient Management(Bead Head Ticket)</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">

                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="View Wards Details">
                        <a className="nav-link" onClick={event => this.onClickprofile(event)}>
                            <i className="fa fa-fw fa-area-chart"/>
                            <span className="nav-link-text">Patient Profile</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Ward Addmisssion">
                        <a className="nav-link" onClick={event => this.onClicktests(event)}>

                            <i className="fa fa-fw fa-table"/>
                            <span className="nav-link-text">laboratory tests</span>

                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="LinkManage wards">
                        <a className="nav-link" onClick={event => this.onClicktests(event)}>
                            <i className="fa fa-fw fa-link"/>
                            <span className="nav-link-text">Attachments</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="View Wards Details">
                        <a className="nav-link" onClick={event => this.onClicktransfer(event)}>
                            <i className="fa fa-fw fa-area-chart"/>
                            <span className="nav-link-text">Patient Transfer</span>
                        </a>
                    </li><li className="nav-item" data-toggle="tooltip" data-placement="right" title="View Wards Details">
                    <a className="nav-link" onClick={event => this.onClickdischarge(event)}>
                        <i className="fa fa-fw fa-area-chart"/>
                        <span className="nav-link-text">Patient Discharge</span>
                    </a>
                </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="View Wards Details">
                        <a className="nav-link" onClick={event => this.onClicknotes()}>
                            <i className="fa fa-fw fa-area-chart"/>
                            <span className="nav-link-text">Special Notes</span>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"/>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                            <i className="fa fa-fw fa-sign-out"/>{this.username}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal" onClick={event => this.logoutclicked(event)}>
                            <i className="fa fa-fw fa-sign-out"/>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    }

}