
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Linkedin, Telephone } from 'react-bootstrap-icons';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1epvhju', 'template_9qfoysv', form.current, 'user_KRpeoognFgW3WRNMeWQPs')
      .then((result) => {
          console.log(result.text);
          alert('Merci de nous avoir contactez.<br> Nous vous répondrons sous peu')
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
                <Form.Control type="text" name="user_name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="phone" name="user_phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" name="user_email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlMessage">
                <Form.Label>Votre Message</Form.Label>
                <Form.Control type="text" name="user_message" />
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
      </Container>
    </section>
  );
};

export default Contact;