import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../assets/logo.png"
import Logo1 from "../assets/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NaviBar() {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar expand="lg" className={`bg-dark mx-5 mb-3`} id="nav">
          <Container fluid>
            <Navbar.Brand href="/" >
                <img src={Logo} alt="logo" className='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='toggl mt-5'  style={{ backgroundColor: "white", marginTop: -30}} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="bg-secondary"
            >
              <Offcanvas.Header closeButton className='mx-5'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Logo1} alt='logo' className='logo'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                    <Nav.Link href='#' className={'fs-5 mx-5 px-5 px-5 text-white mt-5'}>
                        <FontAwesomeIcon icon={faSearch} className={`px-3 `}/>
                        Search
                    </Nav.Link>
                    <Nav.Link href="/" className="fs-5 mx-5 px-5 px-5 text-white mt-5">Home</Nav.Link>
                    <Nav.Link href="/lister" className='fs-5 mx-5 px-5 px-5 text-white mt-5'>Lister</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NaviBar;