// This file contains JavaScript code that adds functionality to the dynamic page. 
// When the "Add Item" button is clicked, it takes the input value and appends it as a new list item in the unordered list, clearing the input afterward.

document.getElementById('addItem').addEventListener('click', function() {
    const input = document.getElementById('userInput');
    const newItem = input.value;
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        document.getElementById('myList').appendChild(li);
        input.value = '';
    }
});