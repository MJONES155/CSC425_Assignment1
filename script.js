document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('addItem');
    const userInput = document.getElementById('userInput');
    const myList = document.getElementById('myList');
  
    addItemButton.addEventListener('click', () => {
      const inputValue = userInput.value.trim();
      if (inputValue) {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        myList.appendChild(listItem);
        userInput.value = '';
      }
    });
  });