// Get elements
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let studentsBtn = document.getElementById("students");
let instructorsBtn = document.getElementById("instructors");
let historyList = document.getElementById("historyList");

let history = [];

// Get random person from list
function getRandomPerson(list) {
  let randomIndex = Math.floor(Math.random() * list.length);
  console.log("Random index:", randomIndex);
  console.log("Random person:", list[randomIndex]);
  return list[randomIndex];
}

// Show name on screen
function showName(person) {
  firstName.textContent = person.firstName;
  lastName.textContent = person.lastName;
  
  // Log to console
  console.log("--- Person Details ---");
  console.log("Name:", person.firstName, person.lastName);
  console.log("Email:", person.email);
  console.log("Slack:", person.slackName);
  console.log("---------------------");
}

// Add to history list
function addToHistory(person, type) {
  history.unshift({ name: `${person.firstName} ${person.lastName} (${type})`, type: type });
  if (history.length > 5) history.pop();

  historyList.innerHTML = "";
  history.forEach((entry) => {
    let li = document.createElement("li");
    li.textContent = entry.name;
    
    // Add 'authority' class if it's The Authority
    if (entry.type === "The Authority") {
      li.classList.add("authority");
    }
    
    historyList.appendChild(li);
  });
}

// Students button (CSA Superstars)
studentsBtn.addEventListener("click", () => {
  console.log("CSA Superstars button clicked!");
  fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {
      console.log("Data loaded:", data);
      let person = getRandomPerson(data.students);
      showName(person);
      addToHistory(person, "CSA Superstar");
    });
});

// Instructors button (The Authority)
instructorsBtn.addEventListener("click", () => {
  console.log("The Authority button clicked!");
  fetch("./data/data.json")
    .then(response => response.json())
    .then(data => {
      console.log("Data loaded:", data);
      let person = getRandomPerson(data.instructors);
      showName(person);
      addToHistory(person, "The Authority");
    });
});