import React from 'react';
import './about.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <div id='about'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            {/* About Me heading */}
            <div className="aboutHeading">
              <span>About Me</span>
            </div>
          </Col>
          <Col xs={12} md={8}>
            {/* Card section */}
            <div className="cardBody">
              <Card border="warning" style={{ width: '100%' }}>
                <Card.Body>
                  {/* Card title */}
                  <Card.Title>Hello, I'm Maleesha,</Card.Title>
                  {/* Card text with a class for styling */}
                  <Card.Text className='paragraph'>
                    {/* About me details */}
                    I'm a second-year student at The Open University of Sri Lanka, 
                    pursuing a Bachelor of Software Engineering Honors degree. 
                    My passion revolves around the dynamic realms of Software Development and Data Science, 
                    where I am enthusiastic to delve into and contribute to innovative projects. 
                    I am now actively seeking opportunities that align with my interests 
                    and allow me to apply and expand my knowledge in these areas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
