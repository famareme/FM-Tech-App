import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const ModalSuccessContact = (props) => {
  return ( 
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
      Votre message à été envoyé avec success
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
       Nous vou remercions de nous avoir contactez. <br/> Nous contacterons sous peu dans les plus bref delais
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Fermer</Button>
    </Modal.Footer>
  </Modal>
   );
}
 
export default ModalSuccessContact;