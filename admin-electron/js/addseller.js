const saveseller = document.querySelector('.save-newseller');
const error = document.querySelector('.error');
const addsellerUrl = "http://localhost/e-commerce-project/ecommerce-server/admin-api/add_seller.php";


// function to fetch add sellers api
const fetchaddSeller = (url, token) => {
  const resp =  axios.post(url, token);

return resp;

};

const addSeller = (data) => {

const addResponse = fetchaddSeller(addsellerUrl, data).then((result) => {
  console.log(result);
});
sellersCards.innerHTML = "";
getSellers();

};



// Event Listeners
saveseller.addEventListener("click", () => {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone-nb').value;
  const password = document.getElementById('password').value;
  if(fname == "" || lname == "" || email == "" || address == "" || phone == "" || password == ""){
    error.classList.remove('hidden');
  }
  else{
    error.classList.add('hidden');
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${year}-${month}-${day}`;
console.log(currentDate);
    const data = {
      'token':token,
      'password': password,
      'email': email,
      'address': address,
      'telephone' : phone,
      'first_name' : fname,
      'last_name' : lname,
      'registered_at' : currentDate
    }

    addSeller(data);
    newsellerSection.classList.add('hidden');
  }

});
