import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';

import Article from './views/Article.js';

class Akc extends React.Component{
    constructor(props){
      super(props);
      this.state={
        article:[],
        showRegisterForm: false,
        showLoginForm: false,
        showArticleCreationForm: false,
        showUnitCreationForm: false
      };
    }

    componentDidMount(){
       // this.fetcharticleFromDb();
    }

    fetcharticleFromDb=()=>{
      axios.get("/article").then(
          res=>{
            let unit=res.data;
            this.setState(state=>({
              article: unit
            }));
          }
      )
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
        axios.post("/add-unit",formData);
        // this.fetcharticleFromDb();
    }

    createArticle=(event)=>{
       event.preventDefault();
      
       axios.post("/new-article").then(res=>{
          let formData={
            heading: event.target.heading.value,
            description: event.target.description.value
          }

          if(res.data=="success"){
            this.setState({
              showArticleCreationForm:false,
              showUnitCreationForm:true
            });
          }
        
      });

    }

    userLogin=(event)=>{
      event.preventDefault();
      let formData={
        username: event.target.username.value,
        password: event.target.password.value
      }
     
     axios.post("/login",formData).then((res)=>{

      if(res.data=="success"){
          this.setState({
            showRegisterForm:false,
            showLoginForm:false,
          });
      }
      else{
        alert("Incorrect credentials");
      }

      });

    }

    userRegistration=(event)=>{
      event.preventDefault();
      let formData={
            username: event.target.username.value,
            password: event.target.password.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            contactNumber: event.target.contactNumber.value
          }

        axios.post("/register",formData).then((res)=>{
          this.setState({
            showRegisterForm:false,
            showLoginForm:true
          });

        });


    }




    userRegistrationForm=()=>{

        return (
          <form name="login" onSubmit={this.userRegistration}>

              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="first name"/>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="last name"/>
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="username"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="password"/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="email"/>
              </div>
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input type="text" className="form-control" id="contactNumber" name="contactNumber" placeholder="9999999999"/>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
          </form>

          );

    }

    userLoginForm=()=>{

        return (
          <form name="login" onSubmit={this.userLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="username"/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="password"/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>

          );

    }

    articleCreationForm=()=>{

        return (
          <form name="createArticle" onSubmit={this.createArticle}>
              <div className="form-group">
                <label htmlFor="heading">Name</label>
                <input type="text" className="form-control" id="articleHeading" name="heading" placeholder="heading"/>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea type="textarea" className="form-control" id="description" name="description" placeholder="description"/>
              </div>
              <button type="submit" className="btn btn-primary">Create</button>
          </form>

          );

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

    render(){
  
        return (
        <div className="board">
          <nav className="navbar navbar-dark bg-dark">
            <div> 
              <button onClick={()=>this.setState({showArticleCreationForm: true})} className="btn btn-primary">New Article</button>
            </div>
            <br/>
            <div> 
              <button onClick={()=>this.setState({showLoginForm: true,showRegisterForm: false})} className="btn btn-primary">Login</button>
            </div>
            <div> 
              <button onClick={()=>this.setState({showRegisterForm: true,showLoginForm:false})} className="btn btn-primary">Register</button>
            </div>
          </nav>


          {this.state.showArticleCreationForm? this.articleCreationForm():null}
          {this.state.showUnitCreationForm? this.unitCreationForm():null}
          {this.state.showLoginForm? this.userLoginForm():null}
          {this.state.showRegisterForm? this.userRegistrationForm():null}

          <Article article={this.state.article}></Article>
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
