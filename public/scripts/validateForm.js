const categoryTitle = document.getElementById("title")
const titleError = document.getElementById("title__error")
const itemName = document.getElementById("name")
const nameError = document.getElementById("name__error")
const itemDescription = document.getElementById("description")
const descriptionError = document.getElementById("description__error")
const itemCost = document.getElementById("cost")
const costError = document.getElementById("cost__error")
const itemQuantity = document.getElementById("quantity")
const quantityError = document.getElementById("quantity__error")

function validateCategory(){
    if (categoryTitle.value.trim() === "") {
        categoryTitle.style.borderColor = "#e57373";
        titleError.innerHTML = "This field is required";
        return false;

}}


function validateItem(){
    if (itemName.value.trim() === ""){
        itemName.style.borderColor = "#e57373";
        nameError.innerHTML = "This field is required";
        return false;
    } else if (itemDescription.value.trim() === "" || itemDescription.value.trim().length > 255){
        itemDescription.style.borderColor = "#e57373";
        descriptionError.innerHTML = "Description is required with a maximum of 255 characters";
        return false;
    } else if (itemCost.value.trim() === ""){
        itemCost.style.borderColor = "#e57373";
        costError.innerHTML = "This field is required"
        return false;
    } else if(itemQuantity.value.trim() === ""){
        itemQuantity.style.borderColor = "#e57373";
        quantityError.innerHTML = "This field is required"
        return false;
    }

}