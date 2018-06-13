import React, { Component } from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
// import Home from './LoginContainer/Homepage';
// import Login from './LoginContainer/Loginbody';
// import Register from './LoginContainer/RegisterBody';
// import Mainpage from './WardComponents/Mainpage';
//import samplecenter from './WardComponents/SampleCenters';
import Mainpage from './WardComponents/Mainpage';


class App extends Component {
    render() {
        return <BrowserRouter>
            <div>
                {/*<Route path="/" component={Home}/>*/}
                {/*<Route path="/login" component={Login}/>*/}
                {/*<Route path="/register" component={Register}/>*/}
                {/*<Route path="/Mainpage" component={Mainpage}/>*/}
                <Route path="/mainpage" component={Mainpage}/>
            </div>
        </BrowserRouter>

    }
}
export default App;




