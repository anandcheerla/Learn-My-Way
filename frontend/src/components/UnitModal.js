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
		<div id="UnitModal">
			<div id="UnitModal__inner-div">
				<div id="UnitModal__unit-data">
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
				<div>
					<div class="UnitModal__close-icon">
						<CloseIcon onClick={(e)=>closeButtonHandler(e)}/>
					</div>
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
					<div className="UnitModal__unit-type">
						<div class="UnitModal__star-icons">
						{
							Array(props.priority).fill(1).map(()=>(<StarIcon/>))
						}
						{
							Array(5-props.priority).fill(1).map(()=>(<StarBorderIcon/>))
						}
						</div>
						<div class="UnitModal__complexity">
							<h2>{props.complexity.toUpperCase()}</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
}

export default UnitModal;