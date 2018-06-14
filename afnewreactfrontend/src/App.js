import React, { Component } from 'react';

import {BrowserRouter , Route} from 'react-router-dom';




import Home from './LoginContainer/Homepage';
import Login from './LoginContainer/Loginbody';
import Register from './LoginContainer/RegisterBody';
import Mainpage from './WardComponents/Mainpage';
import PatientMainpage from './PatientComponents/PatientMainpage';
import ViewWards from './WardComponents/ViewWards';
import AddWards from './WardComponents/AddWards';
import ManageWards from './WardComponents/ManageWards';
import BedMainpage from './BedComponents/BedMainPage';
import regMainPatient from './BedComponents/regMainPatient';
import admitPatient from './BedComponents/admitPatient'



class App extends Component {
    render() {
        return <BrowserRouter>
            <div>

                <Route path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/Mainpage" component={Mainpage}/>
                <Route path="/viewwards" component={ViewWards}/>
                <Route path="/addwards" component={AddWards}/>
                <Route path="/manageward" component={ManageWards}/>
                <Route path="/BedMainPage" component={BedMainpage}/>
                <Route path="/regPatient" component={regMainPatient}/>
                <Route path="/admitPatient" component={admitPatient}/>
             

            </div>
        </BrowserRouter>

    }
}
export default App;




