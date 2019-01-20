import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import BoilingVerdict from "./components/boilingVerdict.component";
import DifferentScale from "./components/differentScale.component";

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
          </Card.Content>
        </Card>
        <DifferentScale
          scaleName="Fahrenheit"
          localTemp={kelvin}
          onChange={this.handleChange}
        />
        <DifferentScale
          scaleName="Celsius"
          localTemp={kelvin}
          onChange={this.handleChange}
        />
        <BoilingVerdict kelvin={this.state.kelvin} />
      </Container>
    );
  }
}

export default App;
