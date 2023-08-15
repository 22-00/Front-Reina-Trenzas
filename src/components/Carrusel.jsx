import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ejem1 from "../assets/ejemplo1.png"
import ejem2 from "../assets/ejemplo2.webp"
import ejem3 from "../assets/ejemplo3.webp"


export const Carrusel = () => {
  return (
    <section className='carrusel'>
        <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={ejem1} alt="First slide" style={{height: "500px", objectFit:"cover"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={ejem2} alt="First slide" style={{height: "500px", objectFit:"cover"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={ejem3} alt="First slide" style={{height: "500px", objectFit:"cover"}} />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}
