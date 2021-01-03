import React, { Component } from "react";
import { Button, Card, Dropdown, Form, FormLabel } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";
import Savekey from "./Savekey";

export default class Conditions extends Component {
  AddCondition = () => {
    this.props.conditions.push({
      Name: "",
      TrueKeys: [],
      FalseKeys: [],
      TargetConditions: [],
      TargetDialogue: "",
      Commands: [],
    });
    this.props.OnConditionsChanged(this.props.conditions);
  };

  RemoveCondition = (index) => {
    this.props.conditions.splice(index, 1);
    this.props.OnConditionsChanged(this.props.conditions);
  };

  RemoveTrueSavekey(conditionIndex, index) {
    this.props.conditions[conditionIndex].TrueKeys.splice(index, 1);
    this.props.OnConditionsChanged(this.props.conditions);
  }

  AddTrueSavekey(conditionIndex) {
    this.props.conditions[conditionIndex].TrueKeys.push({
      keyname: ""
    });
    this.props.OnConditionsChanged(this.props.conditions);
  }

  RemoveTrueSavekey(conditionIndex, index) {
    this.props.conditions[conditionIndex].TrueKeys.splice(index, 1);
    this.props.OnConditionsChanged(this.props.conditions);
  }

  render() {
    var c = this.props.conditions;
    return (
      <div style={{ maxWidth: "700px" }}>
        <Button onClick={this.AddCondition}>Add Condition</Button>
        {c.map((x, i) => {
          return (
            <Card key={i} style={{ padding: "10px" }}>
              <Card.Title>
                <Form.Label>Name</Form.Label>
                <AiFillCloseCircle
                  onClick={() => this.RemoveCondition(i)}
                  className="DialoguePopupCloseButton"
                  size="30px"
                  style={{ top: "5px" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Condition Name"
                  defaultValue={x.Name}
                  onChange={(e) => (x.Name = e.target.value)}
                />
              </Card.Title>
              <Card.Body>
                <div id={"SaveKeyCard" + i} style={{ display: "block" }}>
                  <Button onClick={() => this.AddTrueSavekey(i)}>
                    Add Save Key Check
                  </Button>
                  {x.TrueKeys.map((savekeyObj, savekeyIndex) => {
                    return ( 
                      <div key={savekeyIndex}>
                        <Savekey
                          savekeyObject={savekeyObj}
                          removeSavekey={(a, b) => this.RemoveTrueSavekey(a, b)}
                          savekeyIndex={savekeyIndex}
                          lineIndex={i}
                          Readonly
                        />
                      </div>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
