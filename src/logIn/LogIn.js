import './LogIn.css';
import users from '../db/UsersDataBase';
import ChatScreen from '../chatScreen/ChatScreen';
import '../signUp/SignUp.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Link, useNavigate, useParams} from "react-router-dom";
import { getUser } from '../chatScreen/Utils';

// Keeps the current user which will be logged-in to the website.
var user = "";

/**
 * Setter to the logged-in user.
 * @param initializedUser is an update user logged in the website.
 */
function setUser(initializedUser) {
  user = initializedUser;
}
export {user, setUser};

/**
 * The LogIn function is the log-in logic. It gives the user an option to log in to the web by
 * entering his name and password, and if the fields are valid it enters him into his
 * chats screen.
 */
function LogIn() {

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.userName.value;
    const password = e.target.password.value;
    let isValidUser = 0;
    // If the user exists in the system, change the value of isValidUser to 1.
    users.forEach(user => {
      if (user.username.localeCompare(username) == 0 && user.password.localeCompare(password) == 0) {
        isValidUser = 1;
      }
    })

    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var alertTrigger = document.getElementById('liveAlertBtn');
    var wrapper = document.createElement('div');

    /*
     * If the user filled all of the fileds but entered wrong information and clicked on
     * log-in, we present an announcement that the user is not valid.
    */
    if (alertTrigger && isValidUser == 0 && username != "" && password != "") {
      var invalidUser = "Wrong username or password!"
      document.getElementById("validUser").innerHTML = invalidUser;
      return;
    }
    // If one of the fiels is empty and the user clicked on the log-in button, write an announcement.
    if (alertTrigger && username == "" || password == "") {
      var invalidUser = "All fields must be filled!"
      document.getElementById("validUser").innerHTML = invalidUser;
      return;
    }
    user = getUser(username);
    navigate("chatScreen");
  }
  
    return (
        <div className="container" >
            <form className="text-center log-in-form" onSubmit={handleSubmit} >
                <h3 className="log-in-header">Welcome friend, please log in :-)</h3>
                <div className="form-floating mb-3 input-style ">
                    <input type="text" name='userName' className="form-control " id="usernameInput"
                           placeholder="Username"></input>
                    <label className="form-label" htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating input-style ">
                    <input type="password" name='password' className="form-control " id="inputPassword"
                           placeholder="Password"></input>
                    <label className="form-label" id="passwordLabel" htmlFor="floatingPassword">Password</label>
                    <div id="validUser"></div>
                </div>
                <div id="liveAlertPlaceholder"></div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-lg" id="liveAlertBtn">Log-in</button>
                </div>
                <div className="text">
                    Not registered? Please register <Link to='/signUp' className="text">here</Link>
                </div>
            </form>
        </div>
    );
}
export default LogIn;