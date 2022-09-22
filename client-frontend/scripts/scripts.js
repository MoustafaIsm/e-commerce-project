/* Variables */

// Nav buttons
const discoverNavBtn = document.getElementById("discover-nav-btn");
const wishlistNavBtn = document.getElementById("wishlist-nav-btn");
const cartNavBtn = document.getElementById("cart-nav-btn");
const chatNavBtn = document.getElementById("chat-nav-btn");
const profileNavBtn = document.getElementById("chat-nav-btn");

// Pages
const discoverPage = document.getElementById("discover-page");
const wishlistPage = document.getElementById("wishlist-page");
const cartPage = document.getElementById("cart-page");
const chatPage = document.getElementById("chat-page");
const profilePage = document.getElementById("profile-page");

/* Eventlisteners functions */

const openDiscoverPage = () => {
    changeNavBtn("discover");
    openPage("discover");
}

/* Eventlisteners */

discoverNavBtn.addEventListener("click", openDiscoverPage);

/* Helper functions */

const changeNavBtn = (pageToOpen) => {
    if (pageToOpen == "discover") {
        discoverNavBtn.classList.add("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
    }
}

const openPage = (pageToOpen) => {
    if (pageToOpen == "discover") {
        discoverPage.classList.add("nav-bar-item-active");
        wishlistPage.classList.remove("nav-bar-item-active");
        cartPage.classList.remove("nav-bar-item-active");
        chatPage.classList.remove("nav-bar-item-active");
        profilePage.classList.remove("nav-bar-item-active");
        console.log("donre");
    }
}