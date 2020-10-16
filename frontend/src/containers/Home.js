//Page displays after login


import React,{useState} from "react";
import axios from "axios";
import {Route,Link} from "react-router-dom";
import ls from "local-storage";


//css
import "./Home.css";

//components
import Header from '../components/Header.js';


//containers
import About from './About.js';
import MyArticles from './MyArticles.js';



function Home(props){

    return (

        <div id="Home">
          <div id="Home__header">
            <Header>
              <Link to="/my-articles">My Articles</Link>
              <Link to="/logout">Logout</Link>
            </Header>
          </div>
          <div id="Home__body">
            <Route path="/my-articles" component={MyArticles}/>
          </div>
          <div id="Home__footer">

          </div>
        </div>

      );
      
} 

export default Home;
