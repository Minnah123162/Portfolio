import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Noorul_Minnah_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [height, setHeight] = useState(800);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">  
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <iframe
            src={`${pdf}#toolbar=0`}
            title="Resume"
            width="80%"
            height="1200px"
            style={{
              border: "none",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              marginTop: "20px",
              overflow: "auto",
              display: "block"
            }}
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
