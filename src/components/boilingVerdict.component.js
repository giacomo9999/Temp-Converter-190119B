import React from "react";
import { Card } from "semantic-ui-react";

const BoilingVerdict = props => {
  if (props.kelvin >= 373) {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Water Will Boil</Card.Header>
        </Card.Content>
      </Card>
    );
  }
  return (
    <Card centered>
      <Card.Content>
        <Card.Header>Water Will Not Boil</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default BoilingVerdict;
