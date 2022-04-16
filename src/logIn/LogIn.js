import './LogIn.css';
import users from '../db/UsersDataBase';
import ChatScreen from '../chatScreen/ChatScreen';
import '../signIn/SignIn.css'
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import isUserLoggedIn from '..';
import { setIsUserLoggedIn } from '..';

function LogIn() {
  const navigate = useNavigate();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.userName.value;
    const password = e.target.password.value;
    let isValidUser = 0;
    users.forEach(user => {
      if (user.username.localeCompare(username) == 0 && user.password.localeCompare(password) == 0) {
        isValidUser = 1;
        // navigate("/ChatScreen");
      }
    })

    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var alertTrigger = document.getElementById('liveAlertBtn');
    var wrapper = document.createElement('div');
    // var clicked = false;

    // function alert(message, type) {
    // wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    // alertPlaceholder.append(wrapper)
    // }

    if (alertTrigger && isValidUser == 0 && username != "" && password != "") {
      alert('Wrong username or password!', 'danger')
      return;
    }
    // console.log("username: " + username, " password: " + password);
    setIsUserLoggedIn(1);
    // isUserLoggedIn = 1;
    navigate("chatScreen");
  }



  return (
    <div className="container">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/ChatScreen' element={<ChatScreen />}></Route>
        </Routes> */}
        <form className="text-center log-in-form" onSubmit={handleSubmit}>
          <div className="form-group row justify-content-center center-user">
            <label htmlFor="usernameInput" className="col-sm-2 col-form-label col-form-label-lg">Username</label>
            <div className="col-sm-5">
              <input type="text" name='userName' className="form-control form-control-lg" id="usernameInput"
                placeholder="Enter your username"></input>
            </div>
          </div>
          <div className="form-group row justify-content-center center-user">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
            <div className="col-sm-5">
              <input type="password" name='password' className="form-control form-control-lg" id="inputPassword" placeholder="Enter your password"></input>
            </div>
          </div>

          <div id="liveAlertPlaceholder"></div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary btn-lg" id="liveAlertBtn">Log-in</button>
          </div>

          <div className="text">
            Not registered? Please register <Link to='/signUp' className="text">here</Link>
          </div>
        </form>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default LogIn;