document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to display tasks in the UI
    function displayTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${task}
                <button data-index="${index}" class="delete">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    displayTasks();

    // Add task
    addTaskButton.addEventListener("click", () => {
        const newTask = taskInput.value.trim();
        if (newTask) {
            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            displayTasks();
        }
    });
    

    // Delete task
    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }
    });
});
