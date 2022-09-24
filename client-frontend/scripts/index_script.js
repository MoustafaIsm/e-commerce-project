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

if (typeof signupPopup.showModal !== 'function') {
    signupPopup.hidden = true;
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


// Event listeners
signupPopupBtn.addEventListener("click", openSignupPopup);
closeBtn.addEventListener("click", closeSignupPopup);
signupBtn.addEventListener("click", signupUser);



// helper functions

const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}