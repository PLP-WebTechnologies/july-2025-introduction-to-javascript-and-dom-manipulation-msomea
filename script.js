// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variables & Conditionals
function checkAge() {
  const age = document.getElementById('userAge').value;
  const result = document.getElementById('ageResult');

  if (age >= 18) {
    result.textContent = "You are an adult!";
  } else if (age > 0) {
    result.textContent = "You are still a minor.";
  } else {
    result.textContent = "Please enter a valid age!";
  }
}

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Simple Greeting
function showGreeting(name) {
  document.getElementById('greeting').textContent = `Hello, ${name}!`;
}

// Function 2: Calculate Sum
function calculateSum(a, b) {
  return a + b;
}
// Example usage (console)
console.log("Sum of 5 + 10 =", calculateSum(5, 10));

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: For Loop to list numbers
function listNumbers() {
  const list = document.getElementById('numberList');
  list.innerHTML = ""; // clear previous list
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');
    li.textContent = i;
    list.appendChild(li);
  }
}

// Loop 2: While Loop countdown
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// DOM Interaction 1: Toggle background color
document.getElementById('toggleBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// DOM Interaction 2: Change message dynamically
document.getElementById('toggleBtn').addEventListener('mouseover', () => {
  document.getElementById('domMessage').textContent = "Ready to change the theme?";
});

// DOM Interaction 3: Create element dynamically
const newElement = document.createElement('p');
newElement.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newElement);
