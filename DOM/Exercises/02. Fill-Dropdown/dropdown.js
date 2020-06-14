function addItem() {
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;

    let foundSelect = document.getElementById("menu");
    let element = document.createElement("option"); 
    element.text = itemText;
    element.value = itemValue;
    foundSelect.appendChild(element);

    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';
}