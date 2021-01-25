import React from "react";
import "../styles/Page.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import ProductListPage from "../pages/ProductListPage";

const Page = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={HomePage} />;
        <Route path="/products" component={ProductListPage} />;
        <Route path="/product/:id" component={ProductPage} />;
        <Route path="/contact" component={ContactPage} />;
        <Route path="/admin" component={AdminPage} />;
        <Route path="/login" component={LoginPage} />;
        <Route component={ErrorPage} />;
      </Switch>
    </React.Fragment>
  );
};

export default Page;
