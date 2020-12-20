import React from "react";
//import SideBar from '../../components/SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "../About";
import Login from "../Login/index";

//import Card from '../Card';

export default function Header() {
  return (
    <Router>
      <Switch>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Route path="/about" component={About} />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2 ml-3 mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </Switch>
    </Router>
  );
}
