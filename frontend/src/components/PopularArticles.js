import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ls from 'local-storage';


class PopularArticles extends React.Component{
  constructor(props){
    super(props);
    this.state={
      articles: this.props.articles;
    };
  }

  componentDidMount(){

  }

  render(){

  }
}

export default PopularArticles;