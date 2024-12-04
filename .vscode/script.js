document.addEventListener("DOMContentLoaded", function () {
    const addItemButton = document.querySelector("#list-form button");
    const listItemInput = document.querySelector("#list-item");
  
    addItemButton.addEventListener("click", function () {
      if (listItemInput.value.length <= 4) {
        // Show modal with message
        alert("Hello Buddy, please be detailed and add five characters or more to add a new item.");
      }