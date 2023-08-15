import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Nosotras from "../assets/yocaYyeye.jpeg"
export const AboutUs = () => {
  return (
    <section className='about-us' id="about-us">
        <Container>
            <Row>
                <Col xs={12} md={6} xl={7}>
                    <h2>
                        Sobre Nosotras
                    </h2>
                    <div className='container-text'>
                        <p>
                        Hola! Somos Yeisi y Yocari, dos dominicanas apasionadas por las trenzas dominicanas y los peinados trenzados. Juntas, creamos 'Reina Trenzas', nuestro propio negocio. Nuestra misión es empoderar a las mujeres a través de nuestros hermosos y únicos diseños.
                        Amamos lo que hacemos y estamos emocionadas de compartir nuestra historia contigo. ¡Bienvenid@s a nuestro mundo de creatividad y estilo!
                        </p>
                    </div>
                </Col >
                <Col xs={12} md={6} xl={5} className='container-img'>
                 <img src={Nosotras} alt='yoca y yeisi'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
