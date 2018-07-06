import React , {Component} from 'react';

import axios from 'axios';


export default class ViewMedicineBody extends Component{


    constructor(props) {
        super(props);
        this.state = {
            Med: []
        }
        this.getMedicineDetails();
    }
    getMedicineDetails() {
        axios.get("http://localhost:8081" + '/Medicine').then(res => {
            this.setState({
                Med: res.data.data || res.data
            });
        })
    }



    render(){
        return <div className="content-wrapper">
            <div className="container-fluid">


            </div>
        </div>
    }
}