import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';


export const NavBar = () => {

    let location = useLocation()
    const[scrolled, seScrolled] = useState(false);

    let homePage = location.pathname === '/'

  useEffect(() => {
      const onScroll = () =>{
          if(window.scrollY > 50){
              seScrolled(true);
          } else{
              seScrolled(false);
          }
      }

      window.addEventListener("scroll", onScroll);

      return() => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
        <Navbar collapseOnSelect expand="md" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand  as={Link} to={"/"}>Reina Trenzas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto containerlink">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#about-us" style={homePage ? {} : {display: 'none'}}>Sobre Nosotros</Nav.Link>
            <Nav.Link href="#trabajos" style={homePage ? {} : {display: 'none'}}>Trabajos</Nav.Link>
            <Nav.Link href="#servicios" style={homePage ? {} : {display: 'none'}}>Servicios</Nav.Link>
            <Nav.Link href="#contacto" style={homePage ? {} : {display: 'none'}}>Contacto</Nav.Link>
            <Nav.Link as={Link} to="/Ayuda/Metodos-de-pago">Ayuda</Nav.Link>
          </Nav>
          <div className='redesSociales'>
            <span><a href='https://www.facebook.com/lareina.delastrenzas.5268' target="_blank" rel="noopener noreferrer"><BsFacebook/></a></span>
            <span><a href='https://www.instagram.com/reina_delastrenzas/' target="_blank" rel="noopener noreferrer"><BsInstagram/></a></span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
