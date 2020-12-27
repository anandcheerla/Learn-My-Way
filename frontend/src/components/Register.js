import React,{useState} from 'react';
import axios from "axios";
import ls from "local-storage";
import { useHistory } from 'react-router';



function Register(props){

  const history=useHistory();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [contactNumber,setContactNumber] = useState("");


	const userRegistration = (event) => {
	    event.preventDefault();

	    let signup_button = document.getElementById(
	      "Register__register-button"
	    );
	    let register_error_ele = document.getElementById(
	      "Register__register-err-msg"
	    );
	    signup_button.innerHTML = "Signing Up";
	    signup_button.style.opacity = 0.7;
	    register_error_ele.innerHTML = "";

	    let formData = {
	      username: username,
	      password: password,
	      firstName: firstName,
	      lastName: lastName,
	      email: email,
	      contactNumber: contactNumber
	    };

	    axios.post("/user/register", formData).then((res) => {
	      if (res.data==false) {
	        register_error_ele.innerHTML = "* " + res.data.message;
	        register_error_ele.style.color = "red";
	        signup_button.innerHTML = "Register";
	        signup_button.style.opacity = 1;
	        return;
        }
        else{
          history.push('/login');
        }
       });
      }

 	let inputValidation = (event) => {

	    event.preventDefault();
	    // console.log(event.target.name);
	    if (event.target.name === "contactNumber") {
	      let isContactNumber = /^[0-9]+$/.test(event.target.value);

	      if (!isContactNumber) {
	        // console.log("I think contact number should contain Numbers");
	        document
	          .getElementById("contactNumber")
	          .setCustomValidity("I think contact number should contain Numbers");
	      } else {
	        document.getElementById("contactNumber").setCustomValidity("");
	      }
	    } else if (event.target.name === "password") {
	      // let isFirstName = /[0-/.test(event.target.value);

	      if (event.target.value.length < 5) {
	        // console.log("I think contact number should contain Numbers");
	        document
	          .getElementById("password")
	          .setCustomValidity("I think contact number should contain Numbers");
	      } else {
	        document.getElementById("password").setCustomValidity("");
	      }
	    }
  	};


    return (
      <form className="Register">
        <div className="Register__input">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            className=""
            id="Register__first-name"
            name="firstName"
            placeholder="first name"
            onChange={(e)=>{setFirstName(e.target.value)}}
            required
          />
        </div>
        <div className="Register__input">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            className=""
            id="Register__last-name"
            name="lastName"
            placeholder="last name"
            onChange={(e)=>{setLastName(e.target.value)}}
            required
          />
        </div>

        <div className="Register__input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className=""
            id="Register__username"
            name="username"
            placeholder="username"
            onChange={(e)=>{setUsername(e.target.value)}}
            required
          />
        </div>
        <div className="Register__input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className=""
            id="Register__password"
            name="password"
            placeholder="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
        </div>

        <div className="Register__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className=""
            id="Register__email"
            name="email"
            placeholder="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </div>
        <div className="Register__input">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            // onBlur={inputValidation}
            className=""
            id="Register__contact-number"
            name="contactNumber"
            placeholder="9999999999"
            onChange={(e)=>{setContactNumber(e.target.value)}}
            required
          />
        </div>
        <div className="Register__message">
          <h6 id="Register__register-err-msg"></h6>
        </div>
        <br />
        <div className="Register__button">
          <button
            type="submit"
            id="Register__register-button"
            className=""
            onClick={(e)=>userRegistration(e)}
          >
            Register
          </button>
        </div>
      </form>
    );

}

export default Register;