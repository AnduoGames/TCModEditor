import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class manifest extends Component {
  render() {
    return (
      <div style={{ maxWidth: "1000px" }}>
        <Form onSubmit={this.props.onManifestSubmit}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="Name"
            type="text"
            placeholder="Enter name of the Mod"
            required={true}
            defaultValue={this.props.manifest.modName}
          />
          <Form.Text className="text-muted">
            Hint: Having 2 mods with the same name will lead to issues, so make
            sure your mod name is unique.
          </Form.Text>
          <br />
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="Author"
            type="text"
            placeholder="Enter name of the Author"
            defaultValue={this.props.manifest.authorName}
          />
          <br />
          <Form.Label>Version</Form.Label>
          <Form.Control
            name="Version"
            type="text"
            placeholder="Enter the current version number"
            defaultValue={this.props.manifest.version}
          />
          <br />
          <Form.Label>Url</Form.Label>
          <Form.Control
            name="Url"
            type="text"
            placeholder="Enter creator URL"
            defaultValue={this.props.manifest.url}
          />
          <br />
          <Form.Label>Save Key Identifier</Form.Label>
          <Form.Control
            name="SaveKey"
            type="text"
            placeholder="Enter the prefix that the savekeys of this mod will have."
            required={true}
            defaultValue={this.props.manifest.savekey}
          />
          <br />
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    );
  }
}
