import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import Contacto from '../assets/Contacto.svg'
import MetodoDePago from '../assets/MetodoDePago.svg'
import Turnos from '../assets/Calendario.svg'

export const UserHelp = () => {
  return (
    <section className='userHelp'>
        <Container>
            <Row>
                <Col md={4} className='d-flex justify-content-center align-item-center flex-column text-center'>
                    <Link to="/Ayuda/Preguntas-frecuentes">
                        <img src={Turnos} alt='Turnos' />
                    
                    <h4>Turnos</h4>
                    <span>(ver mas)</span>
                    </Link>
                    <div>
                        <p>Para saber sobre los turnos disponible, hablanos al whatsapp, alli te comentaremos sobre que dia y horario ahi disponible.</p>
                    </div>
                </Col>
                <Col md={4} className='d-flex justify-content-center align-item-center flex-column text-center'>
                    <Link to="/Ayuda/Metodo-de-pago">
                        <img src={MetodoDePago} alt='Metodo De Pago' />
                    
                    <h4>Metodos De Pago</h4>
                    <span>(ver mas)</span>
                    </Link>
                    <div>
                        <p>Tarjetas de credito, debito, transferencias bancarias o pago en efectivo.</p>
                    </div>
                </Col>
                <Col md={4} className='d-flex justify-content-center align-item-center flex-column text-center'>
                    <Link to="/Ayuda/Preguntas-frecuentes">
                        <img src={Contacto} alt='Contacto' />
                    <h4>Contactanos</h4>
                    <span>(ver mas)</span>
                    </Link>
                    <div>
                        <p>Nos pueden contactar por todas nuestras redes sociales o a traves de la pagina llenando el formulario.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
