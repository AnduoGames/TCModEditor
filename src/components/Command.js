import React, { Component } from "react";
import { Button, Card, Dropdown, Form, FormLabel } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";

export default class Command extends Component {
  OnRemoveCommandClicked = () => {
    this.props.removeCommand(this.props.lineIndex, this.props.commandIndex);
  };

  render() {
    var c = this.props.commandObject;
    return (
      <div>
        <Card>
          <Card.Body>
            <AiFillCloseCircle
              onClick={this.OnRemoveCommandClicked}
              className="DialoguePopupCloseButton"
              size="30px"
            />
            <FormLabel>Command Name</FormLabel>
            <Form.Control
              as="select"
              defaultValue={c.commandName}
              onChange={(e) => (c.commandName = e.target.value)}
            >
              <option>Add Equipment</option>
              <option>Start Dialogue</option>
              <option>Console Command</option>
            </Form.Control>
            <FormLabel>Command Parameters</FormLabel>
            <Form.Control
              name="Text"
              type="text"
              placeholder="Parameters for the Command."
              defaultValue={c.parameters}
              onChange={(e) => (c.parameters = e.target.value)}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
