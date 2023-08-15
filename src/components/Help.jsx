import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion';
import { useParams } from 'react-router-dom';

export const Help = () => {
  const { Seccion } = useParams()

   useEffect(()=>{
    window.scrollTo(0,0)
   },[])

  return (
    <section className='help'>
        <Container>
        <Tab.Container id="projects-tabs" defaultActiveKey={Seccion === "Preguntas-frecuentes" ? "second" : "first"}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center container-tab" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Medios de pago</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Preguntas Frecuentes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                               <Col md={12} className='d-flex justify-content-center align-item-center flex-column text-center'>
                                <h4>MEDIOS DE PAGO</h4>
                                <h6></h6>
                                <br/>
                                <h6>Mercado Pago</h6>
                                <p>Aceptamos Rapipago, Pago Fácil y todas las tarjetas de crédito/débito.</p>
                                <p></p>
                                <h6>TRANSFERENCIAS Y DEPÓSITOS</h6>
                                <p>Luego de realizar el pedido, nos estaremos comunicando vía WhatsApp para proporcionarte toda la información necesaria.</p>
                                <p></p>
                                <h6>EFECTIVO</h6>
                                <p>Luego de terminar las trenzas.</p>
                               </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                               <Col md={12} className='d-flex justify-content-center align-item-center flex-column text-center'>
                                <div>
                                  <h4>PREGUNTAS FRECUENTES</h4>
                                  <br/>
                                  <br/>
                                </div>
                               <Accordion >
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>¿Cuales son los medios de contacto de reina trenzas?</Accordion.Header>
                                    <Accordion.Body>
                                    Los medios de contacto son vía WhatsApp al +54 9 2914 14-2204 o email a reinatrenzas@gmail.com
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="1">
                                    <Accordion.Header>¿Cual es el horario de atencion de reina trenzas?</Accordion.Header>
                                    <Accordion.Body>
                                    Los horarios de atención son de Lunes a Viernes de 09:00 a 17:00 y Sábados de 10:00 a 16:00.
                                     Aunque a veces nos pueden mandar un mensaje de ese horario y intentaremos contestar lo mas rapido posible.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="2">
                                    <Accordion.Header>¿Puedo cancelar mi turno?</Accordion.Header>
                                    <Accordion.Body>
                                      Los turnos se pueden cancelar 24hs antes del dia que se acordo con el cliente. Si se cancela ya pasada las 24hs no devolveremos la seña.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="3">
                                    <Accordion.Header>¿Como saco un turno?</Accordion.Header>
                                    <Accordion.Body>
                                      Puedes sacar turno comunicandote con nosotros por todas nuestras redes sociales o escribiendonos al whatsapp. Alli acordaremos el dia y la hora de su turno, sea para un peinado o para nuestro taller.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="4">
                                    <Accordion.Header>¿Por que pedimos una seña para confirmar el turno?</Accordion.Header>
                                    <Accordion.Body>
                                    Solicitamos un depósito como confirmación para reservar el turno por el tema de que hemos enfrentado situaciones en las que el turno se ha cancelado con solo 3 o 5 horas de anticipación antes del horario acordado con el cliente. Esto resulta en la pérdida de un día de trabajo, ya que podríamos haber ofrecido ese turno a otro cliente.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                  <Accordion.Item eventKey="5">
                                    <Accordion.Header>¿Cuanto tiempo se tarda en hacer unas trensas dominicanas?</Accordion.Header>
                                    <Accordion.Body>
                                    El tiempo necesario puede variar según la cantidad de pelo que tengas, pero generalmente tomará entre 6 y 12 horas. Si no tienes la disponibilidad para dedicar ese tiempo continuo, no hay problema. Podemos dividir la sesión en 2 turnos. Por ejemplo, podríamos hacer la mitad el lunes y el resto el miércoles.
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                               </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    <br/>
                    <br/>
        </Container>
    </section>
  )
}
