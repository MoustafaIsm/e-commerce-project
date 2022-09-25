//seller id

localStorage.setItem("userId", 5)
const sellerID = localStorage.getItem("userId")
const productID = 1
const connectionLink = "http://localhost/SEF/e-commerce-project/ecommerce-server/seller-api/"
// Side bar navigation buttons
const productNavBtn = document.getElementById("product-nav-btn")
const categoryNavBtn = document.getElementById("category-nav-btn")
const chatNavBtn = document.getElementById("chat-nav-btn")
const discountNavBtn = document.getElementById("discount-nav-btn")
const revenueNavBtn = document.getElementById("revenue-nav-btn")
const profileNavBtn = document.getElementById("profile-nav-btn")
//top bar buttons
const addProductBtn = document.getElementById("add-product-button")
const addProductBtn2 = document.getElementById("add-product-button2")
const addCategoryBtn = document.getElementById("add-category-button")
const addCategoryBtn2 = document.getElementById("add-category-button2")
//popup close buttons
const addProductClose = document.getElementById("add-product-close")
const learnMoreClose = document.getElementById("learn-more-close")
//Pages
const productPage = document.getElementById("product-page")
const categoryPage = document.getElementById("category-page")
const chatPage = document.getElementById("chat-page")
const discountPage = document.getElementById("discount-page")
const revenuePage = document.getElementById("revenue-page")
const profilePage = document.getElementById("profile-page")

//test function for pressing learn more
const productPopup = document.getElementById("popup-learn-more");
const temp = document.getElementById("temp");
temp.addEventListener("click", () => {
    productPopup.showModal();
})


//popup the add more product form on pressing the button
const addProductPopup = document.getElementById("popup-add-more");
addProductBtn.addEventListener("click", () => {
    addProductPopup.showModal();
})
addProductBtn2.addEventListener("click", () => {
    addProductPopup.showModal();
})

//popup the add category form on pressing the button
const addCategoryPopup = document.getElementById("add-category-popup");
addCategoryBtn.addEventListener("click", () => {
    addCategoryPopup.showModal();
})
addCategoryBtn2.addEventListener("click", () => {
    addCategoryPopup.showModal();
})

//closing the popup when pressing the x button
const closeProductPopup = () => {
    addProductPopup.close();
}
const closeLearnMore = () => {
    productPopup.close();
}

//listeners
addProductClose.addEventListener("click", closeProductPopup)
learnMoreClose.addEventListener("click", closeLearnMore)

/* Eventlisteners functions */

const openProductPage = () => {
    changeNavBtn("product");
    openPage("product");
}

const openCategoryPage = () => {
    changeNavBtn("category");
    openPage("category");
}

const openChatPage = () => {
    changeNavBtn("chat");
    openPage("chat");
}

const openDiscountPage = () => {
    changeNavBtn("discount");
    openPage("discount");
}

const openRevenuePage = () => {
    changeNavBtn("revenue");
    openPage("revenue");
}

const openProfilePage = () => {
    changeNavBtn("profile");
    openPage("profile");
}


/* Eventlisteners */

productNavBtn.addEventListener("click", openProductPage);
categoryNavBtn.addEventListener("click", openCategoryPage);
chatNavBtn.addEventListener("click", openChatPage);
discountNavBtn.addEventListener("click", openDiscountPage);
revenueNavBtn.addEventListener("click", openRevenuePage);
profileNavBtn.addEventListener("click", openProfilePage);

const sections = document.getElementsByTagName("section")
const navBtns = document.querySelectorAll(".side-menu")
/* Helper functions */

const changeNavBtn = (pageToOpen) => {
    for (const navBtn of navBtns) {
        navBtn.classList.remove("side-menu-active")
    }
    if (pageToOpen == "product") {
        productNavBtn.classList.add("side-menu-active");
    } else if (pageToOpen == "category") {
        categoryNavBtn.classList.add("side-menu-active");
    } else if (pageToOpen == "chat") {
        chatNavBtn.classList.add("side-menu-active");
    } else if (pageToOpen == "discount") {
        discountNavBtn.classList.add("side-menu-active");
    } else if (pageToOpen == "revenue") {
        revenueNavBtn.classList.add("side-menu-active");
    }
}

