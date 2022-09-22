const admininfo = document.querySelector('.admin-info');
const logoutContainer = document.querySelector('.logout-container');
const activeclientscards = document.querySelector('#active-clients');
const bannedclientscards = document.querySelector('#banned-clients');
const bannedClients = document.querySelector('.banned-clients');
const activeClients = document.querySelector('.active-clients');
const bannedSection = document.getElementById('banned');
const activeSection = document.getElementById('active');
const topbar = document.querySelector('.top-bar');
const clientsPage = document.getElementById('clients-page');
const sellersPage = document.getElementById('sellers-page');
const statsPage = document.getElementById('stats-page');
const clientstab = document.querySelector('.client-tab');
const sellerstab = document.querySelector('.sellers-tab');

let banned = false;
clientsPage.classList.add('active');
// function to create client cards dynamicly
const createCards = (data, banned, clientscards) => {
let btnText = "ban";

if(banned){
  console.log('true');
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

// function to display Banned Clients
const displayBanned = () => {
  activeSection.classList.add('hidden');
  bannedSection.classList.remove('hidden');
  activeClients.classList.remove('selected');
  bannedClients.classList.add('selected');
};

// function to display active clients
const displayActive = () => {
  bannedSection.classList.add('hidden');
  activeSection.classList.remove('hidden');
  bannedClients.classList.remove('selected');
  activeClients.classList.add('selected');
};


const clientData = {
  'img':'./assets/pp.png',
  'name':'Ramzi El Ashkar',
  'email': 'Ramzi@gmail.com',
  'items': 5,
  'total': 500
}
for(let i=0; i<6;i++){
createCards(clientData, banned, activeclientscards);
}
banned = true;
for(let j=0; j<6;j++){
createCards(clientData, banned, bannedclientscards);
}
// Function to display Logout Container
const displayLogoutContainer = () => {
  logoutContainer.classList.toggle('hidden');
};

// Function to Adjust Topbar on Scroll
const adjustTopbar = () => {
  if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
    topbar.classList.add('scrolled');
  }
  else{
    topbar.classList.remove('scrolled');
  }
};

// function to navigate between tabs
const changeTab = (navitem) => {
if(navitem == clientsPage){
  navitem.classList.add('active');
  sellersPage.classList.remove('active');
  statsPage.classList.remove('active');
  clientstab.classList.remove('hidden');
  sellerstab.classList.add('hidden');

}
else if(navitem == sellersPage){
  navitem.classList.add('active');
  clientsPage.classList.remove('active');
  statsPage.classList.remove('active');
  clientstab.classList.add('hidden');
  sellerstab.classList.remove('hidden');

}
else{
  navitem.classList.add('active');
  clientsPage.classList.remove('active');
  sellersPage.classList.remove('active');
}
};
// Event Listeners
admininfo.addEventListener('click', () => {
  displayLogoutContainer();
});

bannedClients.addEventListener('click', () => {
  displayBanned();
});

activeClients.addEventListener('click', () => {
  displayActive();
});

window.onscroll = () => {
  adjustTopbar();
};

clientsPage.addEventListener('click', () => {
changeTab(clientsPage);
});

sellersPage.addEventListener("click", () => {
  changeTab(sellersPage);
});
statsPage.addEventListener("click", () => {
  changeTab(statsPage);
});