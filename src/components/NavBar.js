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
      padding: 5px;
      font-size: 2vw;
    }

  a {
    text-decoration: none;
    color: gray;
  }

  a:hover {
    text-decoration: none;
    color: gray;

    h3 {
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2),
        0 4px 10px 0 rgba(0, 0, 0, 0.12);
    }
  }
`;
