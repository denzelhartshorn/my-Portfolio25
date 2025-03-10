// src/pages/About.jsx
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import profilePic from "../assets/headshot2025.jpeg"; // Importing the profile image

export default function About() {
  return (
    <Container className="py-5">
      {/* Heading */}
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold text-start">About Me</h2>
        </Col>
      </Row>

      {/* Profile Image & Intro */}
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-3">
          <Image
            src={profilePic} // Uses imported image
            alt="Denzel Hartshorn"
            className="img-fluid rounded-circle shadow"
            style={{ width: "200px", height: "200px", objectFit: "cover", objectPosition: "center" }}
          />
        </Col>
        <Col md={8}>
          <p className="text-start">
            Hi, I'm Denzel—a former athlete turned Product Manager who loves bringing discipline 
            and teamwork from the field into the tech world. I’m passionate about creating 
            products that truly serve users, whether that means conducting interviews, prioritizing 
            features, or collaborating with cross-functional teams. My goal is to build solutions 
            that make a tangible impact on people's lives.
          </p>
          <p className="text-start">
            Outside of work, I enjoy coaching, staying active, and mentoring others who are 
            transitioning into tech. I'm always excited to connect, collaborate, and keep 
            growing as a product leader.
          </p>
          <Button
            variant="primary"
            href="https://www.linkedin.com/in/denzel-hartshorn-147302106"
            target="_blank"
          >
            Connect on LinkedIn
          </Button>
        </Col>
      </Row>

      {/* Experience Section */}
      <Row className="mt-5">
        <Col>
          <h3 className="fw-bold text-start">Professional Experience</h3>
          <ul className="text-start">
            <li>
              <strong>Comcast Construction (Intern):</strong>  
              Focused on user interviews and product documentation, boosting adoption by 20%.
            </li>
            <li>
              <strong>Comcast TPX (Intern):</strong>  
              Collaborated with engineering & design to refine product roadmaps in an Agile environment.
            </li>
            <li>
              <strong>HomArt (Product Specialist & Account Manager):</strong>  
              Managed 1,000+ accounts, gathering feedback to drive product differentiation strategies.
            </li>
          </ul>
        </Col>
      </Row>

      {/* Education Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="fw-bold text-start">Education & Certifications</h3>
          <ul className="text-start">
            <li>
              <strong>B.S. Computer Science</strong> – Colorado State University
            </li>
            <li>
              <strong>Full Stack Coding Bootcamp</strong> – UC Berkeley
            </li>
            <li>
              <strong>Product Manager Certification</strong> – IBM
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}