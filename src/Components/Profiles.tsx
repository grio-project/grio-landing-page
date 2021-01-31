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
                {<a href='https://www.instagram.com/iniciativagrio/'><img src={instagram_logo} /></a>}

              </p>
            </Col>
            <Col xs={4}>
              <p>

                {<a href='https://twitter.com/iniciativaGrio'><img src={twitter_logo} /></a>}

              </p>

              
              
            </Col>
        <Col xs={4}>
          <p>
            {<a href='https://www.linkedin.com/company/grio-plataforma-de-mentorias/about/?viewAsMember=true'><img src={linkedin_logo} /></a>}

          </p>
                
              
            </Col >
          </Row >
        </div >

      </div >
    );
  }
}

export default Profiles;