import './Logging.css';

function Logging() {
  return (
    <form>
      <div class="col-3">
        <label class="form-label">Username</label>
        <input type="text" class="form-control" required></input>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  );
}

export default Logging;
