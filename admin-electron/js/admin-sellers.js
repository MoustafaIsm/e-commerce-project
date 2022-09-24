const sellersCards = document.querySelector('.sellers-cards');
const moreInfoSection = document.querySelector('.sellers-more-section');
const newsellerSection = document.querySelector('.add-seller-section');
const closeNewsellerSection = document.querySelector('.close-newseller');
const newSellerbtn = document.getElementById('newseller');



// function to show more info popup
const displaymoreInfo = (data) => {
  let moreInfoPopup = `<input class="seller-id" type="hidden" name="" value="ramzi">
  <div class="sellers-info flex column">
    <div class="seller-info flex">
      <img class="seller-pp" src="${data.img}" alt="">
      <div class="seller-name-info">
          <p class = "seller-name">${data.name}</p>
          <p class = "seller-username">${data.email}</p>
      </div>
      <i class="fa fa-times close-popup" aria-hidden="true"></i>
    </div>
    <div class="line"></div>
    <div class="seller-more-info flex">
      <p class="info">Total Customers:</p>
      <p class="specified-info">${data.items}.</p>
    </div>
    <div class="seller-more-info flex">
      <p class="info">Total Items:</p>
      <p class="specified-info">${data.total}.</p>
    </div>
    <div class="seller-more-info flex">
      <p class="info">Address:</p>
      <p class="specified-info">Beirut.</p>
    </div>

    <div class="seller-more-info ph-number flex">
      <p class="info">Phone Number:</p>
      <p class="specified-info">+961 71487328.</p>
    </div>
  </div>`;
  moreInfoSection.classList.remove('hidden');
  moreInfoSection.innerHTML= moreInfoPopup;

};
// function to create client cards dynamicly
const createCard = (data) => {


const sellersCard = document.createElement('div');
sellersCard.classList.add('flex');
sellersCard.classList.add('column');
sellersCard.classList.add('client-card');
sellersCards.appendChild(sellersCard);

const seller_id = document.createElement('input');
seller_id.setAttribute("type", "hidden");
seller_id.classList.add('hidden-input')
seller_id.value = "ramzi";
sellersCard.appendChild(seller_id);

const clientInfo = document.createElement('div');
clientInfo.classList.add('flex');
clientInfo.classList.add('client-info');

sellersCard.appendChild(clientInfo);

const clientProfile = document.createElement('img');
clientProfile.src=data.img;
clientProfile.classList.add('client-pp');
clientInfo.appendChild(clientProfile);

const name_username = document.createElement('div');
name_username.classList.add('name-username');
name_username.classList.add('flex');
name_username.classList.add('column');
clientInfo.appendChild(name_username);

const clientName = document.createElement('p');
clientName.classList.add('client-name');
clientName.textContent = data.name;
name_username.appendChild(clientName);

const clientUsername = document.createElement('p');
clientUsername.classList.add('client-username');
clientUsername.textContent = data.email;
name_username.appendChild(clientUsername);

const banBtn = document.createElement('button');
banBtn.classList.add('btn-ban');
banBtn.textContent = "Delete";
clientInfo.appendChild(banBtn);

const line = document.createElement('div');
line.classList.add('line');
sellersCard.appendChild(line);

const itemsPurchased = document.createElement('div');
itemsPurchased.classList.add('items-purchased');
itemsPurchased.classList.add('flex');
sellersCard.appendChild(itemsPurchased);

const purchasedItems = document.createElement('p');
purchasedItems.textContent = "Total Customers:";
itemsPurchased.appendChild(purchasedItems);

const itemsCount = document.createElement('p');
itemsCount.classList.add('items-count');
itemsCount.textContent = `${data.items} customers.`;
itemsPurchased.appendChild(itemsCount);

const editSeller = document.createElement('i');
editSeller.classList.add('fa');
editSeller.classList.add('fa-edit');
editSeller.classList.add('edit-seller');
itemsPurchased.appendChild(editSeller);

const totalPurchases = document.createElement('div');
totalPurchases.classList.add('total-purchases');
totalPurchases.classList.add('flex');
sellersCard.appendChild(totalPurchases);

const purchasesTotal = document.createElement('p');
purchasesTotal.textContent = "Total Items:";
totalPurchases.appendChild(purchasesTotal);

const purchases = document.createElement('p');
purchases.classList.add('purchases');
purchases.textContent = `${data.total} items.`;
totalPurchases.appendChild(purchases);

var moreInfo = document.createElement('div');
moreInfo.classList.add('more-info');
moreInfo.textContent = "More info";
sellersCard.appendChild(moreInfo);

};


const sellersData = {
  'img':'./assets/pp.png',
  'name':'Ramzi El Ashkar',
  'email': 'Ramzi@gmail.com',
  'items': 5,
  'total': 500
}

const data = {
  'img':'./assets/pp.png',
  'name':'Ramzi El ',
  'email': 'Ramzi@gmail.com',
  'items': 5,
  'total': 500
}


for(let k=0; k<3;k++){
createCard(sellersData);
};
for(let k=0; k<3;k++){
createCard(data);
};


// Event Listeners
const moreinfoBtn = document.querySelectorAll('.more-info');
moreinfoBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    let input = item.parentElement.querySelector('.hidden-input');
    console.log(input.defaultValue);
    displaymoreInfo(data);
    const closeInfopopup = document.querySelector('.close-popup');

    closeInfopopup.addEventListener("click", () => {
    moreInfoSection.classList.add('hidden');
    });
  });

});

newSellerbtn.addEventListener("click", () => {
  newsellerSection.classList.remove('hidden');
});
closeNewsellerSection.addEventListener("click", () => {
  newsellerSection.classList.add('hidden');
});

