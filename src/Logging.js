import './Logging.css';

function Logging() {
  return (
    <div className="container">
      <form className="text-center myform">

        <div className="form-group row justify-content-center center-user">
          <label htmlFor="UsernameInput" className="col-sm-2 col-form-label col-form-label-lg">Username</label>
          <div className="col-sm-5">
            <input type="text" className="form-control form-control-lg" id="UsernameInput"
              placeholder="Enter your username"></input>
          </div>
        </div>
        <div class="form-group row justify-content-center center-user">
          <label for="inputPassword" class="col-sm-2 col-form-label col-form-label-lg">Password</label>
          <div class="col-sm-5">
            <input type="password" class="form-control form-control-lg" id="inputPassword" placeholder="Enter your password"></input>
          </div>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </div>

        <div class="text">
          Not registered? Please register <a href='#' class="text">here</a>
        </div>
      </form>
    </div>
  );
}

export default Logging;
