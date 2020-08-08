import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import ls from 'local-storage';

//user defined packages or files
import '.././App.css';
import Unit from './Unit.js';
import ls from 'local-storage';

class Article extends React.Component{
  constructor(props){
    super(props);

    this.state={
      dbId: this.props.dbId,
      heading: (ls.get(this.props.dbId) && ls.get(this.props.dbId).heading) || this.props.heading,
      description: (ls.get(this.props.dbId) && ls.get(this.props.dbId).description) || this.props.description,
      units: (ls.get(this.props.dbId) && ls.get(this.props.dbId).units) || this.props.units,
      filteredUnits: (ls.get(this.props.dbId) && ls.get(this.props.dbId).filteredUnits) || this.props.units,
      showArticleCreationForm: false,
      showUnitCreationForm: false,
      articleClicked: false,
      articleDeleted: (ls.get(this.props.dbId) && ls.get(this.props.dbId).articleDeleted) || false,
      articleDeleteButtonClicked: true
    };
  }//constructor end

  componentDidMount(){
    
  }


  areYouSureModal = ()=>{

      
    
  }


  //add unit api call to /add-unit route and append the unit to units property of state
  createUnit=(event)=>
  {
    //to prevent the default behaviour of the event
    event.preventDefault();

    let acub = document.getElementById("article-create-unit-button");
    acub.style.opacity=0.7;

    let priority_l=5;
    let complexity_l="easy";
    if(event.target.priority.value!=="priority")
        priority_l=event.target.priority.value;

    if(event.target.complexity.value!=="complexity")
        complexity_l=event.target.complexity.value;

    let formData={
      heading:event.target.heading.value,
      shortDescription:event.target.shortDescription.value,
      longDescription:event.target.longDescription.value,
      priority: priority_l,
      complexity: complexity_l
    }

    let currentState = [...this.state.units];
    let units_temp=[...currentState,formData];
    this.setState({
      units:units_temp
    });


    axios.post("/add-unit/"+this.state.dbId,formData).then(res=>{
        // debugger;

        let units_temp_var=[...currentState,res.data];

        let complexity = document.getElementById("complexity-dropdown-filter-id").value;
        let importance = document.getElementById("importance-dropdown-filter-id").value;

        if((complexity ==="all" || formData.complexity===complexity) && (importance === "all" || formData.priority===importance))
        {

          ls.set(this.props.dbId,{
            units: units_temp_var,
            filteredUnits: units_temp_var
          });

          this.setState({
            units: units_temp_var,
            filteredUnits: units_temp_var
          });
        }

        else{
          
          ls.set(this.props.dbId,{
              units: units_temp_var
          });

          this.setState({
              units: units_temp_var
          });
        }
        acub.style.opacity=1;

    
       
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

  articleSettings=(event)=>{
    event.preventDefault();
    event.persist();

    let setting=event.target.value;
    // debugger;
    if(setting === "delete_article"){
       this.setState({
        articleDeleteButtonClicked: true
       });
       this.deletearticleHandler();
     }
     else if(setting === "post_article"){
        if(event.target.selectedOptions[0].label==="Make private"){
            axios.post('/settings/article-visibility/'+this.props.dbId,{visibility: "private"}).then(res=>{
                if(res.data==="success")
                  event.target.selectedOptions[0].label="Make public";
            });
        }
        else{
          axios.post('/settings/article-visibility/'+this.props.dbId,{visibility: "public"}).then(res=>{
              if(res.data==="success")
                  event.target.selectedOptions[0].label="Make private";
              
            });
        }
     }

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
          <textarea type="textarea" className="form-control" id="shortDescription" name="shortDescription" placeholder="Short description" required/>
        </div>
        <div className="form-group">
          <label htmlFor="longDescription"></label>
          <textarea type="text" className="form-control" id="longDescription" name="longDescription" placeholder="Long description"/>
        </div>
        <div className="form-group">
          <label htmlFor="priority"></label>
          <select className="form-control" id="priority">
            <option value="priority">Priority</option>
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
            <option value="complexity">Complexity</option>
            <option value="basic">Basic</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div style={align}>
          <button type="submit" className="btn btn-outline-primary" id="article-create-unit-button">Create</button>
        </div>
      </form>
    );
  }//unitCreationForm method end


  articleClickHandler=()=>{
    // console.log("article click handler is called");
    let non_filtered_units=[...this.state.units];
    if(this.state.articleClicked){
      this.setState({articleClicked: false,filteredUnits: non_filtered_units});
    }
    else{
      this.setState({articleClicked: true,showUnitCreationForm:true});
    }
  }//articleClickHandler end

  deletearticleHandler=()=>{


     axios.delete("/article-delete/"+this.props.dbId).then(res=>{
      ls.set(this.props.dbId,{articleDeleted: true});
      this.setState({articleDeleted: true});
    });
  }



  render(){

    let currentTs=new Date();
    let articleTs=new Date(this.props.lastUpdatedTime);
    let diff=currentTs-articleTs;
    let minutes=diff/(1000*60);   //1000 is for milli seconds and 60 for seconds

    let uploadedTime;
    if(Math.floor(minutes/60)>0){
      if(Math.floor(minutes/(60*24))>0){
        uploadedTime=Math.floor(minutes/(60*24));
        if(uploadedTime===1)
          uploadedTime+=" day ago";
        else
          uploadedTime+=" days ago";
      }
      else{
        uploadedTime=Math.floor(minutes/60);
        if(uploadedTime===1)
          uploadedTime+=" hour ago";
        else
          uploadedTime+=" hours ago";
      }
    }
    else{
        uploadedTime=Math.floor(minutes); 
        if(uploadedTime>=0 && uploadedTime<3)
          uploadedTime="Just now";
        else
          uploadedTime+=" minutes ago";    
    }


    let uploader_info_style={
      "border": "1px solid grey",
      "borderRadius": "10px",
      "padding": "5px",
      "backgroundColor": "#aab3ad",
      "float": "right"
    }

    return (
      <div>
      {
        !this.state.articleDeleted
        &&
        <div id="article-article" onClick={()=>{this.articleClickHandler()}}>
            


              <div id="article-article-top">
                <div id="article-article-heading">
                  <h1>{this.state.heading}</h1>
                </div>
                <div id="article-article-description">
                  <h4>{this.state.description}</h4>
                </div>
              </div>


              <div id="article-article-bottom-right">
                <div style={uploader_info_style} id="article-article-upload-info">
                  <h6>{this.props.uploaderFirstName}</h6>
                  {!this.state.articleClicked && <h6>{uploadedTime}</h6>}
                </div>
              </div>


              {

              this.state.articleClicked
              &&
              <div id="article-article-filters">

                <div onClick={(e)=>e.stopPropagation()} id="article-article-complexity-filter">
                  <select name="complexity" id="complexity-dropdown-filter-id" onChange={(e)=>this.filterByDifficulty(e)}>

                    <option value="all">Complexity</option>                  
                    <option value="basic">Basic</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                <div onClick={(e)=>e.stopPropagation()} id="article-article-priority-filter">
                  <select name="priority" id="importance-dropdown-filter-id" onChange={(e)=>this.filterByImportance(e)}>
                    <option value="all">Priority</option>                  
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                {
                this.props.sectionName==="myArticles"
                &&
                <div onClick={(e)=>e.stopPropagation()} className="article-article-settings">
                  <select name="settings" id="settings-dropdown-filter-id" onChange={(e)=>this.articleSettings(e)}>
                    <option value="settings">settings</option>
                    <option value="delete_article">Delete Article</option>
                    <option value="post_article">Make {this.props.visibility==="private"?"public":"private"}</option>
                  </select>
                </div>

                }

              </div>
              }

              
              {
              this.state.articleClicked
              &&
              <div id="article-article-middle"  onClick={(e)=>e.stopPropagation()}>
                <div id="article-article-units">
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
                </div>

                <div id="article-article-unit-creation-form">
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

    }//render

  }//class Article end

export default Article;