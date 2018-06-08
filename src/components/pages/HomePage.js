import React, { Component } from "react";
import styled from "styled-components";
import bannerOne from "../../images/banner_1.png";
import bannerTwo from "../../images/banner_2.png";

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

        <ArticleWrapper>
          <img
            className="banner1"
            src={bannerOne}
            alt="Where do you want to be?"
          />
          <p className="content">
            The Teacher and Student Method series of books have been designed so
            that the student can work with their teacher in covering all of the
            skills needed to perform with a particular instrument. There are
            many self-teaching and highly detailed instructional books on the
            market, but none have been created for a one-on-one teaching
            environment. Why do you need diagrams and instruction, when you have
            a well-qualified teacher sat right next to you in the room? The
            answer is that you don't, and so The Teacher and Student Method does
            away with the unnecessary book filler and instead fills the pages
            with comprehensive and thorough exercise material. By the time you
            are finished with our books, you will be ready for the show!
          </p>
        </ArticleWrapper>

        <ArticleWrapper>
          <img
            className="banner2"
            src={bannerTwo}
            alt="How will you get there?"
          />
          <p className="content">
            Who better to teach you the basics of music and performance than
            your very own teacher? The Teacher and Student Method Books have
            pages dedicated to personal instruction on every new topic, so you
            can learn what you need to learn throughout the curriculum ... and
            nothing else. The Teacher's Notes pages allow your teacher to
            demonstrate the basics of playing your instrument, in a way that is
            tailored to your needs and level of understanding. Also, they can
            provide you with additional exercises and practice techniques if
            need be, as well as examples from your favorite songs.
          </p>
          <p className="content">
            While it is very important to practice with your instrument on a
            daily basis, we all know that isn't always possible. This is why The
            Teacher and Student Method covers every topic in fine detail, so you
            are practically becoming a seasoned musician as you progress through
            the many exercises in the books.
          </p>
        </ArticleWrapper>
      </PageWrapper>
    );
  }
}

export default HomePage;

const PageWrapper = styled.div`
  text-align: center;

  p {
    font-family: "Questrial", sans-serif;
    text-align: justify;
    font-size: 20px;
  }
`;

const QuoteWrapper = styled.div`
  padding-bottom: 20px;

  .author {
    font-style: italic;
    font-weight: bold;
  }
`;

const ArticleWrapper = styled.div`
  margin: 30px 0px;

  .banner1 {
    width: 48%;
    height: auto;
    float: left;
    margin: 0px 10px 10px 0px;
    border-radius: 19px;
  }

  .banner2 {
    width: 48%;
    height: auto;
    float: right;
    margin: 0px 0px 10px 10px;
    border-radius: 15px;
  }

  .content {
    margin: 5px;
  }
`;
