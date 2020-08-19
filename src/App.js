import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import SignUp from "./components/authentications/SignUp";
import SignIn from "./components/authentications/SignIn";
import CreateItem from "./components/items/addItem";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/post-advert" component={CreateItem} />
            <Footer />
          </Fragment>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
