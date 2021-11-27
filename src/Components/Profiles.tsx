import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import instagram_logo from "../assets/photos/instagram.png";
import twitter_logo from "../assets/photos/twitter.png";
import linkedin_logo from "../assets/photos/linkedin.png";

class Profiles extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title">Nos acompanhe!</h1>
        </div>
        <div>
          <Row className="std-slide profile-columns">
            <Col>
              <p>
                {
                  <a href="https://www.instagram.com/iniciativagrio/">
                    <img src={instagram_logo} alt="instagram logo" />
                  </a>
                }
              </p>
            </Col>
            <Col>
              <p>
                {
                  <a href="https://twitter.com/iniciativaGrio">
                    <img src={twitter_logo} alt="twitter logo" />
                  </a>
                }
              </p>
            </Col>
            <Col>
              <p>
                {
                  <a href="https://www.linkedin.com/company/grio-plataforma-de-mentorias/about/?viewAsMember=true">
                    <img src={linkedin_logo} alt="linkedin logo" />
                  </a>
                }
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Profiles;
