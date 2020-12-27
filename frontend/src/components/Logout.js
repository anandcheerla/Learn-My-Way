import React,{useContext} from 'react';
import axios from "axios";
import ls from 'local-storage';


//context
import {AppContext} from "../AppContext.js";

function Logout(props){
	let appCtx=useContext(AppContext);
		
	axios.get("/user/logout").then((res)=>{
		appCtx.login.set(false);
		ls.clear();
	});

	return (
		<div>
		</div>
	);

}

export default Logout;