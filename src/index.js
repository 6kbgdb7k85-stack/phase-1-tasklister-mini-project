document.addEventListener("DOMContentLoaded", () => {
  const tasks = [];
  const taskList = document.querySelector("#tasks");

  function displayTask(task) {
    const taskElement = document.createElement("li");
    taskElement.textContent = task;
    taskList.append(taskElement);
  }
  function addTask(event) {
    event.preventDefault();
    console.log(event.target.elements)
    tasks.push(event.target.elements[0].value);
    displayTask(event.target.elements[0].value);
  }
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (event) => addTask(event));
});
