import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ls from 'local-storage';

//user defined packages or files
import Articles from './views/Articles.js';

class Main extends React.Component{
    constructor(props){
      super(props);
      //initial state
      this.state={
        articles: [],
        OtherArticles:[],
        showRegisterForm: ls.get("showRegisterForm") || false,
        showLoginForm: ls.get("showLoginForm") || false,
        loginSuccess: ls.get("loginSuccess") || false,
        fetchedMyArticlesFromDb: false,
        fetchedOtherArticlesFromDb: false,
        showOtherArticles:true

      };
    }//constructor end

    //this method is to fetch articles from DB and store it in the state property called articles and make fetchedMyArticlesFromDb true
    fetchMyArticlesFromDb=()=>{

      axios.get("/articles").then(
          res=>{
            let articles_temp_var=[...res.data];
            let fetchArticlesFromDb_temp_var=true;
            this.setState({
              articles: articles_temp_var,
              fetchedMyArticlesFromDb: fetchArticlesFromDb_temp_var,
              showOtherArticles: false
            });
            ls.set("articles",articles_temp_var);
            ls.set("fetchedMyArticlesFromDb",fetchArticlesFromDb_temp_var);
          }
      );
    }//fetchArticlesFromDb method end


    populateOtherArticles = ()=>{
      axios.get("/articles/home").then(res=>{
        let fetchedArticles=[...res.data];
        this.setState({
          OtherArticles: fetchedArticles,
          fetchedOtherArticlesFromDb: true
        });
      });
    }

    
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
        if(res.data==="success"){ 
          let loginSuccess_temp_var=true;
          let showRegisterForm_temp_var=false;
          let showLoginForm_temp_var=false; 

          this.setState({
              loginSuccess:loginSuccess_temp_var,
              showRegisterForm:showRegisterForm_temp_var,
              showLoginForm:showLoginForm_temp_var
          });

          ls.set("loginSuccess",loginSuccess_temp_var);
          ls.set("showRegisterForm",showRegisterForm_temp_var);
          ls.set("showLoginForm",showLoginForm_temp_var);
        }
        else{
          alert("Incorrect credentials");
        }
      });

    }//userLogin method end



    userLogout=(event)=>{

      // console.log("event akc is "+event);
      event.preventDefault();
      axios.get("/logout").then((res)=>{
        console.log("logout successful");
      });
      ls.clear();
      this.setState({
        articles: [],
        showRegisterForm: false,
        showLoginForm: false,
        loginSuccess: false,
        fetchedMyArticlesFromDb: false

      });

    }

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

        let showRegisterForm_temp_var=false;
        let showLoginForm_temp_var=true;
        this.setState({
          showRegisterForm:showRegisterForm_temp_var,
          showLoginForm:showLoginForm_temp_var
        });

        ls.set("showRegisterForm",showRegisterForm_temp_var);
        ls.set("showLoginForm",showLoginForm_temp_var);
      });
    }//userRegistration method end


    //this method will return form for user registration,used as html
    userRegistrationForm=()=>{
      return (
        <form name="register" onSubmit={this.userRegistration}>
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




    displayMyArticles=()=>{
      return (
         <div>
              <Articles 
                sectionName="myArticles" 
                articles={this.state.articles}>
              </Articles>
          </div>
      );
    }//myArticles method end

    displayOtherArticles=()=>{
          // return (<PopularArticles articles={this.state.OtherArticles}></PopularArticles>);
            
          return (
            <div>
              <Articles 
                sectionName="homePage" 
                articles={this.state.OtherArticles}>
              </Articles>
            </div>
          );
    }

  
    render(){

      let mainScreenStyle={
          "minWidth":"1000px"
      }

      return (
          <div style={mainScreenStyle} className="mainScreen">
            <div id="menuSection">
              <nav className="navbar navbar-dark bg-dark">
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>{this.setState({showLoginForm: true,showRegisterForm: false});ls.set("showLoginForm",true);ls.set("showRegisterForm",false);}} 
                        className="btn btn-primary">
                        Login
                      </button>
                    </div>
                 }
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>{this.setState({showRegisterForm: true,showLoginForm:false});ls.set("showRegisterForm",true);ls.set("showLoginForm",false);}} 
                        className="btn btn-primary">
                        Register
                      </button>
                    </div>
                 }
                 {
                    this.state.loginSuccess && 
                    <div> 
                      <button onClick={()=>this.fetchMyArticlesFromDb()} className="btn btn-primary">My Articles</button>
                    </div>
                 }
                 {
                    this.state.loginSuccess && 
                    <div> 
                      <button onClick={() => window.location.reload(false)} className="btn btn-primary">Home</button>
                    </div>
                 }
                 {
                    this.state.loginSuccess && 
                    <button onClick={(event)=>this.userLogout(event)} className="btn btn-primary">Logout</button>
                 }
              </nav>
            </div>

            <div className="bodySection">
              <div>
                {this.state.showArticleCreationForm ? this.articleCreationForm() : null}
                {this.state.showUnitCreationForm ? this.unitCreationForm() : null}
                {this.state.showLoginForm ? this.userLoginForm() : null}
                {this.state.showRegisterForm ? this.userRegistrationForm() : null}
              </div>

              <div>
                {this.state.loginSuccess && !this.state.fetchedOtherArticlesFromDb && this.populateOtherArticles()}
                {this.state.loginSuccess && this.state.showOtherArticles && this.state.fetchedOtherArticlesFromDb && this.displayOtherArticles()}
                {this.state.loginSuccess && this.state.fetchedMyArticlesFromDb ? this.displayMyArticles() : null}
              </div>
            </div>

          </div>
      );
    }//render method end

}//class Main end 


class App extends React.Component{

  render(){
    return <Main/>
  }
}
export default App;
