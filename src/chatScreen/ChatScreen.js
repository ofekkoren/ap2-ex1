import './ChatScreen.css';
import { useState } from "react";

function ChatScreen(user) {
    let [currentConversation, setCurrentConversation] = useState("");

    return (
        <div class="container justify-content-center">
                    <div class="row chatScreen">
                        <div class="col-4 leftScreen">
                            <div class="row topLine">
                                hhh
                            </div>
                            left
                        </div>
                        <div class="col rightScreen">
                        <div class="row topLine">
                            kkk
                        </div>
                            right
                        </div>
                    </div>
        </div>
    );
}

export default ChatScreen;