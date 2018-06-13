import React , {Component} from 'react'

export default class Loginform extends Component{
    render() {
        return <div className="containerForm">
            <div className="card card-login mx-auto mt-5">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" type="email"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input className="form-control" id="exampleInputPassword1" type="password"
                                   placeholder="Password"/>
                        </div>

                        <a className="btn btn-primary btn-block" href="">Login</a>
                    </form>
                    <div className="text-center">
                        <a className="d-block small mt-3" href="http://localhost:3000/register">Register an Account</a>

                    </div>
                </div>
            </div>
        </div>
    }
}