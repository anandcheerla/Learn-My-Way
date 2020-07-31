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
        showOtherArticles:true,
        aboutClicked: false

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


    aboutPage = ()=>{

        // Dont forget passwords, if you want your data :)

              // Author: AKC

      return (

          <div className="aboutPage">
              
              Redefine the way you read or learn. Compose articles in a different way which enhances the readability and focus. 


              Break the article into very small individual chunks each having their own characteristics in the form of complexity,
              importance.

            
          </div>

        );

    }
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
        showLoginForm: true,
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
        console.log("registered");
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


    inputValidation=(event)=>{
        // console.log(event.target);
        // console.log(event.target.value);
        // return;

        event.preventDefault();
        // console.log(event.target.name);
        if(event.target.name==="contactNumber"){
          let isContactNumber = /^[0-9]+$/.test(event.target.value);
        
          if(!isContactNumber){
              // console.log("I think contact number should contain Numbers");
              document.getElementById("contactNumber").setCustomValidity('I think contact number should contain Numbers');           
          }
          else{
            document.getElementById("contactNumber").setCustomValidity(''); 
          }
        }

        else if(event.target.name==="password"){
          // let isFirstName = /[0-/.test(event.target.value);
        
          if(event.target.value.length<5){
              // console.log("I think contact number should contain Numbers");
              document.getElementById("password").setCustomValidity('I think contact number should contain Numbers');           
          }
          else{
            document.getElementById("password").setCustomValidity(''); 
          }
        }


    }




    //this method will return form for user registration,used as html
    userRegistrationForm=()=>{
      return (
        <form className="registrationForm" name="register" onSubmit={this.userRegistration}>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder="first name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder="last name" required/>
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="username" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="password" required/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="text" onBlur={this.inputValidation} className="form-control" id="contactNumber" name="contactNumber" placeholder="9999999999" required/>
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
            </div>
        </form>
        );
    }//userRegistrationForm method end


    userLoginForm=()=>{
      return (
        <form className="loginForm" name="login" onSubmit={this.userLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="password"/>
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
            </div>
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

    handleToggle = ()=>{

        if(this.state.showLoginForm){
          this.setState({showLoginForm: false,showRegisterForm: true,aboutClicked:false});
          ls.set("showLoginForm",false);
          ls.set("showRegisterForm",true);
          ls.set("aboutClicked",false);
          document.getElementById("loginRegisterToggle").innerHTML="<---";
        }

        else{
          this.setState({showLoginForm: true,showRegisterForm: false,aboutClicked:false});
          ls.set("showLoginForm",true);
          ls.set("showRegisterForm",false);
          ls.set("aboutClicked",false);
          document.getElementById("loginRegisterToggle").innerHTML="--->";

        }


    }

    aboutClickHandler = ()=>{
        this.setState({showLoginForm: false,showRegisterForm: false,aboutClicked: true});
         ls.set("showLoginForm",false);
         ls.set("showRegisterForm",false);
         ls.set("aboutClicked",true);

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
                        onClick={()=>{this.setState({showLoginForm: true,showRegisterForm: false,aboutClicked: false});ls.set("showLoginForm",true);ls.set("showRegisterForm",false); ls.set("aboutClicked",false);}} 
                        className="btn btn-primary">
                        Login
                      </button>
                    </div>
                 }
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>this.aboutClickHandler()} 
                        className="btn btn-primary">
                        About
                      </button>
                    </div>
                 }
                 
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>{this.setState({showRegisterForm: true,showLoginForm:false,aboutClicked: false});ls.set("showRegisterForm",true);ls.set("showLoginForm",false);ls.set("aboutClicked",false);}} 
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

            {

              !this.state.loginSuccess && this.state.aboutClicked && this.aboutPage()
              
            }
            {
              !this.state.loginSuccess &&
              <div className="homePage">
                <div className="toggleSwitch">
                  <button id="loginRegisterToggle" className="btn btn-outline-primary" onClick={()=>this.handleToggle()}>---></button>
                </div>
                <div id="footer">
                  <h6>-AKC-</h6>
                </div> 
              </div>
            }

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
