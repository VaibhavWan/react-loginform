import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Modalpop from './Modalpop';
import ModalSignUp from './ModalSignUp';
import './styles.css';

function HeaderNav() {
  const [showModal, setShow] = useState(false);
  const [showSignup, setSignup] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignupClose = () => setSignup(false);
  const handleSignup = () => setSignup(true);
  return (
    <>
      <div className="d-flex p-2">
        <div className="logo col-3">
          <img
            src="https://w7.pngwing.com/pngs/426/341/png-transparent-shopping-cart-e-commerce-online-shopping-logo-shopping-cart-blue-service-logo-thumbnail.png"
            width="70px"
          />
        </div>
        <div className="d-flex col-6 nav-color">
          <div className="p-2">Home</div>
          <div className="p-2">Events</div>
          <div className="p-2">Services</div>
        </div>
        <div className="d-flex col-3">
          <button className="p-2 mx-2 btn-sizes" onClick={handleShow}>
            Login
          </button>
          <button className="p-2 mx-2 btn-sizes" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Modalpop />
        </Modal.Body>
      </Modal>
      <Modal show={showSignup} onHide={handleSignupClose} className="modal-lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <ModalSignUp />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HeaderNav;
