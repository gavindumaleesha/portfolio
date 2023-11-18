import React from 'react'
import './education.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Education() {
  return (
    <div id='education'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <div className="eduHeading">
              <span>Education</span>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div className="eduBody">
                <Card border="warning" style={{ width: '100%' }}>
                    <Card.Header>The Open University of Sri Lanka</Card.Header>
                    <Card.Body>
                    <Card.Title>Bachelor of Software Engineering Honours</Card.Title>
                    <Card.Text>
                        [2021 - Present]
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="warning" style={{ width: '100%' }}>
                    <Card.Header>LAVTC, Colombo</Card.Header>
                    <Card.Body>
                    <Card.Title>Computer Graphic Design</Card.Title>
                    <Card.Text>
                        [2021-2022]
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card border="warning" style={{ width: '100%' }}>
                    <Card.Header>Thurstan College, Colombo 07</Card.Header>
                    <Card.Body>
                    <Card.Title>Advanced Level Physical Science Stream</Card.Title>
                    <Card.Text>
                        [2020]
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
