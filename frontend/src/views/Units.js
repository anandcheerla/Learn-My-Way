import React from 'react';
import axios from 'axios';

import '.././App.css';
import Unit from './Unit.js';

class Units extends React.Component{
  render(){
    return (
       <div>
         {
          this.props.units.map(element=>(
            <Unit heading={element.heading} shortDescription={element.shortDescription} longDescription={element.longDescription}></Unit>
          ))
         }
       </div>
    );
  }
}

export default Units;