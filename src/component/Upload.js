import { useState } from 'react';
import React from 'react';
// import logo from '../component/image/logo.png'
// import '../component/css/Home.css';
// import Modal from "react-bootstrap/Modal";
// import { Modal } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';

const Upload = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (

        <div>
            <div>
                <center>
<Button variant="primary" style={{marginLeft:"-3px", marginTop:"5px"}} onClick={handleShow}>Open Modal</Button>

                    

                    <Modal show={showModal} onHide={handleClose} style={{marginTop:"230px"}}>
                        <Modal.Header closeButton>
                            <Modal.Title>Please Subcribe Our Channel</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>This is my first project</p>




                            



                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </center>
            </div>
        </div>
    )
};

export default Upload;



// import React from 'react'

// export default function Upload() {
//   return (
//     <div>
      
//     </div>
//   )
// }