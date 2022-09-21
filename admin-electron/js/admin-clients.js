const admininfo = document.querySelector('.admin-info');
const logoutContainer = document.querySelector('.logout-container');





// Function to display Logout Container
const displayLogoutContainer = () => {
  logoutContainer.classList.toggle('hidden');
};


// Event Listeners
admininfo.addEventListener('click', () => {
  displayLogoutContainer();
});
