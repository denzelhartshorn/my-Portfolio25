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
            Hi, I’m Denzel! A former athlete turned Product Manager & Software Engineer, 
            passionate about building impactful products that bridge the gap between users 
            and technology.  My journey from the field to the tech world has shaped my approach; 
            balancing strategy, adaptability, and collaboration to create solutions that truly solve problems. Whether
            I’m conducting user interviews, prioritizing features, or coding backend logic, I thrive 
            at the intersection of business, technology, and user experience.           
          </p>
          <p className="text-start">
            I’ve worked on AI-driven analytics, blockchain applications, and big data projects, 
            applying my computer science background and product expertise to craft solutions that scale. 
          </p>
          <p className="text-start">
            Outside of work, I enjoy reading, working out, travelling, eating and mentoring other 
            ex-jocks transitioning into tech. I'm always excited to connect, collaborate, and keep 
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