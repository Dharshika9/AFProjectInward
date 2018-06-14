import React, { Component } from 'react';
 import {BrowserRouter , Route} from 'react-router-dom';
// <<<<<<< HEAD
// // import Home from './LoginContainer/Homepage';
// //  import Login from './LoginContainer/Loginbody';
// //  import Register from './LoginContainer/RegisterBody';
//  import Mainpage from './WardComponents/Mainpage';
// import PatientMainpage from './PatientComponents/PatientMainpage';
//
// // import samplecenter from './WardComponents/SampleCenters';
// // import Mainpage from './WardComponents/Mainpage';
// =======
// import Home from './LoginContainer/Homepage';
// import Login from './LoginContainer/Loginbody';
// import Register from './LoginContainer/RegisterBody';
// import Mainpage from './WardComponents/Mainpage';
// >>>>>>> 6f52dd24087c66abdea9de007d3a7d506ba10821
import ViewWards from './WardComponents/ViewWards';
import AddWards from './WardComponents/AddWards';
import ManageWards from './WardComponents/ManageWards';


class App extends Component {
    render() {
        return <BrowserRouter>
            <div>
                {/*<Route path="/" component={Home}/>*/}
                {/*<Route path="/login" component={Login}/>*/}
                {/*<Route path="/register" component={Register}/>*/}
                {/*<Route path="/Mainpage" component={Mainpage}/>*/}
{/*<<<<<<< HEAD*/}
                {/*<Route path="/PatientMainpage" component={PatientMainpage}/>*/}
{/*=======*/}
{/*>>>>>>> 6f52dd24087c66abdea9de007d3a7d506ba10821*/}
                <Route path="/viewwards" component={ViewWards}/>
                <Route path="/addwards" component={AddWards}/>
                <Route path="/manageward" component={ManageWards}/>
            </div>
        </BrowserRouter>

    }
}
export default App;




