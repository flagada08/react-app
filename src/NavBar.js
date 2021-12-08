import {Nav, Navbar, Container} from 'react-bootstrap';
import {NavLink, Link} from "react-router-dom";
import logo from "./logo.svg";

export default function NavBar() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container style={{margin: 0}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Item>
                        <Link to="/"><img src={logo} className="NavBar-logo" alt="logo" /></Link>
                    </Nav.Item>
                    <Nav variant="tabs" defaultActiveKey="/">
                        <Nav.Item>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </Nav.Item>
                        <Nav.Item>                            
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}