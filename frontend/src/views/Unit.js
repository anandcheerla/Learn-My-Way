import React from 'react';
import axios from 'axios';

import '.././App.css';



class Unit extends React.Component{
  constructor(props){
      super(props);
      this.state={
          modalDisplay: "none"
      }
  }
  onClickHandler=(event)=>{

    if(this.state.modalDisplay=="none")
    {
          this.setState({
            modalDisplay: "block" 
          });
    }
    else if(this.state.modalDisplay=="block")
    {
          this.setState({
            modalDisplay: "none"
          });
    }

  }

  closeButtonHandler=()=>{
      
      this.setState({
            modalDisplay: "none" 
      });

  }
  render(){
      //can define inline styles like this
      let unitModalStyle={
              //taken from w3 schools
              "display": this.state.modalDisplay, /* Hidden by default */
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
      let unitModalContentStyle={
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

          <div className="unitModal" style={unitModalStyle}>
            <div className="unitModalContent" style={unitModalContentStyle}>
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

export default Unit;