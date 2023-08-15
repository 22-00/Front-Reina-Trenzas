import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { ServicesCard } from './ServicesCard'
import {arrService} from './dataService'
// import Col from 'react-bootstrap/esm/Col'
export const Services = () => {
  return (
    <section className='services' id='servicios'>
        <Container>
            <Row className='text-center'>
                <h2 className=''>
                    Nuestros Servicios
                </h2>
            </Row>
            <Row>
              {
                arrService.map((card, index)=> {
                   return <ServicesCard key={index} price={card.price} title={card.title} content={card.content} img={card.img}/>
                })
              }
            </Row>
        </Container>
    </section>
  )
}
