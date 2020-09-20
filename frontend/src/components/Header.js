import React from "react";
import axios from "axios";
import {Route,Link} from "react-router-dom";
import "./Header.css";


function Header(props){

	console.log(props.children);
	
	return(
		<div id="Header">
			{props.children && props.children.length === 2 && props.children[0]}
			<Link to="/about">About</Link>
			{props.children && props.children.length === 2 && props.children[1]}
		</div>
		);

}

export default Header;