// Variables
const signupBtn = document.getElementById("signup");
const signupPopup = document.getElementById("signup-popup");
const closeBtn = document.getElementById("close");

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


// Event listeners
signupBtn.addEventListener("click", openSignupPopup);
closeBtn.addEventListener("click", closeSignupPopup);




// helper functions

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}