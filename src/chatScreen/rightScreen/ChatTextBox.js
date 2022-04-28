import '../ChatScreen.css';
import "./RightScreen.css"
import {convertToBase64} from "../Utils";
import AudioRecorderModal from "./AudioRecorderModal";

/**
 * The bottom part of the right part of chat screen from which the user can send messages.
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
            let messagesArr = props.chat.messages;
            messagesArr.push(messageInfo);
            props.setChat({users: props.chat.users, messages: messagesArr})
            //Clearing the chat message box.
            document.getElementById("textBox").value = "";
        }
    }

    const handleSendImageAndVideo = (mediaType) => {
        let input;
        let file = ""
        if (mediaType === "image")
            input = document.getElementById("imageInput");
        if (mediaType === "video")
            input = document.getElementById("videoInput");
        file = input.files[0]
        //Convert the image to base64 string and creating the message info.
        var convertPromise = convertToBase64(file);

        convertPromise.then(function (result) {
            let messageInfo = {
                type: mediaType,
                content: result,
                createdAt: new Date().toISOString(),
                sender: props.sendingUser.username
            }
            //Appending the message to the end of the messages array.
            let messagesArr = props.chat.messages;
            messagesArr.push(messageInfo);
            props.setChat({users: props.chat.users, messages: messagesArr})
        })
        input.value = ""
    }


    return (
        <div className="bottom-input-line">

            {/*audio/video/photo attachment button*/}
            <div className="btn-group dropup">
                <button type="button" className="btn-lg btn-outline-secondary bottom-btn"
                        id="attachMedia" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-paperclip"></i>
                </button>

                <ul className="dropdown-menu attach-ul" aria-labelledby="attachMedia">
                    <div className="attach-dropup">
                        {/*send image button*/}
                        <li>
                            <button type="button"
                                    className="btn-lg btn-outline-secondary float-end bottom-btn attach-btn"
                                    onClick={() => document.getElementById("imageInput").click()}>
                                <i className="bi bi-image"></i>
                            </button>
                            <input style={{display: "none"}} type="file" accept="image/*"
                                   id="imageInput" onChange={() => handleSendImageAndVideo("image")}></input>

                        </li>
                        {/*send video button*/}
                        <li>
                            <button type="button"
                                    className="btn-lg btn-outline-secondary float-end bottom-btn attach-btn"
                                    onClick={() => document.getElementById("videoInput").click()}>
                                <i className="bi bi-film"></i>
                            </button>
                            <input style={{display: "none"}} type="file" accept="video/*"
                                   id="videoInput" onChange={() => handleSendImageAndVideo("video")}></input>
                        </li>
                        {/*send audio record button*/}
                        <li>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#recordModal"
                                    className="btn-lg btn-outline-secondary float-end bottom-btn attach-btn">
                                <i className="bi bi-mic"></i>
                            </button>
                        </li>
                    </div>
                </ul>

                {/*audio record modal, shown only when the send audio button is clicked*/}
                <AudioRecorderModal chat={props.chat} setChat={props.setChat}
                                    sendingUser={props.sendingUser}></AudioRecorderModal>
            </div>


            {/*text box for writing messages*/}
            <textarea id="textBox" className="form-control-lg message-box" rows="1"
                      placeholder="Type a message"></textarea>

            {/*send text button*/}
            <button type="button" className="btn-lg btn-outline-secondary float-end bottom-btn"
                    onClick={handleSendTextClick}>
                <i className="bi bi-send"></i>
            </button>
        </div>
    )
}

export default ChatTextBox;