// Function to handle adding a new task
function addTask() {
    // 1. Get the input field and its value
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    // 2. Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. Get the list (<ul>) where tasks will be added
    const list = document.getElementById('taskList');

    // 4. Create the new list item (<li>) and its content
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span onclick="toggleDone(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">x</button>
    `;

    // 5. Append the new list item to the main list
    list.appendChild(listItem);

    // 6. Clear the input field for the next task
    input.value = '';
}

// Function to mark a task as done/undone
function toggleDone(taskSpan) {
    // The 'taskSpan' is the <span> element containing the task text.
    // We toggle the 'done' class on its parent element (the <li>).
    taskSpan.parentNode.classList.toggle('done');
}

// Function to delete a task
function deleteTask(deleteButton) {
    // The 'deleteButton' is the button that was clicked.
    // Its parent is the <li>, which is the whole task item we want to remove.
    const listItem = deleteButton.parentNode;
    listItem.remove();
}
