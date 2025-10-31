document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    if (tasktext === "") return;

    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    todoInput.value = ""; //this clears input
    console.log(tasks);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toogle("completed");
      saveTasks();
    });
    todoList.appendChild(li);
  }
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
