import { Navbar, Nav, Container } from 'react-bootstrap';
import { CiLaptop } from "react-icons/ci";

export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className='shadow-sm'>
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <CiLaptop size={25}/>
          <h3>Chester</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className='fw-bold fs-5'>Home</Nav.Link>
            <Nav.Link href="#aboutme" className='fw-bold fs-5'>About Me</Nav.Link>
            <Nav.Link href="#projects" className='fw-bold fs-5'>Projects</Nav.Link>
            <Nav.Link href="#contactme" className='fw-bold fs-5'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
