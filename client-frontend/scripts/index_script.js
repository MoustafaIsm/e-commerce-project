// Variables
const signupPopupBtn = document.getElementById("signup");
const signupPopup = document.getElementById("signup-popup");
const closeBtn = document.getElementById("close");
const signupBtn = document.getElementById("signup-btn");
const fNameInput = document.getElementById("f-name-input");
const lNameInput = document.getElementById("l-name-input");
const phoneNumber = document.getElementById("phone-number");
const emailInput = document.getElementById("email-input");
const password = document.getElementById("password-input");
const errorOutput = document.getElementById("error-output");
const signinBtn = document.getElementById("signin-btn");
const emailSignin = document.getElementById("email-signin");
const passwordSignin = document.getElementById("password-signin");
const siginError = document.getElementById("sigin-error");
const remember = document.getElementById("remember");

if (typeof signupPopup.showModal !== 'function') {
    signupPopup.hidden = true;
}

window.onload = () => {
    if (localStorage.getItem("userId") != null) {
        window.location.href = "./client.html";
    }
}

// Event listeners functions
const openSignupPopup = () => {
    signupPopup.showModal();
    signupPopup.classList.toggle("hide");
}

const closeSignupPopup = () => {
    signupPopup.close();
    signupPopup.classList.add("hide");
}

const signupUser = () => {
    errorOutput.textContent = "";
    if (fNameInput.value != "" && lNameInput.value != "" &&
        phoneNumber.value != "" && emailInput.value != "" && password.value != "") {
        isValidEmail = validateEmail(emailInput.value);
        if (isValidEmail) {
            const formData = new FormData();
            formData.append("password", password.value);
            formData.append("first_name", fNameInput.value);
            formData.append("last_name", lNameInput.value);
            formData.append("email", emailInput.value);
            formData.append("address", "NA");
            formData.append("telephone", phoneNumber.value);
            formData.append("profile_picture", "NA");
            formData.append("registered_at", getCurrentDate);
            axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/add-user-api.php", formData)
                .then((response) => { })
                .catch((error) => console.log(error));
            closeSignupPopup();
        } else {
            errorOutput.textContent = "Email invalid!";
            errorOutput.style.color = "red";
        }
    }
}

const signInUser = () => {
    siginError.textContent = "";
    if (emailSignin.value != "" && passwordSignin.value != "") {
        isValidEmail = validateEmail(emailSignin.value);
        if (isValidEmail) {
            const formData = new FormData();
            formData.append("email", emailSignin.value);
            formData.append("password", passwordSignin.value);
            axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/login-api.php", formData)
                .then((response) => response.data).
                then((data) => {
                    if (data.ispresent == true) {
                        if (data.pass_valid == true) {
                            if (remember.checked) {
                                saveUserData(data.user);
                            }
                            window.location.href = "./client.html";
                        } else
                            siginError.textContent = "Wrong password!";
                    } else
                        siginError.textContent = "Wrong email!";
                }).
                catch((error) => console.log(error));
        } else {
            siginError.textContent = "Email invalid!";
            siginError.style.color = "red";
        }
    }
}

// Event listeners
signupPopupBtn.addEventListener("click", openSignupPopup);
closeBtn.addEventListener("click", closeSignupPopup);
signupBtn.addEventListener("click", signupUser);
signinBtn.addEventListener("click", signInUser);


// helper functions

const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

const saveUserData = (user) => {
    localStorage.setItem("userId", user.user_id);
    localStorage.setItem("email", user.email);
    localStorage.setItem("profilePicture", user.profile_picture);
    localStorage.setItem("address", user.address);
    localStorage.setItem("firstName", user.first_name);
    localStorage.setItem("last_name", user.last_name);
    localStorage.setItem("telephone", user.telephone);
}

const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}