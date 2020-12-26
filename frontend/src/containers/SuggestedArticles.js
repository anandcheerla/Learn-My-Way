import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Route, useRouteMatch } from 'react-router';

//components
import Articles from "../components/Articles.js";


function SuggestedArticles(props){

    const [suggestedArticles,setSuggestedArticles]=useState([]);
    let {path,url} = useRouteMatch();

    //fetch suggested articles
    const fetchSuggestedArticlesFromDb = () => {
        axios.get("/articles/home").then((res) => {
            let articles_temp_var = [...res.data];
            // let fetchArticlesFromDb_temp_var = true;
            // appCtx.articles.set(articles_temp_var);
            setSuggestedArticles(articles_temp_var);
            // setFetchedMyArticlesFromDb(fetchArticlesFromDb_temp_var);
        });
    
    };

    useEffect(fetchSuggestedArticlesFromDb,[]);

    return (

        <div className="SuggestedArticles">
          <Route path={`${path}`}>
            <h1>Suggested Articles</h1>
            <Articles articles={suggestedArticles}/>
          </Route>
          
        </div>

      );

}

export default SuggestedArticles;