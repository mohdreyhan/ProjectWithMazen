import React from "react";
import { Container } from "react-bootstrap";

class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>This is our Employees Page</Container>
      </React.Fragment>
    );
  }
}

export default Employees;
