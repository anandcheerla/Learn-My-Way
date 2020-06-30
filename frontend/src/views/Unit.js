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
          unitDeleted: false
      }
  }//constructor end


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
  render(){

    //inline styles in the form of variables
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
      "white-space": "pre-wrap"
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
              <h2 style={wrap}>{this.state.heading}</h2>
              <h5 style={wrap}>{this.state.shortDescription}</h5>
              <p style={wrap}>{this.state.longDescription}</p>
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