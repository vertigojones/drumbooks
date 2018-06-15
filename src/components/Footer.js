import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <link
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div className="container">
          <div className="text-center center-block">
            <a href="https://www.facebook.com/TeacherAndStudentPublications/">
              <i
                id="social-fb"
                className="fa fa-facebook-square fa-3x social"
              />
            </a>
            <a href="mailto:teacherandstudentbooks@gmail.com">
              <i
                id="social-em"
                className="fa fa-envelope-square fa-3x social"
              />
            </a>
          </div>
        </div>
      </FooterWrapper>
    );
  }
}

export default Footer;

const FooterWrapper = styled.div`
  margin-top: 30px;
  padding: 1vh 0;
  background-color: #dedede;

  a {
    color: #333;
  }

  .social:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
  }

  .social {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    -webkit-transition-duration: 0.5s;
    -moz-transition-duration: 0.5s;
    -o-transition-duration: 0.5s;
  }

  #social-fb:hover {
    color: #3b5998;
  }

  #social-em:hover {
    color: #f39c12;
  }
`;
