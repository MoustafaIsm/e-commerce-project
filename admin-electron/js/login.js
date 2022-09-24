const emailInput = document.getElementById('email-input');
const passInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login');


const url = 'http://localhost/e-commerce-project/ecommerce-server/admin-api/login_api.php';
// Function to fetch login API
const fetchLoginAPI = (url, loginData) => {
  const resp =  axios.post(url, loginData);

return resp;


};

// Function to validate login
const validateLogin = (loginData) => {
  const response = fetchLoginAPI(url, loginData);
  response.then((result) => {
    if(result.data.ispresent == false){
      console.log('error');
      const errormsg = document.querySelector('.input-error');
      errormsg.classList.remove('hidden');

    }
    else{
      console.log(result.data.token);
      localStorage.setItem('token', result.data.token);
      location.replace('admin-clients.html');

  }});

};



// Event Listeners
loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passInput.value;

  const loginData = {
    "email": email,
    "password": password
  }
  validateLogin(loginData);
});