//-------- discount page results ----------
const discountCodeResults = () => {
    const formData = new FormData();
    formData.append("seller_id", sellerID);
    formData.append("token", localStorage.getItem("token"));
    axios.post(connectionLink + "get_discount_seller_codes_api.php", formData)
        .then((response) => {
            for (const p of response.data) {
                discountPage.innerHTML += `
                <div class="discount-codes">
                <div class="discount-codes-details">
                <img src="./assets/discount-code.jpeg" alt="sale">
                <input type="text" id="discount-code-get-name" value = ${p.discount_code} disabled>
                <input type="text" id="discount-code-get-rate" value=${p.percentage}  disabled>
                </div>
                <label> 29-09-2022 </label>
                </div>  `
            }
        })
        .catch((error) => console.log(error));
}


// ---------- profile page ------------
const firstNamePopupInput = document.getElementById("first-name-popup-input");
const lastNamePopupInput = document.getElementById("last-name-popup-input");
const phoneNumberInput = document.getElementById("phone-number-popup-input");
const addressPopupInput = document.getElementById("address-popup-input");

const fillUserInfoInputs = () => {
    firstNamePopupInput.value = localStorage.getItem("firstName");
    lastNamePopupInput.value = localStorage.getItem("last_name");
    phoneNumberInput.value = localStorage.getItem("telephone");
    addressPopupInput.value = localStorage.getItem("address");
}

const openPage = (pageToOpen) => {
    for (const section of sections) {
        section.classList.add("hidden");
    }
    profilePage.classList.add("hidden")
    addProductBtn.classList.add("hidden")
    addCategoryBtn.classList.add("hidden")
    addCategoryBtn2.classList.add("hidden")
    addProductBtn2.classList.remove("hidden")

    if (pageToOpen == "product") {
        productPage.classList.remove("hidden");
        addProductBtn.classList.remove("hidden")
        addCategoryBtn2.classList.add("hidden")
        addProductBtn2.classList.remove("hidden")
        addCategoryBtn.classList.add("hidden")

    } else if (pageToOpen == "category") {
        categoryPage.classList.remove("hidden");
        addCategoryBtn.classList.remove("hidden")
        addCategoryBtn2.classList.remove("hidden")
        addProductBtn2.classList.add("hidden")
        addProductBtn.classList.add("hidden")

    } else if (pageToOpen == "chat") {
        chatPage.classList.remove("hidden");
        addProductBtn2.classList.add("hidden")
        addCategoryBtn2.classList.add("hidden")

    } else if (pageToOpen == "discount") {
        discountPage.classList.remove("hidden");
        addProductBtn2.classList.add("hidden")
        addCategoryBtn2.classList.add("hidden")
        discountCodeResults();

    } else if (pageToOpen == "revenue") {
        revenuePage.classList.remove("hidden");
        addProductBtn2.classList.add("hidden")
        addCategoryBtn2.classList.add("hidden")

    } else if (pageToOpen == "profile") {
        profilePage.classList.remove("hidden");
        addProductBtn2.classList.add("hidden")
        addCategoryBtn2.classList.add("hidden")
        fillUserInfoInputs();
    }
}


// functions to preview the image on pressing upload
function showPreview(event) {
    if (event.target.files.length > 0) {
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-1-preview");
        preview.src = src;
    }
}

function showPreview2(event) {
    if (event.target.files.length > 0) {
        let src = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("file-2-preview");
        preview.src = src;
    }
}

// function to edit product on pressing edit
function enable() {
    document.getElementById("text-product-name").disabled = false;
    document.getElementById("text-product-price").disabled = false;
    document.getElementById("text-product-stock").disabled = false;
    document.getElementById("text-product-description").disabled = false;
    document.getElementById("edit-prodcut-edit-btn").classList.add("hidden");
    document.getElementById("edit-prodcut-save-btn").classList.remove("hidden");
}

