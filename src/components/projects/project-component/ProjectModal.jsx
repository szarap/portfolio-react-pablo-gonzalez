
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const ProjectModal = ({ show, handleClose, description, name, github, link, date }) => {



  return (

    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ name }  </Modal.Title>
        </Modal.Header>
          <Modal.Body className='modal__body'>   
            <h6><b> { date } </b></h6> <br />
            <p>{ description } <br /> 
             <b>{ link } <br/> {github} </b>
             </p>
            <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
