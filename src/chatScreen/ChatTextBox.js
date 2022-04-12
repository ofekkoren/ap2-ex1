import './ChatScreen.css';
import "./RightScreen.css"

/**
 * The body of the chat which will contain the messages.
 * @param props includes the current chat of the user and a setter method.
 */
function ChatTextBox(props) {

    const handleSendClick = (event) => {
        //Getting the message typed by the user
        let message = document.getElementById("textBox").value;
        //If the user didn't type a message we won't send an empty string, Else we add the message to the chat.
        if (message.trim() !== "") {
            let messageInfo = {
                type: "text",
                content: message,
                createdAt: new Date().toISOString(),
                sender: props.sendingUser.username
            }
            //Appending the message to the end of the messages array.
            let messagesArr = [...props.chat.messages, messageInfo]
            props.setChat({users: props.chat.users, messages: messagesArr})
            //Clearing the chat message box.
            document.getElementById("textBox").value = "";
        }
    }

    return (
        <div className="bottom-input-line">

            {/*audio/video/photo button*/}
            <button type="button" className="btn-lg btn-outline-secondary bottom-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-paperclip" viewBox="0 0 16 16">
                    <path
                        d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                </svg>
            </button>

            {/*text box for writing messages*/}
            <textarea id="textBox" className="form-control-lg message-box" rows="1"
                      placeholder="Type a message"></textarea>

            {/*send button*/}
            <button type="button" className="btn-lg btn-outline-secondary float-end bottom-btn"
                    onClick={handleSendClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-send" viewBox="0 0 16 16">
                    <path
                        d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg>
            </button>

        </div>
    )
}

export default ChatTextBox;