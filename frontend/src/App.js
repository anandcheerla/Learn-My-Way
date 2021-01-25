//Author: Anand Kumar Cheerla


import React,{useState} from 'react';
import axios from "axios";
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import ls from "local-storage";

//css
import "./App.css";

//containers
import Main from './containers/Main.js';
import Home from './containers/Home.js';


import {AppContext} from './AppContext.js';



function App(props){
    
    const [username,setUsername] = useState("");
    const [userDetails,setUserDetails] = useState({});
    const [loginSuccess,setLoginSuccess] = useState(ls.get("authSession")||false);
    const [myArticles,setMyArticles] = useState([]);
    const [tags,setTags] = useState([]);


    const appState = {
      login: {get:loginSuccess, set:setLoginSuccess},
      articles:{get: myArticles, set:setMyArticles},
      username:{get:username,set: setUsername},
      tags:{get:tags,set: setTags},
      userDetails: {get:userDetails,set: setUserDetails}
    };

 
    return (
          <div id="App">
          <BrowserRouter>
            <AppContext.Provider value={appState}>
                <Route path="/" component={Main}/>
            </AppContext.Provider>
          </BrowserRouter>
          </div>
      );
  
}



export default App;
