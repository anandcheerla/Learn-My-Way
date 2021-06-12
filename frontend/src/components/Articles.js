import React from "react";
// import axios from "axios";
import {connect} from 'react-redux';


//components
import Article from "./Article.js";

//css
import "./Articles.css";


function Articles(props){
    
    return (
      <div id="Articles__articles-container">
        {
          props.articles.map((element,ele_ind) => (
          element!=null
          &&
          <Article
            type={props.type}
            key={element._id}
            dbId={element._id}
            heading={element.heading}
            description={element.description}
            units={element.units}
            lastUpdatedTime={element.lastUpdatedTime}
            uploaderFirstName={element.uploaderFirstName}
            uploaderUserName={element.uploaderUserName || props.username}
            visibility={element.visibility}
            articleIndex={ele_ind}
            likes={element.likes}
          >
          </Article>))
        }
      </div> 
    );

}

function mapStateToProps(state){
  return {
    username: state.app.username
  }
}
export default connect(mapStateToProps)(Articles);
