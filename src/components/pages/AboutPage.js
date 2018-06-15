import React, { Component } from "react";
import styled from "styled-components";
import owen from "../../images/owen.jpg";
import logo from "../../images/logo.jpg";

class AboutPage extends Component {
  render() {
    return (
      <PageWrapper>
        <QuoteWrapper>
          <p className="quote">
            "Players from absolute beginners to intermediate level players could
            benefit from the wide range of exercises presented in a very
            logical, progressive manner. For teachers, it acts as a great
            supportive resource, allowing you plenty of room to expand on all
            exercises whilst also acting as a great suggestion syllabus for your
            lessons."
          </p>

          <p className="author">- Dan Brigstock, drumscore.com</p>
        </QuoteWrapper>

        <LinkWrapper>
          <p className="link">
            Curious about our method? Download a{" "}
            <a href="https://www.dropbox.com/s/x1050tax8vktb3u/Beginner%27s%20Packet%20for%20Teachers.pdf?dl=1">
              free sample
            </a>{" "}
            to try it out!
          </p>
        </LinkWrapper>

        <AboutWrapper>
          <img className="profile" src={owen} alt="Owen Liversidge" />
          <p className="content">
            <span id="bold">The Teacher and Student Method</span> is the
            brainchild of Owen Liversidge, who graduated from Leeds University,
            England, with a degree in Popular Music Studies, in 2000. He has
            played drum set since he was 17, performing with numerous bands and
            projects across the UK. Since leaving college, Owen has been living
            in Atlanta, GA, where he has been teaching drums since 2002. He was
            inspired to write a series of books by the apparent lack of
            comprehensive instructional materials, which allowed the student and
            teacher to work together towards a common goal … to produce a
            complete and seasoned drummer!
          </p>
          <p>
            The results are no ordinary method books.{" "}
            <span id="bold">The Teacher and Student Method</span> series of
            books have been written with the instructor in mind. There are many
            self-teaching and highly detailed instructional books on the market,
            but none have been designed so that an instructor can teach using
            their own systems and methods. These books are purely dedicated to
            giving the student a rigorous run through all of the skills and
            techniques they need to know, providing them with a rich and
            resourceful insight into the art of drumming. And the teacher gets
            to focus on teaching! There are pages in the method books that are
            dedicated to the instructor, which will allow them to teach the
            basics their own way. No longer are there pages of boring notes and
            demonstrations, most of which are unnecessary. Once the student gets
            the picture, it’s time for them to play and do what they were born
            to do!
          </p>
          <p>
            <span id="bold">The Teacher and Student Method</span> covers each
            skill in great detail, allowing the student to grasp a thorough
            understanding of the many areas of drumming covered throughout the
            series. For fun and for something a little "out-of-the-box", a third
            book (Drum Twisters) was also created as an attempt to encourage the
            student to be creative and original ... so every area has been
            covered!
          </p>
        </AboutWrapper>

        <ContactWrapper>
          <img src={logo} alt="logo" />
          <div id="company">
            <span id="blue">The </span>
            <span id="red">Teacher </span>
            <span id="black">and </span>
            <span id="red">Student </span>
            <span id="blue">Method</span>
          </div>
          <a href="mailto:teacherandstudentbooks@gmail.com">
            teacherandstudentbooks@gmail.com
          </a>
          <a href="https://www.facebook.com/TeacherAndStudentPublications/">
            Facebook
          </a>
        </ContactWrapper>
      </PageWrapper>
    );
  }
}

export default AboutPage;

const PageWrapper = styled.div`
  text-align: justify;

  a {
    text-decoration: none;
    color: black;
  }

  p {
    font-family: "Questrial", sans-serif;
    font-size: 1.7vw;
    text-decoration: none;
  }
`;

const QuoteWrapper = styled.div`
  padding-bottom: 20px;

  .quote {
    font-family: "Gochi Hand", cursive;
    font-size: 1.7vw;
    text-align: center;
  }

  .author {
    font-family: "Gochi Hand", cursive;
    font-style: italic;
    font-weight: bold;
    font-size: 1.7vw;
    text-align: center;
  }
`;

const LinkWrapper = styled.div`
  text-align: center;
`;

const AboutWrapper = styled.div`
  margin: 40px 0;
  color: #4e4e4f;
  overflow: hidden;
  border: 1px solid #dadce0;
  border-radius: 5px;
  padding: 15px;

  .profile {
    width: 30%;
    height: auto;
    float: left;
    margin: 0 1.5vw 1vh 0;
    border-radius: 5px;
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

const ContactWrapper = styled.div`
  text-align: center;
  font-family: "Fjalla One", sans-serif;
  font-weight: bold;
  font-size: 1.7vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  .company {
    flex-direction: row;
  }

  #blue {
    color: #459ed4;
  }

  #red {
    color: #c33e53;
  }

  #black {
    color: black;
  }

  img {
    margin: 0 auto;
    height: 80px;
    padding: 5px;
  }

  span {
    padding: 10px 0;
  }
`;
