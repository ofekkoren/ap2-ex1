import '../logIn/LogIn.css';
import users from '../db/UsersDataBase';


function SignIn() {

    const setValid = (element, message) => {
        const inputParent = element.parentElement;
        element.classList.add('is-valid');
        element.classList.remove('is-invalid')
        const validationMessgage = inputParent.getElementsByClassName("validation-helper")[0];
        validationMessgage.classList.add('valid-feedback');
        validationMessgage.classList.remove('invalid-feedback')
        validationMessgage.innerText = message;
    };

    const setInvalid = (element, message) => {
        const inputParent = element.parentElement;
        element.classList.add('is-invalid');
        element.classList.remove('is-valid')
        const validationMessgage = inputParent.getElementsByClassName("validation-helper")[0];
        validationMessgage.classList.add('invalid-feedback');
        validationMessgage.classList.remove('valid-feedback')
        validationMessgage.innerText = message;

    }

    const checkUserername = (checkedUsername) => {
        for (let user of users) {
            if (user.username === checkedUsername)
                return false
        }
        return true;
    }
    const checkImage = (checkedImage) => {
        let imagePath = checkedImage.value;
        let extensionIndex = imagePath.lastIndexOf(".") + 1;
        let extension = imagePath.substring(extensionIndex, imagePath.length).toLowerCase();
        if (extension == "jpg" || extension == "jpeg" || extension == "png") {
            return true
        } else
            return false;
    }

    const checkValid = () => {
        const userName = document.getElementById('username');
        const nickName = document.getElementById('nickname');
        const picture = document.getElementById('picture');
        const password = document.getElementById('Password');
        const passwordRepeat = document.getElementById('validatePassword');
        let isValid = true;
        if (userName.value.trim() === "") {
            setInvalid(userName, 'Username is required');
            isValid = false;
        } else if (!checkUserername(userName.value.trim())) {
            setInvalid(userName, 'Such username already exists');
            isValid = false;
        } else
            setValid(userName, "This username is available");
        if (nickName.value.trim() === "") {
            setInvalid(nickName, 'Nickname is required');
            isValid = false;
        } else
            setValid(nickName, "Nice Nickname!")
        if (picture.value != "" && !checkImage(picture)) {
            setInvalid(picture, 'Input type must be: png, jpg or jpeg. You can also choose too not uploat an image');
            picture.value = "";
            isValid = false;
        } else
            setValid(picture, "");
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
        } else
            setValid(passwordRepeat, "");
        return isValid
    }

    const handleSubmit = (event) => {
        const regForm = event.currentTarget;
        event.preventDefault();
        event.stopPropagation()
        if (checkValid()) {
            const newUserName = document.getElementById("username").value.trim();
            const newNickName = document.getElementById('nickname').value;
            const newPassword = document.getElementById('Password').value;
            //TODO fix picture
            const newPicture = "/images/userImages/default-image.jpg";

            users.push(
                {
                    username: newUserName,
                    nickname: newNickName,
                    password: newPassword,
                    Image: newPicture
                })
        }
    }
    return (
        <div className="container">
            <form className="text-center sign-in-form needs-validation" noValidate
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

                <div className="text invalid-feedback">
                    Please choose a username.
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
