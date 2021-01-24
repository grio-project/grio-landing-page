import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
class Team extends Component {
  render() {
    return (
      <div className="slide">
        <div>
          <h1 className="title">
            QUEM ESTÁ ENVOLVIDO?
        </h1>
        </div>
        <div>
          <Row>

            <Col xs={4} >
              <p>
                {/* <img src={ } /> */}
              1234
            </p>
            </Col>
            <Col xs={4}>
              <p>
                {/* <img src={ } /> */}
              3
            </p>
            </Col>
            <Col xs={4}>
              <p>
                {/* <img src={ } /> */}
              2
            </p>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}

export default Team;