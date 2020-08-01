import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import ls from 'local-storage';

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
      filteredUnits: this.props.units,
      showArticleCreationForm: false,
      showUnitCreationForm: false,
      articleClicked: false,
      articleDeleted: false
    };
  }//constructor end

  componentDidMount(){

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
        
        let complexity = document.getElementById("complexity-dropdown-filter-id").value;
        let importance = document.getElementById("importance-dropdown-filter-id").value;

        if((complexity ==="all" || formData.complexity===complexity) && (importance === "all" || formData.priority===importance))
        {
          this.setState({
            units: units_temp_var,
            filteredUnits: units_temp_var
          });
        }

        else{
          this.setState({
              units: units_temp_var
          });
        }
    
       
    });

    //to reset the form
    event.target.reset();
  }//createUnit method end


  filterByDifficulty=(event)=>{
      event.preventDefault();
      let complexity = event.target.value;
      let importance = document.getElementById("importance-dropdown-filter-id").value;


      let units=[...this.state.units];
      let required_units=[];

      for(let i=0;i<units.length;i++)
      {
        if((complexity === "all" || units[i].complexity===complexity) && (importance==="all" || units[i].priority===Number(importance)))
          required_units.push(units[i]);
      }
      // debugger;
      this.setState({
        filteredUnits: required_units
      });

  }

  filterByImportance=(event)=>{
    event.preventDefault();
      let importance = event.target.value;

      let complexity = document.getElementById("complexity-dropdown-filter-id").value;

      let units=[...this.state.units];
      let required_units=[];

     

      for(let i=0;i<units.length;i++)
      {
        if((importance==="all" || units[i].priority===Number(importance)) && (complexity==="all" || units[i].complexity===complexity))
          required_units.push(units[i]);
      }
      // debugger;
      this.setState({
        filteredUnits: required_units
      });
  }


  //this method will return the form for unit creation
  unitCreationForm=()=>{
    let align={
        "textAlign":"center"
      }

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
        <div style={align}>
          <button type="submit" className="btn btn-outline-primary" id="Create-unit-button">Create</button>
        </div>
      </form>
    );
  }//unitCreationForm method end


  articleClickHandler=()=>{
    // console.log("article click handler is called");
    if(this.state.articleClicked){
      this.setState({articleClicked: false});
    }
    else{
      this.setState({articleClicked: true,showUnitCreationForm:true});
    }
  }//articleClickHandler end

  deletearticleButtonHandler=()=>{
     axios.delete("/article-delete/"+this.props.dbId).then(res=>{
      console.log(res);
      this.setState({articleDeleted: true});
    });
  }

  render(){

     // {
     //        !this.state.articleClicked &&
     //        <div style={{"float":"right"}}>
     //            <button onClick={()=>this.deletearticleButtonHandler()} type="button" class="btn btn-danger">Delete</button>
     //        </div>
     //  }
     // let units;
     // axios.get("/get-units/"+this.props.dbId).then(res=>{
     //    console.log(res);
     //  // this.setState({units:res});
     // });

    return (
    <div>
      {
       !this.state.articleDeleted
        &&
        <div onClick={()=>{this.articleClickHandler()}}>
          <div>
            <h1>{this.state.heading}</h1>
            <h4>{this.state.description}</h4>
            {
              this.state.articleClicked
              &&
              <div>
                <div onClick={(e)=>e.stopPropagation()} className="complexity-dropdown-filter-class">
                  <select name="complexity" id="complexity-dropdown-filter-id" onChange={(e)=>this.filterByDifficulty(e)}>
                    <option value="all">ALL</option>                  
                    <option value="basic">Basic</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div onClick={(e)=>e.stopPropagation()} className="importance-dropdown-filter-class">
                  <select name="complexity" id="importance-dropdown-filter-id" onChange={(e)=>this.filterByImportance(e)}>
                    <option value="all">ALL</option>                  
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            }
          </div>

          {
            this.state.articleClicked
            &&
            <div onClick={(e)=>e.stopPropagation()}>
              {
                this.state.filteredUnits.map(element=>(
                  <Unit 
                    key={element._id}
                    unitId={element._id} 
                    articleId={this.props.dbId} 
                    heading={element.heading} 
                    shortDescription={element.shortDescription} 
                    longDescription={element.longDescription}
                    priority={element.priority} 
                    complexity={element.complexity} 
                    sectionName={this.props.sectionName}>
                  </Unit>
                ))
              }

              <div id="unitCreationForm" className="unitCreationForm">
                {
                  this.props.sectionName==="myArticles"
                   &&
                   this.state.showUnitCreationForm
                   &&
                   this.unitCreationForm()
                }
              </div>
            </div>
          }
        </div>
        
      }
      </div>
      );
    }//render method end

  }//class Article end

export default Article;