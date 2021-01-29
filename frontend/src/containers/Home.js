//Page displays after login
import React,{useState} from "react";
// import axios from "axios";
import {Route,Link,useRouteMatch,Switch} from "react-router-dom";
// import ls from "local-storage";


//css
import "./Home.css";

//components
// import Header from '../components/Header.js';


//containers
// import About from './About.js';
import MyArticles from './MyArticles.js';
import SavedArticles from "../components/SavedArticles.js";
import SuggestedArticles from './SuggestedArticles.js';
import Profile from './Profile.js';


function Home(props){

    let { path, url } = useRouteMatch();

    return (

        <div id="Home">
          <div id="Home__body">
            <Switch>
                <Route path="/home">
                  <SuggestedArticles/>
                </Route>
                <Route path="/my-articles">
                  <MyArticles/>                  
                </Route>
                <Route path="/my-profile">
                  <Profile/>                  
                </Route>
            </Switch>
          </div>
          <div id="Home__footer">

          </div>
        </div>

      );
      
} 

export default Home;
