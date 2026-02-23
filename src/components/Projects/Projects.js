import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Educore"
              description="School ERP system for managing academic workflows across Admin, Teacher, Student, and Parent roles. Built using JavaScript, HTML, and CSS with Cookies and LocalStorage for session and data management. Supports attendance tracking, exam and result processing, fee management, subject allocation, and timetable scheduling through role-based dashboards."
              ghLink="https://github.com/Minnah123162/EduCore-School-Management-System-Vanilla-JavaScript-ERP-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="QuizMaster"
              description="Quiz management system that enables users to create quizzes with questions, options, and correct answers, and participate in timed exams with a real exam-like experience. Features include question navigation, tab-switch detection for exam integrity, and performance analysis through result charts. Built using JavaScript, HTML, and CSS using a custom Cookie-based persistence engine."
              ghLink="https://github.com/Minnah123162/QuizMaster---Cookie-First-SPA"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="FinTracker"
              description="Secure browser-based finance tracker for managing personal expenses by adding or removing transactions, setting category budgets, and viewing monthly or overall spending with balance insights. Detects unusually large transactions to alert users of potential anomalies. Uses compression, encryption, and cookie sharding to store data privately without backend services or localStorage."
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="GreenGamify"
              description="Web-based educational game designed to raise awareness about waste management by challenging players to identify and sort different waste types correctly. Provides engaging gameplay with informative feedback, responsive design, and dynamic interactions. Built using JavaScript, HTML, CSS, and Firebase."
              ghLink="https://github.com/Minnah123162/waste-management-game"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
