/* Variables */

// Nav buttons
const discoverNavBtn = document.getElementById("discover-nav-btn");
const wishlistNavBtn = document.getElementById("wishlist-nav-btn");
const cartNavBtn = document.getElementById("cart-nav-btn");
const chatNavBtn = document.getElementById("chat-nav-btn");
const profileNavBtn = document.getElementById("profile-nav-btn");

// Burger menu
const burgerMenuBtn = document.getElementById("burger-menu-btn");
const burgerNavItems = document.getElementById("burger-nav-bar-btns");
const burgerDiscoverNavBtn = document.getElementById("burger-discover-nav-btn");
const burgerWishlistNavBtn = document.getElementById("burger-wishlist-nav-btn");
const burgerCartNavBtn = document.getElementById("burger-cart-nav-btn");
const burgerChatNavBtn = document.getElementById("burger-chat-nav-btn");
const burgerProfileNavBtn = document.getElementById("burger-profile-nav-btn");

// Pages
const discoverPage = document.getElementById("discover-page");
const wishlistPage = document.getElementById("wishlist-page");
const cartPage = document.getElementById("cart-page");
const chatPage = document.getElementById("chat-page");
const profilePage = document.getElementById("profile-page");

// Product details popup
const productPopup = document.getElementById("product-popup");
const closeProductPopup = document.getElementById("close-popup");

// Discount code in cart page
const textBtn = document.getElementById("open-discount-input");
const discountInput = document.getElementById("discount-input");
const discountApplyBtn = document.getElementById("discount-apply-btn");

// Edit profile popup
const editProfileBtn = document.getElementById("edit-profile-btn");
const editProfilePopup = document.getElementById("profile-popup");
const closeProfilePopup = document.getElementById("close-profile-popup");

//Temporary variable for testing
const temp = document.getElementById("temp");

// If a browser doesn't support the dialog, then hide it
if (typeof productPopup.showModal !== 'function') {
    productPopup.hidden = true;
}
if (typeof editProfilePopup.showModal !== 'function') {
    editProfilePopup.hidden = true;
}

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

const openChatPage = () => {
    changeNavBtn("chat");
    openPage("chat");
}

const openProfilePage = () => {
    changeNavBtn("profile");
    openPage("profile");
    fillPersonalInfo();
}

const openBurgerMenu = () => {
    burgerNavItems.classList.toggle("display-burger-menu-items");
}

const closeProductPopupFun = () => {
    productPopup.classList.add("hide");
    productPopup.close();
}

const openDiscountInput = () => {
    discountInput.classList.toggle("hide");
    discountApplyBtn.classList.toggle("hide");
}

const openProfilePopup = () => {
    editProfilePopup.classList.remove("hide");
    editProfilePopup.showModal();
}

const closeProfilePopupFun = () => {
    editProfilePopup.classList.add("hide");
    editProfilePopup.close();
}

/* Eventlisteners */

discoverNavBtn.addEventListener("click", openDiscoverPage);
wishlistNavBtn.addEventListener("click", openWishlistPage);
cartNavBtn.addEventListener("click", openCartPage);
chatNavBtn.addEventListener("click", openChatPage);
profileNavBtn.addEventListener("click", openProfilePage);

burgerMenuBtn.addEventListener("click", openBurgerMenu);
burgerDiscoverNavBtn.addEventListener("click", openDiscoverPage);
burgerWishlistNavBtn.addEventListener("click", openWishlistPage);
burgerCartNavBtn.addEventListener("click", openCartPage);
burgerChatNavBtn.addEventListener("click", openChatPage);
burgerProfileNavBtn.addEventListener("click", openProfilePage);

closeProductPopup.addEventListener("click", closeProductPopupFun);

textBtn.addEventListener("click", openDiscountInput);

editProfileBtn.addEventListener("click", openProfilePopup);
closeProfilePopup.addEventListener("click", closeProfilePopupFun);

// temporary
temp.addEventListener("click", () => {
    productPopup.showModal();
    productPopup.classList.remove("hide");
});

/* Helper functions */

