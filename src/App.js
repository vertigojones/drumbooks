import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import logo from "./logo.jpg";
import "./App.css";

import Header from "./Header";
import HomePage from "./components/HomePage"

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
