import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import MyProfile from "./pages/MyProfile";
import NotFound from "./pages/NotFound";
import './index.css';
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ReserveHistory from "./pages/ReserveHistory";
import ReserveHistoryDetail from "./pages/ReserveHistoryDetail";

function handleUpdate() {
    let {
        action
    } = this.state.location;

    if (action === 'PUSH') {
        window.scrollTo(0, 0);
    }
}

class App extends Component {
  render() {
    return (
        <div>
            <Router onUpdate={handleUpdate}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/about-us" component={AboutUs} />
                        <Route exact path="/booking" component={Booking} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute exact path="/profile" component={MyProfile} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/loginWithUsername" component={Login} />
                        <Route exact path="/reserve-history" component={ReserveHistory} />
                        <Route exact path="/reserve-history/:id" component={ReserveHistoryDetail} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
