import React, { Component } from "react";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";
import Choice from "./Choice";
import Command from "./Command";
import Savekey from "./Savekey";
import DialogueMinimap from "./DialogueMinimap";

export default class DialogueDetail extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    length: 0,
  };

  TabClicked(index, type) {
    document.getElementById("SaveKeyCard" + index).style.display =
      type == "savekeys" ? "block" : "none";
    document.getElementById("CommandsCard" + index).style.display =
      type == "commands" ? "block" : "none";
    document.getElementById("ChoicesCard" + index).style.display =
      type == "choices" ? "block" : "none";
  }

  RemoveSavekey(lineIndex, index) {
    this.props.dialogue.lines[lineIndex].savekeys.splice(index, 1);
    this.props.OnSaved(this.props.dialogue);
  }

  RemoveChoice(lineIndex, index) {
    this.props.dialogue.lines[lineIndex].choices.splice(index, 1);
    this.props.OnSaved(this.props.dialogue);
  }

  RemoveCommand(lineIndex, index) {
    this.props.dialogue.lines[lineIndex].commands.splice(index, 1);
    this.props.OnSaved(this.props.dialogue);
  }

  SaveChoiceChanges(Choice, lineIndex, index) {
    this.props.dialogue.lines[lineIndex].choices[index] = Choice;
    this.props.OnSaved(this.props.dialogue);
  }

  AddChoice(lineIndex) {
    this.props.dialogue.lines[lineIndex].choices.push({
      text: "",
      target: "",
    });
    this.props.OnSaved(this.props.dialogue);
  }

  AddCommand(lineIndex) {
    this.props.dialogue.lines[lineIndex].commands.push({
      commandName: "",
      parameter: "",
    });
    this.props.OnSaved(this.props.dialogue);
  }

  AddSavekey(lineIndex) {
    this.props.dialogue.lines[lineIndex].savekeys.push({
      keyname: "",
      keyvalue: "",
    });
    this.props.OnSaved(this.props.dialogue);
  }

  OnAdvancedOptionsClicked(id) {
    var line = this.props.dialogue.lines[id];
    line.expandedOptions = !line.expandedOptions;
    var element = document.getElementById("AdvancedOptions" + id);
    var button = document.getElementById("ExpandOptions" + id);
    if (!line.expandedOptions) {
      element.style.display = "none";
      button.style.transform = "rotateZ(-90deg)";
    } else {
      element.style.display = "block";
      button.style.transform = "rotateZ(0deg)";
    }
    this.props.OnSaved(this.props.dialogue);
  }

  GenerateLineId() {
    var id = 0;
    while (
      this.props.dialogue.lines.find((x) => x.lineID == "line_" + id) !==
      undefined
    ) {
      id++;
    }
    return id;
  }

  InsertLine(index) {
    this.props.dialogue.lines.splice(index, 0, {
      lineID: "line_" + this.GenerateLineId(),
      text: "",
      speaker: "Jenna",
      eyebrows: "Idle",
      eyes: "Idle",
      mouth: "Idle",
      cg: "",
      expandedOptions: false,
      savekeys: [],
      commands: [],
      choices: [],
    });
    this.props.OnSaved(this.props.dialogue);
  }

  render() {
    var d = this.props.dialogue;
    return (
      <div style={{ margin: "5px" }}>
        <Button
          variant="outline-success"
          className="DialogueDetailSaveButton"
          onClick={() => this.props.OnSaved(this.props.dialogue)}
        >
          Save
        </Button>
        <div className="DialogueDetailHeadline">
          <TiArrowBack
            onClick={this.props.OnBackClicked}
            className="BackButton"
            size="45"
          />
          <h1>{d.name}</h1>
          <div className="CenterForcer"></div>
        </div>

        <Container fluid>
          <Row>
            <Col xs={4} sm={4} style={{ position: "sticky" }}>
              <DialogueMinimap
                dialogue={this.props.dialogue}
              />
            </Col>
            <Col xs={8} sm={8}>
              {d.lines.map((x, i) => {
                return (
                  <React.Fragment
                    key={
                      x.lineID +
                      x.text +
                      x.speaker +
                      x.eyebrows +
                      x.eyes +
                      x.mouth
                    }
                  >
                    <Form.Group controlId="insert" className="InsertLineButton">
                      <Button
                        variant="outline-primary"
                        onClick={() => this.InsertLine(i)}
                      >
                        Insert Line
                      </Button>
                    </Form.Group>
                    <Card id={"lineDisplay" + i}>
                      <Card.Body>
                        <Form.Group controlId="formText">
                          <Form.Label>Text</Form.Label>
                          <Form.Control
                            name="Text"
                            type="text"
                            placeholder="Enter line Text"
                            required={true}
                            defaultValue={x.text}
                            onChange={(e) =>
                              (this.props.dialogue.lines[i].text =
                                e.target.value)
                            }
                          />
                        </Form.Group>
                        <Form.Group controlId="formSpeaker">
                          <Form.Label>Speaker</Form.Label>
                          <Form.Control
                            as="select"
                            defaultValue={x.speaker}
                            onChange={(e) =>
                              (this.props.dialogue.lines[i].speaker =
                                e.target.value)
                            }
                          >
                            <option>Jenna</option>
                            <option>Jewel</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group
                          controlId="Expression"
                          className="DialogueDetailExpressions"
                        >
                          <div>
                            <Form.Label>Eyebrows</Form.Label>
                            <Form.Control
                              as="select"
                              defaultValue={x.eyebrows}
                              onChange={(e) =>
                                (this.props.dialogue.lines[i].eyebrows =
                                  e.target.value)
                              }
                            >
                              <option>Idle</option>
                              <option>Happy</option>
                            </Form.Control>
                          </div>
                          <div className="MidDialogueDetailExpression">
                            <Form.Label>Eyes</Form.Label>
                            <Form.Control
                              as="select"
                              defaultValue={x.eyes}
                              onChange={(e) =>
                                (this.props.dialogue.lines[i].eyes =
                                  e.target.value)
                              }
                            >
                              <option>Idle</option>
                              <option>Happy</option>
                            </Form.Control>
                          </div>
                          <div>
                            <Form.Label>Mouth</Form.Label>
                            <Form.Control
                              as="select"
                              defaultValue={x.mouth}
                              onChange={(e) =>
                                (this.props.dialogue.lines[i].mouth =
                                  e.target.value)
                              }
                            >
                              <option>Idle</option>
                              <option>Happy</option>
                            </Form.Control>
                          </div>
                        </Form.Group>

                        <span
                          onClick={() => this.OnAdvancedOptionsClicked(i)}
                          style={{ cursor: "pointer" }}
                        >
                          <span style={{ color: "#0051b3", fontSize: "0.8em" }}>
                            Advanced Options{" "}
                          </span>
                          <FcExpand
                            className="ExpandLineOptions"
                            id={"ExpandOptions" + i}
                            style={{
                              transform: this.props.dialogue.lines[i]
                                .expandedOptions
                                ? "rotateZ(0deg)"
                                : "rotateZ(-90deg)",
                            }}
                          />
                        </span>

                        <div
                          className="HiddenLineOptions"
                          id={"AdvancedOptions" + i}
                          style={{
                            display: this.props.dialogue.lines[i]
                              .expandedOptions
                              ? "block"
                              : "none",
                          }}
                        >
                          <Form.Group controlId="cg image">
                            <Form.Label>CG Image Filename</Form.Label>
                            <Form.Control
                              name="Text"
                              type="text"
                              placeholder="Enter the relative path to the CG."
                              defaultValue={x.cg}
                              onChange={(e) =>
                                (this.props.dialogue.lines[i].text =
                                  e.target.value)
                              }
                            />
                          </Form.Group>

                          <Card>
                            <Card.Header>
                              <Nav variant="tabs" defaultActiveKey="#first">
                                <Nav.Item>
                                  <Nav.Link
                                    href="#first"
                                    onClick={() =>
                                      this.TabClicked(i, "savekeys")
                                    }
                                  >
                                    Save Keys (
                                    {
                                      this.props.dialogue.lines[i].savekeys
                                        .length
                                    }
                                    )
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link
                                    href="#second"
                                    onClick={() =>
                                      this.TabClicked(i, "commands")
                                    }
                                  >
                                    Commands (
                                    {
                                      this.props.dialogue.lines[i].commands
                                        .length
                                    }
                                    )
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link
                                    href="#third"
                                    onClick={() =>
                                      this.TabClicked(i, "choices")
                                    }
                                  >
                                    Choices (
                                    {
                                      this.props.dialogue.lines[i].choices
                                        .length
                                    }
                                    )
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </Card.Header>
                            <Card.Body>
                              <div
                                id={"SaveKeyCard" + i}
                                style={{ display: "block" }}
                              >
                                <Button onClick={() => this.AddSavekey(i)}>
                                  Add Save Key Setter
                                </Button>
                                {x.savekeys.map((savekeyObj, savekeyIndex) => {
                                  return (
                                    <div key={savekeyIndex}>
                                      <Savekey
                                        savekeyObject={savekeyObj}
                                        removeSavekey={(a, b) =>
                                          this.RemoveSavekey(a, b)
                                        }
                                        savekeyIndex={savekeyIndex}
                                        lineIndex={i}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                              <div
                                id={"CommandsCard" + i}
                                style={{ display: "none" }}
                              >
                                <Button onClick={() => this.AddCommand(i)}>
                                  Add Command
                                </Button>
                                {x.commands.map((commandObj, commandIndex) => {
                                  return (
                                    <div key={commandIndex}>
                                      <Command
                                        commandObject={commandObj}
                                        removeCommand={(a, b) =>
                                          this.RemoveCommand(a, b)
                                        }
                                        commandIndex={commandIndex}
                                        lineIndex={i}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                              <div
                                id={"ChoicesCard" + i}
                                style={{ display: "none" }}
                              >
                                <Button onClick={() => this.AddChoice(i)}>
                                  Add Choice
                                </Button>
                                {x.choices.map((choiceObj, choiceIndex) => {
                                  return (
                                    <div key={choiceIndex}>
                                      <Choice
                                        choiceObject={choiceObj}
                                        saveChoiceChanges={
                                          this.SaveChoiceChanges
                                        }
                                        choiceIndex={choiceIndex}
                                        lineIndex={i}
                                        removeChoice={(a, b) =>
                                          this.RemoveChoice(a, b)
                                        }
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      </Card.Body>
                    </Card>
                  </React.Fragment>
                );
              })}
              <Form.Group controlId="add" className="InsertLineButton">
                <Button
                  variant="outline-primary"
                  onClick={() =>
                    this.InsertLine(this.props.dialogue.lines.length)
                  }
                >
                  Add Line
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
