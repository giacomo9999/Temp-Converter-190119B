import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import BoilingVerdict from "./components/boilingVerdict.component";
import DifferentScale from "./components/differentScale.component";

class App extends Component {
  state = { kelvin: 0 };

  handleChange = e => {
    console.log("State:", this.state.kelvin);
    console.log("Event:", e.target.value);
    this.setState({ kelvin: e.target.value });
  };

  handleSubmit = e => {
    console.log("Submitted:", this.state.kelvin);
    e.preventDefault();
  };

  showClick = sourceName => {
    console.log("Click came in from " + sourceName);
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
          showClick={this.showClick}
        />
        <DifferentScale
          scaleName="Celsius"
          localTemp={kelvin}
          onChange={this.handleChange}
          showClick={this.showClick}
        />
        <BoilingVerdict kelvin={this.state.kelvin} />
      </Container>
    );
  }
}

export default App;
