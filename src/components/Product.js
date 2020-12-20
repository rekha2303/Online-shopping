import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("youare clicked")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to te cart");
              }}
            />
            {inCart ? (
              <p className="text-capitalize mb-0" disable>
                {" "}
                in cart
              </p>
            ) : (
              <i className="fa fa-shopping-cart" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
