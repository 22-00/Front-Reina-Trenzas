import React, { useEffect } from 'react'
import { Carrusel } from './Carrusel';
import { AboutUs } from './AboutUs';
import { Jobs } from './Jobs';
import { Services } from './Services';
import { Contact } from './Contact';
import { UserHelp } from './UserHelp';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


export const Welcome = () => {

    useEffect(()=>{
        window.scrollTo(0,0)

    },[])

  return (
    <div className='welcome'>
        <Container>
            <Row>
                <Col>
                    <div className='container-title'>
                        <h1>La Reina De Las Trenzas</h1>
                        <br/>
                        <span className='lines-effect'>Trenzas Dominicanas</span>
                    </div>
                </Col>
            </Row>
        </Container>
        <Carrusel />
        {/* <div className='container-flecha'>
            <button><img src={flecha}/></button>
        </div> */}
        <UserHelp />
        <AboutUs />
        <Jobs />
        <Services />
        <Contact />
    </div>
  )
}