function saveEdit() {
    document.getElementById("text-product-name").disabled = true;
    document.getElementById("text-product-price").disabled = true;
    document.getElementById("text-product-stock").disabled = true;
    document.getElementById("text-product-description").disabled = true;
    document.getElementById("edit-prodcut-save-btn").classList.add("hidden");
    document.getElementById("edit-prodcut-edit-btn").classList.remove("hidden");

}

//add category fetching data
const AddCategoryPopupBtn = document.getElementById("add-category-popup-btn");
const AddCategoryPopupName = document.getElementById("add-category-popup-name");
const addCategory = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("category_name", AddCategoryPopupName.value);
    formData.append("seller_id", sellerID);
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/seller-api/add_categories.php", formData)
        .then((response) => console.log(response))
    addCategoryPopup.close();
}
AddCategoryPopupBtn.addEventListener("click", addCategory);

//add discount code
const discountCodeName = document.getElementById("discount-code-name");
const discountCodeRate = document.getElementById("discount-code-rate");
const discountCodeBtn = document.getElementById("add-discount-code-btn");
const addDiscountCode = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("discount_code", discountCodeName.value);
    formData.append("percentage", discountCodeRate.value);
    formData.append("seller_id", sellerID);
    formData.append("active", 1);
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/seller-api/add_discount_code.php", formData)
        .then((response) => console.log(response))
    discountCodeName.value = "";
    discountCodeRate.value = "";
}
discountCodeBtn.addEventListener("click", addDiscountCode);


// delete product
const deleteProductBtn = document.getElementsByClassName("deletee-product")[0];
const deleteProduct = () => {
    const formData = new FormData();
    formData.append("product_id", deleteProductBtn.id);
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/seller-api/delete_product.php", formData)
        .then((response) => console.log(response))
    productPopup.close();
}
deleteProductBtn.addEventListener("click", deleteProduct);


//advertise the product
const adsProductBtn = document.getElementsByClassName("adss-product")[0];
// const adsProductID = document.getElementById("product-id")
const adsProduct = () => {
    const formData = new FormData();
    formData.append("product_id", adsProductBtn.id);
    formData.append("ad_cost", 10);
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/seller-api/add_ads_to_products_api.php", formData)
        .then((response) => console.log(response))
    productPopup.close();
}
adsProductBtn.addEventListener("click", adsProduct);

//edit the product
const textProductName = document.getElementById("text-product-name");
const textProductPrice = document.getElementById("text-product-price");
const textProductStock = document.getElementById("text-product-stock");
const textProductDescription = document.getElementById("text-product-description");
const textProductImg = document.getElementById("product-img-upload")
// const textProductSave = document.getElementById("edit-prodcut-save-btn");
const textProductSave = document.getElementsByClassName("savee-product")[0];
//change img to base64
if (textProductImg.files.length > 0) {
    // User selected file
    let fileToLoad = textProductImg.files[0];
    // New BLOB
    let fileReader = new FileReader();
    // Convert to base64 after load
    fileReader.onload = function (fileLoadedEvent) {
        let fileInputBase64 = fileLoadedEvent.target.result;
        formData.append("product_picture", fileInputBase64);
    }
    fileReader.readAsDataURL(fileToLoad);
} else {
    formData.append("product_picture", NA);
}

const saveProduct = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("seller_id", sellerID);
    formData.append("product_id", textProductSave.id);
    formData.append("product_name", textProductName.value);
    formData.append("product_price", textProductPrice.value);
    formData.append("description", textProductDescription.value);
    formData.append("stock", textProductStock.value);
    formData.append("added_at", 2022 - 1 - 1);
    formData.append("viewing_count", 2);
    axios.post("http://localhost/SEF/e-commerce-project/ecommerce-server/seller-api/update_product.php", formData)
        .then((response) => console.log(response))
    productPopup.close();
}
textProductSave.addEventListener("click", saveProduct);

