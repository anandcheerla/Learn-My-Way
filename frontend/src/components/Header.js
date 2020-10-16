import React from "react";
import axios from "axios";
import {Route,Link} from "react-router-dom";
import "./Header.css";


function Header(props){
	
	return(
		<div id="Header">
		{
			props.children.map((header_link)=>{
				return header_link;
			})
		}	
		</div>
		);

}

export default Header;