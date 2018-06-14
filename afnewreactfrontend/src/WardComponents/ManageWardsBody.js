import React , {Component} from 'react';
import axios                from 'axios';
import events from 'events';

export default class ManageWardsBody extends Component{

    constructor(props){
        super(props);
        this.state={
            ward :[]

        };
        this.getSpecificWard=this.getSpecificWard.bind(this);

    }

    getSpecificWard=function(event){
        event.preventDefault();
        const wardNo=event.target.elements.wardNo.value;
        axios.get('http://localhost:8081/wards/get_specific_ward/'+wardNo).then(res =>{


            this.setState({
                ward:res.data
            })

            console.log(this.state.ward);


        }).then();

    }

    deleteSpecificWard=function(event){
        event.preventDefault();
        const wardNo=event.target.elements.wardNo.value;
        axios.get('http://localhost:8081/wards/delete_specific_ward/'+wardNo).then(res =>{


            if(res.status == 200) {
                alert("Ward SuccessFully Deleted!");

            }
        });

    }

    delete(wardNo) {
        console.log(wardNo);
        axios.delete('http://localhost:8081/wards/delete_specific_ward/'+wardNo).then(results => {
            if(results.status == 200) {
                alert("Ward SuccessFully Deleted!");
            }
        })
    }

    render(){


        var style={width: 300}
        var textAlign={textAlign: "center"}
        return <div className="content-wrapper">
            <div className="container-fluid">

                    <div className="container-new ">

                        <div className="panel-body">
                            <form onSubmit={event => this.getSpecificWard(event)} role="form">
                                <div className="form-group">
                                    <label>Enter Ward No : </label>
                                    <input className="form-control-new" placeholder="Enter text" name="wardNo"/>
                                </div>
                                <button type="submit" className="btn btn-info">View Details</button>

                            </form>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>Ward No</th>
                                        <th>Ward Type</th>
                                        <th>No Of Beds</th>
                                        <th>Available Beds</th>
                                        <th>Location</th>
                                        <th>Visiting Hours</th>
                                        <th>Incharge</th>
                                        <th>Phone</th>
                                        <th>Note</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.ward.map(entry => <tr className={"success"}>
                                            <td>{entry.wardNo}</td>
                                            <td>{entry.wardType}</td>
                                            <td>{entry.noOfBeds}</td>
                                            <td>{entry.availableBeds}</td>
                                            <td>{entry.location}</td>
                                            <td>{entry.visitingTimes}</td>
                                            <td>{entry.incharge}</td>
                                            <td>{entry.phone}</td>
                                            <td>{entry.note}</td>
                                            <td> <button className="btn btn-info" onClick={(e) => this.delete(entry.wardNo)}>Delete</button></td>
                                        </tr>)
                                    }

                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="panel panel-default">
                                    <div className="panel-heading" style={textAlign}>
                                        Manage Wards
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-10">
                                                <div className="ward-main ">
                                                <form role="form" >


                                                    <div className="input-group">
                                                        <label>Enter Ward No</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="Search for..." name="wardNo"/>

                                                        <span className="input-group-btn">
                                                        <button className="btn btn-secondary" type="button" onSubmit={event => this.getSpecificWard(event)}>Go!</button>
                                                        </span>
                                                    </div>


                                                    <div className="form-group">
                                                        <label>Ward No</label>
                                                        <input className="form-control"  />

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
                                                    <button type="reset" className="btn btn-info" >Reset</button>

                                                </form>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                </div>
            </div>





            </div>
        </div>
    }
}