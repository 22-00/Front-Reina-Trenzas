import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
//                    Fotos
import trenzas1 from "../assets/trenzas1.jpeg"
import trenzas2 from "../assets/trenzas2.jpeg"
import trenzas3 from "../assets/trenzas8.jpg"
import peinado1 from "../assets/peinado1.jpeg"
import peinado2 from "../assets/peinado2.jpeg"
import peinado3 from "../assets/peinado3.jpeg"



export const Jobs = () => {
  return (
    <section className='jobs' id='trabajos'>
        <Container>
            <Row>
                <h2>Nuestros trabajos</h2>
            </Row>
            <Row>
                <Col md={4} xs={12}>
                    <img src={trenzas1} alt='Prueba' className='prueba-img'/>
                </Col>
                <Col md={4} xs={12}>
                    <img src={trenzas2} alt='Prueba' className='prueba-img'/>
                </Col>
                <Col md={4} xs={12}>
                    <img src={trenzas3} alt='Prueba' className='prueba-img'/>
                </Col>
            </Row>
            <Row>
            <Col md={4} >
                    <img src={peinado1} alt='Prueba' className='prueba-img'/>
                </Col>
                <Col md={4} xs={12}>
                    <img src={peinado2} alt='Prueba' className='prueba-img'/>
                </Col>
                <Col md={4} xs={12}>
                    <img src={peinado3} alt='Prueba' className='prueba-img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
