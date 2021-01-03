import React from "react";
import { Form, Button } from "react-bootstrap";
import {AiFillCloseCircle} from "react-icons/ai"

export default function DialoguePopup(props) {
  return (
    <div className="popup">
      <div className="popup_inner">

        <AiFillCloseCircle onClick={props.OnAbortClicked} className="DialoguePopupCloseButton" size="30px"/>
        <Form onSubmit={props.OnAddDialogue} className="DialoguePopupForm">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="Name"
            type="text"
            placeholder="Enter name of the Dialogue"
            required={true}
          />
          <br/>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Enter a description for the dialogue"
            required={true}
          />
          <br />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
}
