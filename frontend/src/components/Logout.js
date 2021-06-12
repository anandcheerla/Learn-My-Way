import React from 'react';
import axios from "axios";
import ls from 'local-storage';
import {connect} from 'react-redux';

import {setLogin} from '../redux/reducers/app';


function Logout(props){	
	axios.get("/user/logout").then((res)=>{
		props.setLogin(false);
		ls.clear();
	});

	return (
		<div>
		</div>
	);

}


export default connect(null,{setLogin})(Logout);