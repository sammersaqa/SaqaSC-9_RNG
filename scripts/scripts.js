let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let randomize = document.getElementById("randomName");
let historyList = document.getElementById("historyList");

let history = [];

function getData() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => data.students);
}

function randomizeData(students) {
  let randomIndex = Math.floor(Math.random() * students.length);
  return students[randomIndex];
}

function updateHistory(name) {
  history.unshift(name); // add to beginning
  if (history.length > 5) history.pop(); // keep only last 5

  historyList.innerHTML = "";
  history.forEach((entry) => {
    let li = document.createElement("li");
    li.textContent = `${entry.firstName} ${entry.lastName}`;
    historyList.appendChild(li);
  });
}

randomize.addEventListener("click", () => {
  getData().then((students) => {
    let randomStudent = randomizeData(students);
    firstName.textContent = randomStudent.firstName;
    lastName.textContent = randomStudent.lastName;
    updateHistory(randomStudent);
  });
});