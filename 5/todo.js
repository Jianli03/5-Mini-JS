let taskItems = [];

const taskInput = document.getElementById("task-input");

let taskList = document.getElementById("task-list");

function addTask() {
  task = taskInput.value.trim();
  if (task) {
    const taskElement = document.createElement("li");
    taskElement.textContent = task;

    console.log(taskElement.textContent);
    taskList.appendChild(taskElement);
    taskInput.value = "";

    // Add to the task Item list
    taskItems.push({ text: task, completed: false });
    // store the task items in local storge
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
  }
}

taskList.addEventListener("click", toggleTaskDone);

function toggleTaskDone(event) {

  const taskElement = event.target.closest("li");


  if (taskElement) {

    const taskItem = taskItems.find((item) => item.text === taskElement.textContent);

    taskItem.completed = !taskItem.completed;
    taskElement.classList.toggle("done");

    localStorage.setItem("taskItems", JSON.stringify(taskItems));
  }
}

window.onload = function () {
  const storedTaskItems = localStorage.getItem("taskItems");
  taskItems = JSON.parse(storedTaskItems);

  taskItems.forEach((taskItem) => {
    const taskElement = document.createElement("li");
    taskElement.textContent = taskItem.text;
    taskList.appendChild(taskElement);

    console.log(taskItem.text + " " + taskItem.completed);
    //have to check if completed, cos all taskElment is new and there is no done class exists.
    if (taskItem.completed) {
      taskElement.classList.add("done");
    }


  });
};
