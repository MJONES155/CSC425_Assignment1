document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('addItem');
    const userInput = document.getElementById('userInput');
    const myList = document.getElementById('myList');
    const clearAllBtn = document.getElementById('clearAll');

    function addItem() {
        const value = userInput.value.trim();
        if (value) {
            const li = document.createElement('li');
            li.textContent = value;

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '×';
            deleteBtn.className = 'delete-btn';
            deleteBtn.title = 'Delete item';
            deleteBtn.onclick = function() {
                li.remove();
            };

            li.appendChild(deleteBtn);
            myList.appendChild(li);
            userInput.value = '';
        }
    }

    addItemBtn.addEventListener('click', addItem);

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', function() {
            myList.innerHTML = '';
        });
    }
});