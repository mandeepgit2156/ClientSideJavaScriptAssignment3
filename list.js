function addItem() {
    //grabbing the value given to the input tag
    const itemFromInput = document.getElementById("itemNeeded").value;
    if (itemFromInput.trim() === "") return;
    //create a new list element for the empty ul tag
    const listItem = document.createElement("li");
    //creating a checkbox element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            listItem.classList.add("line-through");
            document.getElementById("listShown").appendChild(listItem); 
        } else {
            listItem.classList.remove("line-through");
        }
    });
    //creating a delete button for individual items
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });
    //adding the text content to the list item
    const itemText = document.createElement("span");
    itemText.textContent = itemFromInput;
    
    listItem.appendChild(checkbox);
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    //adding it to the list
    document.getElementById("listShown").appendChild(listItem);
    //emptying the text box after the submit for the next input
    document.getElementById("itemNeeded").value = "";
}
