import React , {Component} from 'react';
import PropTypes 			from "prop-types";


export default class FormManageWard extends Component{

    static get propTypes() {
        return {
            ward :PropTypes.object

        }
    }

    constructor(props) {
        super(props);
        this.ward = this.props.ward;

    }






    render() {

        return <div>
                <form role="form" >
                    <div className="form-group">
                        <label>Ward No</label>
                        <input className="form-control"  value={this.ward.wardNo}/>

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

    }


}