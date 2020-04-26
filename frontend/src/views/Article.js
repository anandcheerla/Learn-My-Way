import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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

  }

  componentDidMount(){
    console.log("article component mounted");
  }


createUnit=(event)=>
{
     event.preventDefault();
     let formData={
        heading:event.target.heading.value,
        shortDescription:event.target.shortDescription.value,
        longDescription:event.target.longDescription.value,
        priority:event.target.priority.value 
      }
      axios.post("/add-unit/"+this.state.dbId,formData).then(res=>{
          this.setState({
              units: [...this.state.units,res.data]
          });
      });
        // this.fetcharticleFromDb();
}

unitCreationForm=()=>{
    return (
      <form name="createUnit" onSubmit={this.createUnit} >
            <div className="form-group">
              <label htmlFor="heading">Heading</label>
              <input type="text" className="form-control" id="heading" name="heading" placeholder="Heading"/>
            </div>
            <div className="form-group">
              <label htmlFor="shortDescription">Short description</label>
              <textarea type="textarea" className="form-control" id="shortDescription" name="shortDescription" placeholder="Short description"/>
            </div>
            <div className="form-group">
              <label htmlFor="longDescription">Long description</label>
              <textarea type="text" className="form-control" id="longDescription" name="longDescription" placeholder="Long description"/>
            </div>
             <div className="form-group">
              <label htmlFor="priority">priority</label>
              <input type="text" className="form-control" id="priority" name="priority" placeholder="priority"/>
            </div>  
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  }


articleClickHandler=()=>{
  console.log("article click handler is called");
  this.setState({
    articleClicked: true
  });

}


render(){

  return (
     <div onClick={!this.state.articleClicked ? ()=>{this.articleClickHandler()} : null}>

        <div>
          <h1>{this.state.heading}</h1>
          <h4>{this.state.description}</h4>
        </div>
        {this.state.articleClicked?
        <div> 
            <button onClick={()=>this.setState({showUnitCreationForm:true})} className="btn btn-primary">New Unit</button>
        </div>
        :
        null}
        <div>
        {
          this.state.articleClicked
          ?
          this.state.units.map(element=>(
            <Unit mid={element._id} heading={element.heading} shortDescription={element.shortDescription} longDescription={element.longDescription}></Unit>
          ))
          :
          null
        }
        </div>
        {this.state.showUnitCreationForm ? this.unitCreationForm() : null}

     </div>
    );
  }
}

export default Article;