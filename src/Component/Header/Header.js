import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useMyOrders from '../../Hooks/useMyOrders';


const Header = () => {
    const { user, logOut } = useAuth();
    const [myOrders] = useMyOrders();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className="text-success fw-bolder">Ea$y_Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/services">Packages</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/orders">My Orders ({myOrders.length})</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.displayName ?
                                <button onClick={logOut}>Logout</button> :
                                <Nav.Link as={NavLink} to="/login">Login/Register</Nav.Link>
                            }
                            {
                                user.displayName &&
                                <Navbar.Text>
                                    Signed in as: <a href="#login">{user.displayName}</a>
                                </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;