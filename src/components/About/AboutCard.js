import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Noorul Minnah</span>{" "}
            from <span className="purple">Kerala, India</span>.
            <br />
            I’m a <span className="purple">Front-End focused Software Engineering Trainee</span>{" "}
            with a B.Tech in <span className="purple">Information Technology</span>.
            <br />
            I specialize in building responsive and interactive web applications
            using modern technologies.
            <br />
            <br />
            My key skills include{" "}
            <span className="purple">
              React.js, JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS
            </span>{" "}
            along with knowledge of{" "}
            <span className="purple">
              Node.js, SQL, Python, and Flask
            </span>.
            <br />
            <br />
            I recently developed{" "}
            <span className="purple">
              EduCore — School Management ERP System
            </span>
            , a fully client-side application featuring role-based dashboards,
            secure session management using Cookies, and persistent data storage
            with LocalStorage.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me creative and
            inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring different websites and apps to stay updated with the latest trends 🌐
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing aesthetic and attractive user interfaces 🎨
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new design ideas and experimenting with creative concepts ✨
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about creating technology that is useful, scalable, and impactful."
          </p>

          <footer className="blockquote-footer">Noorul Minnah</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;