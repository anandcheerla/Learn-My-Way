import React, { useContext, useState } from 'react';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
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

	const [moreClicked,setMoreClicked] = useState(false);

	const areYouSureModal = () => {

		return window.confirm("Are you sure, you want to delete the article ?");
	
	  };
	  
	
	const closeButtonHandler=(e)=>{
		if(e)
			e.preventDefault();
		history.goBack();
	}


	const deleteUnitButtonHandler = () => {
	if(areYouSureModal()){
		axios
			.delete(`/user/${props.articleId}/delete-unit/${props.unitId}`)
			.then((res) => {
				ls.set(props.unitId,{deleted:true});
				closeButtonHandler();
			});
	}
	};



	return (
		<div className="UnitModal">
			<div className="UnitModal__inner-div">
				<div className="UnitModal--top-align">
					<div className="UnitModal__unit-type">
							<h2>{`${props.complexity.toUpperCase()}-${props.priority}/5`}</h2>
					</div>
					<div class="UnitModal__close-icon">
						<CloseIcon onClick={(e)=>closeButtonHandler(e)}/>
					</div>
				</div>
				<div className="UnitModal--middle-align">
				<div className="UnitModal__unit-data--left-align">
					{
					props.heading!=""
					&&
					<div className="UnitModal__heading">
						<h2>{props.heading}</h2>
					</div>
					}
					{
					props.shortDescription!=""
					&&
					<div className="UnitModal--background-grey">      
						<p>{props.shortDescription}</p>
					</div>
					}
					{
					props.longDescription!=""
					&&
					<div className="UnitModal--background-grey">
						<p>{props.longDescription}</p>
					</div>
					}
				</div>
				<div className="UnitModal__unit-details--right-align">
					{
					props.articleType==="myArticle"
					&&
					<div className="UnitModal__more">
						<div onClick={(e)=>{setMoreClicked(!moreClicked)}}>
							More{/* More <ExpandMoreIcon/> */}
						</div>
						{
						moreClicked
						&&
						<div onClick={deleteUnitButtonHandler}>
							Delete
						</div>
						}
						{
						moreClicked
						&&
						<div>
							Edit
						</div>
						}
					</div>
					}
					
				</div>
				</div>
			</div>
		</div>
		);
}

export default UnitModal;