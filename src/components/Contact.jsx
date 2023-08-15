import React, { useState } from 'react'
import { Validation } from './Validation'
import axios from "axios"
import swal from "sweetalert"
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import contactImg from "../assets/contact.svg"
import Container from 'react-bootstrap/esm/Container'

export const Contact = () => {

  const [buttonText, setButtonText] = useState("Enviar")

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })

  const [error, setError] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })

  const formInitial = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
   }

  const handleChange = (event) => {
    const { value, name } = event.target
    setForm({...form, [name]: value})
    setError(Validation({...form, [name]: value}))
  }

  const validateError = Object.keys(error)
  const validateForm = Object.values(form)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateError.length > 0){
        swal({
            title: "Ups",
            text: "Complete los campos correctamente",
            icon: "error",
            timer: 3000,
            button: false
        })
        return
    }
    if (!validateForm.every((value) => value !== "")) {
        event.preventDefault();
        swal({
          title: "Ups",
          text: "Complete todos los campos",
          icon: "error",
          timer: 3000,
          buttons: false
        });
        return;
      }
      
    event.preventDefault();
    setButtonText("Enviando...")
    const response = await axios.post("https://back-reina-trenzas.vercel.app/contact", form)
    console.log(response.data);
    setButtonText("Enviar")
    if(response.data.code === 200){
        swal({
            title: "Exito",
            text: response.data.message,
            icon: "success",
            timer: 3000,
            button: false
        })
    } else {
        swal({
            title:"Ups a ocurrido un error",
            text: response.data.message,
            icon: "error",
            timer: 3000,
            button: false
        })
    }
    setForm(formInitial)
}
  
  return (
    <section className='contact' id='contacto'>
        <Container>
            <Row className="align-items-center">
            <Col size={12} md={6}>
                    <img src={contactImg} alt="Contact Us"/> 
            </Col>
            <Col size={12} md={6}>
                    <h2>Contactanos</h2>
                    <form onSubmit={handleSubmit}>
                    <Row>
                        <Col size={12} sm={6} className="px-1">
                        <input type="text" name="name" value={form.name} placeholder='Nombre' onChange={handleChange}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" value={form.lastName} placeholder='Apellido' onChange={handleChange}/>
                        </Col>
                        <Col size={12} sm={6} className="px-1 text-center">
                        <input type="email" name="email" value={form.email} placeholder='Correo electronico' onChange={handleChange}/>
                        {error.email ? <span>{error.email}</span> : ""}
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" value={form.phone} placeholder='Numero de telefono' onChange={handleChange} />
                        {error.phone ? <span className='error'>{error.phone}</span> : ""}
                        </Col>
                        <Col size={12} className="px-1 conteiner-textarea" >
                        <textarea rows="6" name="message" value={form.message} placeholder='Escribe tu mensaje' onChange={handleChange}></textarea>
                        {error.message ? <span className='error'>{error.message}</span> : ""}
                        <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                    </Row>
                    </form>
            </Col>
            </Row>
        </Container>
      </section>
  )
}
