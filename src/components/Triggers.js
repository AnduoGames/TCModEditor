import React, { Component } from "react";
import { Button, Card, Dropdown, Form, FormLabel } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";

export default class Triggers extends Component {
  AddTrigger = () => {
    this.props.triggers.push({
      Name: "",
      Level: "",
      X: 0,
      Y: 0,
      Width: 0,
      Height: 0,
      Dialogue: "",
      Condition: "",
    });
    this.props.OnTriggersChanged(this.props.triggers);
  };

  RemoveTrigger = (index) => {
    this.props.triggers.splice(index, 1);
    this.props.OnTriggersChanged(this.props.triggers);
  };

  render() {
    var t = this.props.triggers;
    return (
      <div style={{ maxWidth: "700px" }}>
        <Button onClick={this.AddTrigger}>Add Trigger</Button>
        {t.map((x, i) => {
          return (
            <Card key={i} style={{ padding: "10px" }}>
              <Card.Title>
                <Form.Label>Name</Form.Label>
                <AiFillCloseCircle
                  onClick={() => this.RemoveTrigger(i)}
                  className="DialoguePopupCloseButton"
                  size="30px"
                  style={{top: "5px"}}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Trigger Name"
                  defaultValue={x.Name}
                  onChange={(e) => (x.Name = e.target.value)}
                />
              </Card.Title>
              <Card.Body>
                <Form.Label>Level</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Level Name"
                  defaultValue={x.Level}
                  onChange={(e) => (x.Level = e.target.value)}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="TriggerHorizontalGroup">
                    <Form.Label>X Position</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter X Coordinate"
                      defaultValue={x.X}
                      onChange={(e) => (x.X = e.target.value)}
                    />
                  </div>
                  <div className="TriggerHorizontalGroup">
                    <Form.Label>Y Position</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Y Coordinate"
                      defaultValue={x.Y}
                      onChange={(e) => (x.Y = e.target.value)}
                    />
                  </div>
                  <div className="TriggerHorizontalGroup">
                    <Form.Label>Width</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Width of the Trigger"
                      defaultValue={x.Width}
                      onChange={(e) => (x.Width = e.target.value)}
                    />
                  </div>
                  <div>
                    <Form.Label>Height</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Height of the Trigger"
                      defaultValue={x.Height}
                      onChange={(e) => (x.Height = e.target.value)}
                    />
                  </div>
                </div>
                <Form.Label>Target Dialogue</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Target Dialogue"
                  defaultValue={x.Dialogue}
                  onChange={(e) => (x.Dialogue = e.target.value)}
                />
                <Form.Label>Target Condition</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Target Condition"
                  defaultValue={x.Condition}
                  onChange={(e) => (x.Condition = e.target.value)}
                />
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
