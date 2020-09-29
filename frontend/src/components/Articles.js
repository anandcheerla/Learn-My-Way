import React,{useState} from "react";
import axios from "axios";
import ls from "local-storage";


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

    return (
      <div id="Articles">
        <div>
            <h1>Articles</h1>
            {
              props.articles.map((element) => (
              <Article
                key={element._id}
                dbId={element._id}
                heading={element.heading}
                description={element.description}
                units={element.units}
                lastUpdatedTime={element.lastUpdatedTime}
                visibility={element.visibility}
              >
              </Article>))
            }
        </div>
      </div>   
    );

}
export default Articles;
