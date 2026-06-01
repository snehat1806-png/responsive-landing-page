// Select Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Function
addTaskBtn.addEventListener("click", function () {

  // Get Input Value
  const taskText = taskInput.value.trim();

  // Prevent Empty Tasks
  if(taskText === ""){
    alert("Please enter a task");
    return;
  }

  // Create List Item
  const li = document.createElement("li");
  li.classList.add("task");

  // Task Text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Button Container
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("task-buttons");

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("complete-btn");

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Complete Event
  completeBtn.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  // Delete Event
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append Buttons
  buttonDiv.appendChild(completeBtn);
  buttonDiv.appendChild(deleteBtn);

  // Append Elements
  li.appendChild(span);
  li.appendChild(buttonDiv);

  taskList.appendChild(li);

  // Clear Input
  taskInput.value = "";
});