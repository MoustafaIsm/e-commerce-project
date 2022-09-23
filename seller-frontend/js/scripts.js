// Side bar navigation buttons
const productNavBtn=document.getElementById("product-nav-btn")
const categoryNavBtn=document.getElementById("category-nav-btn")
const chatNavBtn=document.getElementById("chat-nav-btn")
const discountNavBtn=document.getElementById("discount-nav-btn")
const revenueNavBtn=document.getElementById("revenue-nav-btn")

//Pages
const productPage=document.getElementById("product-page")
const categoryPage=document.getElementById("category-page")
const chatPage =document.getElementById("chat-page")
const discountPage=document.getElementById("discount-page")
const revenuePage=document.getElementById("revenue-page")



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

/* Eventlisteners */

productNavBtn.addEventListener("click", openProductPage);
categoryNavBtn.addEventListener("click", openCategoryPage);
chatNavBtn.addEventListener("click", openChatPage);
discountNavBtn.addEventListener("click", openDiscountPage);
revenueNavBtn.addEventListener("click", openRevenuePage);

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
    if (pageToOpen == "product") {
        productPage.classList.remove("hidden");
    } else if (pageToOpen == "category") {
        categoryPage.classList.remove("hidden");
    } else if (pageToOpen == "chat") {
        chatPage.classList.remove("hidden");
    } else if (pageToOpen == "discount") {
        discountPage.classList.remove("hidden");
    } else if (pageToOpen == "revenue") {
        revenuePage.classList.remove("hidden");
    }
}
