import '../logIn/LogIn.css';
import users from '../db/UsersDataBase';
import {convertToBase64Image} from "../chatScreen/Utils";

function SignIn() {
    /**
     * Setting an invalid class and invalid feedback for element.
     * @param element the element that will have an invalid feedback.
     * @param message the message of the feedback.
     */
    const setValid = (element, message) => {
        const inputParent = element.parentElement;
        element.classList.add('is-valid');
        element.classList.remove('is-invalid')
        const validationMessgage = inputParent.getElementsByClassName("validation-helper")[0];
        validationMessgage.classList.add('valid-feedback');
        validationMessgage.classList.remove('invalid-feedback')
        validationMessgage.innerText = message;
    };

    /**
     * Setting an valid class and valid feedback for element.
     * @param element the element that will have a valid feedback.
     * @param message the message of the feedback.
     */
    const setInvalid = (element, message) => {
        const inputParent = element.parentElement;
        element.classList.add('is-invalid');
        element.classList.remove('is-valid')
        const validationMessgage = inputParent.getElementsByClassName("validation-helper")[0];
        validationMessgage.classList.add('invalid-feedback');
        validationMessgage.classList.remove('valid-feedback')
        validationMessgage.innerText = message;

    }

    /**
     * Checking if the given username already exists in the users database.
     * @param checkedUsername.
     * @returns false- if the username already exists. true- if the username is free to use.
     */
    const checkUserername = (checkedUsername) => {
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
        if (extension == "jpg" || extension == "jpeg" || extension == "png") {
            return true
        } else
            return false;
    }

    /**
     * Checking if the data filled by the user in a form is valid.
     * @returns true if all the data is valid. Else, false is returned.
     */
    const checkValid = () => {
        //getting the elements.
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
        } else if (!checkUserername(userName.value.trim())) {
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
        if (picture.value != "" && !checkImage(picture)) {
            setInvalid(picture, 'Input type must be: png, jpg or jpeg. You can also choose too not uploat an image');
            picture.value = "";
            isValid = false;
        } else
            setValid(picture, "");

        /*
         * Checking the password chosen by the user. It must be longer than 6 character and contain al least one letter
         * and one number.
         */
        if (password.value.length < 6) {
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

        if (passwordRepeat.value !== password.value) {
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
        const regForm = event.currentTarget;
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
                    image: newPicture
                })
            //If the user chose to upload an image we will change it's image from the deafult user image.
            if (document.getElementById('picture').value != "") {
                var imagePromise = convertToBase64Image(document.getElementById('picture').files[0]);
                imagePromise.then(function (result) {
                    newPicture = result;
                    users[users.length - 1].image = newPicture;
                });
            }
            //Indicating the user about the successful registration
            let formContainer = document.getElementById("signContainer");
            let signInComplete = document.createElement('div');

            signInComplete.innerHTML = "<h4 class=\"text-center sign-in-form\" role=\"alert\">\n" +
                "  You have successfully signed-up   :-)<br><br>  You can click <a href=\"#\" class=\"alert-link\">here</a>" +
                " to log-in with your new user <br>" +
                "</h4>"

            formContainer.append(signInComplete);
            document.getElementById("signInForm").remove();
        }
    }
    <div className="col-sm-5" id="sd">
        <input type="text" className="col form-control form-control-lg" id="username"
               placeholder="Enter username" required></input>
        <span className="validation-helper"></span>
    </div>
    return (
        //The sign-up form.
        <div className="container" id="signContainer">
            <form className="text-center sign-in-form needs-validation" noValidate id="signInForm"
                  onSubmit={handleSubmit}>
                <div className="form-group row justify-content-center center-user">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label col-form-label-lg">Username</label>
                    <div className="col-sm-5">
                        <input type="text" className="col form-control form-control-lg" id="username"
                               placeholder="Enter username" required></input>
                        <span className="validation-helper"></span>
                    </div>
                </div>
                <div className="form-group row justify-content-center center-user">
                    <label htmlFor="nickname"
                           className="col-sm-2 col-form-label col-form-label-lg">Nickname</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control form-control-lg" id="nickname"
                               placeholder="Enter nickname" required></input>
                        <span className="validation-helper"></span>
                    </div>
                </div>
                <div className="form-group row justify-content-center center-user">
                    <label htmlFor="picture"
                           className="col-sm-2 col-form-label col-form-label-lg">picture</label>
                    <input className="form-control file-input-sm" type="file" accept=".jpg, .jpeg, .png"
                           id="picture"></input>
                    <span className="validation-helper"></span>
                </div>
                <div className="form-group row justify-content-center center-user ">
                    <label htmlFor="Password" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
                    <div className="col-sm-5">
                        <input type="password" className="form-control form-control-lg" id="Password"
                               placeholder="Enter your password"></input>
                        <span className="validation-helper"></span>
                    </div>
                </div>
                <div className="form-group row justify-content-center center-user">
                    <label htmlFor="validatePassword" className="col-sm-4 col-form-label col-form-label-lg">Repeat
                        password</label>
                    <div className="col-sm-5">
                        <input type="password" className="form-control form-control-lg" id="validatePassword"
                               placeholder="Repeat your password"></input>
                        <span className="validation-helper"></span>
                    </div>
                </div>


                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-lg">Sign-in</button>
                </div>

                <div className="text">
                    already registered? sign in <a href='#' className="text">here</a>
                </div>
            </form>
        </div>
    )
        ;
}

export default SignIn;
