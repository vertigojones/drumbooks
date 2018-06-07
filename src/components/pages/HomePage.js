import React, { Component } from "react";
import styled from "styled-components";

class HomePage extends Component {
  render() {
    return (
      <PageWrapper>
        <QuoteWrapper>
          <p>
            "In the saturated world of drum set instructional books, it becomes
            increasingly difficult for one book to stand out from the crowd.
            From applying rudiments to double-bass drumming, just about every
            topic imaginable has already been covered. Luckily for us, a new
            wave of authors has appeared on the drumming landscape, creating
            novel approaches to help both student and teacher. Owen Liversidge
            has done this with his new book, The Teacher and Student Method Drum
            Set Studies."
          </p>

          <p className="author">
            - Andy Ziker, author of best-seller Drum Aerobics.
          </p>
        </QuoteWrapper>
      </PageWrapper>
    );
  }
}

export default HomePage;

const PageWrapper = styled.div``;

const QuoteWrapper = styled.div`
  margin: 10px 30px;

  .author {
    font-style: italic;
    font-weight: bold;
  }

  p {
    font-family: 'Questrial', sans-serif;
  }
`;
