import './LogIn.css';
import users from '../db/UsersDataBase';
import ChatScreen from '../chatScreen/ChatScreen';
import '../signUp/SignUp.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Link, useNavigate, useParams} from "react-router-dom";

export var isUserLoggedIn = 0;
export var user = "";

function LogIn() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.userName.value;
    const password = e.target.password.value;
    let isValidUser = 0;
    users.forEach(user => {
      if (user.username.localeCompare(username) == 0 && user.password.localeCompare(password) == 0) {
        isValidUser = 1;
      }
    })

    var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    var alertTrigger = document.getElementById('liveAlertBtn');
    var wrapper = document.createElement('div');

    if (alertTrigger && isValidUser == 0 && username != "" && password != "") {
      var invalidUser = "Wrong username or password!"
      document.getElementById("validUser").innerHTML = invalidUser;

      // alert('Wrong username or password!', 'danger')
      return;
    }

    if (username == "" || password == "") {
      var invalidUser = "All fields must be filled!"
      document.getElementById("validUser").innerHTML = invalidUser;
      return;
    }

    isUserLoggedIn = 1;

    /**
     * The function returns the conversations of the current log-in user, according
     * to the username (his id).
     * @param logInUsername is the username of the logged-in user.
     */
    function getUsersChats(logInUsername) {
      for (var i = 0; i < Object.keys(users).length; i++) {
        if (users[i].username.localeCompare(logInUsername) === 0) {
          return users[i];
        }
      }
    }

    user = getUsersChats(username);
    // navigate("chatScreen", { state: { user: getUsersChats(username) } });
    navigate("chatScreen");
  }
  
    return (
        <div className="container" >

            {/* <BrowserRouter>
        <Routes>
          <Route path='/ChatScreen' element={<ChatScreen />}></Route>
        </Routes> */}
            <form className="text-center log-in-form" onSubmit={handleSubmit} >
                <h3 className="log-in-header">Welcome friend, please log in :-)</h3>

                <div className="form-floating mb-3 input-style ">
                    <input type="text" name='userName' className="form-control " id="usernameInput"
                           placeholder="Username"></input>
                    <label className="form-label" htmlFor="floatingInput">Username</label>
                </div>

                {/*<div className="form-group row justify-content-center center-user">
                    <label htmlFor="usernameInput"
                           className="col-sm-2 col-form-label col-form-label-lg">Username</label>
                    <div className="col-sm-5">
                        <input type="text" name='userName' className="form-control form-control-lg" id="usernameInput"
                               placeholder="Enter your username"></input>
                    </div>
                </div>*/}
                {/*<div className="form-group row justify-content-center center-user">
                    <label htmlFor="inputPassword"
                           className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                    <div className="col-sm-5">
                        <input type="password" name='password' className="form-control form-control-lg"
                               id="inputPassword" placeholder="Enter your password"></input>
                    </div>
                    <div id="validUser"></div>
                </div>*/}

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
            {/* </BrowserRouter> */}
        </div>
    );
}
export default LogIn;