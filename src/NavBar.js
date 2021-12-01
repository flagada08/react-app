import {Nav, Navbar, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item style={{marginRight: 15}}>
                            <Link to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item style={{marginRight: 15}}>
                            <Link to="/about">About</Link>
                        </Nav.Item>
                        <Nav.Item style={{marginRight: 15}}>                            
                            <Link to="/profile">Profile</Link>                            
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}