import React from "react";
import "./style.css";
import Card from "../Card/index";
// import logo from '../hearth.png';

export default function About() {
  return (
    <div class="row">
      <div className="col-sm-4 ml-3">
        <div>
          About the page
          <h1>Details of Card</h1>
          <div className="card"> dfhkjdshfkjshkjhjk</div>
        </div>
      </div>
      <div className="col-sm-6">
        <Card />
      </div>
    </div>
  );
}
