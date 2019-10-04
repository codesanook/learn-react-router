import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import User from "./User";
import Contact from "./Contact";
import { Route, Link, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import NotFound from "./NotFound";

const Routing = () => (
  <Router>
    <ul className='main-nav'>
      <li>
        <NavLink exact activeClassName='active' to="/">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/user">User</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to="/contact">Contact</NavLink>
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
