import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../assets/logo.png"
import Logo1 from "../assets/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Semi = ({searchQuery, setSearchQuery})=>{
    return(
        <>
        {[false,].map((expand) => (
          <Navbar key={expand} expand="lg" collapseOnSelect={true} className={`bg-dark pb-4 border-top border-bottom mt-5 px-5 pt-5`} id="nav">
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggl"  style={{ backgroundColor: "white", marginTop: -10}} />
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
                  <Nav className="justify-content-between flex-grow-1 pe-3 ">
                    <Nav.Link href='#' className={'fs-5 text-white mt-5'}>
                        <FontAwesomeIcon icon={faFire} className={`px-3 `} style={{color: "red"}}/>
                          Popular
                    </Nav.Link>
                    <Nav.Link href="#" className="fs-5 mx-5 px-5 text-white mt-5">
                        <FontAwesomeIcon icon={faFilm} className={`px-3 `} style={{color: "red"}}/>
                        Season 1
                    </Nav.Link>
                    <Nav.Link href="#" className='fs-5 mx-5 px-5 text-white mt-5'>
                        <FontAwesomeIcon icon={faFilm} className={`px-3 `} style={{color: "red"}}/>
                        Season 2
                    </Nav.Link>
                    <Nav.Link href="#" className='fs-5 mx-5 px-5 text-white mt-5'>
                        <FontAwesomeIcon icon={faFilm} className={`px-3 `} style={{color: "red"}}/>
                        Season 3
                    </Nav.Link>
                    <Nav.Link href="#" className='fs-5 mx-5 px-5 text-white mt-5'>
                        <FontAwesomeIcon icon={faFilm} className={`px-3 `} style={{color: "red"}}/>
                        Season 4
                    </Nav.Link>
                    <Nav.Link href="#" className='fs-5 mx-5 text-white mt-3 d-flex'>
                        <FontAwesomeIcon icon={faSearch} className='pt-3 px-4 fs-3' />
                        <input 
                        type="text" 
                        className="form-control form-control-sm border bg-dark border-light-subtle text-light fs-5" 
                        placeholder="Search" 
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>       
    )
}

export default Semi