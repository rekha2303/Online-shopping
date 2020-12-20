import React, { Component } from "react";
import Header from "../Header";
import SideBar from "../SideBar/index";
import Card from "../Card/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron text-center" style={{ marginbottom: "0" }}>
          <h1>Online Shopping</h1>
        </div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <Header />
        </nav>

        <div class="container" style={{ margin: "20px" }}>
          <div class="row">
            <div class="col-sm-3">
              <SideBar />
            </div>
            <div class="col-sm-8">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
