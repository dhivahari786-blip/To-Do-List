// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", function () {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Task text
    const span = document.createElement("span");
    span.innerText = taskInput.value;

    // ✅ Toggle strike when clicking task text
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // ✅ Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "btn btn-warning btn-sm me-2";

    editBtn.addEventListener("click", function () {
        const updatedText = prompt("Edit your task:", span.innerText);
        if (updatedText !== null && updatedText.trim() !== "") {
            span.innerText = updatedText;
        }
    });

    // ✅ Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Button group
    const buttonGroup = document.createElement("div");
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    // Append elements
    li.appendChild(span);
    li.appendChild(buttonGroup);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});