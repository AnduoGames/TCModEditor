import React from "react";
import { Form, Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

export default function DialogueDeletePopup(props) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <AiFillCloseCircle
          onClick={props.OnAbortClicked}
          className="DialoguePopupCloseButton"
          size="30px"
        />

        <Form onSubmit={props.OnAddDialogue} className="DialoguePopupForm">
          <h1 style={{ textAlign: "center" }}>
            Delete the dialogue "{props.dialogue.name}"?
          </h1>
          <br />
          <div style={{justifyContent: "center", display: "flex"}} >
            <Button
              variant="danger"
              onClick={() => props.OnDeleteDialogueConfirmed(props.dialogue)}
            >
              Delete
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