const changeNavBtn = (pageToOpen) => {
    if (pageToOpen == "discover") {
        discoverNavBtn.classList.add("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
        burgerDiscoverNavBtn.classList.add("nav-bar-item-active");
        burgerWishlistNavBtn.classList.remove("nav-bar-item-active");
        burgerCartNavBtn.classList.remove("nav-bar-item-active");
        burgerChatNavBtn.classList.remove("nav-bar-item-active");
        burgerProfileNavBtn.classList.remove("nav-bar-item-active");
    } else if (pageToOpen == "wishlist") {
        discoverNavBtn.classList.remove("nav-bar-item-active");
        wishlistNavBtn.classList.add("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
        burgerDiscoverNavBtn.classList.remove("nav-bar-item-active");
        burgerWishlistNavBtn.classList.add("nav-bar-item-active");
        burgerCartNavBtn.classList.remove("nav-bar-item-active");
        burgerChatNavBtn.classList.remove("nav-bar-item-active");
        burgerProfileNavBtn.classList.remove("nav-bar-item-active");
    } else if (pageToOpen == "cart") {
        discoverNavBtn.classList.remove("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.add("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
        burgerDiscoverNavBtn.classList.remove("nav-bar-item-active");
        burgerWishlistNavBtn.classList.remove("nav-bar-item-active");
        burgerCartNavBtn.classList.add("nav-bar-item-active");
        burgerChatNavBtn.classList.remove("nav-bar-item-active");
        burgerProfileNavBtn.classList.remove("nav-bar-item-active");
    } else if (pageToOpen == "chat") {
        discoverNavBtn.classList.remove("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.add("nav-bar-item-active");
        profileNavBtn.classList.remove("nav-bar-item-active");
        burgerDiscoverNavBtn.classList.remove("nav-bar-item-active");
        burgerWishlistNavBtn.classList.remove("nav-bar-item-active");
        burgerCartNavBtn.classList.remove("nav-bar-item-active");
        burgerChatNavBtn.classList.add("nav-bar-item-active");
        burgerProfileNavBtn.classList.remove("nav-bar-item-active");
    } else if (pageToOpen == "profile") {
        discoverNavBtn.classList.remove("nav-bar-item-active");
        wishlistNavBtn.classList.remove("nav-bar-item-active");
        cartNavBtn.classList.remove("nav-bar-item-active");
        chatNavBtn.classList.remove("nav-bar-item-active");
        profileNavBtn.classList.add("nav-bar-item-active");
        burgerDiscoverNavBtn.classList.remove("nav-bar-item-active");
        burgerWishlistNavBtn.classList.remove("nav-bar-item-active");
        burgerCartNavBtn.classList.remove("nav-bar-item-active");
        burgerChatNavBtn.classList.remove("nav-bar-item-active");
        burgerProfileNavBtn.classList.add("nav-bar-item-active");
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
    } else if (pageToOpen == "chat") {
        discoverPage.classList.add("hide");
        wishlistPage.classList.add("hide");
        cartPage.classList.add("hide");
        chatPage.classList.remove("hide");
        profilePage.classList.add("hide");
    } else if (pageToOpen == "profile") {
        discoverPage.classList.add("hide");
        wishlistPage.classList.add("hide");
        cartPage.classList.add("hide");
        chatPage.classList.add("hide");
        profilePage.classList.remove("hide");
    }
}

const fillPersonalInfo = () => {
    const userDetails = document.getElementById("user-details");
    const UserProfilePicture = document.getElementById("user-profile-picture");
    let ppHolder = "";
    if (localStorage.getItem("profilePicture") != "NA") {
        ppHolder = localStorage.getItem("profilePicture");
    }
    UserProfilePicture.style.backgroundImage = `url("${ppHolder}")`;
    userDetails.innerHTML = `
    <p class="bold-text">${localStorage.getItem("firstName") + " " + localStorage.getItem("last_name")}</p>
    <p>${localStorage.getItem("email")}</p>
    <p>Phone Number: ${localStorage.getItem("telephone")}</p>
    <p>Address: ${localStorage.getItem("address")}</p>` + userDetails.innerHTML;
}