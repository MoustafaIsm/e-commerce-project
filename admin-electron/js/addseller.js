const saveseller = document.querySelector('.save-newseller');
const error = document.querySelector('.error');


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
    //call the function that fetches api
    //recall the function that gets sellers cards
  }

});
