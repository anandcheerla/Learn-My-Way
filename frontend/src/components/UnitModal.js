import React from 'react';

import Unit from './Unit.js';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

//user defined packages or files
import '.././App.css';
import ls from 'local-storage';

class UnitModal extends React.Component{

	constructor(props){
		super(props);
		this.state={
			headingEdit: false,
			sdEdit: false,
			ldEdit: false,
			priorityEdit: false,
			complexityEdit: false,
			heading: this.props.heading,
			shortDescription: this.props.shortDescription,
			longDescription: this.props.longDescription,
			priority: this.props.priority,
			complexity: this.props.complexity,
			unitDeleted: this.props.unitDeleted,
			editUnitMode: false,
			headingInput: "",
			shortDescriptionInput: "",
			longDescriptionInput: "",
			priorityInput: "",
			complexityInput: ""
		}
	}


	render(){
	 return (
      <div id="unit-unit-modal-container-1">
        <div id="unit-unit-modal-container-2">
        {  
          <div id="unit-unit-modal">
            <div id="unit-unit-modal-left">
              <div id="unit-unit-modal-heading">
              	{
	              	!this.state.headingEdit
	              	?
	                <h3>{this.state.heading}</h3>		           
	                :
	                <div className="">
		              	<TextareaAutosize className="" id="heading" name="heading" onChange={(e)=>{this.props.handleHeadingInput(e)}} value={this.state.headingInput||this.state.heading}/>
		            </div>
            	}
              </div>
              <div id="unit-unit-modal-short-desc">
                <h4>Short Description</h4>
                {!this.state.sdEdit 
                 ? 
                 <EditIcon onClick={()=>{this.setState({sdEdit:!this.state.sdEdit})}}/>
                 :
                 <CancelIcon onClick={()=>{this.setState({sdEdit:!this.state.sdEdit})}}/>
             	}

                <div class="unit-unit-modal-desc-value">
                  {
	                  !this.state.sdEdit
	                  ?
	                  <p>{this.state.shortDescription}</p>	                  		
	                  :
	                  <div className="">
			          		<TextareaAutosize type="text" className="" rowsMin={3} id="shortDescription" name="shortDescription" onChange={(e)=>{this.props.handleShortDescriptionInput(e)}} value={this.state.shortDescriptionInput||this.state.shortDescription}/>
			          </div>
                  }
                </div>
              </div>
              <div id="unit-unit-modal-long-desc">
                <h4>Long Description</h4>
               	{!this.state.ldEdit 
                 ? 
                 <EditIcon onClick={()=>{this.setState({ldEdit:!this.state.ldEdit})}}/>
                 :
                 <CancelIcon onClick={()=>{this.setState({ldEdit:!this.state.ldEdit})}}/>
             	}                
                <div class="unit-unit-modal-desc-value">
                   {
	                  !this.state.ldEdit
	                  ?
	                  <p>{this.state.longDescription}</p>	                  		
	                  :
			          <div className="">
			             <TextareaAutosize type="text" className="" rowsMin={4} id="longDescription" name="longDescription" onChange={(e)=>{this.props.handleLongDescriptionInput(e)}} value={this.state.longDescriptionInput||this.state.longDescription}/>
			          </div>
                  }
                </div>  
              </div>
            </div>
            <div id="unit-unit-modal-right">
              <div id="unit-unit-modal-close-button">
                <button onClick={this.props.closeButtonHandler} type="button" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {
              this.props.sectionName==="myArticles" &&
              <div id="unit-unit-modal-settings-tab">
                    <div><h6 id="unitDeleteButton" onClick={()=>this.props.deleteUnitButtonHandler()}>Delete</h6></div>
              </div>
              }
              <div id="unit-unit-modal-unit-info">
                <div id="unit-unit-modal-unit-priority">
                  {
                  	!this.state.priorityEdit
                  	?
                  	<>
	                  	 {this.state.priority}
		                 <EditIcon onClick={()=>{this.setState({priorityEdit:!this.state.priorityEdit})}}/>
	             	</>
	             	:
	             	<div className="">
		              <select className="" id="priority" onChange={(e)=>{this.handlePriorityInput(e)}} value={this.state.priorityInput||this.state.priority}>
		                <option value="1">1</option>
		                <option value="2">2</option>
		                <option value="3">3</option>
		                <option value="4">4</option>
		                <option value="5">5</option>
		              </select>
		            </div>
                  }
                </div>
                <div id="unit-unit-modal-unit-complexity">
                  {
                  	!this.state.complexityEdit
                  	?
                  	<>
	                  	{this.state.complexity}
		                <EditIcon onClick={()=>{this.setState({complexityEdit:!this.state.complexityEdit})}}/>
	             	</>
	             	:
		            <div className="">
		              <select className="" id="complexity" onChange={(e)=>{this.handleComplexityInput(e)}} value={this.state.complexityInput||this.state.complexity}>
		                <option value="basic">Basic</option>
		                <option value="easy">Easy</option>
		                <option value="medium">Medium</option>
		                <option value="hard">Hard</option>
		              </select>
		            </div>	             	

                  }
                </div>
              </div>
            </div>
          </div>
        }
		</div> 
      </div>
      );
	}//render method end

}

export default UnitModal;