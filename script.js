const taskInput =document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("task")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");
        li.innerHTML = task;
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Dlete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);

            localStorage.setItem("task", JSON.stringify(tasks));

            displayTasks();
        });

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    });
}


addButton.addEventListener("click", function() {
    const task = taskInput.value.trim();

    if (task=== "") {
        alert("please enter a task");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
});

clearButton.addEventListener("click", function() {
    tasks = [];

    localStorage.removeItem("tasks");

    displayTasks();
});

displayTasks();