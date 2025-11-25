// Grab elements from the HTML
const fullNameEl = document.getElementById("fullName");   // Where the selected name will show
const historyList = document.getElementById("historyList"); // List of previously picked names
const nameDisplay = document.querySelector(".name-display"); // Name styling element

// Keep track of last 5 picks
let history = [];

// Load roster data from JSON file
fetch("./data/data.json")
  .then(response => response.json())
  .then(roster => {
    // Add button click events
    document.getElementById("students").addEventListener("click", () => showRandom(roster.students, "students"));
    document.getElementById("instructors").addEventListener("click", () => showRandom(roster.instructors, "instructors"));
    document.getElementById("showAll").addEventListener("click", () => showAllContacts(roster));
  })
  .catch(error => console.error("Error loading data.json:", error));

// Function to show a random person from a group
function showRandom(group, type) {
  if (!group || group.length === 0) return; // Stop if group is empty

  // Pick a random person
  const person = group[Math.floor(Math.random() * group.length)];

  // Display their name
  fullNameEl.textContent = person.fullName;

  // Change color if instructor
  if (type === "instructors") {
    nameDisplay.classList.add("authority");
  } else {
    nameDisplay.classList.remove("authority");
  }

  // Log details in console
  console.log("Selected Superstar:");
  console.log("Name:", person.fullName);
  console.log("Email:", person.email);
  console.log("Slack:", person.slackName);

  // Update history (keep only last 5)
  history.unshift(person.fullName);
  if (history.length > 5) history.pop();

  // Render history list in UI
  historyList.innerHTML = "";
  history.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    historyList.appendChild(li);
  });
}

// Function to show all contacts in console
function showAllContacts(roster) {
  console.clear();
  console.log("📋 FULL ROSTER CONTACTS");

  console.log("\n--- CSA Superstars ---");
  roster.students.forEach(person => {
    console.log(`${person.fullName} | Email: ${person.email} | Slack: ${person.slackName}`);
  });

  console.log("\n--- The Authority ---");
  roster.instructors.forEach(person => {
    console.log(`${person.fullName} | Email: ${person.email} | Slack: ${person.slackName}`);
  });
}