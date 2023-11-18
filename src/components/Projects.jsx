import React from 'react';
import "./projects.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Urgent from '../assets/urgent.png'; 
import Travelit from '../assets/Travelit.png';
import webDemo from '../assets/webDemo.png';
import Empty from '../assets/empty.png';
import {FaGithub } from 'react-icons/fa';

export default function Projects() {

    const projects = [
        {
          id: 1,
          name: 'Travelit',
          description: 'The software fulfills travel agency and customer needs with mobile and web applications, allowing travel agents to manage tasks such as package creation and booking, while customers can choose packages through the mobile app.',
          items: ['Technologies', 'MongoDB | React | React Native | ExpressJS | NodeJS'],
          links: ['https://github.com/inushaPeiris/EEY4189-Software-Design-in-Group'],
          imageSrc: Travelit, // Replace with the actual image source
        },
        {
            id: 2,
            name: 'Urgent',
            description: "URGENT is an android Sri Lankan app connects blood donors with recipients, streamlining registration, camp participation, and alerts from the National Blood Transfusion Center. It also educates users on blood types.",
            items: ['Technologies', 'SQLlite | Java | Google Map API | Android Senser'],
            links: ['https://github.com/gavindumaleesha/URGENT/tree/main/urgent'],
            imageSrc: Urgent, // Replace with the actual image source
          },
          {
          id: 3,
          name: 'On The Way Travellers',
          description: 'An interactive platform for tourists to explore various tourist attractions in Sri Lanka, The website allows users to conveniently discover places to visit and provides a personalized to-do list feature, which enables users to plan their trips and keep track of their itineraries..',
          items: ['Technologies', 'HTML | CSS | JavaScript | Vue JS'],
          links: ['https://github.com/gavindumaleesha/On-The-Way-Travelers---EEI3346_mini_project.git'],
          imageSrc: webDemo, // Replace with the actual image source
        },
        {
            id: 4,
            name: 'Upcomming..',
            description: 'Description of upcomming Project ',
            items: ['Technologies', ' Text | Text'],
            links: ['Link 1'],
            imageSrc: Empty, // Replace with the actual image source
          },
      ];

      return (
        <>
          <div id='projects'>
          <div className="projHeading">
            <span>Projects</span>
          </div>
          <Container fluid>
            <Row className="project-row">
              {projects.map((project) => (
                <Col key={project.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={project.imageSrc} />
                    <Card.Body className="text-center"> {/* Added text-center class */}
                      <Card.Title>{project.name}</Card.Title>
                      <Card.Text className='cardDes'>{project.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      {project.items.map((item, index) => (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                    <Card.Body className="text-center"> {/* Added text-center class */}
                      {project.links.map((link, index) => (
                        <Card.Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                          <FaGithub className="gitLogo" />
                        </Card.Link>
                      ))}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          </div>
        </>
      );
}

