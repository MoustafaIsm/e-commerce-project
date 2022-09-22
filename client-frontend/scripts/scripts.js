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

const openWishlistPage = () => {
    changeNavBtn("wishlist");
    openPage("wishlist");
}

const openCartPage = () => {
    changeNavBtn("cart");
    openPage("cart");
}

/* Eventlisteners */

discoverNavBtn.addEventListener("click", openDiscoverPage);
wishlistNavBtn.addEventListener("click", openWishlistPage);
cartNavBtn.addEventListener("click", openCartPage);

/* Helper functions */

const changeNavBtn = (pageToOpen) => {
    if (pageToOpen == "discover") {
        discoverNavBtn.classList.add("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
    } else if (pageToOpen == "wishlist") {
        discoverNavBtn.classList.remove("nav-bar-item-active");
        wishlistNavBtn.classList.add("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
    } else if (pageToOpen == "cart") {
        discoverNavBtn.classList.remove("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.add("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
    }
}

const openPage = (pageToOpen) => {
    if (pageToOpen == "discover") {
        discoverPage.classList.remove("hide");
        wishlistPage.classList.add("hide");
        cartPage.classList.add("hide");
        chatPage.classList.add("hide");
        profilePage.classList.add("hide");
    } else if (pageToOpen == "wishlist") {
        discoverPage.classList.add("hide");
        wishlistPage.classList.remove("hide");
        cartPage.classList.add("hide");
        chatPage.classList.add("hide");
        profilePage.classList.add("hide");
    } else if (pageToOpen == "cart") {
        discoverPage.classList.add("hide");
        wishlistPage.classList.add("hide");
        cartPage.classList.remove("hide");
        chatPage.classList.add("hide");
        profilePage.classList.add("hide");
    }
}