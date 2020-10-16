import React,{useState} from "react";
import {Route,Link} from "react-router-dom";
import axios from "axios";
import ls from "local-storage";

//css
import "./Main.css";

//components
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import Header from '../components/Header.js';

//containers
import About from './About.js';


function Main(props){


    
	return (
		<div id="Main">
			<div id="Main__header">
				<Header>
					<Link to="/login">Login</Link>
					<Link to="/about">About</Link>
					<Link to="/register">Register</Link>
				</Header>
			</div>
			<div id="Main__body">
				<div id="Main__login">
					<Route path="/login" component={Login}/>
				</div>
				<div id="Main__register">
					<Route path="/register" component={Register}/>
				</div>
				<div id="Main__about">
					<Route path="/about" component={About}/>
				</div>
			</div>
			<div id="Main__footer">

			</div>
			
		</div>

	);
   	
} 

export default Main;
