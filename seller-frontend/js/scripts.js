// Side bar navigation buttons
const productNavBtn=document.getElementById("product-nav-btn")
const categoryNavBtn=document.getElementById("category-nav-btn")
const chatNavBtn=document.getElementById("chat-nav-btn")
const discountNavBtn=document.getElementById("discount-nav-btn")
const revenueNavBtn=document.getElementById("revenue-nav-btn")
const profileNavBtn=document.getElementById("profile-nav-btn")
//top bar buttons
const addProductBtn=document.getElementById("add-product-button")
const addCategoryBtn=document.getElementById("add-category-button")
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


const productPopup = document.getElementById("popup-learn-more");
const temp = document.getElementById("temp");
temp.addEventListener("click", () =>{
    productPopup.showModal();
})



const addProductPopup = document.getElementById("popup-add-more");
const temp2 = document.getElementById("add-product-button");
temp2.addEventListener("click", () =>{
    addProductPopup.showModal();
})

const addCategoryPopup = document.getElementById("add-category-popup");
const temp3 = document.getElementById("add-category-button");
temp3.addEventListener("click", () =>{
    addCategoryPopup.showModal();
})

const closeProductPopup = () =>{
    addProductPopup.close();
}

const closeLearnMore = () =>{
    productPopup.close();
}

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

    if (pageToOpen == "product") {
        productPage.classList.remove("hidden");
        addProductBtn.classList.remove("hidden")
    } else if (pageToOpen == "category") {
        categoryPage.classList.remove("hidden");
        addCategoryBtn.classList.remove("hidden")
    } else if (pageToOpen == "chat") {
        chatPage.classList.remove("hidden");
    } else if (pageToOpen == "discount") {
        discountPage.classList.remove("hidden");
    } else if (pageToOpen == "revenue") {
        revenuePage.classList.remove("hidden");
    } else if (pageToOpen == "profile") {
        profilePage.classList.remove("hidden");
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
    document.getElementById("text-product-category").disabled = false;
    document.getElementById("text-product-description").disabled = false;
    document.getElementById("edit-prodcut-edit-btn").classList.add("hidden");
    document.getElementById("edit-prodcut-save-btn").classList.remove("hidden");
}

function saveEdit(){
    document.getElementById("text-product-name").disabled = true;
    document.getElementById("text-product-price").disabled = true;
    document.getElementById("text-product-category").disabled = true;
    document.getElementById("text-product-description").disabled = true;
    document.getElementById("edit-prodcut-save-btn").classList.add("hidden");
    document.getElementById("edit-prodcut-edit-btn").classList.remove("hidden");
   
}