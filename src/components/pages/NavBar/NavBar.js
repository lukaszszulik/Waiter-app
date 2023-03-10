import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="rounded" bg="primary mt-4 mb-4" variant="dark" >
        <Container>
          <Navbar.Brand as={NavLink} to="/">Waiter.app</Navbar.Brand><Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link></Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;