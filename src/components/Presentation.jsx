import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

export const Presentation = () => {
  return (
    <section className='presentation mt-4'>
        <Container>
            <Row className='text-center'>
                <p>Desarrollado por Horacio cano</p>
                <br/>
                <div className='presentation-copyright'>
                <span>Copyright 2023 © </span><strong>La Reina De Las Trenzas</strong>
                </div>
            </Row>
        </Container>
    </section>
  )
}
