import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "reactjs-popup/dist/index.css";

export default class Dialogues extends Component {
  render() {
    return (
      <div>
        <Button
          style={{ margin: "5px" }}
          variant="primary"
          onClick={() => {
            this.props.OnShowPopup();
          }}
        >
          Add Dialogue
        </Button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.props.dialogues.map((x, i) => {
            return (
              <Card style={{ width: "18rem", margin: "5px" }} key={i}>
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {x.description}
                  </Card.Subtitle>
                  <Card.Text>#Lines: {x.lines.length}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.props.OnEditDialogue(x);
                    }}
                  >
                    Edit
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={() => {
                      this.props.OnDeleteDialogue(x);
                    }}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}
