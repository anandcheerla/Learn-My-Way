import React,{useContext} from "react";
// import axios from "axios";
import {Route,Link,useRouteMatch} from "react-router-dom";


//css
import "./Header.css";


//context
import {AppContext} from '../AppContext.js';

function Header(props){
	const appCtx = useContext(AppContext);
	// let { path, url } = useRouteMatch();
	// console.log(url);
	// console.log(path);
	// console.log("coming");
	// console.log(`${url}/my-articles`);
	// debugger;
	// let url="/home";
	return(
		<div id="Header">
		{
			!appCtx.login.get
			?
			<>
				<Link to="/login">Login</Link>
				<Link to="/about">About</Link>
				<Link to="/register">Register</Link>	
			</>
			:
			<>
				 <Link to="/my-articles">My Articles</Link>
				 <Link to="/home">Home</Link>
    	         <Link to="/logout">Logout</Link>
			</>
		}	
		</div>
		);

}

export default Header;