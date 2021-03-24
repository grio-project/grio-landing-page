import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import nana_foto from "../assets/photos/nana.png";
import laion_foto from "../assets/photos/laion.png";
import marcelo_foto from "../assets/photos/marcelo.png";

class Team extends Component {
  render() {
    return (
  
        <div>
          <h1 className="title">
            QUEM ESTÁ ENVOLVIDO?
          </h1>
   
          <Row className="std-slide team-columns">

            <Col >
              <p>
                {<img src={nana_foto} alt="Nana's profile" />}
                <p className='subtitle-font'>
                  Nana da Silva
                </p>
                <p>
                  Idealizadora do projeto e pessoa desenvolvedora
                </p>
                <p>
                  @shebangbash
                  natr@hey.com
                </p>
              </p>
          </Col>
          
            <Col >
              <p>

                {<img src={laion_foto} alt="Laion's profile" />}
                <p className='subtitle-font'>Laion Azeredo</p>
                <p>
                Desenvolvedor Full Stack
                <p>
                @laionazeredo
                </p>
                </p>
              </p>
          </Col>
          
            <Col >
              <p>
                {<img src={marcelo_foto} alt="Marcelo's profile" />}
                <p className='subtitle-font'>Marcelo Prado</p>
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

      
    );
  }
}

export default Team;