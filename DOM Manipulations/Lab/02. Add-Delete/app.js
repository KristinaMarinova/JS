function addItem() {
    let list = document.getElementById('items');
    let input = document.getElementById('newText');

    let newItemText = input.value;
    if (newItemText.length === 0) {
        return;
    }
    let newItem = document.createElement('li');
    newItem.textContent = newItemText;

    const anchor = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    anchor.appendChild(linkText);
    anchor.href = "#";

    list.appendChild(newItem);
    newItem.appendChild(anchor);

    anchor.addEventListener('click', function () {
        newItem.remove();
    })

    input.value = '';
}