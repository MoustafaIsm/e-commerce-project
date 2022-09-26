const saveseller = document.querySelector('.save-newseller');
const error = document.querySelector('.error');
const addsellerUrl = "http://localhost/SEF/e-commerce-project/ecommerce-server/admin-api/add_seller.php";


// function to fetch add sellers api
const fetchaddSeller = (url, token) => {
  const resp =  axios.post(url, token);

return resp;

};

const addSeller =  (data) => {

const addResponse = fetchaddSeller(addsellerUrl, data).then((result) => {
  console.log(result);
  sellersCards.innerHTML = '';
   getSellers();
   const inputs = newsellerSection.querySelectorAll('.change-input');
   inputs.forEach((item, i) => {
     item.value='';
   });

});


};



// Event Listeners
saveseller.addEventListener("click", () => {
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;
  let phone = document.getElementById('phone-nb').value;
  let password = document.getElementById('password').value;
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
      'token': token,
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
