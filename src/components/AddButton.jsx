import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AddButton(props) {
  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    // console.log(e);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const addData = {
      name: e.target.elements.name.value,
      age: "",
      score: parseInt(e.target.elements.score.value),
      gender: "",
    };
    props.addmydata(addData);
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.score.value);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add player
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="">Playar name:</Form.Label>
              <Form.Control name="name" type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="">Playar score:</Form.Label>
              <Form.Control name="score" type="number" />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
