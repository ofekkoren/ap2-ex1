import './LogIn.css';
import users from '../UsersDataBase';
import LoggingValidation from './LogValidation';
import '../signIn/SignIn.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function LogIn() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const username = e.target.userName.value;
    const password = e.target.password.value;
    let isValidUser = 0;
      users.forEach(user => {
        if(user.username.localeCompare(username)==0 && user.password.localeCompare(password)==0) {
          alert(1);
          isValidUser = 1;
        }
      })
      if(Boolean(isValidUser)) {
        //document.getElementBy.addelemnt
      }
    console.log("username: " + username, " password: "+password);
  }

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
      <Route path='/LogValidation' element={<LoggingValidation/>}></Route>
      </Routes>
      <form className="text-center myform" onSubmit={handleSubmit}>
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

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-lg">Log-in</button>
                </div>

        <div className="text">
        Not registered? Please register <Link to='/LogValidation' className="text">here</Link>
        </div>
      </form>
      </BrowserRouter>
    </div>
  );
}

export default LogIn;