//Author: Anand Kumar Cheerla

import React,{useState} from 'react';
import axios from "axios";
import {BrowserRouter,Route,Link,Redirect,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import ls from "local-storage";
import {connect} from 'react-redux';

//store
import store from './redux/store';

//css
import "./App.css";

//containers
import Main from './containers/Main.js';
import Home from './containers/Home.js';




function App(props){
 
    return (
          <div id="App">
          <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={Main}/>
            </BrowserRouter>
          </Provider>
          </div>
      );
  
}



export default App;
