import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Modal from "./components/Modal";
function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
