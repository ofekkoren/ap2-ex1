import './ChatScreen.css';
import './LeftScreen.css';
import { useState } from "react";

function LeftScreen() {

    return (
        <div className="col-4 leftScreen">
            <div className="topLine topLine-left">
                <span className="bi bi-person-plus-fill add-conversation ms-3"></span>
            </div>
        </div>

    );
}

export default LeftScreen;