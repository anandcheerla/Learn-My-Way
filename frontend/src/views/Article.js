import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ls from 'local-storage';

//user defined packages or files
import '.././App.css';
import Unit from './Unit.js';

class Article extends React.Component{
  constructor(props){
    super(props);
    this.state={
      dbId:this.props.dbId,
      heading: this.props.heading,
      description: this.props.description,
      units: this.props.units,
      showArticleCreationForm: false,
      showUnitCreationForm: false,
      articleClicked: false
    };
  }//constructor end

  componentDidMount(){
    // console.log("article component mounted");
  }


  //add unit api call to /add-unit route and append the unit to units property of state
  createUnit=(event)=>
  {
    //to prevent the default behaviour of the event
    event.preventDefault();

    let formData={
      heading:event.target.heading.value,
      shortDescription:event.target.shortDescription.value,
      longDescription:event.target.longDescription.value,
      priority:event.target.priority.value,
      complexity:event.target.complexity.value 
    }

    axios.post("/add-unit/"+this.state.dbId,formData).then(res=>{
        let units_temp_var=[...this.state.units,res.data];
        this.setState({
            units: units_temp_var
        });
        // console.log()

        // this.props.unitAdd(units_temp_var);
       
    });

    //to reset the form
    event.target.reset();
  }//createUnit method end


  //this method will return the form for unit creation
  unitCreationForm=()=>{
    return (
      <form name="createUnit" onSubmit={this.createUnit} >
        <div className="form-group">
          <label htmlFor="heading"></label>
          <input type="text" className="form-control" id="heading" name="heading" placeholder="Heading"/>
        </div>
        <div className="form-group">
          <label htmlFor="shortDescription"></label>
          <textarea type="textarea" className="form-control" id="shortDescription" name="shortDescription" placeholder="Short description"/>
        </div>
        <div className="form-group">
          <label htmlFor="longDescription"></label>
          <textarea type="text" className="form-control" id="longDescription" name="longDescription" placeholder="Long description"/>
        </div>
        <div className="form-group">
          <label htmlFor="priority"></label>
          <select className="form-control" id="priority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complexity"></label>
          <select className="form-control" id="complexity">
            <option value="basic">Basic</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }//unitCreationForm method end


  articleClickHandler=()=>{
    // console.log("article click handler is called");
    if(this.state.articleClicked){
      this.setState({articleClicked: false});
    }
    else{
      this.setState({articleClicked: true});
    }
  }//articleClickHandler end


  render(){
    return (
     <div onClick={()=>{this.articleClickHandler()}}>
        <div>
          <h1>{this.state.heading}</h1>
          <h4>{this.state.description}</h4>
        </div>
        {
          this.state.articleClicked?
          <div> 
              <button onClick={(e)=>{e.stopPropagation();this.setState({showUnitCreationForm:true});}} className="btn btn-outline-primary">New Unit</button>
          </div>
          :
         null
        }
        {
          this.state.articleClicked &&
          <div onClick={(e)=>e.stopPropagation()}>
            {
              this.state.units.map(element=>(
                <Unit mid={element._id} heading={element.heading} shortDescription={element.shortDescription} longDescription={element.longDescription} complexity={element.complexity}></Unit>
              ))
            }
            <div className="unitCreationForm">
            {this.state.showUnitCreationForm && this.unitCreationForm()}
            </div>
          </div>
        }
      </div>
      );
    }//render method end

  }//class Article end

export default Article;