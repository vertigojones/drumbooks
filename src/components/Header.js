import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <span className="blue">The </span>
        <span className="red">Teacher </span>
        <span className="black">and </span>
        <span className="red">Student </span>
        <span className="blue">Method</span>
      </HeaderWrapper>
    );
  }
}

export default Header;

const HeaderWrapper = styled.div`
  font-family: "Fjalla One", sans-serif;
  font-size: 6.28vw;
  margin: 0;
  
  .blue {
    color: #459ed4;
  }

  .red {
    color: #c33e53;
  }

  .black {
    color: black;
  }
`;
