import React from "react";
import "./style.css";

export default function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="blogPostImage/bird.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="about" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
