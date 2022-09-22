const editSellerSection = document.querySelector('.edit-seller-section');
const editSellerBtn = document.querySelectorAll('.edit-seller');

// function to display Edit Seller Section
const displayEditSeller = () => {
let editsellerProfile = `<div class="edit-seller-info flex column">
<div class="seller-heading flex">
<input type="hidden" name="" class="seller-token" value="rammm">
  <i class="fa fa-times close-edit" aria-hidden="true"></i>
  <img src="assets/pp.png" class="seller-img" alt="">
  <button type="button" class="save-edit" name="save">Save</button>
</div>
<div class="line"></div>
<div class="seller-changes flex column">
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-fname">First Name:</label>
    <input type="text" name="fname" id="edited-fname" class = "change-input" value="ra">
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-lname">Last Name:</label>
    <input type="text" name="fname" id="edited-lname" class = "change-input" value="">
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-email">Email:</label>
    <input type="email" name="fname" id="edited-email" class = "change-input" value="">
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-phone-nb">Phone Number:</label>
    <input type="text" name="fname" id="edited-phone-nb" class = "change-input" value="">
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-address">Address:</label>
    <input type="text" name="fname" id="edited-address" class = "change-input" value="">
  </div>
  <div class="change-inputs flex column">
    <label class="change-label" for="edited-password">New Password:</label>
    <input type="password" name="fname" id="edited-password" class = "change-input" value="">
  </div>
</div>
</div>`;
editSellerSection.innerHTML = editsellerProfile;
editSellerSection.classList.remove('hidden');

};

// function to set input fields Event Listeners
const changedFields = () => {

const fullNameInput = document.getElementById('edited-fname');
const lastNameInput = document.getElementById('edited-lname');
const emailInput = document.getElementById('edited-email');
const phoneInput = document.getElementById('edited-phone-nb');
const addressInput = document.getElementById('edited-address');
const passInput = document.getElementById('edited-password');

let changed ={
  'full_name': fullNameInput.value,
  'last_name': lastNameInput.value,
  'email' : emailInput.value,
  'phone_number' : phoneInput.value,
  'address' :addressInput,
  'password' : passInput.value
}

fullNameInput.addEventListener("input", () => {
   let fullName = fullNameInput.value;
   changed['full_name'] = fullName;
});
lastNameInput.addEventListener("input", () => {
   let lastName = lastNameInput.value;
   changed['last_name'] = lastName;
});
emailInput.addEventListener("input", () => {
   let email = emailInput.value;
   changed['email'] = email;
});
phoneInput.addEventListener("input", () => {
   let phone = phoneInput.value;
   changed['phone_number'] = phone;
});
addressInput.addEventListener("input", () => {
   let address = addressInput.value;
   changed['address'] = address;
});
passInput.addEventListener("input", () => {
   let password = passInput.value;
   changed['password'] = password;
});
return changed;
};

// function to save edited changes to DB
const saveEdited = (changedValues) => {
  console.log(changedValues);
};
// Event Listeners
editSellerBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    displayEditSeller();
    let changedValues = changedFields();
    const closeEdit = document.querySelector('.close-edit');
    closeEdit.addEventListener("click", () => {
      editSellerSection.classList.add('hidden');
    });
    const saveEdit = document.querySelector('.save-edit');
    saveEdit.addEventListener('click',() => {
      const sellerToken = saveEdit.parentElement.querySelector('.seller-token');
      //console.log(changedValues);
      saveEdited(changedValues);
    });
  });
});
