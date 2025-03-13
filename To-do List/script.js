// Select elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7"; 
  li.appendChild(span);

  inputBox.value = "";
  saveData();
}

// Mark task as checked or delete it
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Save tasks in localStorage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load tasks from localStorage
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks") || "";
}
showTasks();
