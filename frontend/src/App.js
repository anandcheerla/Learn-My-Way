import React from 'react';
import axios from 'axios';
import './App.css';

import Units from './views/Units.js';




class Akc extends React.Component{
    constructor(props){
      super(props);
      this.state={
        units:[]
      };
       
      
    }

    componentDidMount(){
       this.fetchUnitsFromDb();
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
      
        axios.post("http://localhost:5000/add_unit",formData)
        this.fetchUnitsFromDb();
    }

    render(){
        return (
        <div className="board">
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
