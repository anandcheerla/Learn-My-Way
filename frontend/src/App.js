//Author: Anand Kumar Cheerla

import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';


//store
import store from './redux/store';

//css
import "./App.css";

//containers
import Main from './containers/Main.js';


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
