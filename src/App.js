import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import logo from "./logo.jpg";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
  @import url('https://fonts.googleapis.com/css?family=Questrial');
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
