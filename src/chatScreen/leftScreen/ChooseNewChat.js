
import conversations from '../db/Conversations';
import users from '../db/UsersDataBase';
import AddNewChat from './AddNewChat';
import { useState } from "react";

/**
 * The function gives the option to add a new chat to the user's chats array.
 * @param props include the username of the user currently logged-in,
 * the array of conversations the user is having and a setter to this array.
 */
function ChooseNewChat(props) {

    //DOTO -CHECK IF ABALE TO ERASE.
    function getNewContactUsername(event) {
        var userValue = event.target.value;
        return userValue;
    };

    /**
     * The function addNewContact creates a new conversation that the logged-in
     * user wants to have and sets the array of conversations adding this new conversation.
    */
    function addNewContact() {
        // Keeps the new contact's username that the user has typed.
        var newContact = document.getElementById("floatingTextarea").value;
        // Keeps new conversation between the log-in user to the contact the user has chose,
        // or null if there is no such user.
        var newConversation = AddNewChat({
            logInUsername: props.logInUsername,
            conversationsList: props.conversationsList,
            newContact: newContact, relevantInfo: props.relevantInfo, currentListOfChats: props.currentListOfChats
        });
        // If there is no such user, return and don't create anything.
        if (!newConversation) {
            return;
        }
        let chatsArr = [...props.currentListOfChats];
        // Pushing the new conversation to the beginning of the array of chats the log-in user is having.
        chatsArr.unshift(newConversation)
        // Pushing the new conversation to the conversations data-base.
        conversations.unshift(newConversation);
        // Pushing the new conversation to each user's chats array in the users data-base.
        for (var i = 0; i < Object.keys(users).length; i++) {
            if (newConversation.users[0].username == users[i].username) {
                users[i].chats.unshift(conversations[0]);
            }
            if (newConversation.users[1].username == users[i].username) {
                users[i].chats.unshift(conversations[0]);
            }
        }

        // Setting the array of conversations to present the new chat on the scree.
        props.setCurrentListOfChats(chatsArr);
    }

    /**
    * The function deletes the input text that the user has written and the messsage
    * he has recieved. 
    */
    function deleteInput() {
        document.getElementById("floatingTextarea").value = "";
        document.getElementById("validation").innerHTML = "";
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
                            <label htmlFor="floatingTextarea" className="col-form-label">Please enter the contact's username:</label>
                            <div className="form-floating">
                                <input type="text" className="form-control newContact" placeholder="Leave a comment here" id="floatingTextarea" onChange={getNewContactUsername} required></input>
                                <label htmlFor="floatingTextarea">Contact's username</label>
                            </div>
                            <div id="validation"></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={deleteInput}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={addNewContact}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ChooseNewChat;