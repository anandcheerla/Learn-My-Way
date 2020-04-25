import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '.././App.css';
import Article from './Article.js';
// import Unit from './Unit.js';

class Articles extends React.Component{
  constructor(props){
    super(props);
    // this.state={
    //    articles: [...this.props.articles] 
    // };
  }

  componentDidMount(){
    console.log("articles component mounted");
  }


  render(){
    return (
       <div>
          <h2>My Articles</h2>
          <ul className="list-group">
             {
              this.props.articles.map(element=>(
                <li className="list-group-item"><Article dbId={element._id} heading={element.heading} description={element.description} units={element.units}></Article></li>
              ))
             }
          </ul>
       </div>
    );
  }
}

export default Articles;