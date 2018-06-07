import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/books">
          <h3>Books</h3>
        </Link>
        <Link to="/testemonials">
          <h3>Testemonials</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
      </NavWrapper>
    );
  }
}

export default NavBar;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;

  h3 {
    text-decoration: none;
    color: gray;
  }
`;
