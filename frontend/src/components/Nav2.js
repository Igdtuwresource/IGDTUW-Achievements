import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import profile from "../images/girl.png"
import photoURL from "../images/girl.png"


const NavBar2 = () => {

    // handleLogout = () => {

    // }
    return (
        <>
            <Navbar bg="white" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">{' '}
                        <img
                            src={photoURL}
                            alt="user"
                            className="person"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link >
                                <div className="Info">
                                    {/* <h4>{displayName}</h4> */}
                                    <h6>Name</h6>
                                    <h6>Year</h6>
                                    <h6>Branch</h6>
                                </div>
                            </Nav.Link>
                        </Nav>
                        <Nav className="gap-2">
                            <Nav.Link className="btn btn-black" href="/achievements">Home</Nav.Link>
                            <Nav.Link className="btn btn-black" href="/form">New Post</Nav.Link>
                            <NavDropdown title="Other" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Settings</NavDropdown.Item>
                                {/* <NavDropdown.Item onClick={handleLogout}>LogOut */}
                                <NavDropdown.Item >LogOut
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="btn btn-black" href="#"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar2;