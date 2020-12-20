import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="Navar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-Link">
              Product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <span className="mr-2">
              <i className="fas fa-cart-plus">my cart</i>
            </span>
          </button>
        </Link>
      </nav>
    );
  }
}
