import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './LoginContainer/Homepage';
 import Login from './LoginContainer/Loginbody';
 import Register from './LoginContainer/RegisterBody';
import Mainpage from './WardComponents/Mainpage';
=======
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
>>>>>>> 6c7d1267fd2d085a91077ed160db4025cd483637
import ViewWards from './WardComponents/ViewWards';
 import AddWards from './WardComponents/AddWards';
import ManageWards from './WardComponents/ManageWards';

import BedMainpage from './BedComponents/BedMainPage';
import regMainPatient from './BedComponents/regMainPatient';
import admitPatient from './BedComponents/admitPatient'
import regPatient from './BedComponents/regPatient';




class App extends Component {
    render() {
        return <BrowserRouter>
            <div>
<<<<<<< HEAD
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
=======
{/*<<<<<<< HEAD*/}
                {/*<Route path="/" component={Home} exact/>*/}
                {/*<Route path="/login" component={Login}/>*/}
                {/*<Route path="/register" component={Register}/>*/}
                {/*<Route path="/Mainpage" component={Mainpage}/>*/}
{/*=======*/}
                {/*/!*<Route path="/" component={Home}/>*!/*/}
                {/*/!*<Route path="/login" component={Login}/>*!/*/}
                {/*/!*<Route path="/register" component={Register}/>*!/*/}
                {/*/!*<Route path="/Mainpage" component={Mainpage}/>*!/*/}
{/*/!*<<<<<<< HEAD*!/*/}
                {/*/!*<Route path="/PatientMainpage" component={PatientMainpage}/>*!/*/}
{/*/!*=======*!/*/}
{/*/!*>>>>>>> 6f52dd24087c66abdea9de007d3a7d506ba10821*!/*/}
{/*>>>>>>> 82cffc17db6e0185cfc6dc5cee66bea90769a725*/}
                <Route path="/viewwards" component={ViewWards}/>
                <Route path="/addwards" component={AddWards}/>
                <Route path="/manageward" component={ManageWards}/>
>>>>>>> 6c7d1267fd2d085a91077ed160db4025cd483637

            </div>
        </BrowserRouter>

    }
}
export default App;




