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
import Courses from "./pages/Courses";
import Exams from "./pages/Exams";
import Certificates from "./pages/Certificates";
import ExamDetail from "./pages/ExamDetail";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import './index.css';

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
                        <PrivateRoute exact path="/profile" component={MyProfile} />
                        <Route exact path="/login" component={SignIn} />
                        <PrivateRoute exact path="/courses" component={Courses} />
                        <PrivateRoute exact path="/certificates" component={Certificates} />
                        <PrivateRoute exact path="/exams" component={Exams} />
                        <PrivateRoute exact path="/exam/:id" component={ExamDetail} />
                        <PrivateRoute path="/courses/:id" component={CourseDetail} />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
