import React from 'react';
import './App.css';
import {LandingPageView} from "./Views/landing-page/landing-page-view";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (

        <Router>
                <nav>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/manage-attributes">Attributes</Link> </li>
                        <li> <Link to="/manage-attribute-groups">Attribute Groups</Link> </li>
                        <li> <Link to="/manage-attribute-mappings">Attribute Mappings</Link></li>
                        <li> <Link to="/manage-classes">Classes</Link> </li>

                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/manage-attributes" component={ ()=><LandingPageView message={"jjj"}/> }/>
                    <Route exact path="/" component={ ()=><LandingPageView message={"this is the landing page"}/> }/>
                </Switch>
        </Router> 

  );
}

export default App;
