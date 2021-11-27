import { Component } from "react";
import { Container } from "react-bootstrap";

import Forms from "./Forms";

class LandingPage extends Component {
  render() {
    return (
      <Container fluid>
        <Forms />
      </Container>
    );
  }
}

export default LandingPage;
