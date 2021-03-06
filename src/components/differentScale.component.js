import React, { Component } from "react";
import { Card, Form, Input, Button } from "semantic-ui-react";

class DifferentScale extends Component {
  handleClick = () => {
      console.log("oogledeboo", this.props.scaleName)
    this.props.showClick(this.props.scaleName);
  };

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
          <br />
          <Button onClick={this.handleClick}>Click Me</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default DifferentScale;
