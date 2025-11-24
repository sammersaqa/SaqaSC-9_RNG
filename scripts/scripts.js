// Full roster with WWE nicknames
const roster = {
  students: [
    { firstName: "Vanessa", lastName: "Acuna", wweName: "The Viper Queen" },
    { firstName: "James", lastName: "Blackwell", wweName: "Blackout" },
    { firstName: "Kellen", lastName: "Dixon", wweName: "The Iron Kid" },
    { firstName: "Joseph", lastName: "Durate", wweName: "Durate the Dominator" },
    { firstName: "Keante", lastName: "Epinger", wweName: "The Knockout King" },
    { firstName: "Brandon", lastName: "Estrada", wweName: "Estrada Explosion" },
    { firstName: "Nicolas", lastName: "Gonzaba", wweName: "The Gonzaba Grinder" },
    { firstName: "Isaias", lastName: "Gonzales", wweName: "The Silent Storm" },
    { firstName: "Eliasaf", lastName: "Gonzalez", wweName: "Ya Boy Eli – The Showstopper" },
    { firstName: "Lucas", lastName: "Guptill", wweName: "Paradox Crusher" },
    { firstName: "Daniel", lastName: "Herrera", wweName: "The Herrera Hammer" },
    { firstName: "Arianna", lastName: "Huntley", wweName: "The Huntress" },
    { firstName: "Xavier", lastName: "Jaques", wweName: "Xavy the X-Factor" },
    { firstName: "Carlos", lastName: "Lopez", wweName: "Los Locos Lopez" },
    { firstName: "Bryce", lastName: "Mack", wweName: "Big Mack Attack" },
    { firstName: "Pallavi", lastName: "Pattanashetti", wweName: "The Panther" },
    { firstName: "Jesus", lastName: "Ramirez", wweName: "El Ángel del Dolor" },
    { firstName: "Jonathan", lastName: "Ramirez", wweName: "Nathan the Nightmare" },
    { firstName: "Darcy", lastName: "Rose", wweName: "The Roseblade" },
    { firstName: "Jesus", lastName: "Salgado", wweName: "Salgado the Savage" },
    { firstName: "Sammer", lastName: "Saqa", wweName: "The Codebreaker" },
    { firstName: "Gavin", lastName: "Tristan", wweName: "Tristan Titan" },
    { firstName: "Brandon", lastName: "Van Horn", wweName: "Van Horn Havoc" }
  ],
  instructors: [
    { firstName: "Ken", lastName: "Martinez", wweName: "Coach Crusher" },
    { firstName: "Isaiah", lastName: "Furgeson", wweName: "The Enforcer" },
    { firstName: "Jacob", lastName: "Dekok", wweName: "Jacoozzi the One Winged Angel" },
    { firstName: "Jose", lastName: "Martinez", wweName: "El Jefe" }
  ]
};

// DOM elements
const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const historyList = document.getElementById("historyList");

// History tracking
let history = [];

// Utility: show random person from a group
function showRandom(group) {
  const people = roster[group];
  const person = people[Math.floor(Math.random() * people.length)];

  // Display with WWE nickname in the middle
  firstNameEl.textContent = person.firstName;
  lastNameEl.textContent = `"${person.wweName}" ${person.lastName}`;

  // Track history (limit to last 5)
  const fullDisplay = `${person.firstName} "${person.wweName}" ${person.lastName}`;
  history.unshift(fullDisplay);
  if (history.length > 5) history.pop();

  // Render history list
  historyList.innerHTML = "";
  history.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    historyList.appendChild(li);
  });
}

// Event listeners
document.getElementById("students").addEventListener("click", () => showRandom("students"));
document.getElementById("instructors").addEventListener("click", () => showRandom("instructors"));