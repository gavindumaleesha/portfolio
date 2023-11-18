import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import CoverImage from '../assets/myImage.png';
import Button from 'react-bootstrap/Button';
import MyCV from '../assets/MyCV.pdf'
import './home.css';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

export default function Home() {

    // Function to open the PDF in a new tab
    const openPdfInNewTab = () => {
        const pdfUrl = MyCV;
        window.open(pdfUrl, '_blank');
    };

    // Social media links data
    const socialLinks = [
        { icon: <FaLinkedin className="icon" />, link: 'https://www.linkedin.com/in/gavindu-maleesha-62b943218/' },
        { icon: <FaGithub className="icon" />, link: 'https://github.com/gavindumaleesha' },
        { icon: <FaMedium className="icon" />, link: 'https://medium.com/@gavindumaleesha01' },
    ];

    return (
        <div className='myImg' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} lg={8}>
                        <Image className='CoverImage' src={CoverImage} thumbnail/>

                        <div className='text-container'>
                            <h1 className='mainName'>Gavindu Maleesha</h1>
                            <p className='subHeading'>Software Engineering Undergraduate</p>

                            {/* Button to open the CV in a new tab */}
                            <Button className='mainButton1' onClick={openPdfInNewTab} variant="outline-warning" size="lg" active>
                                My CV
                            </Button>{' '}

                            {/* Button to scroll to the contact section */}
                            <Button className='mainButton2' variant="outline-warning" size="lg" active href="#contact" spy={true} smooth={true} duration={1000}>
                                Contact Me
                            </Button>{' '}

                            {/* Social media icons */}
                            <div className="social-icons">
                                {socialLinks.map((item, index) => (
                                    <div key={index} >
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.icon}
                                        </a>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        {/* Placeholder for an image (commented out) */}
                        {/* <Image className='CoverImage' src={CoverImage} thumbnail/> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
