import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            //will return first path which matches with url in order of below
            descirbed routes
            <Route path="/products/:id" component={ProductDetails}></Route>
            <Route
              path="/products"
              render={(props) => <Products sortBy="name" {...props}></Products>}
            ></Route>
            <Route path="/posts/:yy/:mm?" component={Posts}></Route>
            <Route path="/admin" component={Dashboard}></Route>
            {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
