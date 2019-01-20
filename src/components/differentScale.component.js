import React, { Component } from "react";
import { Card, Form, Input } from "semantic-ui-react";

class DifferentScale extends Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>{`Temperature in ${this.props.scaleName}`}</Card.Header>
          <br />

          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Enter temperature:</label>
              <Input
                value={this.props.localTemp}
                onChange={this.props.onChange}
              />
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default DifferentScale;