// save user to local storage
const saveUserData = (user) => {
    localStorage.setItem("userId", user.user_id);
    localStorage.setItem("email", user.email);
    localStorage.setItem("profilePicture", user.profile_picture);
    localStorage.setItem("address", user.address);
    localStorage.setItem("firstName", user.first_name);
    localStorage.setItem("last_name", user.last_name);
    localStorage.setItem("telephone", user.telephone);
}

// -------- function get date --------------
function getCurrentDate() {
    let today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date + ' ' + time;
}
//-------------------------------------------

//fill the product page
const fillProducts = () => {
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("seller_id", localStorage.getItem("userId"));
    axios.post("http://localhost/SEF/SEF/e-commerce-project/ecommerce-server/client-apis/get-products-api.php", formData)
        .then((response) => populateCards(discoverCards, response.data))
        .catch((error) => console.log(error));
}

// function to fill the cards
const populateCards = (container, products) => {
    container.innerHTML = ``;
    for (const product of products) {
        let ppHolder = ``;
        if (product.product_picture != "NA") {
            ppHolder = `<img src="${product.product_picture}" alt="">`;
        }
        const card = `
        <div class="card">
            <div class="card-img">
                ${ppHolder}
            </div>
            <div class="card-details">
                <p> ${product.product_name} </p>
                <p>Seller Name</p>
                <p> Categories</p>
            </div>
            <div class="card-learnmore learn-more-wrapper">
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

const openProductPopup = (productId) => {
    const popupProductDetails = document.getElementById("popup-img-and-details");
    popupProductDetails.innerHTML = ``;
    const formData = new FormData();
    formData.append("token", localStorage.getItem("token"));
    formData.append("product_id", productId);
    axios.post("http://localhost/SEF/SEF/e-commerce-project/ecommerce-server/client-apis/get-all-seller-product.php", formData)
        .then((response) => {
            fillProductPopup(popupProductDetails, response.data[0]);
        })
        .catch((error) => console.log(error));
    productPopup.showModal();
    productPopup.classList.remove("hidden");
}

const fillProductPopup = (container, product) => {
    let ppHolder = ``;
    if (product.product_image != "NA") {
        ppHolder = `<img src"${product.product_picture}" alt="" id="file-2-preview">`;
    }
    container.innerHTML = `
    <div>
        <span class="material-symbols-outlined" id="learn-more-close">
            close
        </span>
        </div>
        <div class="img-and-details" id="popup-img-and-details">
            <div class="learn-more-popup-img">
                ${ppHolder}
                <label for="product-img-upload">
                <span class="material-symbols-outlined">
                    file_upload
                </span>
                </label>
                <input type="file" id="product-img-upload" accept="image/*" class="hidden" onchange="showPreview2(event);">
            </div>
            <div class="learn-more-popup-details">
                <p>Product Name</p>
                <input type="text" id="text-product-name" disabled="true" value="${product.product_name}">
                <p>Product Price</p>
                <input type="text" id="text-product-price" placeholder="product price" disabled="true" value="${product.product_price}">
                <p> Stock Quantity</p>
                <input type="text" id="text-product-stock" placeholder="Quantity" disabled="true" value="${product.product_stock}">
                <p> Description</p>
                <input type="text" id="text-product-description" placeholder="Description of the product" disabled="true" value="${product.description}">
            </div>
        </div>
        <div class="learn-more-popup-buttons">
            <span class="material-symbols-outlined deletee-product" id="${product.product_id}">
                delete
            </span>
            <span class="material-symbols-outlined adss-product" id="${product.product_id}">
                ads_click
            </span>
            <div id="edit-prodcut-save-btn" class="hidden">
            <span class="material-symbols-outlined savee-product" onclick="saveEdit()" id="${product.product_id}">
                save
            </span>
            </div>
            <div class="" id="edit-prodcut-edit-btn">
            <span class="material-symbols-outlined" id="edit-prodcut-info" onclick="enable()">
                border_color
            </span>
            </div>
        </div>
    `
}





//-----------------------------------------------