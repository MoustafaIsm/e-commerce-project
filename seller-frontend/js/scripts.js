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
