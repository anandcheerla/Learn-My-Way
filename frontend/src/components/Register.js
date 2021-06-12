import React,{useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';



//css
import './Register.css';


function Register(props){

  const history=useHistory();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [contactNumber,setContactNumber] = useState("");


  const [usernameMessage,setUsernameMessage] = useState("");
  const [passwordMessage,setPasswordMessage] = useState("");
  const [firstNameMessage,setFirstNameMessage] = useState("");
  const [lastNameMessage,setLastNameMessage] = useState("");
  const [emailMessage,setEmailMessage] = useState("");
  const [contactNumberMessage,setContactNumberMessage] = useState("");
  const [formMessage,setFormMessage] = useState("");

	const userRegistration = (event) => {
      event.preventDefault();
      if(!inputValidation())
        return;

	    let signup_button = document.getElementById(
	      "Register__register-button"
	    );
	    
	    signup_button.innerHTML = "Signing Up";
	    signup_button.style.opacity = 0.7;

	    let formData = {
	      username: username,
	      password: password,
	      firstName: firstName,
	      lastName: lastName,
	      email: email,
	      contactNumber: contactNumber
	    };

	    axios.post("/user/register", formData).then((res) => {
	      if (res.data!==true) {
          console.log("coming");
	        setFormMessage(res.data);
	        signup_button.innerHTML = "Register";
	        signup_button.style.opacity = 1;
	        return;
        }
        else{
          history.push('/login');
        }
       });
      }

 	let inputValidation = () => {

      let flag=true;

      //empty check
      if(firstName===''){
        setFirstNameMessage("Please Fill in this field");
        flag=false;
      }
      else{
        setFirstNameMessage("");
      }
      if(lastName===''){
        setLastNameMessage("Please Fill in this field");
        flag=false;
      }
      else{
        setLastNameMessage("");
      }

      if(username===''){
        setUsernameMessage("Please Fill in this field");
        flag=false;
      }
      else{      
        setUsernameMessage("");
      }
      
      
      
      if(password===''){
        setPasswordMessage("Please Fill in this field");
        flag=false;
      }
      else if(password.length<8)
      {
        setPasswordMessage("Password Must be greater than 7 Characters");
        flag=false;
      }
      else{
        setPasswordMessage("");
      }
      

      //custom validity, @ and dot are mandatory for this
      let isEmail = /^.*@.*\..+/.test(email);
      if(email===''){
        setEmailMessage("Please Fill in this field");
        flag=false;
      }
      else if(!isEmail){
        setEmailMessage("Please Enter the correct Email");
        flag=false;
      }
      else{
        setEmailMessage("");
      }

      
      let isContactNumber = /^[0-9]+$/.test(contactNumber);

      if(contactNumber===''){
        setContactNumberMessage("Please Fill in this field");
        flag=false;
      }

      else if (!isContactNumber) {
        setContactNumberMessage("Contact number should contain digits");
         flag=false;
      }
      else{
        setContactNumberMessage("");
      }
        
      return flag;
      
  	};


    return (
      <div id="Register">
        <div className="Register__input-div">
          {/* <label htmlFor="firstName">First name</label> */}
          <input
            type="text"
            onChange={(e)=>{setFirstName(e.target.value)}}
            className="Register__input-field"
            id="Register__first-name"
            name="firstName"
            placeholder="First Name"
            required
          />
          <label className="Register__input-validation-message">{firstNameMessage}</label>
        </div>
        <div className="Register__input-div">
          {/* <label htmlFor="lastName">Last name</label> */}
          <input
            type="text"
            className="Register__input-field"
            id="Register__last-name"
            name="lastName"
            placeholder="Last Name"
            onChange={(e)=>{setLastName(e.target.value)}}
            required
          />
          <label className="Register__input-validation-message">{lastNameMessage}</label>
        </div>

        <div className="Register__input-div">
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            className="Register__input-field"
            id="Register__username"
            name="username"
            placeholder="User Name"
            onChange={(e)=>{setUsername(e.target.value)}}
            required
          />
          <label className="Register__input-validation-message">{usernameMessage}</label>
        </div>
        <div className="Register__input-div">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            className="Register__input-field"
            id="Register__password"
            name="password"
            placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
          <label className="Register__input-validation-message">{passwordMessage}</label>
        </div>

        <div className="Register__input-div">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            className="Register__input-field"
            id="Register__email"
            name="email"
            placeholder="Email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
          <label className="Register__input-validation-message">{emailMessage}</label>
        </div>
        <div className="Register__input-div">
          {/* <label htmlFor="contactNumber">Contact Number</label> */}
          <input
            type="text"
            // onBlur={inputValidation}
            className="Register__input-field"
            id="Register__contact-number"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={(e)=>{setContactNumber(e.target.value)}}
            onKeyDown={(e)=>{
              if(e.which===13)
                userRegistration(e);
            }}
            required
          />
          <label className="Register__input-validation-message">{contactNumberMessage}</label>
        </div>
        <div className="Register__message">
          <label className="Register__input-validation-message">{formMessage}</label>
        </div>
        <br />
        <div className="Register__button">
          <Button onClick={(e)=>userRegistration(e)}  id="Register__register-button" variant="outlined" color="primary">
            Register
          </Button>
        </div>
      </div>
    );

}

export default Register;