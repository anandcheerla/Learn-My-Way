import React,{useState,useContext} from "react";
import {Route,Link,Redirect} from "react-router-dom";
// import axios from "axios";
// import ls from "local-storage";

//css
import "./Main.css";

//components
import Login from '../components/Login.js';
import Register from '../components/Register.js';
import Header from '../components/Header.js';
import Logout from '../components/Logout.js';


//containers
import About from './About.js';
import Home from './Home.js';
import StartUp from './StartUp.js';


//context
import {AppContext} from '../AppContext.js';


function Main(props){

	const appCtx = useContext(AppContext);
    
	return (
		<div id="Main">
			<div id="Main__header">
				<Header>
				</Header>
			</div>
			<div id="Main__body">
				
				<Route path="/login">
					<div id="Main__login">
						<Login/>
					</div>
				</Route>
				
				<Route path="/register">
					<div id="Main__register">
						<Register/>
					</div>
				</Route>
				
				<Route path="/about">
					<div id="Main__about">
						<About/>
					</div>
				</Route>
				<Route path="/logout">
					<div id="Main__logout">
						<Logout/>
					</div>
				</Route>
				<Route exact path="/">
					<StartUp/>
				</Route>
				<Route path="/:some_path">
					<ProtectedRoute>
						<div id="Main__home">
							<Home/>
						</div>
					</ProtectedRoute>
				</Route>

			</div>
			<div id="Main__footer">

			</div>
			
		</div>

	);
   	
} 

function ProtectedRoute(props){
		const appCtx = useContext(AppContext);

		return (
			<>
			{
				appCtx.login.get
				?
				props.children
				:
				<Redirect to="/login"/>

			}
			</>
		);
}

export default Main;
