import React,{useState,useRef,useContext} from 'react';
import axios from "axios";
import ls from "local-storage";
import {useHistory} from "react-router-dom";

import {AppContext} from '../AppContext.js';



function Login(props){
   
  //login api call to /login route with username and password
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const loginButton_Ref = useRef(null);
  const loginErrMsg_Ref = useRef(null);

  const appCtx = useContext(AppContext);
  let history=useHistory();

  const userLogin = () => {
    // event.preventDefault();

    let formData = {
      username: username,
      password: password
    };

    loginButton_Ref.current.innerHTML = "Logging In";
    loginButton_Ref.current.style.opacity = 0.7;
    loginErrMsg_Ref.current.innerHTML = "";
    // console.log(props);

    axios.post("/user/login", formData).then((res) => {
      if (res.data !== false) {
        appCtx.login.set(true);
        ls.set("authSession",true);
        appCtx.username.set(formData.username);
        history.push('/home');
        
      } else {
        loginErrMsg_Ref.current.innerHTML = "* Incorrect Credentials";
        loginErrMsg_Ref.current.style.color = "red";
        loginButton_Ref.current.innerHTML = "Login";
        loginButton_Ref.current.style.opacity = 1;
      }
    });
  }; //userLogin function end


  return (
      <div className="Login">
        <div className="Login__input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className=""
            id="Login__username"
            name="username"
            placeholder="username"
            onChange={(e)=>{setUsername(e.target.value)}}
            value = {username}
            required
          />
        </div>
        <div className="Login__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className=""
            id="Login__password"
            name="password"
            placeholder="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            value = {password}
            required
          />
        </div>
        <div className="Login__message">
          <h6 ref={loginErrMsg_Ref} id="Login__login-err-msg"></h6>
        </div>
        <div className="Login__button">
          <button
            onClick={userLogin}
            id="Login__login-button"
            className=""
            ref={loginButton_Ref}
          >
            Login
          </button>
        </div>
      </div>
    );


}

export default Login;