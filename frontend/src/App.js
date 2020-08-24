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
        showLoginForm: ls.get("showLoginForm") || ((ls.get("loginSuccess")===true || ls.get("showRegisterForm")===true) ? false : true),
        loginSuccess: ls.get("loginSuccess") || false,
        fetchedMyArticlesFromDb: ls.get("fetchedOtherArticlesFromDb") || false,
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
            // debugger;
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

        // debugger;
        let fetchedArticles=[...res.data];

        ls.set("fetchedOtherArticlesFromDb","true");

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

      let login_button = document.getElementById("login-button-id-app-component");
      let login_error_ele = document.getElementById("login-err-msg-id-app-component");
      login_button.innerHTML="Logging In";
      login_button.style.opacity=0.7;
      login_error_ele.innerHTML = "";


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
          login_error_ele.innerHTML = "* Incorrect Credentials";
          login_error_ele.style.color="red";
          login_button.innerHTML="Login";
          login_button.style.opacity=1;

        }
      });

    }//userLogin method end


    aboutPage = ()=>{



      return (

          <div className="aboutPage">
              <h5>
              Have you ever scared of reading an article/material that you just come across when you are browsing.... Title is catchy, but the article is too big
              </h5>
              <br/>
              <h5>
              Have you ever thought that you want to glance at an article inorder to get an overview, but tired of reading the entire thing... 
              </h5>
              <br/>
              <h5>
              Have you ever tired of reading boring paragraphs which spans some pages and the massive size where the probability to overlook is high...
              </h5>
              <br/>
              <h5>
              Have you ever thought while you are reading, it would be better if we know where to focus/stress more, or which part is complex or easy to understand...!!!
              </h5>
              <br/>
              <h5>
              Have you ever overlooked things/information that is required the most in understanding or learning the further details...
              </h5>

              <br/>

              <h5>
              Even if you didnot think none of these, you are welcome to check out this !!!
              </h5>
              <br/>
              <p>
              This application is a learning platform.The main intention of the application is to make the reading/learning effective in terms of presentation,focus and efficiency. The learning will be in the form of articles which is some information that the people want to share/track/learn. The article is divided into small(very small and clear as possible)learning chunks with individual importance and level of complexity that is set by the person who prepares the article.
              Based on the Importance the reader can decide which unit to focus more and which unit to focus less and which is important. 
              Based on the level of complexity the reader can learn and understand what ever they want to in whatever pace they are able to...
              combination of these two things makes the learning effective...

              </p>
              <br/>
              <p>

              This application could be used in two ways.

              one way, people can track their learnings that they have learned somewhere else. Preparing an article with more emphasis on each and every small unit requires some good understanding and intuition, helps them to understand things even better...
              Second way,They can post the same article, so that someone could read it and understand in the way you understood...By filtering the information, one can get the most out of it...
              </p>
            
          </div>

        );

    }
    userLogout=(event)=>{

      // console.log("event akc is "+event);
      event.preventDefault();
      axios.get("/logout").then((res)=>{
        
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


      let signup_button = document.getElementById("register-button-id-app-component");
      let register_error_ele=document.getElementById("register-err-msg-id-app-component");
      signup_button.innerHTML="Signing Up";
      signup_button.style.opacity=0.7;
      register_error_ele.innerHTML=""; 


      let formData={
        username: event.target.username.value,
        password: event.target.password.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        contactNumber: event.target.contactNumber.value
      }

      axios.post("/register",formData).then((res)=>{
        if(res.data.message!==undefined)
        {

          register_error_ele.innerHTML="* "+res.data.message; 
          register_error_ele.style.color="red";
          signup_button.innerHTML="Register";
          signup_button.style.opacity=1;
          return;
        }

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
            <div>
              <h6 id="register-err-msg-id-app-component"></h6>
            </div>
            <br/>
            <div className="form-group">
              <button type="submit" id="register-button-id-app-component" className="btn btn-primary btn-lg btn-block">Register</button>
            </div>
        </form>
        );
    }//userRegistrationForm method end


    userLoginForm=()=>{
      return (
        <form className="loginForm" name="login" onSubmit={this.userLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="username" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="password" required/>
            </div>
            <br/>
            <div>
              <h6 id="login-err-msg-id-app-component"></h6>
            </div>
            <div className="form-group">
              <button type="submit" id="login-button-id-app-component" className="btn btn-primary btn-lg btn-block">Login</button>
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
              {
              this.state.OtherArticles.length>0
              &&
              <Articles 
                sectionName="homePage" 
                articles={this.state.OtherArticles}>
              </Articles>
              }
            </div>
          );
    }

    handleToggle = ()=>{

        if(this.state.showLoginForm){
          this.setState({showLoginForm: false,showRegisterForm: true,aboutClicked:false});
          ls.set("showLoginForm",false);
          ls.set("showRegisterForm",true);
          ls.set("aboutClicked",false);
          document.getElementById("loginRegisterToggle").innerHTML="Sign in";
        }

        else{
          this.setState({showLoginForm: true,showRegisterForm: false,aboutClicked:false});
          ls.set("showLoginForm",true);
          ls.set("showRegisterForm",false);
          ls.set("aboutClicked",false);
          document.getElementById("loginRegisterToggle").innerHTML="Sign up";

        }


    }

    aboutClickHandler = ()=>{
        this.setState({showLoginForm: false,showRegisterForm: false,aboutClicked: true});
         ls.set("showLoginForm",false);
         ls.set("showRegisterForm",false);
         ls.set("aboutClicked",true);

    }  
    render(){

      let main_style={
      
          "minWidth": "1000px"

      };

      
      return (
          <div style={main_style} className="mainScreen">
            <div id="menuSection">
              <nav className="navbar navbar-dark bg-dark">
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>{this.setState({showLoginForm: true,showRegisterForm: false,aboutClicked: false});ls.set("showLoginForm",true);ls.set("showRegisterForm",false); ls.set("aboutClicked",false);}} 
                        className="btn btn-dark">
                        Login
                      </button>
                    </div>
                 }
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>this.aboutClickHandler()} 
                        className="btn btn-dark">
                        About
                      </button>
                    </div>
                 }
                 
                 {
                    !this.state.loginSuccess &&
                    <div> 
                      <button 
                        onClick={()=>{this.setState({showRegisterForm: true,showLoginForm:false,aboutClicked: false});ls.set("showRegisterForm",true);ls.set("showLoginForm",false);ls.set("aboutClicked",false);}} 
                        className="btn btn-dark">
                        Register
                      </button>
                    </div>
                 }

                 {
                    this.state.loginSuccess && 
                    <div> 
                      <button onClick={()=>this.fetchMyArticlesFromDb()} className="btn btn-dark">My Articles</button>
                    </div>
                 }
                 {
                    this.state.loginSuccess && 
                    <div> 
                      <button onClick={() => window.location.reload(false)} className="btn btn-dark">Home</button>
                    </div>
                 }
                 {
                    this.state.loginSuccess && 
                    <button onClick={(event)=>this.userLogout(event)} className="btn btn-dark">Logout</button>
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
                  {this.state.loginSuccess && !this.state.showOtherArticles && this.state.fetchedMyArticlesFromDb ? this.displayMyArticles() : null}
                </div>
              </div>

            {

              !this.state.loginSuccess && this.state.aboutClicked && this.aboutPage()
              
            }
            {
              !this.state.loginSuccess &&
              <div className="homePage">
                <div className="toggleSwitch">
                  {!this.state.aboutClicked &&<button id="loginRegisterToggle" className="btn btn-outline-primary" onClick={()=>this.handleToggle()}>{this.state.showLoginForm ?"Sign up" : "Sign in"}</button>}
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
