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
    
    const [loginSuccess,setLoginSuccess] = useState(false);
    const [myArticles,setMyArticles] = useState([]);


    const appState = {
      login: {get:loginSuccess, set:setLoginSuccess},
      articles:{get: myArticles, set:setMyArticles}
    };

 
    return (
      <>
          <BrowserRouter>
            <AppContext.Provider value={appState}>
               {
                !loginSuccess
                ?
                <Route path="/" component={Main}/>
                :
                <Home/>
               }
            </AppContext.Provider>
          </BrowserRouter>

      </>
      );
  
}



export default App;
