import React, { Component } from "react";
import { Card, Container, Form, Button } from "semantic-ui-react";
import BoilingVerdict from "./components/boilingVerdict.component";

class App extends Component {
  state = { kelvin: 0 };

  handleChange = e => {
    this.setState({ kelvin: e.target.value });
    console.log("State:", this.state.value);
    console.log("Event:", e.target.value);
  };

  handleSubmit = e => {
    console.log("Submitted:", this.state.kelvin);
    e.preventDefault();
  };

  render() {
    const kelvin = this.state.kelvin;
    return (
      <Container>
        <br />
        <Card centered>
          <Card.Content>
            <Card.Header>Temperature Converter</Card.Header>
            <Card.Meta>{`Temperature in Kelvin: ${
              this.state.kelvin
            }`}</Card.Meta>
            <br />
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Enter temperature in Kelvin:</label>
                <input value={kelvin} onChange={this.handleChange} />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Content>
        </Card>
        <BoilingVerdict kelvin={this.state.kelvin} />
      </Container>
    );
  }
}

export default App;
