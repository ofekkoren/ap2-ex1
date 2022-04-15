import './ChatScreen.css';
import "./RightScreen.css"
import {convertToBase64Image} from "./Utils";

/**
 * The body of the chat which will contain the messages.
 * @param props includes the current chat of the user and a setter method.
 */
function ChatTextBox(props) {

    const handleSendTextClick = () => {
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

    const handleSendImage = () => {
        let image = document.getElementById("imageInput").files[0];
        //Convert the image to base64 string and creating the message info.
        var imagePromise = convertToBase64Image(image);
        imagePromise.then(function (result) {
            let messageInfo = {
                type: "image",
                content: result,
                createdAt: new Date().toISOString(),
                sender: props.sendingUser.username
            }
            //Appending the message to the end of the messages array.
            let messagesArr = [...props.chat.messages, messageInfo]
            props.setChat({users: props.chat.users, messages: messagesArr})
        })
    }


    return (
        <div className="bottom-input-line">

            {/*audio/video/photo button*/}
            <div className="btn-group dropup">
                <button type="button" className="btn-lg btn-outline-secondary bottom-btn"
                        id="attachMedia" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-paperclip" viewBox="0 0 16 16">
                        <path
                            d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                    </svg>
                </button>
                <ul className="dropdown-menu attach-ul" aria-labelledby="attachMedia">
                    <div className="attach-dropup">
                        <li>
                            <button type="button"
                                    className="btn-lg btn-outline-secondary float-end bottom-btn attach-btn"
                                    onClick={() => document.getElementById("imageInput").click()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    <path
                                        d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                                </svg>
                            </button>
                            <input style={{display: "none"}} type="file" accept="image/*"
                                   id="imageInput" onChange={handleSendImage}></input>

                        </li>
                        <li>
                            <button type="button"
                                    className="btn-lg btn-outline-secondary float-end bottom-btn attach-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-film" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                    className="btn-lg btn-outline-secondary float-end bottom-btn attach-btn">
                                <i className="bi bi-mic"></i>
                            </button>
                        </li>
                    </div>
                </ul>
            </div>

            {/*text box for writing messages*/}
            <textarea id="textBox" className="form-control-lg message-box" rows="1"
                      placeholder="Type a message"></textarea>

            {/*send button*/}
            <button type="button" className="btn-lg btn-outline-secondary float-end bottom-btn"
                    onClick={handleSendTextClick}>
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