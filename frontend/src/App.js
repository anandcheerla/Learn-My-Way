import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//user defined packages or files
import Articles from './views/Articles.js';

class Akc extends React.Component{
    constructor(props){
      super(props);
      //initial state
      this.state={
        articles:[],
        showRegisterForm: false,
        showLoginForm: false,
        loginSuccess: false,
        fetchedArticlesFromDb: false
        
      };
    }//constructor end

    //this method is to fetch articles from DB and store it in the state property called articles and make fetchedArticlesFromDb true
    fetchArticlesFromDb=()=>{
      axios.get("/articles").then(
          res=>{
            this.setState({
              articles: [...res.data],
              fetchedArticlesFromDb: true
            });
          }
      )
    }//fetchArticlesFromDb method end


    componentDidMount(){
      
    }
   

    //login api call to /login route with username and password
    userLogin=(event)=>{
      event.preventDefault();
      let formData={
        username: event.target.username.value,
        password: event.target.password.value
      }

      axios.post("/login",formData).then((res)=>{
        if(res.data=="success"){  
          this.setState({
              loginSuccess:true,
              showRegisterForm:false,
              showLoginForm:false
          });
        }
        else{
          alert("Incorrect credentials");
        }
      });

    }//userLogin method end


    //registration api call to /register with the necessary details
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
    }//userRegistration method end


    //this method will return form for user registration,used as html
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
    }//userRegistrationForm method end


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
    }//userLoginForm method end


    myArticles=()=>{
      return (
         <div>
              <Articles articles={this.state.articles}></Articles>
          </div>
      );
    }//myArticles method end


    render(){
      return (
          <div className="mainScreen">
            <div>
              <nav className="navbar navbar-dark bg-dark">
              {
                !this.state.loginSuccess &&
                  <div> 
                    <button onClick={()=>this.setState({showLoginForm: true,showRegisterForm: false})} className="btn btn-primary">Login</button>
                  </div>
               }
               {
                 !this.state.loginSuccess &&
                  <div> 
                    <button onClick={()=>this.setState({showRegisterForm: true,showLoginForm:false})} className="btn btn-primary">Register</button>
                  </div>
               }
                <div> 
                  <button onClick={()=>this.fetchArticlesFromDb()} className="btn btn-primary">My Articles</button>
                </div>
              </nav>
            </div>

            <div className="display">
              {this.state.showArticleCreationForm? this.articleCreationForm():null}
              {this.state.showUnitCreationForm? this.unitCreationForm():null}
              {this.state.showLoginForm? this.userLoginForm():null}
              {this.state.showRegisterForm? this.userRegistrationForm():null}

              {this.state.loginSuccess && this.state.fetchedArticlesFromDb ?this.myArticles():null}
            </div>
          </div>
      );
    }//render method end

}//class Akc end 


class App extends React.Component{

  render(){
    return <Akc/>
  }
}
export default App;
