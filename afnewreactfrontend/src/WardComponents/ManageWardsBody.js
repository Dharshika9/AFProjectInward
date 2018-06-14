import React , {Component} from 'react';

export default class ManageWardsBody extends Component{

















    render(){


        var style={width: 300}
        var textAlign={textAlign: "center"}
        return <div className="content-wrapper">
            <div className="container-fluid">



                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="panel panel-default">
                                    <div className="panel-heading" style={textAlign}>
                                        Manage Wards
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <form role="form" >


                                                    <div className="input-group">
                                                        <label>Enter Ward No</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Search for..."/>

                                                        <span className="input-group-btn">
                                                        <button className="btn btn-secondary" type="button">Go!</button>
                                                        </span>
                                                    </div>




                                                    <div className="form-group">
                                                        <label>Ward No</label>
                                                        <input className="form-control"/>

                                                    </div>


                                                    <div className="form-group">
                                                        <label>Ward Type</label>
                                                        <select className="form-control">
                                                            <option>Maternity</option>
                                                            <option>Pediatric</option>

                                                        </select>
                                                    </div>





                                                    <div className="form-group">
                                                        <label>No Of Beds</label>
                                                        <input className="form-control"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Available Beds</label>
                                                        <input className="form-control"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <input className="form-control"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Visiting Hours</label>
                                                        <input className="form-control"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Incharge</label>
                                                        <input className="form-control"/>

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Phone</label>
                                                        <input className="form-control"/>

                                                    </div>

                                                    <div className="form-group">
                                                        <label>Note</label>
                                                        <textarea className="form-control" rows="3" name="note" ></textarea>
                                                    </div>







                                                    <button type="submit" className="btn btn-info" >Update</button>
                                                    <button type="submit" className="btn btn-info" >Delete</button>
                                                    <button type="submit" className="btn btn-info" >Back</button>

                                                </form>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                </div>
            </div>
                }




            </div>
        </div>
    }
}