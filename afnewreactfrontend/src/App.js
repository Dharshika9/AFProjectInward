import React, { Component } from 'react';

import {BrowserRouter , Route} from 'react-router-dom';



import Home from './LoginContainer/Homepage';
import Login from './LoginContainer/Loginbody';
import Register from './LoginContainer/RegisterBody';
import PatientMainpage from './PatientComponents/PatientMainpage';
import ViewWards from './WardComponents/ViewWards';
import AddWards from './WardComponents/AddWards';
import ManageWards from './WardComponents/ManageWards';
import BedMainpage from './BedComponents/BedMainPage';
import RegPatient from './BedComponents/RegPatient';
import admitPatient from './BedComponents/AdmitPatient'
import viewBeds from './BedComponents/viewBeds';
import Tests from './PatientComponents/ViewTests';
import Medicine from './PatientComponents/ViewMedicine';
import Transfer from './PatientComponents/PatienttransferBody';
import Discharge from './PatientComponents/PatientdischargeBody';
import Notes from './PatientComponents/PatientnotesBody';



class App extends Component {
    render() {
        return <BrowserRouter>
            <div>

                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/PatientMainpage" component={PatientMainpage}/>
                <Route path="/viewwards" component={ViewWards}/>
                <Route path="/addwards" component={AddWards}/>
                <Route path="/manageward" component={ManageWards}/>
                <Route path="/BedMainPage" component={BedMainpage}/>
                <Route path="/regPatient" component={RegPatient}/>
                <Route path="/admitPatient" component={admitPatient}/>
                <Route path="/viewBeds" component={viewBeds}/>
                <Route path="/tests" component={Tests}/>
                <Route path="/medicines" component={Medicine}/>
                <Route path="/transfer" component={Transfer}/>
                <Route path="/discharge" component={Discharge}/>
                <Route path="/notes" component={Notes}/>


            </div>
        </BrowserRouter>

    }
}
export default App;