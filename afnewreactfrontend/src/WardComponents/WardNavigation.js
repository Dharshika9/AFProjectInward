import React , {Component} from 'react';
import PropTypes 			from "prop-types";
import {Redirect} from 'react-router-dom';

export default class WardNavigation extends Component{

    static get propTypes(){
        return {
            username: PropTypes.string
        }
    }

    constructor(props){
        super(props);
        this.state = {
            view: false,
            admission: false,
            manage: false,
            logout: false
        }
    }



    componentWillReceiveProps(props){
        this.setState(props)
    }

    onClickview(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({view: true})
    }

    onClickadmission(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({admission: true})
    }

    onClickmanage(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({manage: true})
    }

    logoutclicked(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({logout: true})
    }


    render(){

        this.username = this.props.username;


        if(this.state.logout){
            return <Redirect to= '/'/>
        }

        if(this.state.view){
            return <Redirect to={{
                pathname: '/viewwards',
                state: { referrer: { username:this.username} }
            }}/>
        }

        if(this.state.admission){
            return <Redirect to={{
                pathname: '/addwards',
                state: { referrer: { username:this.username} }
            }}/>
        }

        if(this.state.manage){
            return <Redirect to={{
                pathname: '/manageward',
                state: { referrer: { username:this.username} }
            }}/>
        }


        return<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <a className="navbar-brand" href="index.html">Ward Management</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">

                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="View Wards Details">
                        <a className="nav-link" onClick={event => this.onClickview(event)}>
                            <i className="fa fa-fw fa-area-chart"></i>
                            <span className="nav-link-text">View Wards Details</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Ward Addmisssion">
                        <a className="nav-link" onClick={event => this.onClickadmission(event)}>
                            <i className="fa fa-fw fa-table"></i>
                            <span className="nav-link-text">Ward Addmisssion</span>
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="tooltip" data-placement="right" title="LinkManage wards">
                        <a className="nav-link" onClick={event => this.onClickmanage(event)}>
                            <i className="fa fa-fw fa-link"></i>
                            <span className="nav-link-text">Manage wards</span>
                        </a>
                    </li>

                </ul>
                <ul className="navbar-nav sidenav-toggler">
                    <li className="nav-item">
                        <a className="nav-link text-center" id="sidenavToggler">
                            <i className="fa fa-fw fa-angle-left"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="newNav">
                        <p>{this.username}</p>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target="#exampleModal" onClick={event => this.logoutclicked(event)}>
                            <i className="fa fa-fw fa-sign-out"></i>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    }

}