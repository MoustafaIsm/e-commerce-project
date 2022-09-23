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
