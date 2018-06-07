import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <NavWrapper>
        <h3>Home</h3>
        <h3>Books</h3>
        <h3>Testemonials</h3>
        <h3>Contact</h3>
      </NavWrapper>
    );
  }
}

export default NavBar;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: gray;
  margin: 10px;
`;
