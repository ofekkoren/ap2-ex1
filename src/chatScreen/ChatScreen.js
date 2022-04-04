import './ChatScreen.css';
import { useState } from "react";

function ChatScreen(user) {
    let [currentConversation, setCurrentConversation] = useState("");

    return (
        <div className="container-chat-screen justify-content-center">
            <div className="inner-chat-cube">
                <div className="col-4 leftScreen">
                    <div class="topLine">
                        hhh
                    </div>
                </div>
                <div class="col rightScreen">
                    <div class="topLine">
                        kkk
                    </div>
                    right
                </div>
            </div>
        </div>
    );
}

export default ChatScreen;