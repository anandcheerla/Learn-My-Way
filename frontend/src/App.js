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

    


    const appState = {
      login: {get:loginSuccess, set:setLoginSuccess}
    };

    // alert("coming again");
 
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
