import React from "react";
import "./dashboard.css";
import Card from 'react-bootstrap/Card';
import NavBar2 from "../components/Nav2";
import CardImg from "../images/Card.png";
import Sidebar from "../components/sideNav";
// import Post from "../components/Post";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Dashboard = () => {
  return (
    <div className="Dashboard">
      {/* <div className="Navbar">
        <NavBar2 fixed="top" />
      </div> */}
      <div className="SideNav">
        <Sidebar />
      </div>

      <div className="MainContent">
        <h1>Welcome User!</h1>
        <Container fluid>
          <Row>
            <Col>
              <Card style={{ width: '50vw' }}>
                <Card.Body>
                  <Card.Title>About/Bio</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Subtitle className="mb-6">Profiles</Card.Subtitle>
                  <Card.Link href="#">Github</Card.Link>
                  <Card.Link href="#">LinkedIn</Card.Link>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          <Row>
            <p>
              <br />
            </p>
          </Row>

          <Row>
            <Col>
              <Card>
                <Card.Header>Skills</Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <p>
              <br />
            </p>
          </Row>
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Header>Profiles</Card.Header>
                <Card.Body>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">LeetCode</Button> <Button variant="primary">Portfolio</Button> <Button variant="primary">Twitter</Button>
                </Card.Body>
              </Card>

            </Col>
          </Row>
          <Row>
            <br />
            <br />
            <h1>Posts</h1>
          </Row>

        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
