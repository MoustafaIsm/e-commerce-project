const admininfo = document.querySelector('.admin-info');
const logoutContainer = document.querySelector('.logout-container');
const clientscards = document.querySelector('.clients-cards');
let banned = false;

// function to create client cards dynamicly
const createCards = (data, banned) => {
let btnText = "ban";

if(banned){
   btnText = 'Unban';
}

const clientCard = document.createElement('div');
clientCard.classList.add('flex');
clientCard.classList.add('column');
clientCard.classList.add('client-card');
clientscards.appendChild(clientCard);

const clientInfo = document.createElement('div');
clientInfo.classList.add('flex');
clientInfo.classList.add('client-info');

clientCard.appendChild(clientInfo);

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
banBtn.textContent = btnText;
clientInfo.appendChild(banBtn);

const line = document.createElement('div');
line.classList.add('line');
clientCard.appendChild(line);

const itemsPurchased = document.createElement('div');
itemsPurchased.classList.add('items-purchased');
itemsPurchased.classList.add('flex');
clientCard.appendChild(itemsPurchased);

const purchasedItems = document.createElement('p');
purchasedItems.textContent = "Items Purchased";
itemsPurchased.appendChild(purchasedItems);

const itemsCount = document.createElement('p');
itemsCount.classList.add('items-count');
itemsCount.textContent = `${data.items} items.`;
itemsPurchased.appendChild(itemsCount);


const totalPurchases = document.createElement('div');
totalPurchases.classList.add('total-purchases');
totalPurchases.classList.add('flex');
clientCard.appendChild(totalPurchases);

const purchasesTotal = document.createElement('p');
purchasesTotal.textContent = "Total Purchases:";
totalPurchases.appendChild(purchasesTotal);

const purchases = document.createElement('p');
purchases.classList.add('purchases');
purchases.textContent = `${data.total} $.`;
totalPurchases.appendChild(purchases);
};





const clientData = {
  'img':'./assets/pp.png',
  'name':'Ramzi El Ashkar',
  'email': 'Ramzi@gmail.com',
  'items': 5,
  'total': 500
}
for(let i=0; i<6;i++){
createCards(clientData, banned);
}
// Function to display Logout Container
const displayLogoutContainer = () => {
  logoutContainer.classList.toggle('hidden');
};


// Event Listeners
admininfo.addEventListener('click', () => {
  displayLogoutContainer();
});
