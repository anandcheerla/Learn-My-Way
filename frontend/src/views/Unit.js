import React from 'react';
import axios from 'axios';

//user defined packages or files
import '.././App.css';


class Unit extends React.Component{
  constructor(props){
      super(props);
      this.state={
          modalDisplay: "none",
          heading: this.props.heading,
          shortDescription: this.props.shortDescription,
          longDescription: this.props.longDescription,
          priority: this.props.priority,
          complexity: this.props.complexity,
          unitDeleted: false,
          editUnitMode: false
      }
  }//constructor end


  onClickHandler=(event)=>{
    if(this.state.modalDisplay==="none")
    {
      this.setState({
        modalDisplay: "block" 
      });
    }
    else if(this.state.modalDisplay==="block")
    {
      this.setState({
        modalDisplay: "none"
      });
    }
  }//onClickHandler method end


  closeButtonHandler=()=>{  
    this.setState({
          modalDisplay: "none" 
    });
  }//closeButtonHandler method end

  deleteUnitButtonHandler=()=>{

    axios.delete("/unit-delete/"+this.props.articleId+"/"+this.props.unitId).then(res=>{
      console.log(res);
      this.setState({modalDisplay: "none",unitDeleted: true});
    });
  }


  // getSnapshotBeforeUpdate(prevProps,prevState){
  //   return prevState;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot){
  //     console.log(prevState);
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextState);
  //   return true;
  // }

  updateUnit = (event)=>{

    event.preventDefault();

    const {heading,shortDescription,longDescription,priority,complexity} = event.target;

    let formData={
      heading: heading.value,
      shortDescription: shortDescription.value,
      longDescription: longDescription.value,
      priority: priority.value,
      complexity: complexity.value
    }
    
    axios.put("/unit-update/"+this.props.articleId+"/"+this.props.unitId,formData).then(res=>{
      this.setState({
        editUnitMode:false,
        heading: formData.heading,
        shortDescription: formData.shortDescription,
        longDescription: formData.longDescription,
        priority: formData.priority,
        complexity: formData.complexity
      });
    });

  }
  unitCreationForm=()=>{
    let align={
        "textAlign":"center"
    }

      // console.log(typeof this.state.heading);
    return (
      <form name="createUnit" onSubmit={this.updateUnit} >
        <div className="form-group">
          <label htmlFor="heading"></label>
          <input type="text" className="form-control" id="heading" name="heading" defaultValue={this.state.heading}/>
        </div>
        <div className="form-group">
          <label htmlFor="shortDescription"></label>
          <textarea type="text" className="form-control" id="shortDescription" name="shortDescription" defaultValue={this.state.shortDescription}/>
        </div>
        <div className="form-group">
          <label htmlFor="longDescription"></label>
          <textarea type="text" className="form-control" id="longDescription" name="longDescription" defaultValue={this.state.longDescription}/>
        </div>
        <div className="form-group">
          <label htmlFor="priority"></label>
          <select className="form-control" id="priority" defaultValue={this.state.priority}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complexity"></label>
          <select className="form-control" id="complexity" defaultValue={this.state.complexity}>
            <option value="basic">Basic</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div style={align}>
          <button type="submit" className="btn btn-outline-primary" id="Create-unit-button">Create</button>
        </div>
      </form>
    );
  }//unitCreationForm method end


  render(){

    //inline styles in the form of variables
    let unitModalStyle={
      //taken from w3 schools
      "display": this.state.modalDisplay, /* Hidden by default */
      "position": "fixed", /* Stay in place */
      "zIndex": "1", /* Sit on top */
      "paddingTop": "100px", /* Location of the box */
      "left": "0",
      "top": "0",
      "width": "100%", /* Full width */
      "height": "100%", /* Full height */
      "overflow": "auto", /* Enable scroll if needed */
      /* Fallback color */
      "backgroundColor": "rgba(0,0,0,0.4)" /* Black w/ opacity */          
    }
    let unitModalContentStyle={
      "backgroundColor": "#fefefe",
      "margin": "auto",
      "padding": "20px",
      "border": "1px solid #888",
      "width": "80%"
    }

    let unitBorderColor={
      "basic":"#cfc10a",
      "easy":"#7dd943",
      "medium":"#f07f1d",
      "hard":"#f50525"
    }
    let unitStyle={
        "border": "2px solid "+unitBorderColor[this.props.complexity]
    }

    let wrap={
      "whiteSpace": "pre-wrap"
    }
    //<button style={{"float":"right"}} onClick={()=>this.deleteUnitButtonHandler()} type="button" class="btn btn-danger">Delete</button>
    return (
      
      <div>
        {
          !this.state.unitDeleted
          &&
          (
           <div> 
            <div style={unitStyle} className="unit" onClick={this.onClickHandler}>
              <div className="unitHeading">
                <h3 style={wrap}>{this.state.heading}</h3>
              </div>
              <div className="unitShortDescription">
                <p style={wrap}>{this.state.shortDescription}</p>
              </div>
            </div>

            <div className="unitModal" style={unitModalStyle}>
              <div className="unitModalContent" style={unitModalContentStyle}>
                  <span style={{"float":"right"}} className="closeButton" onClick={this.closeButtonHandler}>CLOSE</span> 
                  {  
                    !this.state.editUnitMode
                    && 
                    <div id="displayUnitMode">
                      {this.props.sectionName=="myArticles" && <h6 id="unitEditButton" onClick={()=>{this.setState({editUnitMode: true})}}>Edit</h6>}
                      <h2 style={wrap}>{this.state.heading}</h2>
                      <h5 style={wrap}>{this.state.shortDescription}</h5>
                      <p style={wrap}>{this.state.longDescription}</p>

                    </div>
                  }
                  {
                    this.state.editUnitMode
                    &&
                    <div id="editUnitMode"> 
                      {this.unitCreationForm()}
                    </div>
                  }
              </div> 
            </div>
          </div>
          )

        }

      </div>
    );
  }//render method end
}//class Unit end


export default Unit;