import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* LEFT SIDE — TEXT */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Front-End focused Software Engineering Trainee with a B.Tech in
              Information Technology. I enjoy building modern, responsive web
              applications that deliver intuitive user experiences.
              <br />
              <br />
              My recent prominent project is the
              <b className="purple">
                {" "}
                EduCore — School Management ERP System
              </b>
              , a fully client-side application built using
              <b className="purple"> JavaScript (ES6+), HTML, and CSS </b>
              with role-based dashboards for Admin, Teacher, and Parent.
              It uses
              <b className="purple"> Cookies for session management </b> and
              <b className="purple"> LocalStorage as a persistent database</b>.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  React.js, JavaScript, HTML5, CSS3, SCSS, Tailwind CSS{" "}
                </b>
              </i>
              and have Fundamental Knowledge in React ecosystem including
              Hooks, Context API, and component-based architecture.
              <br />
              <br />
              I also have knowledge of
              <i>
                <b className="purple">
                  {" "}
                  Node.js, SQL, Python, and Flask{" "}
                </b>
              </i>
              along with REST API integration and asynchronous programming.
              <br />
              <br />
              Some of my other projects include
              <b className="purple">
                {" "}
                Green Gamify — Waste Awareness Game
              </b>{" "}
              and
              <b className="purple">
                {" "}
                FinTracker - Cookie Secure Finance Tracker
              </b>
              , showcasing the ability to design responsive interfaces and build
              complete web solutions.
            </p>
          </Col>

          {/* RIGHT SIDE — IMAGE */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;