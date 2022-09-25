//seller id
const sellerID = 1
const productID = 1
// Side bar navigation buttons
const productNavBtn=document.getElementById("product-nav-btn")
const categoryNavBtn=document.getElementById("category-nav-btn")
const chatNavBtn=document.getElementById("chat-nav-btn")
const discountNavBtn=document.getElementById("discount-nav-btn")
const revenueNavBtn=document.getElementById("revenue-nav-btn")
const profileNavBtn=document.getElementById("profile-nav-btn")
//top bar buttons
const addProductBtn=document.getElementById("add-product-button")
const addProductBtn2=document.getElementById("add-product-button2")
const addCategoryBtn=document.getElementById("add-category-button")
const addCategoryBtn2=document.getElementById("add-category-button2")
//popup close buttons
const addProductClose=document.getElementById("add-product-close")
const learnMoreClose=document.getElementById("learn-more-close")

//Pages
const productPage=document.getElementById("product-page")
const categoryPage=document.getElementById("category-page")
const chatPage =document.getElementById("chat-page")
const discountPage=document.getElementById("discount-page")
const revenuePage=document.getElementById("revenue-page")
const profilePage=document.getElementById("profile-page")

//test function for pressing learn more
const productPopup = document.getElementById("popup-learn-more");
const temp = document.getElementById("temp");
temp.addEventListener("click", () =>{
    productPopup.showModal();
})


//popup the add more product form on pressing the button
const addProductPopup = document.getElementById("popup-add-more");
addProductBtn.addEventListener("click", () =>{
    addProductPopup.showModal();
})
addProductBtn2.addEventListener("click", () =>{
    addProductPopup.showModal();
})

//popup the add category form on pressing the button
const addCategoryPopup = document.getElementById("add-category-popup");
addCategoryBtn.addEventListener("click", () =>{
    addCategoryPopup.showModal();
})
addCategoryBtn2.addEventListener("click", () =>{
    addCategoryPopup.showModal();
})

//closing the popup when pressing the x button
const closeProductPopup = () =>{
    addProductPopup.close();
}
const closeLearnMore = () =>{
    productPopup.close();
}

//listeners
addProductClose.addEventListener("click",closeProductPopup)
learnMoreClose.addEventListener("click",closeLearnMore)



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
profileNavBtn.addEventListener("click",openProfilePage);

const sections = document.getElementsByTagName("section")
const navBtns = document.querySelectorAll(".side-menu")
/* Helper functions */

const changeNavBtn = (pageToOpen) => {
    for (const navBtn of navBtns){
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

const openPage = (pageToOpen) => {
    for (const section of sections){
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

    } else if (pageToOpen == "revenue") {
        revenuePage.classList.remove("hidden");
        addProductBtn2.classList.add("hidden")
        addCategoryBtn2.classList.add("hidden")

    } else if (pageToOpen == "profile") {
        profilePage.classList.remove("hidden");
        addProductBtn2.classList.add("hidden")
        addCategoryBtn2.classList.add("hidden")

    }
}


// functions to preview the image on pressing upload
function showPreview(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("file-1-preview");
      preview.src = src;
    }
  }

function showPreview2(event){
if(event.target.files.length > 0){
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("file-2-preview");
    preview.src = src;
}
}

// function to edit product on pressing edit
function enable(){
    document.getElementById("text-product-name").disabled = false;
    document.getElementById("text-product-price").disabled = false;
    document.getElementById("text-product-stock").disabled = false;
    document.getElementById("text-product-description").disabled = false;
    document.getElementById("edit-prodcut-edit-btn").classList.add("hidden");
    document.getElementById("edit-prodcut-save-btn").classList.remove("hidden");
}

function saveEdit(){
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
    formData.append("category_name", sellerID.value);
    formData.append("seller_id", AddCategoryPopupName.value);
    axios.post("http://localhost/e-commerce-project/ecommerce-server/seller-api/add_categories.php", formData)
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
    formData.append("discount_code", discountCodeName.value);
    formData.append("percentage", discountCodeRate.value);
    formData.append("seller_id", sellerID.value);
    formData.append("active", 1);
    axios.post("http://localhost/e-commerce-project/ecommerce-server/seller-api/add_discount_code.php", formData)
        .then((response) => console.log(response))
        discountCodeName.value = "";
        discountCodeRate.value = "";
}
discountCodeBtn.addEventListener("click", addDiscountCode);


// delete product
const deleteProductBtn = document.getElementById("delete-product-btn");
const deleteProductID = document.getElementById("product-id")
const deleteProduct = () => {
    const formData = new FormData();
    formData.append("product_id", deleteProductID.value);
    axios.post("http://localhost/e-commerce-project/ecommerce-server/seller-api/delete_product.php", formData)
        .then((response) => console.log(response))
        productPopup.close();
}
deleteProductBtn.addEventListener("click", deleteProduct);


//advertise the product
const adsProductBtn = document.getElementById("ads-product-btn");
const adsProductID = document.getElementById("product-id")
const adsProduct = () => {
    const formData = new FormData();
    formData.append("product_id", adsProductID.value);
    formData.append("ad_cost", 10);
    axios.post("http://localhost/e-commerce-project/ecommerce-server/seller-api/add_ads_to_products_api.php", formData)
        .then((response) => console.log(response))
        productPopup.close();
}
adsProductBtn.addEventListener("click", adsProduct);

//edit the product
const textProductName = document.getElementById("text-product-name");
const textProductPrice = document.getElementById("text-product-price");
const textProductStock = document.getElementById("text-product-stock");
const textProductDescription = document.getElementById("text-product-description");
const textProductSave = document.getElementById("edit-prodcut-save-btn");
const saveProduct = () => {
    const formData = new FormData();
    formData.append("seller_id", sellerID.value);
    formData.append("product_id", productID.value);
    formData.append("product_name", textProductName.value);
    formData.append("product_price", textProductPrice.value);
    formData.append("description", textProductDescription.value);
    formData.append("stock", textProductStock.value);
    // formData.append("added_at", adsProductID.value);
    // formData.append("viewing_count", adsProductID.value);
    // formData.append("product_picture", adsProductID.value);
    axios.post("http://localhost/e-commerce-project/ecommerce-server/seller-api/update_product.php", formData)
        .then((response) => console.log(response))
        productPopup.close();
}
textProductSave.addEventListener("click", saveProduct);
