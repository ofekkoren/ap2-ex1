import '../logIn/LogIn.css';
import './SignUp.css'
import users from '../db/UsersDataBase';
import {convertToBase64, getUser} from "../chatScreen/Utils";
import {Link, useNavigate} from "react-router-dom";
import React from "react";
import { user, setUser } from '../logIn/LogIn';

const PASSWORD_MIN_LENGTH = 6;

/**
 * A sign-up form for the chat app.
 */
function SignUp() {
    const navigate = useNavigate();

    /**
     * Setting an invalid class and invalid feedback for element.
     * @param element the element that will have an invalid feedback.
     * @param message the message of the feedback.
     */
    const setValid = (element, message) => {
        const inputParent = element.parentElement;
        element.classList.add('is-valid');
        element.classList.remove('is-invalid')
        const validationMessage = inputParent.getElementsByClassName("validation-helper")[0];
        validationMessage.classList.add('valid-feedback');
        validationMessage.classList.remove('invalid-feedback')
        validationMessage.innerText = message;
    };

    /**
     * Setting a valid class and valid feedback for element.
     * @param element the element that will have a valid feedback.
     * @param message the message of the feedback.
     */
    const setInvalid = (element, message) => {
        const inputParent = element.parentElement;
        element.classList.add('is-invalid');
        element.classList.remove('is-valid')
        const validationMessage = inputParent.getElementsByClassName("validation-helper")[0];
        validationMessage.classList.add('invalid-feedback');
        validationMessage.classList.remove('valid-feedback')
        validationMessage.innerText = message;

    }

    /**
     * Checking if the given username already exists in the users database.
     * @param checkedUsername.
     * @returns false- if the username already exists. true- if the username is free to use.
     */
    const checkUsername = (checkedUsername) => {
        for (let user of users) {
            if (user.username === checkedUsername)
                return false
        }
        return true;
    }

    /**
     * Checking if the given element represents a path to a png/jpg/jpeg file.
     */
    const checkImage = (checkedImage) => {
        let imagePath = checkedImage.value;
        let extensionIndex = imagePath.lastIndexOf(".") + 1;
        let extension = imagePath.substring(extensionIndex, imagePath.length).toLowerCase();
        if (extension === "jpg" || extension === "jpeg" || extension === "png") {
            return true
        } else
            return false;
    }

    /**
     * Checking if the data filled by the user in a form is valid.
     * @returns true if all the data is valid. Else, false is returned.
     */
    const checkValid = () => {
        //getting the user input elements.
        const userName = document.getElementById('username');
        const nickName = document.getElementById('nickname');
        const picture = document.getElementById('picture');
        const password = document.getElementById('Password');
        const passwordRepeat = document.getElementById('validatePassword');

        let isValid = true;
        //Checking the username. We want it to be unique and not an empty string.
        if (userName.value.trim() === "") {
            setInvalid(userName, 'Username is required');
            isValid = false;
        } else if (!checkUsername(userName.value.trim())) {
            setInvalid(userName, 'Such username already exists');
            isValid = false;
        } else
            setValid(userName, "This username is available");

        //Checking the nickname. We don't allow empty string as nickname.
        if (nickName.value.trim() === "") {
            setInvalid(nickName, 'Nickname is required');
            isValid = false;
        } else
            setValid(nickName, "Nice Nickname!")


        //Checking the image uploaded by the user. It must be a jpg/png/jpeg file.
        if (picture.value !== "" && !checkImage(picture)) {
            setInvalid(picture, 'Input type must be: png, jpg or jpeg. You can also choose too not upload an image');
            picture.value = "";
            isValid = false;
        } else
            setValid(picture, "");

        /*
         * Checking the password chosen by the user. It must be longer than 6 character and contain al least one letter
         * and one number.
         */
        if (password.value.length < PASSWORD_MIN_LENGTH) {
            setInvalid(password, 'Password must contain at least 6 characters');
            isValid = false;
        } else if (password.value.search(/\d/) == -1) {
            setInvalid(password, 'Password must contain at least one number');
            isValid = false;
        } else if (password.value.search(/[a-zA-Z]/) == -1) {
            setInvalid(password, 'Password must contain at least one letter');
            isValid = false;
        } else
            setValid(password, "Good password");

        if (passwordRepeat.value === "") {
            setInvalid(passwordRepeat, "You are required to repeat your password");
            isValid = false;
        } else if (passwordRepeat.value !== password.value) {
            setInvalid(passwordRepeat, "Password doesn't match");
            isValid = false;
        } else
            setValid(passwordRepeat, "");
        return isValid
    }

    /**
     * Handling the submission of the registration form.
     * @param event the submit event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation()
        //If the information filled by the user is valid he will be added to the user database.
        if (checkValid()) {
            const newUserName = document.getElementById("username").value.trim();
            const newNickName = document.getElementById('nickname').value.trim();
            const newPassword = document.getElementById('Password').value;
            let newPicture = process.env.PUBLIC_URL + "/images/userImages/default-image.jpg";
            users.push(
                {
                    username: newUserName,
                    nickname: newNickName,
                    password: newPassword,
                    image: newPicture,
                    chats: []
                })
            //If the user chose to upload an image we will change its image from the default user image.
            if (document.getElementById('picture').value !== "") {
                var imagePromise = convertToBase64(document.getElementById('picture').files[0]);
                imagePromise.then(function (result) {
                    newPicture = result;
                    users[users.length - 1].image = newPicture;
                });
            }

            // Redirecting the user to the chat.
            setUser(getUser(newUserName));
            navigate("../chatScreen");
        }
    }

    return (
        //The sign-up form.
        <div className="container" id="signContainer">
            <form className="text-center sign-up-form needs-validation" noValidate id="signUpForm"
                onSubmit={handleSubmit}>
                <h3 className="log-in-header">We need more friends, please join us ...</h3>

                <div className="form-floating mb-3 input-style ">
                    <input type="text" name='userName' className="form-control input-box-size" id="username"
                        placeholder="Username"></input>
                    <label className="form-label" htmlFor="username">Username</label>
                    <span className="validation-helper"></span>
                </div>

                <div className="form-floating mb-3 input-style ">
                    <input type="text" name='userName' className="form-control " id="nickname"
                        placeholder="nickname"></input>
                    <label className="form-label" htmlFor="nickname">nickname</label>
                    <span className="validation-helper"></span>
                </div>

                <div className="form-floating mb-3 input-style ">
                    <input type="file" accept=".jpg, .jpeg, .png" name='userName' className="form-control " id="picture"
                        placeholder="Profile picture"></input>
                    <label className="form-label" htmlFor="picture" id="userImageInput">Profile picture</label>
                    <span className="validation-helper"></span>
                </div>

                <div className="form-floating mb-3 input-style ">
                    <input type="password" name='Password' className="form-control " id="Password"
                        placeholder="Password"></input>
                    <label className="form-label" htmlFor="Password">Password</label>
                    <span className="validation-helper"></span>
                </div>

                <div className="form-floating mb-3 input-style ">
                    <input type="password" name='validatePassword' className="form-control " id="validatePassword"
                        placeholder="Repeat password"></input>
                    <label className="form-label" htmlFor="validatePassword">Repeat password</label>
                    <span className="validation-helper"></span>
                </div>


                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-lg">Sign-in</button>
                </div>

                <div className="text">
                    already registered? log in <Link to='/' className="text">here</Link>
                </div>
            </form>
        </div>
    )
        ;
}

export default SignUp;
