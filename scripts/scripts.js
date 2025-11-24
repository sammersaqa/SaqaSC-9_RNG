const fullNameEl = document.getElementById("fullName");
const historyList = document.getElementById("historyList");
const nameDisplay = document.querySelector(".name-display");

let history = [];

fetch("./data/data.json")
  .then(response => response.json())
  .then(roster => {
    document.getElementById("students").addEventListener("click", () => showRandom(roster.students, "students"));
    document.getElementById("instructors").addEventListener("click", () => showRandom(roster.instructors, "instructors"));
  })
  .catch(error => console.error("Error loading data.json:", error));

function showRandom(group, type) {
  if (!group || group.length === 0) return;

  const person = group[Math.floor(Math.random() * group.length)];

  // Display fullName
  fullNameEl.textContent = person.fullName;

  // Toggle color based on type
  if (type === "instructors") {
    nameDisplay.classList.add("authority");
  } else {
    nameDisplay.classList.remove("authority");
  }

  // Log contact info
  console.log("Selected Superstar:");
  console.log("Name:", person.fullName);
  console.log("Email:", person.email);
  console.log("Slack:", person.slackName);

  // Track history
  history.unshift(person.fullName);
  if (history.length > 5) history.pop();

  // Render history list
  historyList.innerHTML = "";
  history.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    historyList.appendChild(li);
  });
}