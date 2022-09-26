/* Variables */
const cart = [];
const productAmount = [];
let countInCart = 0;
let totalCartCost = 0;
let liked = false;
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
let editProfileBtn = document.getElementById("edit-profile-btn");
const editProfilePopup = document.getElementById("profile-popup");
const closeProfilePopup = document.getElementById("close-profile-popup");
const firstNamePopupInput = document.getElementById("first-name-popup-input");
const lastNamePopupInput = document.getElementById("last-name-popup-input");
const phoneNumberInput = document.getElementById("phone-number-popup-input");
const addressPopupInput = document.getElementById("address-popup-input");
const fileInput = document.getElementById("file-input");
const saveProfileData = document.getElementById("save-btn");

const favoritesCards = document.getElementById("favorites-cards");
const discoverCards = document.getElementById("discover-cards");
const suggestedCards = document.getElementById("suggested-cards");
const wishlistCards = document.getElementById("wishlist-cards");
const cartCards = document.getElementById("cart-cards");
const totalPrice = document.getElementById("total-price")

const logoutBtn = document.getElementById("logout-btn");
const addCart = document.getElementById("add-cart");

// If a browser doesn't support the dialog, then hide it
if (typeof productPopup.showModal !== 'function') {
    productPopup.hidden = true;
}
if (typeof editProfilePopup.showModal !== 'function') {
    editProfilePopup.hidden = true;
}

window.onload = () => {
    fillDiscoverProducts();
    fillSuggestedProducts();
}

/* Eventlisteners functions */

const openDiscoverPage = () => {
    changeNavBtn("discover");
    openPage("discover");
    fillDiscoverProducts();
    fillSuggestedProducts();
}

const openWishlistPage = () => {
    changeNavBtn("wishlist");
    openPage("wishlist");
    fillWishListProducts();
}

const openCartPage = () => {
    changeNavBtn("cart");
    openPage("cart");
    fillCartProducts();
    displayTotalCost();
}

const openChatPage = () => {
    changeNavBtn("chat");
    openPage("chat");
}

const openProfilePage = () => {
    changeNavBtn("profile");
    openPage("profile");
    fillPersonalInfo();
    fillFavoritesProducts();
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
    fillUserInfoInputs();
}

const closeProfilePopupFun = () => {
    editProfilePopup.classList.add("hide");
    editProfilePopup.close();
}

const saveEditedUserData = () => {
    console.log("here");
    if (firstNamePopupInput.value != "" && lastNamePopupInput.value != "" &&
        phoneNumberInput.value != "" && addressPopupInput.value != "") {
        const formData = new FormData();
        formData.append("token", localStorage.getItem("token"));
        formData.append("user_id", localStorage.getItem("userId"));
        formData.append("first_name", firstNamePopupInput.value);
        formData.append("last_name", lastNamePopupInput.value);
        formData.append("address", addressPopupInput.value);
        formData.append("telephone", phoneNumberInput.value);
        if (fileInput.files.length > 0) {
            // User selected file
            let fileToLoad = fileInput.files[0];
            // New BLOB
            let fileReader = new FileReader();
            // Convert to base64 after load
            fileReader.onload = function (fileLoadedEvent) {
                let fileInputBase64 = fileLoadedEvent.target.result;
                formData.append("profile_picture", fileInputBase64);
                sendUserData(formData);
            }
            fileReader.readAsDataURL(fileToLoad);
        } else {
            formData.append("profile_picture", localStorage.getItem("profilePicture"));
            sendUserData(formData);
        }
    }
}

const applyDiscountCode = () => {
    checkForDiscountCodes();
}

const logoutUser = () => {
    localStorage.clear();
    window.location.href = "./index.html";
}

