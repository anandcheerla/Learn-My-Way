import React from 'react';
import axios from 'axios';
import './App.css';


class Units extends React.Component{

  render(){
    return (
       <div>
         {
          this.props.units.map(element=>(
            <Unit heading={element.heading} shortDescription={element.shortDescription} longDescription={element.longDescription}></Unit>
          ))
         }
      </div>
    );
  }

}

class Unit extends React.Component{

  constructor(props){
      super(props);
      this.state={
          modal_display: "none"
      }
  }
  onClickHandler=(event)=>{

    if(this.state.modal_display=="none")
    {
          this.setState({
            modal_display: "block" 
          });
    }
    else if(this.state.modal_display=="block")
    {
          this.setState({
            modal_display: "none"
          });
    }

  }

  closeButtonHandler=()=>{
      this.setState({
            modal_display: "none" 
      });

  }
  render(){

      let unit_modal_style={
              "display": this.state.modal_display, /* Hidden by default */
              "position": "fixed", /* Stay in place */
              "z-index": "1", /* Sit on top */
              "padding-top": "100px", /* Location of the box */
              "left": "0",
              "top": "0",
              "width": "100%", /* Full width */
              "height": "100%", /* Full height */
              "overflow": "auto", /* Enable scroll if needed */
              "background-color": "rgb(0,0,0)", /* Fallback color */
              "background-color": "rgba(0,0,0,0.4)" /* Black w/ opacity */          
      }
      let unit_modal_content_style={
            "background-color": "#fefefe",
            "margin": "auto",
            "padding": "20px",
            "border": "1px solid #888",
            "width": "80%"

      }

      return (
        <div>
          <div className="unit" onClick={this.onClickHandler}>
            <div className="unitHeading">
              <h3>{this.props.heading}</h3>
            </div>
            <div className="unitShortDescription">
              <p>{this.props.shortDescription}</p>
            </div>
          </div>

          <div className="unitModal" style={unit_modal_style}>
            <div className="unitModalContent" style={unit_modal_content_style}>
                <h2>{this.props.heading}</h2>
                <h5>{this.props.shortDescription}</h5>
                <p>{this.props.longDescription}</p>
                <br/>  
                <span className="closeButton" onClick={this.closeButtonHandler}>CLOSE</span>
            </div>
            
          </div>

        </div>
        );
  }
}


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

    submitHandler=(event)=>{
      event.preventDefault();
       let formData={
          heading:event.target.heading.value,
          shortDescription:event.target.shortDescription.value,
          longDescription:event.target.longDescription.value,
          priority:event.target.priority.value 
       }

       // console.log(formData);
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
        </div>
        );
    }

}

class App extends React.Component{

  render(){
    return <Akc/>
  }
}
export default App;
