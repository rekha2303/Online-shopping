import React from "react";
import "./style.css";
//import Card from "../../components/Card";

export default function SideBar(props) {
  return (
    <div className="sidebar pt-2 pl-2">
      <a className="active" href="#home">
        Product
      </a>
      <a href="#news">Brand</a>
      <a href="#contact">Company</a>
      <a href="#about">About</a>
    </div>
  );
}
