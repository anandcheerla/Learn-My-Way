import React,{useContext} from "react";
import Avatar from '@material-ui/core/Avatar';
// import axios from "axios";
import {Route,Link,useRouteMatch} from "react-router-dom";


//css
import "./Header.css";


//context
import {AppContext} from '../AppContext.js';
import { CssBaseline } from "@material-ui/core";

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
				<div className="Header__nav-bar-button">
					<Link to="/login">Login</Link>
				</div>
				<div className="Header__nav-bar-button">
					<Link to="/about">About</Link>
				</div>
				<div className="Header__nav-bar-button">
					<Link to="/register">Register</Link>	
				</div>
			</>
			:
			<>
				 <div className="Header__nav-bar-button">
					 <Link to="/my-articles">My Articles</Link>
				 </div>
				 <div className="Header__nav-bar-button">
					 <Link to="/home">Home</Link>
				 </div>
				 <div>
				 	<Avatar>A</Avatar>
				 </div>
    	         <div className="Header__nav-bar-button">
					 <Link to="/logout">Logout</Link>
				 </div>
			</>
		}	
		</div>
		);

}

export default Header;