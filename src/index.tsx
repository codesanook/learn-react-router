import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import User from "./User";
import Contact from "./Contact";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFound from "./NotFound";

const Routing = () => (
  <Router>
    <ul className='main-nav'>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(<Routing />, document.getElementById("root"));
