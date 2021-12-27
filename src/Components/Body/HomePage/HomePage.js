import React from "react";
import { Container } from "react-bootstrap";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("helllo from home pages")
    return (
      <React.Fragment>
        <Container>This is our Home Page</Container>
      </React.Fragment>
    );
  }
}

export default HomePage;
