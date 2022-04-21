import conversations from '../db/Conversations';
import users from '../db/UsersDataBase';
import AddNewChat from './AddNewChat';
import { useState } from "react";

function ChooseNewChat(props) {

    function getNewContactUsername(event) {
        var userValue = event.target.value;
        return userValue;
    };

    function addNewContact() {
        var presentItems = document.getElementById("present-left-chat-items");

        var newContact = document.getElementById("floatingTextarea").value;
        // console.log(props);
        // console.log("printing: " + newContact);
        var newConversation = AddNewChat({ logInUsername: props.logInUsername, conversationsList: props.conversationsList, newContact: newContact, relevantInfo: props.relevantInfo, currentListOfChats: props.currentListOfChats });
        if (!newConversation) {
            return
        }
        // let chatsArr = props.currentListOfChats.unshift(newConversation);
        let chatsArr = [...props.currentListOfChats, newConversation];

        conversations.unshift(newConversation);
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (newConversation.users[0].username == users[i].username) {
                users[i].chats.unshift(conversations[0]);
            }
            if (newConversation.users[1].username == users[i].username) {
                users[i].chats.unshift(conversations[0]);
            }
        }
        props.setcurrentListOfChats(chatsArr);
    }

    function deleteInput() {
        document.getElementById("floatingTextarea").value = "";
    }
    return (
        <div className="col-4 leftScreen">
            <div className="modal fade" id="add-new-contact" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={deleteInput}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="floatingTextarea" className="col-form-label">Please enter the contact's username:</label>
                                <div className="form-floating">
                                    <input type="text" className="form-control newContact" placeholder="Leave a comment here" id="floatingTextarea" onChange={getNewContactUsername} required></input>
                                    <label htmlFor="floatingTextarea">Contact's identifier</label>
                                </div>
                                <div id="validation"></div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={deleteInput}>Close</button>
                            {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addNewContact}>Add</button> */}
                            <button type="button" className="btn btn-primary" onClick={addNewContact}>Add</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ChooseNewChat;