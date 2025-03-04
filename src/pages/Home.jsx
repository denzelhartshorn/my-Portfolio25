// src/pages/Home.jsx
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className="text-center py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4">Hi! I'm Denzel</h1>
          <p className="lead">Software Engineer | Product Thinker | Innovator</p>
          <Button as={Link} to="/projects" variant="primary" size="lg">
            See My Work
          </Button>
        </Col>
      </Row>
    </Container>
  );
}