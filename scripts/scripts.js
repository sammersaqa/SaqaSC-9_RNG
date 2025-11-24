// DOM references
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let randomStudentBtn = document.getElementById("randomName"); // your existing button
let randomInstructorBtn = document.getElementById("randomInstructor"); // optional second button
let historyList = document.getElementById("historyList");

// Optional extra fields in HTML
// <p id="email"></p>
// <p id="slack"></p>
let emailEl = document.getElementById("email");
let slackEl = document.getElementById("slack");

let history = [];

// Fetch data
function getData() {
  return fetch("./data/data.json")
    .then((response) => response.json());
}

// Randomizer
function randomizeData(list) {
  let randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// Update display
function updateDisplay(person) {
  firstName.textContent = person.firstName;
  lastName.textContent = person.lastName;

  if (emailEl) emailEl.textContent = `Email: ${person.email}`;
  if (slackEl) slackEl.textContent = `Slack: ${person.slackName}`;
}

// Update history
function updateHistory(person, type) {
  history.unshift({ ...person, type });
  if (history.length > 5) history.pop();

  historyList.innerHTML = "";
  history.forEach((entry) => {
    let li = document.createElement("li");
    li.textContent = `${entry.firstName} ${entry.lastName} (${entry.type})`;
    historyList.appendChild(li);
  });
}

// Student button
randomStudentBtn.addEventListener("click", () => {
  getData().then((data) => {
    let randomStudent = randomizeData(data.students);
    updateDisplay(randomStudent);
    updateHistory(randomStudent, "Student");
  });
});

// Instructor button
if (randomInstructorBtn) {
  randomInstructorBtn.addEventListener("click", () => {
    getData().then((data) => {
      let randomInstructor = randomizeData(data.instructors);
      updateDisplay(randomInstructor);
      updateHistory(randomInstructor, "Instructor");
    });
  });
}