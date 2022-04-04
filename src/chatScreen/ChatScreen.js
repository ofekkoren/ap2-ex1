import './ChatScreen.css';
import { useState } from "react";
import LeftScreen from './LeftScreen';

function ChatScreen(user) {
    let [currentConversation, setCurrentConversation] = useState("");

    return (
        <div className="container-chat-screen justify-content-center">
            <div className="inner-chat-cube">
                <LeftScreen />
                <div className="col rightScreen">
                    <div className="topLine">
                        kkk
                    </div>
                    right
                </div>
            </div>
        </div>
    );
}

export default ChatScreen;