import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function NavBar() {
  return (
    <Navbar fixed='top' expand="lg" className="navbar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-links' href="#intro">Home</Nav.Link>
            <Nav.Link className='nav-links' href="#about">About</Nav.Link>
            <Nav.Link className='nav-links' href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Nav.Link className='nav-links-2' href="mailto:marktrinidad.works@outlook.com">
              <EmailRoundedIcon className="MuiSvgIcon-root" style={{ fontSize: 29}} />
            </Nav.Link>
            <Nav.Link className='nav-links-2' href="https://github.com/mark-trinidad" target="_blank">
              <GitHubIcon className="MuiSvgIcon-root" style={{ fontSize: 28}} />
            </Nav.Link>
            <Nav.Link className='nav-links-2' href="https://www.linkedin.com/in/mark-trinidad-work/" target="_blank">
              <LinkedInIcon className="MuiSvgIcon-root" style={{ fontSize: 30}} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
