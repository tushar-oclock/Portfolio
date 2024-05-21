



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });










// custom js


// Define the list of professions with corresponding badge colors
const professions = [
  { name: "Data Analyst", color: "primary" },
  { name: "Data Engineer", color: "secondary" },
  { name: "Data Scientist", color: "success" },
  { name: "ML Engineer", color: "danger" },
  { name: "Statistician", color: "warning" },
  { name: "MLOPS Engineer", color: "info" },
  { name: "Web Developer", color: "light" },
  { name: "App Developer", color: "teal" },
  { name: "Python Developer", color: "deeporange" },
  { name: "AI Specialist", color: "gray" },
    { name: "Data Scientist", color: "yellow" },
    { name: "AIOPS Enginner", color: "purple" },
    { name: "LLMOPS Enginner", color: "red" },
    { name: "Data Architect", color: "orange" },
    { name: "Research Scientist", color: "cyan" },
    { name: "Data Consultant", color: "Amber" },


];

// Function to update the badge
function updateBadge(index) {
  const profession = professions[index];
  document.getElementById("badge-container").innerHTML = `<span class="badge badge-${profession.color}">${profession.name}</span>`;
}

// Initial call to update the badge
let index = 0;
updateBadge(index);

// Function to update the badge every 1 second
setInterval(() => {
  index = (index + 1) % professions.length;
  updateBadge(index);
}, 1000);










// curser
new kursor({
  type: 1,
  removeDefaultCursor: true,
  color: "#FFD870"
})


// click sound
document.addEventListener("click", function () {
  playSound();
});

function playSound() {
  var audio = document.getElementById("clickSound");
  audio.play();
}

document.getElementById('background-video').addEventListener('loadeddata', function () {
  document.body.style.backgroundColor = 'black';
});


// Age
const birthdate = new Date('2001-04-18T00:00:00');

function updateAge() {
  const ageElement = document.getElementById('age');
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  ageElement.textContent = ageInYears.toFixed(10);
}

// Update the age every 100 milliseconds (0.1 seconds)
setInterval(updateAge, 100);

// Initial call to display the age immediately
updateAge();


