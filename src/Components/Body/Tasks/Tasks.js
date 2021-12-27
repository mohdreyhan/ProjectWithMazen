import React from "react";
import { Container } from "react-bootstrap";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>This is our Tasks Page</Container>
      </React.Fragment>
    );
  }
}

export default Tasks;
