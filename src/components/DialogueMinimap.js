import React, { Component } from "react";
import {
  Button,
  Card,
  Dropdown,
  Form,
  FormLabel,
  ListGroup,
} from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiArrowBack } from "react-icons/ti";
import { FcExpand } from "react-icons/fc";

export default class DialogueMinimap extends Component {
  render() {
    var d = this.props.dialogue;
    return (
      <ListGroup>
        {d.lines.map((l, lineIndex) => {
          return (
            <ListGroup.Item
              action
              style={{ wordWrap: "break-word", cursor: "pointer" }}
              key={lineIndex}
              href={"#lineDisplay" + lineIndex}
            >
              {l.text ? l.text : "Empty"}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}
