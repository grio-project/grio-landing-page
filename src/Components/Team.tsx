import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import nana_foto from "../assets/photos/nana.png";
import laion_foto from "../assets/photos/laion.png";
import marcelo_foto from "../assets/photos/marcelo.png";

class Team extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title">
            QUEM ESTÁ ENVOLVIDO?
        </h1>
        </div>
        <div>
          <Row className="std-slide">

            <Col xs={4} >
              <p>
                {<img src={nana_foto} />}
                <h3>Nana da Silva</h3>
                <p>
                  Idealizadora do projeto e pessoa desenvolvedora
                  @shebangbash
                  natr@hey.com
                  </p>
              </p>
            </Col>
            <Col xs={4}>
              <p>

                {<img src={laion_foto} />}
                <h3>Laion Azeredo</h3>
                <p>
                Desenvolvedor Full Stack
                <p>
                @laionazeredo
                </p>

                
                </p>
              </p>
            </Col>
            <Col xs={4}>
              <p>
                {<img src={marcelo_foto} />}
                <h3>Marcelo Prado</h3>
                <p>
                Desenvolvedor Full Stack
                <p>
                @OminiKrigeren
                </p>
                
                </p>
              </p>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}

export default Team;