import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";

class App extends Component {
  state = { kelvin: 0 };
  render() {
    return (
      <Container>
        <br />
        <Card centered>
          <Card.Content>
            <Card.Header>Temperature Converter</Card.Header>
            <Card.Meta>{`Temperature in Kelvin: ${this.state.kelvin}`}</Card.Meta>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default App;