const addCartOfUser = () => {
    const formData = new FormData();
    formData.append("userId", localStorage.getItem("userId"));
    formData.append("purchase_date", getCurrentDate());
    formData.append("total_cost", totalCartCost);
    formData.append("token", localStorage.getItem("token"));
    idArray = [];
    for (const item of cart) {
        idArray.push(item.product_id);
    }
    data.append("productsId", JSON.stringify(idArray))

    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/add-cart-api.php", formData).then((response) => { console.log(response) }).catch((error) => console.log(error));

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

discountApplyBtn.addEventListener("click", applyDiscountCode);

editProfileBtn.addEventListener("click", openProfilePopup);
closeProfilePopup.addEventListener("click", closeProfilePopupFun);
saveProfileData.addEventListener("click", saveEditedUserData);

logoutBtn.addEventListener("click", logoutUser);
addCart.addEventListener("click", addCartOfUser);

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
    userDetails.innerHTML = ``;
    let ppHolder = "";
    if (localStorage.getItem("profilePicture") != "NA") {
        ppHolder = localStorage.getItem("profilePicture");
    }
    UserProfilePicture.style.backgroundImage = `url("${ppHolder}")`;
    userDetails.innerHTML = `
    <p class="bold-text">${localStorage.getItem("firstName") + " " + localStorage.getItem("last_name")}</p>
    <p>${localStorage.getItem("email")}</p>
    <p>Phone Number: ${localStorage.getItem("telephone")}</p>
    <p>Address: ${localStorage.getItem("address")}</p>`;
}

const fillUserInfoInputs = () => {
    firstNamePopupInput.value = localStorage.getItem("firstName");
    lastNamePopupInput.value = localStorage.getItem("last_name");
    phoneNumberInput.value = localStorage.getItem("telephone");
    addressPopupInput.value = localStorage.getItem("address");
}

const sendUserData = (formData) => {
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/update-user-api.php", formData)
        .then((response) => updateLocalStorage())
        .catch((error) => console.log(error));
}

const updateLocalStorage = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("userId", localStorage.getItem("userId"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-user-api.php", formData)
        .then((response) => {
            saveUserData(response.data[0]);
            fillPersonalInfo();
            closeProfilePopupFun();
        })
        .catch((error) => console.log(error));
}

const saveUserData = (user) => {
    localStorage.setItem("userId", user.user_id);
    localStorage.setItem("email", user.email);
    localStorage.setItem("profilePicture", user.profile_picture);
    localStorage.setItem("address", user.address);
    localStorage.setItem("firstName", user.first_name);
    localStorage.setItem("last_name", user.last_name);
    localStorage.setItem("telephone", user.telephone);
}

const fillFavoritesProducts = () => {
    const formData = new FormData();
    formData.append("user_id", localStorage.getItem("userId"));
    formData.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-favorites-api.php", formData)
        .then((response) => populateCards(favoritesCards, response.data))
        .catch((error) => console.log(error));
}

const fillDiscoverProducts = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-products-api.php", formData)
        .then((response) => populateCards(discoverCards, response.data))
        .catch((error) => console.log(error));
}

const fillSuggestedProducts = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-products-with-ads.php", formData)
        .then((response) => populateCards(suggestedCards, response.data))
        .catch((error) => console.log(error));
}

