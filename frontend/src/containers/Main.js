import React from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import {connect} from 'react-redux';

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


function Main(props){


	return (
		<div id="Main">
			<div id="Main__header">
				<Header>
				</Header>
			</div>
			<div id="Main__body">
				<Switch>
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
					<Route path={["/home","/my-articles","/my-profile","/settings"]}>
						<ProtectedRoute login={props.login}>
							<div id="Main__home">
								<Home/>
							</div>
						</ProtectedRoute>
					</Route>

					<Route path="/">
						<StartUp/>
					</Route>
					
				</Switch>
			</div>
			<div id="Main__footer">

			</div>
			
		</div>

	);
   	
} 

function ProtectedRoute(props){
			return (
			<>
			{
				props.login
				?
				props.children
				:
				<Redirect to="/login"/>

			}
			</>
		);
}

function mapStateToProps(state){
	return {
		login: state.app.login
	}
}
export default connect(mapStateToProps)(Main);
