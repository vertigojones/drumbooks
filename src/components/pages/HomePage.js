import React, { Component } from "react";
import styled from "styled-components";
import bannerOne from "../../images/banner_1.png";
import bannerTwo from "../../images/banner_2.png";
import teachersNotes from "../../images/teachers_notes.jpg";
import blankManuscript from "../../images/blank_manuscript.jpg";

class HomePage extends Component {
  render() {
    return (
      <PageWrapper>
        <QuoteWrapper>
          <p className="quote">
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

        <LinkWrapper>
          <p>Available now on Amazon worldwide.</p>
          <p className="link">
            Curious about our method? Download a{" "}
            <a href="https://www.dropbox.com/s/x1050tax8vktb3u/Beginner%27s%20Packet%20for%20Teachers.pdf?dl=1">
              free sample
            </a>{" "}
            to try it out!
          </p>
        </LinkWrapper>

        <ArticleWrapper>
          <img
            className="banner1"
            src={bannerOne}
            alt="Where do you want to be?"
          />
          <p className="content">
            <span id="bold">The Teacher and Student Method</span> series of
            books have been designed so that the student can work with their
            teacher in covering all of the skills needed to perform with a
            particular instrument. There are many self-teaching and highly
            detailed instructional books on the market, but none have been
            created for a one-on-one teaching environment. Why do you need
            diagrams and instruction, when you have a well-qualified teacher sat
            right next to you in the room? The answer is that you don't, and so{" "}
            <span id="bold">The Teacher and Student Method</span> does away with
            the unnecessary book filler and instead fills the pages with
            comprehensive and thorough exercise material. By the time you are
            finished with our books, you will be ready for the show!
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
            your very own teacher?{" "}
            <span id="bold">The Teacher and Student Method</span> Books have
            pages dedicated to personal instruction on every new topic, so you
            can learn what you need to learn throughout the curriculum ... and
            nothing else. The <span id="bold">Teacher's Notes</span> pages allow
            your teacher to demonstrate the basics of playing your instrument,
            in a way that is tailored to your needs and level of understanding.
            Also, they can provide you with additional exercises and practice
            techniques if need be, as well as examples from your favorite songs.
          </p>
          <br />
          <p className="content">
            While it is very important to practice with your instrument on a
            daily basis, we all know that isn't always possible. This is why{" "}
            <span id="bold">The Teacher and Student Method</span> covers every
            topic in fine detail, so you are practically becoming a seasoned
            musician as you progress through the many exercises in the books.
          </p>
        </ArticleWrapper>

        <ArticleWrapper>
          <img
            className="teachersNotes"
            src={teachersNotes}
            alt="Teachers Notes"
          />
          <p className="content">
            <span id="bold">The Teacher and Student Method</span> series of
            books accommodate valuable input and instruction from your music
            teacher. Just before you are ready to start each new topic, you will
            find a page that allows your teacher to offer you personal
            instruction, and demonstrate the new skill until you are ready to
            move on to the many exercises. The
            <span id="bold">Teacher's Notes</span> pages may also be used at
            their discretion, for adding further examples on each new topic, or
            extracts from songs that demonstrate what you have learned. In fact,
            the whole book is designed like an educational exercise book,
            allowing your teacher to make notes in the very book that you will
            be working from.
          </p>
          <br />
          <a href="https://www.dropbox.com/s/8znsu5rimvj7njy/Blank%20Teacher%27s%20Notes%20US%20letter.pdf?dl=1">
            Download a Teacher's Notes page
          </a>
        </ArticleWrapper>

        <ArticleWrapper>
          <img
            className="blankManuscript"
            src={blankManuscript}
            alt="Blank Manuscript"
          />
          <p className="content">
            Of course, we don't want to leave the student feeling left out,
            which is why <span id="bold">The Teacher and Student Method</span>{" "}
            has provided them with pages of blank manuscript to record their own
            personal compositions, even song ideas. Also, the blank manuscript
            can provide for additional material and instruction from the
            teacher, if need be. We believe that a book should bless the student
            and teacher with comprehensive and progressive exercises, but should
            never stop there. After all, everyone has their own creative ideas,
            so that vision needs a place to be realized. All it needs now, is
            your own personal input. Good luck!
          </p>
          <br />
          <a href="https://www.dropbox.com/s/z3c33rb6vpx3tsm/Blank%20Manuscript%20US%20letter.pdf?dl=1">
            Download a blank manuscript page
          </a>
        </ArticleWrapper>
      </PageWrapper>
    );
  }
}

export default HomePage;

const PageWrapper = styled.div`
  text-align: justify;

  p,
  a {
    font-family: "Questrial", sans-serif;
    font-size: 1.3vw;
    text-decoration: none;
  }
`;

const QuoteWrapper = styled.div`
  padding-bottom: 20px;

  .quote {
    font-family: "Gochi Hand", cursive;
    font-size: 1.3vw;
    text-align: center;
  }

  .author {
    font-family: "Gochi Hand", cursive;
    font-style: italic;
    font-weight: bold;
    font-size: 1.3vw;
    text-align: center;
  }
`;

const LinkWrapper = styled.div`
  text-align: center;
`;

const ArticleWrapper = styled.div`
  margin: 40px 0;
  color: #4e4e4f;
  overflow: hidden;
  border: 1px solid #dadce0;
  border-radius: 5px;
  padding: 15px;

  .banner1 {
    width: 50%;
    height: auto;
    float: left;
    margin: 0 15px 10px 0;
    border-radius: 5px;
  }

  .banner2 {
    width: 50%;
    height: auto;
    float: right;
    margin: 0 0 10px 15px;
    border-radius: 5px;
  }

  .teachersNotes,
  .blankManuscript {
    width: 25%;
    height: auto;
    float: left;
    margin: 0 1.5vw 1vh 0;
    border: 1px solid gray;
  }

  .content {
    margin: 0;
  }

  #bold {
    color: black;
    font-weight: 900;
  }

  img {
    margin: 0;
  }
`;
