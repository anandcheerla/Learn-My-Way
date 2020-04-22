import React from 'react';
// import axios from 'axios';

import '.././App.css';
import Unit from './Unit.js';

class Article extends React.Component{
  render(){
    return (
       <div>
         {
          this.props.article.map(element=>(
            <Unit mid={element._id} heading={element.heading} shortDescription={element.shortDescription} longDescription={element.longDescription}></Unit>
          ))
         }
       </div>
    );
  }
}

export default Article;