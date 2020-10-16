import React from 'react';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import ls from 'local-storage';

//css
import "./UnitModal.css";



function UnitModal(props){


	return (
		<div id="UnitModal">
			<h2>{props.heading}</h2>
			<h3>{props.shortDescription}</h3>
			<h3>{props.longDescription}</h3>
			<h2>{props.priority}</h2>
			<h2>{props.complexity}</h2>
			<h1>CLOSE X</h1>
		</div>
		);
}

export default UnitModal;