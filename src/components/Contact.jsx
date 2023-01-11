
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { InfoCircleFill, Linkedin, Telephone } from 'react-bootstrap-icons';
import ModalSuccess from './Modal-success'


const Contact = () => {
  const form = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const sendEmail = (e) => {
    alert('Le nom a été soumis : ' + inputs);
    e.preventDefault();

    emailjs.sendForm('service_1epvhju', 'template_9qfoysv', form.current, 'user_KRpeoognFgW3WRNMeWQPs')
      .then((result) => {
          console.log(result.text);
         console.log(e)
         if(form.target.value === '') {
           alert('vous devez remplir le formulaire')
         }
         else
          setModalShow(true)
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contact" id='contact'>
       <Container>
        <h1>Contact</h1>
        <Row xs={2} className="p-4">
          <Col> 
          <h3 className="display-4">Prenez contact avec nous pour votre prochaine expérience</h3>
          <p>Si vous avez des questions, des idées ou des projets, n'hésitez pas à nous contacter par PING, Nous sommes toujours 
            ouvert à la discussion. Vous pouvez nous contacter via le formulaire de contact ou simplement cliquer sur l'icône de médias
             sociaux ou juste passer un coup de fil. </p>
             <ul class="list-unstyled">
               <li className="mb-2"><Linkedin size={25} /></li>
               <li><Telephone size={25} /> 438 390 6735</li>
             </ul>
          </Col>
          <Col>
            <Form ref={form}  onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="user_name"   value={inputs.user_name || ""}  onChange={handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="phone" name="user_phone"   value={inputs.user_phone || ""}  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" name="user_email"   value={inputs.user_email || ""}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
                <Form.Label>Votre Message</Form.Label>
                <Form.Control type="text" name="user_message"   value={inputs.user_message || ""}  onChange={handleChange}/>
              </Form.Group>
                <Form.Control type="submit" className="btn btn-secondary" value="Send" />
            </Form>
          </Col>
        </Row>
{/* 
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Téléphne</label>
      <input type="text" name="user_phone" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="user_message" />
      <input type="submit" value="Send" />
    </form>
      <Button variant="primary">Click Me!</Button> */}
      <ModalSuccess 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </Container>
    </section>
  );
};

export default Contact;