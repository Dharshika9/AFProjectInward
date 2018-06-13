import React , {Component} from 'react'

export default class RegisterForm extends Component{
    render(){
        return<div className="containerRegister">
            <div className="card card-register mx-auto mt-5">
                <div className="card-header">Register an Account</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input className="form-control" id="exampleInputName" type="text"
                                           aria-describedby="nameHelp" placeholder="Enter name"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputLastName">User Name</label>
                                    <input className="form-control" id="exampleInputLastName" type="text"
                                           aria-describedby="nameHelp" placeholder="Enter user name"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" type="email"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input className="form-control" id="exampleInputPassword1" type="password"
                                           placeholder="Password"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="exampleConfirmPassword">Confirm password</label>
                                    <input className="form-control" id="exampleConfirmPassword" type="password"
                                           placeholder="Confirm password"/>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary btn-block" href="">Register</a>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" href="http://localhost:3000/login">Login Page</a>

                    </div>
                </div>
            </div>
        </div>
    }
}