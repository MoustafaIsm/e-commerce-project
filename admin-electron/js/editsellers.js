const editSellerSection = document.querySelector('.edit-seller-section');
const editUrl = "http://localhost/e-commerce-project/ecommerce-server/admin-api/edit_seller.php";
const sellerInfoAPI = "http://localhost/e-commerce-project/ecommerce-server/admin-api/get-seller.php";
// function to display Edit Seller Section
const displayEditSeller = (data) => {
let editsellerProfile = `<div class="edit-seller-info flex column">
<div class="seller-heading flex">
<input type="hidden" name="" class="seller-token" value="${data.user_id}"">
  <i class="fa fa-times close-edit" aria-hidden="true"></i>
  <img src="assets/pp.png" class="seller-img" alt="">
  <button type="button" class="save-edit" name="save">Save</button>
</div>
<div class="line"></div>
<div class="seller-changes flex column">
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-fname">First Name:</label>
    <input type="text" name="fname" id="edited-fname" class = "change-input" value=${data.first_name}>
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-lname">Last Name:</label>
    <input type="text" name="fname" id="edited-lname" class = "change-input" value=${data.last_name}>
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-email">Email:</label>
    <input type="email" name="fname" id="edited-email" class = "change-input" value=${data.email}>
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-phone-nb">Phone Number:</label>
    <input type="text" name="fname" id="edited-phone-nb" class = "change-input" value=${data.telephone}>
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-address">Address:</label>
    <input type="text" name="fname" id="edited-address" class = "change-input" value=${data.address}>
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-password">New Password:</label>
    <input type="password" name="fname" id="edited-password" class = "change-input" value="">
  </div>
</div>
</div>`;
editSellerSection.innerHTML = editsellerProfile;
editSellerSection.classList.remove('hidden');
return editsellerProfile;

};

// function to get seller info
const getSellerInfo = (seller_id) => {
  const data = {
    'token': token,
    'user_id' : seller_id
  }
const resonse = fetchSellerInfoAPI(sellerInfoAPI, data).then((result) => {
   editSellerPopup = displayEditSeller(result.data[0]);
   const closeEdit = editSellerSection.querySelector('.close-edit');
   closeEdit.addEventListener("click", () => {
     editSellerSection.classList.add('hidden');
   });
   const saveEdit = editSellerSection.querySelector('.save-edit');
   saveEdit.addEventListener('click',() => {
     const changedValues = changedFields(editSellerSection, seller_id);
     console.log(changedValues);
     const response = saveEdited(editUrl, changedValues);

     editSellerSection.classList.add('hidden');

   });});


};

// function to display more info popup
const getmoreSellerInfo = (seller_id) => {
  const data = {
    'token': token,
    'user_id' : seller_id
  }
  const resonse = fetchSellerInfoAPI(sellerInfoAPI, data).then( (result) => {
    console.log(result.data[0]);
    displaymoreInfo(result.data[0]);
    const closeMore = moreInfoSection.querySelector('.close-popup');
    closeMore.addEventListener("click", () => {
      moreInfoSection.classList.add('hidden');
    });
  });
};


// function to fetch Seller info API
const fetchSellerInfoAPI = (url, changedValues) => {
  console.log(url);
  const resp =  axios.post(url, changedValues);

  return resp;
};

// function to set input fields Event Listeners
const changedFields = (editSellerPopup, seller_id) => {

const fullNameInput = document.getElementById('edited-fname');
const lastNameInput = document.getElementById('edited-lname');
const emailInput = document.getElementById('edited-email');
const phoneInput = document.getElementById('edited-phone-nb');
const addressInput = document.getElementById('edited-address');
const passInput = document.getElementById('edited-password');
let changed ={
  'user_id': seller_id,
  'token': token,
  'first_name': fullNameInput.value,
  'last_name': lastNameInput.value,
  'email' : emailInput.value,
  'phone_number' : phoneInput.value,
  'address' :addressInput.value,
  'password' : passInput.value
}
return changed;

};



// function to save edited changes to DB
const saveEdited = (url, changedValues) => {
  console.log(url);
  const resp =  axios.post(url, changedValues);
  sellersCards.innerHTML = "";
  getSellers();

  return resp;
};
// Event Listeners
