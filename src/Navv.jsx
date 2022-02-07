import React, { useState } from 'react';
import { Alert, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

function Navv() {
  const [offcanvasvisible, setOffcanvasVisible] = useState(false);

  var visible=()=>{
    setOffcanvasVisible(false);
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  window.onload=handleShow;
  return <div>
  <Navbar className='nav' bg="transparent" expand={false}>
  <Container>
    SIGNIN PAGE
    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} className='close' />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="top"
      className="bg-transparent navbar-offcanvas close"
      show={show} onClick={handleClose}
    >
    <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <p className='alert'>
        WELCOME! TO MY SIGNIN PAGE
      </p>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div>;
}

export default Navv;
