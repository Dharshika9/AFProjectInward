import React , {Component} from 'react'
import PropTypes 			from "prop-types";
import axios from 'axios';
import API from '../static.Config';

import {Redirect} from 'react-router-dom';

export default class Loginform extends Component{

    static get propTypes(){
        return{
            userName: PropTypes.string,
            password: PropTypes.string
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            access : false,
            username: ''
        }
    }

    onChangeUsername(event){
        event.preventDefault();
        event.stopPropagation();
        this.userName = event.target.value;
        console.log(this.userName);
    }

    onChangePassword(event){
        event.preventDefault();
        event.stopPropagation();
        this.password = event.target.value;
        console.log(this.password)
    }

    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        axios.post(API.nodeAPI+'/login/' , {username : this.userName , password: this.password}).then(result =>{

            if(result.data){
                this.setState({username: this.userName});
                this.setState({access: true});

            }else{
                alert('Invalid Password !');
            }
        }).catch(err =>{
            alert('Some thing went wrong :)');
        })




    }

    render() {

        if(this.state.access){
            return <Redirect to={{
                pathname: '/viewwards',
                state: { referrer: { username:this.state.username} }
            }}/>
        }

        return <div className="containerForm">
            <div className="card card-login mx-auto mt-5">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={event => {this.onSubmit(event)}}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input className="form-control" id="exampleInputPassword1" type="text"
                                   placeholder="User Name" onChange={(event) => this.onChangeUsername(event)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input className="form-control" id="exampleInputPassword1" type="password"
                                   placeholder="Password" onChange={(event) => this.onChangePassword(event)}/>
                        </div>

                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" href="http://localhost:3000/register">Register an Account</a>

                    </div>
                </div>
            </div>
        </div>
    }
}