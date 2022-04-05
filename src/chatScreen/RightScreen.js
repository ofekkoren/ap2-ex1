import './ChatScreen.css';
import "./RightScreen.css"

function RightScreen() {
    return (
        <div className="col rightScreen">
            <div className="topLine">
                <img src={require('../images/userImages/boy-image.png')} className="float-start top-profile-image" ></img>
                <h5>User Nickname</h5>
            </div>
            right chat
        </div>
    );
}

export default RightScreen;