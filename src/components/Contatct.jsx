import React from 'react';
import './contact.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin className="icon" />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/gavindu-maleesha-62b943218/' },
  { icon: <FaGithub className="icon" />, text: 'GitHub', link: 'https://github.com/gavindumaleesha' },
  { icon: <FaEnvelope className="icon" />, text: 'gavindumaleeshagamage@gmail.com', link: 'mailto:gavindumaleeshagamage@gmail.com' },
  { icon: <FaPhone className="icon" />, text: '+94 76 3540 542', link: 'tel:+1234567890' },
];

export default function Contatct() {
  return (
    <>
    <div id='contact'> 
      <div className='ftImg'>
        <Container>
          <Row className="align-items-start">
            <Col xs={12} md={6} >
              <div className="heading">
                <span>Contact Me</span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="contactIcons">
                {socialLinks.map((item, index) => (
                  <div key={index} className="contactIcon">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.icon}
                    </a>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p className="text-center">
                Copyright © 2023 Gavindu Maleesha. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      </div>
    </>
  );
}
