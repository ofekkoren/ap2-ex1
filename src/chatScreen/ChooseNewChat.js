import conversations from '../db/Conversations';
import users from '../db/UsersDataBase';
import AddNewChat from './AddNewChat';
import { useState } from "react";

function ChooseNewChat({ logInUsername, conversationsList, relevantInfo }) {
    // function ChooseNewChat() {
    // getUsername = (event)=>{
    //     const userValue = event.target.value;
    //     console.log(userValue);
    // };
    function getNewContactUsername(event) {
        var userValue = event.target.value;
        console.log(userValue);
        return userValue;
    };

    function addNewContact() {
        var newContact = document.getElementById("floatingTextarea").value;
        // console.log("printing: " + newContact);
        return AddNewChat(logInUsername, conversationsList, newContact, relevantInfo);
        // <AddNewChat logInUsername={logInUsername} conversationsList={conversationsList} newContact="Shir Levi" relevantInfo={relevantInfo} />
    }

    return (
        <div className="col-4 leftScreen">
            <div className="modal fade" id="add-new-contact-model" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <label htmlFor="floatingTextarea" className="col-form-label">Please enter the contact's username:</label>
                                <div className="form-floating">
                                    <input type="text" className="form-control newContact" placeholder="Leave a comment here" id="floatingTextarea" onChange={getNewContactUsername} required></input>
                                    <label htmlFor="floatingTextarea">Contact's identifier</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addNewContact}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ChooseNewChat;