import React, { Component } from "react";
import styled from "styled-components";
import bookOne from "../../images/book_1.jpg";
import bookTwo from "../../images/book_2.jpg";
import drumTwisters from "../../images/drum_twisters.jpg";

class BooksPage extends Component {
  render() {
    return (
      <PageWrapper>
        <QuoteWrapper>
          <p className="quote">
            "At last a concice and ACCURATE book of source material for students
            and teachers ... Well worth using these books, even if you think you
            are set in your ways of teaching. Highly recommended and worthy of
            many more stars than the standard five."
          </p>

          <p className="author">
            - Sam Anstice Brown, creator of Musicians' Hypnosis and the Drum Secrets series.
          </p>
        </QuoteWrapper>

        <ArticleWrapper>
          <img className="book" src={bookOne} alt="Book One" />
          <p className="content">
            <span id="bold">Drum Set Studies: Exercise Book One</span>{" "}
            introduces the student to basic rhythms and how to develop
            synchronization (playing with hands and feet together). Starting
            primarily with Eighth Notes and Sixteenth Notes, the budding drummer
            will learn how to play with simple rudiments and sticking patterns,
            while getting to grips with rock-solid beats. Some introductory
            styles of music are also examined, as well as dynamics, plus much
            more.
          </p>
          <ul>
            <li>Basic rhythms & sticking</li>
            <li>1/8 Note beats & fills</li>
            <li>1/16 Note beats & fills</li>
            <li>Triplet beats & fills</li>
            <li>Open hi-hat beats & fills</li>
            <li>Dynamics</li>
            <li>Number Cells as fills</li>
            <li>Alternate time signatures</li>
            <li>Dotted Notes & fills</li>
            <li>Plus much more!</li>
          </ul>
        </ArticleWrapper>

        <ArticleWrapper>
          <img className="book" src={bookTwo} alt="Book Two" />
          <p className="content">
            <span id="bold">Drum Set Studies: Exercise Book Two</span> takes the
            student to the next level by focusing on syncopation (playing hands
            and feet independently). Sixteenth Notes and Triplets are looked at
            in greater detail, as well as some more intricate musical styles and
            note patterns. Linear exercises and rudiments are further studied by
            developing them into fills, plus many other work-outs. By the end of
            this book, the student will be able to play most songs aired on
            commercial radio.
          </p>
          <ul>
            <li>Check patterns</li>
            <li>Extensive look at off-beats</li>
            <li>Linear time exercises</li>
            <li>Advanced rhythms & sticking</li>
            <li>Advanced open hi-hat beats</li>
            <li>Advanced alternating beats</li>
            <li>1/32 Notes & beats</li>
            <li>1/16 Triplets & fills</li>
            <li>1/4 Triplets and advanced shuffles</li>
            <li>Plus much more!</li>
          </ul>
        </ArticleWrapper>

        <ArticleWrapper>
          <img className="book" src={drumTwisters} alt="Drum Twisters" />
          <p className="content">
            <span id="bold">
              Drum Twisters: The Book That Will Make You Smile With ...
              Frustration!
            </span>{" "}
            is considered to be the red-headed step child of our method series.
            We wanted you to play the drums in a traditional sense first - to
            learn the ropes, and do what is necessary to play in a band. Now,
            we're taking those same ropes and tying them in knots. It's time to
            un-learn what you have learned, and take a fun and alternative look
            into the art of drumming.
          </p>
          <ul>
            <li>Latin & clave rhythms</li>
            <li>Snare displacements</li>
            <li>Breakbeats & polyrhythms</li>
            <li>Triplet off-beats</li>
            <li>Advanced linear studies</li>
            <li>World music and free jazz</li>
            <li>Hi-hat check patterns</li>
            <li>Fills that use crossovers</li>
            <li>Plus much more!</li>
          </ul>
        </ArticleWrapper>
      </PageWrapper>
    );
  }
}

export default BooksPage;

const PageWrapper = styled.div`
  text-align: left;

  p,
  li {
    font-family: "Questrial", sans-serif;
    font-size: 1.7vw;
    margin-left: 0px;
    list-style-position: inside;
  }
`;

const QuoteWrapper = styled.div`
  padding-bottom: 20px;

  .quote {
    font-family: "Gochi Hand", cursive;
    font-size: 1.7vw;
    text-align: justify;
  }

  .author {
    font-family: "Gochi Hand", cursive;
    font-style: italic;
    font-weight: bold;
    font-size: 1.7vw;
    text-align: center;
  }
`;

const ArticleWrapper = styled.div`
  margin: 40px 0px;
  color: #4e4e4f;
  overflow: hidden;
  border: 1px solid #dadce0;
  border-radius: 5px;
  padding: 15px;

  .book {
    width: 30%;
    height: auto;
    float: left;
    margin: 0px 10px 10px 0px;
    border: 1px solid gray;
  }

  .content {
    margin: 0px;
  }

  #bold {
    color: black;
    font-weight: 900;
  }

  img {
    margin: 0px;
  }
`;
