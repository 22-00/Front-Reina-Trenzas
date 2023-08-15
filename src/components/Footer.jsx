import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Presentation } from './Presentation';

export const Footer = () => {
  return (
    <section className='footer'>
        <Container>
            <Row>
                <Col md={4}>
                    <div className='text-center'>
                        <h4>Contacto</h4>
                        <div>
                            <div className='container-contact'>
                            <p>Whatsapp: +54 9 2914 14-2204</p>
                            <p>Email: Reinatrenzas@gmil.com</p>
                            </div>
                            <div className='container-contact'>
                            <p>Horario de atencion:</p>
                            <p>Lunes a viernes de 09:00 a 17:00</p>
                            <p>Sabados de 10:00 a 16:00</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className=''>
                    <div className='text-center'>
                        <h4>Seguinos</h4>
                    </div>
                    <div className='footer-redesSociales d-flex justify-content-center'>
                        <span><a href='https://www.facebook.com/lareina.delastrenzas.5268' target="_blank" rel="noopener noreferrer"><BsFacebook/></a></span>
                        <span><a href='https://www.instagram.com/reina_delastrenzas/' target="_blank" rel="noopener noreferrer"><BsInstagram/></a></span>
                    </div>
                </Col>
                <Col md={4} className=''>
                    <div className='text-center'>
                        <h4>
                            Ayuda
                        </h4>
                        <div className='div-link'>
                            <Link to='/Ayuda/Metodo-de-pago'>Medios de pago</Link>
                            <br/>
                            <Link to='/Ayuda/Preguntas-frecuentes'>Preguntas Frecuentes</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Presentation/>
    </section>
  )
}
