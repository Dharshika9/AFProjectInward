import React, { Component } from 'react';
<<<<<<< HEAD
import {BrowserRouter , Route} from 'react-router-dom';

// import Home from './LoginContainer/Homepage';
//  import Login from './LoginContainer/Loginbody';
//  import Register from './LoginContainer/RegisterBody';
    import Mainpage from './WardComponents/Mainpage';
import PatientMainpage from './PatientComponents/PatientMainpage';

//import samplecenter from './WardComponents/SampleCenters';
//import Mainpage from './WardComponents/Mainpage';

import Home from './LoginContainer/Homepage';
import Login from './LoginContainer/Loginbody';
import Register from './LoginContainer/RegisterBody';


// import ViewWards from './WardComponents/ViewWards';
// import AddWards from './WardComponents/AddWards';
// import ManageWards from './WardComponents/ManageWards';
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
import ViewWards from './WardComponents/ViewWards';
import AddWards from './WardComponents/AddWards';
import ManageWards from './WardComponents/ManageWards';
>>>>>>> f544331f38071a8a83ba6f739ef912c11e7e95ae


class App extends Component {
    render() {
        return <BrowserRouter>
            <div>
<<<<<<< HEAD
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/Mainpage" component={Mainpage}/>
                <Route path="/PatientMainpage" component={PatientMainpage}/>



                {/*<Route path="/viewwards" component={ViewWards}/>*/}
                {/*<Route path="/addwards" component={AddWards}/>*/}
                {/*<Route path="/manageward" component={ManageWards}/>*/}
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
>>>>>>> f544331f38071a8a83ba6f739ef912c11e7e95ae
            </div>
        </BrowserRouter>

    }
}
export default App;




