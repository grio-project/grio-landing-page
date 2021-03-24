import React, { Component } from 'react';
import Iframe from 'react-iframe'


class Forms extends Component {
  render() {
    return (
      <div className='std-slide'>
        <h1 className='title'>
          Queremos saber tua Opinião
        </h1>

        <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSee_Ka3gCJN_hidcMoFGDUWLhwk0zJ9PvGnNUpbRT0XaI7r_w/viewform?embedded=true"
        width="100%"
        height="600px"
        frameBorder={0}
        id="myId"
        className="gform"       
        position="relative"/>

        
      </div>
    );
  }
}

export default Forms;