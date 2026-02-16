// SMALL PROJECT
// API Data Fetcher App (Users List)
// 🔹 HTML
<h2>Users List</h2>
<button onclick="loadUsers()">Load Users</button>
<ul id="userList"></ul>

// 🔹 JavaScript
async function loadUsers() {
  let list = document.getElementById("userList");
  list.innerHTML = "";

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();

    users.forEach(user => {
      let li = document.createElement("li");
      li.innerText = `${user.name} - ${user.email}`;
      list.appendChild(li);
    });

  } catch (error) {
    list.innerText = "Failed to load data";
  }
}

// 🧠 Concept Recap (Interview Ready)
// async → Promise return karta hai
// await → Promise resolve hone ka wait
// try/catch → error handling
// fetch() → API call (GET)
// response.json() → JSON → JS Object
// DOM + API = Real World App