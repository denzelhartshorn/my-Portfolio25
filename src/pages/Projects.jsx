// src/pages/Projects.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Collapse } from "react-bootstrap";

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (idx) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  const projectData = [
    {
      title: "Multi-Product Review DApp (Blockchain)",
      description:
        "A decentralized application built with Solidity, React, and Ganache to handle multiple product reviews on the Ethereum blockchain.",
      details: `• Objective: Extend a single-product review system into a multi-product platform
• Smart Contracts: Supports adding new products, writing reviews, and displaying user feedback
• Blockchain Stack: Ganache for a local Ethereum network, Truffle for contract deployment
• Frontend: React-based UI enabling different accounts to submit or view reviews in real time
• Key Takeaway: Ensures data integrity and transparency using on-chain storage with a user-friendly interface`,
      imageUrl:
        "https://via.placeholder.com/600x400/343a40/fff?text=Multi-Product+DApp",
      link: "https://github.com/denzelhartshorn/ProductReviewsdApp", // github link
    },
    {
      title: "Big Data Analytics for Soccer Insights",
      description:
        "A large-scale Hadoop + Machine Learning pipeline for real-time soccer event analysis and goal prediction.",
      details: `Objectives:
• Process ~12GB of soccer event data from StatsBomb in real-time
• Predict goal-scoring opportunities using Hadoop MapReduce & Neural Networks (87% accuracy)
• Integrate machine learning (Random Forest, Neural Networks) to enhance live sports analytics

Methodology:
• Hadoop MapReduce for data parsing & cleaning
• Python (SKLearn, Keras) for model development (RF & deep neural nets)
• Jupyter Notebooks for iterative experimentation & data visualization

Key Outcomes:
• Demonstrated real-time scoring opportunity detection for coaches & broadcasters
• Showcased big data techniques for high-volume (~12GB) sports data
• Emphasized cluster computing & distributed processing for large-scale analytics

Environment:
• Cluster-based Linux environment with multiple nodes for MapReduce
• Not easily replicated outside a dedicated lab (placeholder GitHub code & readme provided)`,
      imageUrl:
        "#",
      link: "https://github.com/denzelhartshorn/BigDataSoccerAnalysis/tree/main", // Github link
    },
    {
      title: "* In Progress ... Sentiment Scraper!*",
      description: "Currently finializing a web scraping app with sentiment analysis",
      details: "Ask me how its going!",
      imageUrl:
        "https://via.placeholder.com/600x400/e9ecef/6c757d?text=Empty+Project+Y",
      link: "#",
    },
  ];

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold text-start">Take a look at my work</h2>
          <p className="text-start text-muted mb-0">
            Here are a few academic and personal projects I have completed
          </p>
        </Col>
      </Row>

      {/* Project Cards */}
      <Row className="g-4">
        {projectData.map((project, idx) => (
          <Col key={idx} xs={12} md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body onClick={() => toggleCard(idx)} style={{ cursor: "pointer" }}>
                <Card.Title className="fw-bold d-flex justify-content-between align-items-center text-start">
                  {project.title}
                  <span
                    style={{
                      transform: expandedCard === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  >
                    ▼
                  </span>
                </Card.Title>
                <Card.Text className="text-start">
                  {project.description}
                </Card.Text>
                <Collapse in={expandedCard === idx}>
                  <div id={`details-collapse-${idx}`} className="mt-3">
                    <Card.Text className="text-start" style={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}>
                      {project.details}
                    </Card.Text>
                  </div>
                </Collapse>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button variant="primary" href={project.link} target="_blank" className="w-100">
                  Project Link
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}