const fillWishListProducts = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("user_id", localStorage.getItem("userId"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-wishlist-products.php", formData)
        .then((response) => populateWiishlistCards(wishlistCards, response.data))
        .catch((error) => console.log(error));
}

const fillCartProducts = () => {
    cartCards.innerHTML = ``;
    let i = 0;
    for (const product of cart) {
        console.log(product);
        let ppHolder = ``;
        if (product.product_picture != "NA") {
            ppHolder = `<img src="${product.product_picture}" alt="">`;
        }
        cartCards.innerHTML += `
        <div class="cart-card">
            <!-- Product info -->
            <div class="cart-product-info-wrapper">
                <!-- Product image -->
                <div class="cart-product-img">
                    ${ppHolder}
                </div>
                <!-- Product details -->
                <div class="cart-product-details">
                    <p class="bold-text">${product.product_name}</p>
                    <p>By: ${product.first_name + " " + product.last_name} </p>
                    <p> ${product.category_name} </p>
                </div>
            </div>
            <!-- Cost and count -->
            <div class="count-cost-wrapper">
                <p>amount: ${productAmount[i]} </p>
                <p class="bold-text">cost: $ ${product.product_price} </p>
            </div>
        </div>`;
        i++;
    }
}

const populateCards = (container, products) => {
    container.innerHTML = ``;
    for (const product of products) {
        let ppHolder = ``;
        if (product.product_picture != "NA") {
            ppHolder = `<img src="${product.product_picture}" alt="" width="100%">`;
        }
        const card = `
        <div class="card">
            <!-- Product image -->
            <div class="product-img-wrapper">
                ${ppHolder}
            </div>
            <!-- Product details -->
            <div class="product-details-wrapper">
                <p class="bold-text">${product.product_name}</p>
                <p>${product.first_name + " " + product.last_name}</p>
                <p>${product.category_name}</p>
            </div>
            <!-- Learn more -->
            <div class="learn-more-wrapper" id="${product.product_id}">
                <p>Click to learn more</p>
            </div>
        </div>`;
        container.innerHTML += card;
    }
    const learnMore = document.getElementsByClassName("learn-more-wrapper");
    for (const btn of learnMore) {
        btn.addEventListener("click", () => {
            openProductPopup(btn.id);
        });
    }
}

const populateWiishlistCards = (container, products) => {
    container.innerHTML = ``;
    for (const product of products) {
        let ppHolder = ``;
        if (product.product_picture != "NA") {
            ppHolder = `<img src="${product.product_picture}" alt ="">`;
        }
        let card = ` 
        <div class="card">
            <!-- Product image -->
            <div class="product-img-wrapper">
                ${ppHolder}
            </div>
            <!-- Product details -->
            <div class="product-details-wrapper">
                <p class="bold-text">${product.product_name}</p>
                <p>${product.first_name + " " + product.last_name}</p>
                <p>${product.category_name}</p>
            </div>
            <!-- Learn more -->
            <div class="wishlist-product-card-footer">
                <div>
                    <span class="material-symbols-outlined delete" id="${product.product_id}">
                        delete
                    </span>
                </div>
                <p id="${product.product_id}" class="learn-more">Click to learn more</p>
                <div>
                    <span class="material-symbols-outlined add-to-carts" id="${product.product_id}">
                        add_shopping_cart
                    </span>
                </div>
            </div>
        </div>`;
        container.innerHTML += card;
    }

    const deleteFromWishList = document.getElementsByClassName("delete");
    const learnMore = document.getElementsByClassName("learn-more");
    const addToCart = document.getElementsByClassName("add-to-cart");

    for (const btn of learnMore) {
        btn.addEventListener("click", () => {
            openProductPopup(btn.id);
        });
    }
    for (const btn1 of deleteFromWishList) {
        btn1.addEventListener("click", () => {
            removeProductFromWishList(btn1.id);
        });
    }
    for (const btn2 of addToCart) {
        btn2.addEventListener("click", () => {
            const formData = new FormData();
            formData.append("token", localStorage.getItem("token"));
            formData.append("product_id", btn2.id);
            axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-product-api.php", formData)
                .then((response) => {
                    cart.push(response.data);
                    totalCartCost += response.data.product_price;
                    productAmount.push(1);
                })
                .catch((error) => console.log(error));
        });
    }

}

const openProductPopup = (productId) => {
    const popupProductDetails = document.getElementById("popup-product-details");
    popupProductDetails.innerHTML = ``;
    checkIfUserLikes(productId);
    increaseViewCount(productId);
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("product_id", productId);
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-product-api.php", formData)
        .then((response) => {
            fillProductPopup(popupProductDetails, response.data[0]);
        })
        .catch((error) => console.log(error));
    productPopup.showModal();
    productPopup.classList.remove("hide");
}

const fillProductPopup = (container, product) => {
    let ppHolder = ``;
    let fav = `<span class="material-symbols-outlined favorite" id="${product.product_id}">
                    favorite
                </span>`;
    let countToBuy = 1;
    if (product.product_image != "NA") {
        ppHolder = `<img src"${product.product_image}" alt="">`;
    }
    if (liked) {
        fav = `<span class="material-symbols-outlined favorite purpule" id="${product.product_id}">
        favorite
    </span>`;
    }
    container.innerHTML = `<!-- Product details -->
    <div class="popup-product-details-wrapper">
        <!-- Image product -->
        <div class="popup-product-img">
            ${ppHolder}
        </div>
        <!-- Product-details -->
        <div class="popup-product-info">
            <!-- Name seller category -->
            <div>
                <p class="bold-text product-popup-title"> ${product.product_name} </p>
                <p> ${product.first_name + " " + product.last_name} </p>
                <p> ${product.category_name} </p>
            </div>
            <!-- Discription -->
            <div>
                <p class="bold-text"> Discription: </p>
                <p> ${product.description} </p>
            </div>
            <!-- Favorite -->
            <div>
                ${fav}
            </div>
        </div>
    </div>
    <!-- Product cost and stock -->
    <div class="popup-product-cost-stock-wrapper">
        <!-- Stock -->
        <div>
            <p>Items in stock: ${product.stock} </p>
        </div>
        <!-- Price -->
        <div>
            <p class="bold-text product-popup-price">Price: $ ${product.product_price}</p>
        </div>
        <!-- Items to buy -->
        <div class="popup-items-to-buy">
            <p>Items to buy:</p>
            <div>
                <span class="material-symbols-outlined grey-background decrease-count">
                    chevron_left
                </span>
            </div>
            <p class="count-to-buy" id="count-buy">${countToBuy}</p>
            <div>
                <span class="material-symbols-outlined grey-background increase-count" id="${product.stock}">
                    chevron_right
                </span>
            </div>
        </div>
    </div>
    <!-- Add to cart -->
    <div class="popup-add-to-cart-wrapper">
        <button class="btn btn-purpule add-to-wishlist" id="${product.product_id}"> Add to wishlist </button>
        <button class="btn btn-purpule add-to-cart" id="${product.product_id}"> Add to cart </button>
    </div>`;

    const increaseCount = document.getElementsByClassName("increase-count")[0];
    const decreaseCount = document.getElementsByClassName("decrease-count")[0];
    const addToWishlist = document.getElementsByClassName("add-to-wishlist")[0];
    const addToCart = document.getElementsByClassName("add-to-cart")[0];
    const favorite = document.getElementsByClassName("favorite")[0];
    increaseCount.addEventListener("click", () => {
        if (countToBuy < increaseCount.id) {
            countToBuy++;
            document.getElementById("count-buy").textContent = countToBuy;
        }
    });
    decreaseCount.addEventListener("click", () => {
        if (countToBuy > 1) {
            countToBuy--;
            document.getElementById("count-buy").textContent = countToBuy;
        }
    });
    addToWishlist.addEventListener("click", () => {
        const formData = new FormData();
        formData.append("token", localStorage.getItem("token"));
        formData.append("userId", localStorage.getItem("userId"));
        formData.append("productId", addToWishlist.id);
        axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/add-item-to-wishlist-api.php", formData)
            .then((response) => { })
            .catch((error) => console.log(error));
    });
    addToCart.addEventListener("click", () => {
        productAmount.push(countToBuy);
        cart.push(product);
        totalCartCost += product.product_price * countToBuy;
    });
    favorite.addEventListener("click", () => {
        if (liked) {
            liked = false;
            favorite.classList.remove("purpule");
            removeFavorite(favorite.id);
        } else {
            liked = true;
            favorite.classList.add("purpule");
            addFavorite(favorite.id);
        }
    });

}

const checkIfUserLikes = (id) => {
    const formData = new FormData();
    formData.append("user_id", localStorage.getItem("userId"));
    formData.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/get-favorites-api.php", formData)
        .then((response) => {
            let temp = false;
            for (const p of response.data) {
                if (p.product_id == id) {
                    liked = true;
                    temp = true;
                }
            }
            if (!temp) {
                liked = false;
            }
        })
        .catch((error) => console.log(error));
}

const addFavorite = (productId) => {
    const formData1 = new FormData();
    formData1.append("userId", localStorage.getItem("userId"));
    formData1.append("productId", productId);
    formData1.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/add-favorites-api.php", formData1)
        .then((response) => { })
        .catch((error) => console.log(error));
}

const removeFavorite = (productId) => {
    const formData2 = new FormData();
    formData2.append("user_id", localStorage.getItem("userId"));
    formData2.append("product_id", productId);
    formData2.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/remove-favorite-api.php", formData2)
        .then((response) => { })
        .catch((error) => console.log(error));
}

const increaseViewCount = (productId) => {
    const formData = new FormData();
    formData.append("product_id", productId);
    formData.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/increase-product-view-count.php", formData)
        .then((response) => { })
        .catch((error) => console.log(error));
}

const removeProductFromWishList = (id) => {
    const formData = new FormData();
    formData.append("user_id", localStorage.getItem("userId"));
    formData.append("product_id", id);
    formData.append("token", localStorage.getItem("token"));
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/client-apis/remove-item-from-wishlist-api.php", formData)
        .then((response) => {
            openWishlistPage();
        })
        .catch((error) => console.log(error));
}

const displayTotalCost = () => {
    totalPrice.textContent = "$" + totalCartCost;
}

const getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}