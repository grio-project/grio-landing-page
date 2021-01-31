import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import instagram_logo from "../assets/photos/instagram.png";
import twitter_logo from "../assets/photos/twitter.png";
import linkedin_logo from "../assets/photos/linkedin.png";

class Profiles extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title">
            Nos acompanhe!
        </h1>
        </div>
        <div>
          <Row className="std-slide">

            <Col xs={4} >
              <p>
                {<img src={instagram_logo} />}

              </p>
            </Col>
            <Col xs={4}>
              <p>

                {<img src={twitter_logo} />}

              </p>

              
              
            </Col>
        <Col xs={4}>
          <p>
            {<img src={linkedin_logo} />}

          </p>
                
              
            </Col >
          </Row >
        </div >

      </div >
    );
  }
}

export default Profiles;