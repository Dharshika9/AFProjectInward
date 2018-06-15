import React , {Component} from 'react';
import PropTypes 			from 'prop-types';
import axios                from 'axios';

const API = require('../static.Config')

export default class FormManageWard extends Component{

    static get propTypes() {
        return {
            wardDetails :PropTypes.object

        }
    }

    constructor(props) {
        super(props);
        console.log(this.props.ward);
        this.state = {
            wardNo: this.props.ward.wardNo,
            wardType: 'Maternity',
            noOfbeds: '',
            availableBeds: '',
            location: '',
            visitingTimes: '',
            incharge: '',
            phone: '',
            note: ''
        }

            this.updateWardDetails = this.updateWardDetails.bind(this);


    }
    componentWillReceiveProps(props){
        this.setState(props);
    }



    setChangebeds(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({noOfbeds: event.target.value});

    }

    setChangeAbeds(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({availableBeds: event.target.value});
    }

    setChangeLocation(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({location: event.target.value});
    }

    setChangeVisit(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({visitingTimes: event.target.value});
    }

    setChangeIncharge(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({incharge: event.target.value});
    }

    setChangePhone(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({phone: event.target.value});
    }

    setChangeNote(event){
        event.preventDefault();
        event.stopPropagation();


        this.setState({note: event.target.value});

    }



    updateWardDetails(event){
        event.preventDefault();
        event.stopPropagation();
        console.log(this.state.noOfbeds);
        axios.put(API.nodeAPI+'/wards/update_specific_ward'+this.props.wardNo,{
            wardNo:this.state.wardNo,
            wardType:this.state.wardType,
            noOfbeds:this.state.noOfbeds,
            availableBeds:this.state.availableBeds,
            location:this.state.location,
            visitingTimes: this.state.visitingTimes,
            incharge:this.state.incharge,
            phone:this.state.phone,
            note:this.state.note


        }).then(res =>{
            if(res.status===200){
                alert(res.message);
            }else{
                alert(res.message);
            }
        }).catch(err=>{
            console.log(err);
            alert("Some thing went wrong :)");
        });
    }

    render() {
        this.wardDetails = this.props.ward;
        console.log(this.wardDetails);
        return <div>
                <form role="form" >
                    <div className="form-group">
                        <label>Ward No</label>
                        <input className="form-control" type="text" value={this.wardDetails.wardNo} name={'wardNo'} onChange={event => this.setChangeWordno(event)}/>

                    </div>



                    <div className="form-group">
                        <label>Ward Type</label>
                        <select className="form-control" name={'wardType'} onChange={event => this.setChanges(event)}>
                            <option selected={this.wardDetails.wardType === 'Maternity'}> Maternity</option>
                            <option selected={this.wardDetails.wardType === 'Pediatric'}> Pediatric</option>

                        </select>
                    </div>


                    <div className="form-group">
                        <label>No Of Beds</label>
                        <input className="form-control" placeholder={this.wardDetails.noOfBeds} name={'noOfBeds'} onChange={event => this.setChangebeds(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Available Beds</label>
                        <input className="form-control" placeholder={this.wardDetails.availableBeds} name={'availableBeds'} onChange={event => this.setChangeAbeds(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input className="form-control" placeholder={this.wardDetails.location} name={'location'} onChange={event => this.setChangeLocation(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Visiting Hours</label>
                        <input className="form-control" placeholder={this.wardDetails.visitingTimes} name={'visitingTimes'} onChange={event => this.setChangeVisit(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Incharge</label>
                        <input className="form-control" placeholder={this.wardDetails.incharge} name={'incharge'} onChange={event => this.setChangeIncharge(event)}/>

                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control" placeholder={this.wardDetails.phone} name={'phone'} onChange={event => this.setChangePhone(event)}/>

                    </div>

                    <div className="form-group">
                        <label>Note</label>
                        <textarea className="form-control" rows="3" name="note"  placeholder={this.wardDetails.note} name={'note'} onChange={event => this.setChangeNote(event)}/>
                    </div>

                    <button  type={'button'} className="btn btn-info" onClick={event => this.updateWardDetails(event)}>Update</button>
                     <button type="reset" className="btn btn-info" >Reset</button>


                </form>
            </div>

    }


}