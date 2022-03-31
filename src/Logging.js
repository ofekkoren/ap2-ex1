import './Logging.css';

function Logging() {
  return (
    <form>
      <div className="row g-2 align-items-center">
        <div className="col-auto">
          <label className="form-label">Username</label>
        </div>
        <div className="col-md-3">
          <input type="text" placeholder="Enter your username" className="form-control" required></input>
        </div>

      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>

    </form>
  );
}

export default Logging;
