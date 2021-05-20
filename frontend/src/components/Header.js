import React from "react";
import Avatar from '@material-ui/core/Avatar';
// import axios from "axios";
import {Route,Link,useRouteMatch} from "react-router-dom";
import {connect} from 'react-redux';


//css
import "./Header.css";


//context
import { CssBaseline } from "@material-ui/core";
import Menu from "./Menu.js";

function Header(props){
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
			!props.login
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
				 <div className="Header__nav-bar-div--right">
					<div>
						<Menu items={[
							{itemName:"Profile",clickHandler:"",matchUrl:"my-profile"},
							{itemName:"Settings",clickHandler:"",matchUrl:"settings"},
							{itemName:"Logout",clickHandler:"",matchUrl:"logout"}
						]}>
							<Avatar aria-controls="simple-menu" aria-haspopup="true"></Avatar>
						</Menu>
					</div>
					{/* <div className="Header__nav-bar-button">
						<Link to="/logout">Logout</Link>
					</div> */}
				 </div>
			</>
		}	
		</div>
		);

}

function mapStateToProps(state){
	return {
		login: state.app.login
	}
}
export default connect(mapStateToProps)(Header);