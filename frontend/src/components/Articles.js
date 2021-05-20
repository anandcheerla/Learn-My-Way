import React,{useContext,useState} from "react";
// import axios from "axios";
import ls from "local-storage";
import {connect} from 'react-redux';


//components
import Article from "./Article.js";

//css
import "./Articles.css";


function Articles(props){


      // articles: [...this.props.articles],

    //inline properties or variables
    // let reverseDirectionForArticlesArray = {
    //   display: "flex",
    //   flexDirection: "column-reverse",
    // };

    // let newArticleButtonStyle = {
    //   position: "fixed",
    //   top: "30",
    //   right: "0",
    // };

    // debugger;
    
    

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
