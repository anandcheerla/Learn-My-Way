import React, { useContext } from 'react';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import ls from 'local-storage';
import { useHistory } from 'react-router';
import axios from 'axios';

//css
import "./UnitModal.css";

//context
import {AppContext} from '../AppContext.js';




function UnitModal(props){
	const history = useHistory();
	const appCtx = useContext(AppContext);

	const areYouSureModal = () => {

		return window.confirm("Are you sure, you want to delete the article ?");
	
	  };
	  
	
	const closeButtonHandler=(e)=>{
		if(e)
			e.preventDefault();
		history.goBack();
	}

	const deleteUnitButtonHandler=()=>{
		if(areYouSureModal()){
			axios.delete("/unit-delete/"+props.articleId+"/"+props.unitId).then(res=>{
			ls.set(props.unitId,{unitDeleted:true});
			closeButtonHandler();

			});
		}
	  }

	
	return (
		<div id="UnitModal">
			<h2>{props.heading}</h2>
			<h3>{props.shortDescription}</h3>
			<h3>{props.longDescription}</h3>
			<h2>{props.priority}</h2>
			<h2>{props.complexity}</h2>
			{
			appCtx.username.get === props.uploaderUserName
			&&
			<div>
				<h3>Edit</h3>
				<h3 onClick={deleteUnitButtonHandler}>Delete</h3>
			</div>
			}
			
			<h1 onClick={(e)=>closeButtonHandler(e)}>CLOSE X</h1>
		</div>
		);
}

export default UnitModal;