import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import logo from "./images/logo.jpg";
import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import BooksPage from "./components/pages/BooksPage";
import TestemonialsPage from "./components/pages/TestemonialsPage";
import AboutPage from "./components/pages/AboutPage";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fjalla+One');
  @import url('https://fonts.googleapis.com/css?family=Questrial');
  @import url('https://fonts.googleapis.com/css?family=Gochi+Hand');
`;

class App extends Component {
  render() {
    return (
      <Body>
        <Router>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Header />
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/books" component={BooksPage} />
              <Route exact path="/testemonials" component={TestemonialsPage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Body>
    );
  }
}

export default App;

const Body = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 650px) {
    max-width: 90%;

    .banner1,
    .banner2 {
      width: 100%;
    }

    .quote,
    .author {
      font-size: 16px;
    }

    .teachersNotes,
    .blankManuscript {
      width: 40%;
    }

    span {
      font-size: 52px;
    }

    h1 {
      font-size: 64px;
    }

    #bold,
    li,
    p,
    a {
      font-size: 16px;
    }
  }
`;
