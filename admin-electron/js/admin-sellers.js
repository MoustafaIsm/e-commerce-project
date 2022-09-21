const sellersCards = document.querySelector('.sellers-cards');

console.log('hellooo');
// function to create client cards dynamicly
const createCard = (data) => {
console.log("hll");
const sellersCard = document.createElement('div');
sellersCard.classList.add('flex');
sellersCard.classList.add('column');
sellersCard.classList.add('client-card');
sellersCards.appendChild(sellersCard);

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

const moreInfo = document.createElement('div');
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

for(let k=0; k<6;k++){
createCard(sellersData);
};
