import React from "react";
import Authentication from "../Component/Authentication/Authentication";
import CategoryList from "../Component/CategoryList/CategoryList";
import ProductList from "../Component/ProductList/ProductList";
import SizingList from "../Component/SizingList/SizingList";
import Register from "../Component/Register/Register";
import Header from "../Component/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function MainNavigation() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Authentication />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/product" exact>
          <div>
            <Header />
            <ProductList />
          </div>
        </Route>
        <Route path="/category" exact>
          <CategoryList />
        </Route>
        <Route path="/size" exact>
          <SizingList />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainNavigation;
