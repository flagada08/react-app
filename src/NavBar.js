import {Nav} from 'react-bootstrap';
import {NavLink, Link} from "react-router-dom";
import logo from "./logo.svg";

export default function NavBar() {

    return (
        <>            
            <Nav.Item>
            <header className="App-header" style={{marginBottom: 20}}>
                <h1 style={{fontSize:50}}>RE</h1>
                    <Link to="/"><img src={logo} className="NavBar-logo" alt="logo" /></Link>
                <h1 style={{fontSize:50}}>CT</h1>
            </header>
            </Nav.Item>
            <Nav justify variant="tabs" defaultActiveKey="/">
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
        </>
    )
}