// Variables
const signupPopupBtn = document.getElementById("signup");
const signupPopup = document.getElementById("signup-popup");
const closeBtn = document.getElementById("close");
const signupBtn = document.getElementById("signup-btn");
const fNameInput = document.getElementById("f-name-input");
const lNameInput = document.getElementById("l-name-input");
const phoneNumber = document.getElementById("phone-number");
const emailInput = document.getElementById("email-input");
const assword = document.getElementById("password-input");

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
}


// Event listeners
signupPopupBtn.addEventListener("click", openSignupPopup);
closeBtn.addEventListener("click", closeSignupPopup);
signupBtn.addEventListener("click", signupUser);



// helper functions

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}