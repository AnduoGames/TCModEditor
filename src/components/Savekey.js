import React, { Component } from "react";
import { Button, Card, Dropdown, Form, FormLabel } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";

export default class Savekey extends Component {
  OnRemoveSavekeyClicked = () => {
    this.props.removeSavekey(this.props.lineIndex, this.props.savekeyIndex);
  };

  render() {
    var s = this.props.savekeyObject;
    return (
      <div>
        <Card>
          <Card.Body>
            <AiFillCloseCircle
              onClick={this.OnRemoveSavekeyClicked}
              className="DialoguePopupCloseButton"
              size="30px"
            />
            <FormLabel>Savekey Name</FormLabel>
            <Form.Control
              name="Text"
              type="text"
              placeholder="Enter the name of the savekey."
              defaultValue={s.keyname}
              onChange={(e) => (s.keyname = e.target.value)}
            ></Form.Control>
            {this.props.Readonly ? null : (
              <>
                <FormLabel>Value</FormLabel>
                <Form.Control
                  name="Text"
                  type="text"
                  placeholder="Enter the value for the savekey."
                  defaultValue={s.keyvalue}
                  onChange={(e) => (s.keyvalue = e.target.value)}
                />{" "}
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
