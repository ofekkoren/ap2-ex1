import React from 'react';
import {Link} from "react-router-dom";

function SuccessfulSignUp() {
    return (
        <div className="sign-up-form">
            <h4 className="text-center" role="alert">You have successfully signed-up :-)<br/><br/>
                You can click <Link to='/' className="text">here</Link> to log-in with your new user <br/>
            </h4>
        </div>
    )
}

export default SuccessfulSignUp