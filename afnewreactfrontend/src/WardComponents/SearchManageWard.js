import React , {Component} from 'react';
import axios                from 'axios';
import FormManageWard from "./FormManageWard";



export default class SearchManageWard extends Component {



    constructor(props) {
        super(props);
        this.state={
            ward :{}

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




    render() {
        var style={width: 300}
        var textAlign={textAlign: "center"}


        return (
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



                                        <div className="input-group">
                                            <label>Enter Ward No</label>
                                            <input type="text" className="form-control"
                                                   placeholder="Search for..." name="wardNo"/>

                                            <span className="input-group-btn">
                                            <button className="btn btn-secondary" type="button" onSubmit={event => this.getSpecificWard(event)}>Go!</button>
                                            </span>
                                        </div>

                                     </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
                <FormManageWard ward={this.state.ward}/>


            </div>
        )
    }
}