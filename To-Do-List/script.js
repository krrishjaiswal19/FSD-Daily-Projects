let input = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

btn.addEventListener("click", function () {
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  list.appendChild(li);
  input.value = "";
});
