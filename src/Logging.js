import './Logging.css';

function Logging() {
    return (
        <div className="container">
            <form className="text-center myform">

                <div className="form-group row justify-content-center center-user">
                    <label htmlFor="UsernameInput" className="col-auto">Username</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control form-control-sm" id="UsernameInput"
                               placeholder="enter you username"></input>
                    </div>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
);
}

export default Logging;
