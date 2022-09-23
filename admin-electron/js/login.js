const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login');


// Function to validate login
const validateLogin = () => {
const email = emailInput.value;
const password = passInput.value;
console.log(email);
console.log(password);
if (email == "ramzi@gmail.com") {
location.replace('admin-clients.html');
}
};





// Event Listeners
loginBtn.addEventListener("click", () => {
validateLogin();
});
