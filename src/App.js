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
import Admin from "./pages/Admin";
import TripDetail from "./pages/TripDetail";
import ReserveHistoryAdmin from "./pages/ReserveHistoryAdmin";

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
                        <PrivateRoute exact path="/admin" component={Admin} />
                        <PrivateRoute exact path="/trip/:id" component={TripDetail} />
                        <PrivateRoute exact path="/reserve-admin" component={ReserveHistoryAdmin} />
                        <PrivateRoute exact path="/reserve-history" component={ReserveHistory} />
                        <PrivateRoute exact path="/reserve-history/:id" component={ReserveHistoryDetail} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
