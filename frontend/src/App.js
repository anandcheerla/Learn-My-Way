import React from 'react';
import axios from 'axios';
import './App.css';

import Units from './views/Units.js';

class Akc extends React.Component{
    constructor(props){
      super(props);
      this.state={
        units:[],
        newArticleId: "hey"
      };
       
      
    }

    componentDidMount(){
       // this.fetchUnitsFromDb();
    }

    fetchUnitsFromDb=()=>{
      axios.get("http://localhost:5000/units").then(
          res=>{
            let unit=res.data;
            this.setState(state=>({
              units: unit
            }));

          }
      )
    }

    submitHandler=(event)=>
    {
       event.preventDefault();
       let formData={
          heading:event.target.heading.value,
          shortDescription:event.target.shortDescription.value,
          longDescription:event.target.longDescription.value,
          priority:event.target.priority.value 
        }
        console.log("hey "+this.state.newArticleId);
        axios.post("http://localhost:5000/"+this.state.newArticleId+"/add_unit",formData);
        // this.fetchUnitsFromDb();
    }

    newButtonClickHandler=()=>{

        axios.get("http://localhost:5000/new_article").then(res=>{
          let createdArticleId=res.data._id;
          console.log("this is "+this.state);
          // this.setState({
          //     units: [...this.state.units],
          //     newArticleId: createdArticleId 
          // });
        
        });
          console.log("hii is "+this.state);  
    }

    render(){
        return (
        <div className="board">
          <div> 
            <button onClick={this.newButtonClickHandler}>New</button>
          </div>
          <form onSubmit={this.submitHandler}>
            <label>Heading</label>
            <textarea name="heading"></textarea>
            <label>SD</label>
            <textarea name="shortDescription"></textarea>
            <label>LD</label>
            <textarea name="longDescription"></textarea>
            <label>priority</label>
            <input type="text" name="priority"></input>
            <input type="submit" name="form_submit"/>
          </form>

          <Units units={this.state.units}></Units>
        </div>);
    }

}

class App extends React.Component{

  render(){
    return <Akc/>
  }
}
export default App;
