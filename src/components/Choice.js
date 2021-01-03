import React, { Component } from "react";
import { Button, Card, Dropdown, Form, FormLabel } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";

export default class Choice extends Component {
  constructor(props) {
    super(props);
  }

  OnRemoveChoiceClicked = () => {
    this.props.removeChoice(this.props.lineIndex, this.props.choiceIndex);
  };

  render() {
    var c = this.props.choiceObject;
    return (
      <div>
        <Card>
          <Card.Body>
            <AiFillCloseCircle
              onClick={this.OnRemoveChoiceClicked}
              className="DialoguePopupCloseButton"
              size="30px"
            />
            <FormLabel>Choice Text</FormLabel>
            <Form.Control
              name="Text"
              type="text"
              placeholder="Enter the Choice Text."
              defaultValue={c.text}
              onChange={(e) => (c.text = e.target.value)}
            />
            <FormLabel>Choice Target</FormLabel>
            <Form.Control
              name="Text"
              type="text"
              placeholder="Dialogue or Choice."
              defaultValue={c.target}
              onChange={(e) => (c.target = e.target.value)}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
