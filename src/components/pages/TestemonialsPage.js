import React, { Component } from "react";
import styled from "styled-components";

class TestemonialsPage extends Component {
  render() {
    return (
      <PageWrapper>
        <QuoteWrapper>
          <p className="quote">
            "Mr. Liversidge gets high, high marks for this innovative method ...
            one that a seasoned player/new to teaching, can use to relate to
            young students."
          </p>

          <p className="author">- Michael Lawler, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "Owen Liversidge gives you a logical, practical, USEFUL system for
            teachers and students playing the drum set. Very comprehensive for
            all ages."
          </p>

          <p className="author">- Jason Monseur, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "Owen has a very clear, structured style that covers lots of simple
            things that many other tutorial books miss out altogether ... This
            book overlaps many other instruction books - I know because I own
            most of them. If you're looking at getting off on the right foot,
            this is, in my opinion, the best book available at the moment."
          </p>

          <p className="author">- Otis Mojo, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "I highly recommend them - concise, straightforward and full of
            ideas with real-world applications. Cheers!"
          </p>

          <p className="author">- Simon Bridgestock, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "The past few weeks ive been working through the first book with my
            youngest of drum students (age 6), and he said to me yesterday that
            he's been looking forward to working on it again all week. That's
            all he wants to do at his drum lessons just now. He's just past the
            level 3 chapters and his reading is awesome."
          </p>

          <p className="author">- Sam Lumsden, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "I love using this book with my students because it gives me ample
            material to cover and discuss with them ... It allows me to
            customize the lessons based on the student's personal level. One of
            my favorite features of the book is that there is no text to explain
            how to play something, which gives me the opportunity to show the
            student various different approaches on how and why to play the
            exercises. Between volume 1 and 2 of this title, a qualified teacher
            can start a student from the beginning and take them to a fairly
            advanced level."
          </p>

          <p className="author">- Bobby Angilletta, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "I find it to be a well thought out resource. Exercises range from
            beginner to practical to challenging! There are plenty of ideas to
            build on and do variations that fit your particular students or
            situation. The author also has a website that offers extra material
            that you can download. Highly recommended!"
          </p>

          <p className="author">- Drum Mercenary, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "This book helps the teacher create a good relationship with the
            student, and after all, that is a win/win scenario. I strongly
            recommend these books to get good results and maintain a good roster
            of eager students!"
          </p>

          <p className="author">- Marc White, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "As the title implies, this book is designed for the drum
            student/drum teacher relationship and Liversidge more than pulls it
            off ... Congratulations to Owen Liversidge, a force in the world of
            drum education for years to come."
          </p>

          <p className="author">- Andy Ziker, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "It is clearly written out, starting off with simple exercises that
            progressively become more involved. It is a book that I will be
            teaching from, for all my beginner students for many years to come."
          </p>

          <p className="author">- Gary Evans, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "It progresses through the patterns with a nice flow and still
            leaves room for the teacher to gear the lessons to the student's
            personal needs. A must have for students and teachers."
          </p>

          <p className="author">- Erik Kaszynski, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "This is a must have book for any percussion (drum-set) educator.
            The book is well written. The author is astute, demonstrating a very
            educated and methodical approach to drum set studies."
          </p>

          <p className="author">- GaryTJ, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "I am teaching Primary aged children with this book. They are loving
            it. Ideal for any level of drummer. Highly recommended."
          </p>

          <p className="author">- J Adkin, drummer and educator</p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "As a drum teacher who has used this book for quite a long time now,
            I can say that the students love it and feel comfortable to work
            with it in the class and at home. As a teacher, I can say that this
            book is one of a kind to be able to give homework ... saves a lot of
            time and there is no need for another notebook. Great idea!!!"
          </p>

          <p className="author">
            - Udi "U Can Drum" Benjamin, drummer and educator
          </p>
        </QuoteWrapper>

        <QuoteWrapper>
          <p className="quote">
            "Very professional, well explained with some great exercises for all
            levels, an overall great drum book!"
          </p>

          <p className="author">- Robbie Spooner, drummer and educator</p>
        </QuoteWrapper>
      </PageWrapper>
    );
  }
}

export default TestemonialsPage;

const PageWrapper = styled.div`
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
