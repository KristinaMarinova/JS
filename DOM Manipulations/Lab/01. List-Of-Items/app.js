function addItem() {
    let list = document.getElementById('items');
    let newItemText = document.getElementById('newItemText').value; 
    let newItem = document.createElement('li'); 
    newItem.innerHTML = newItemText; 
    list.appendChild(newItem);
    document.getElementById('newItemText').value = '';
}