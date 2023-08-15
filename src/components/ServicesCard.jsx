import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';

export const ServicesCard = ({title, img, content, price}) => {
  return (
    <Col md={4} className='service-card'>
        <Card>
        <Card.Img variant="top" src={img} className='image'/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Precio {price}</small>
        </Card.Footer>
      </Card>
    </Col>
  )
}
