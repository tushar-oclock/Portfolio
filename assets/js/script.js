// Sidebar for mobileview
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Mobile View Project category Field
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () { elementToggleFunc(this); });
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// Navigation Link
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const page = this.getAttribute("data-page");

    pages.forEach(article => {
      if (article.getAttribute("data-page") === page) {
        article.classList.add("active");
      } else {
        article.classList.remove("active");
      }
    });

    navigationLinks.forEach(navLink => {
      if (navLink.getAttribute("data-page") === page) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});

// SideBar Badges
const professions = [
  { name: "Data Analyst", color: "gold" },
  { name: "Data Engineer", color: "lightpink" },
  { name: "Data Scientist", color: "beige" },
  { name: "ML Engineer", color: "crimson" },
  { name: "MLOPS Engineer", color: "mediumspringgreen" },
  { name: "Web Developer", color: "mediumvioletred" },
  { name: "AIOPS Engineer", color: "khaki" },
  { name: "LLMOPS Engineer", color: "plum" },
  { name: "Python Developer", color: "lime" },
];
function updateBadge(index) {
  const profession = professions[index];
  document.getElementById("badge-container").innerHTML = `<span class="badge badge-${profession.color}">${profession.name}</span>`;
}
let index = 0;
updateBadge(index);
setInterval(() => {
  index = (index + 1) % professions.length;
  updateBadge(index);
}, 1000);


// Click Sound
document.addEventListener("DOMContentLoaded", function () {
  // Create audio element
  var audio = document.createElement("audio");
  audio.id = "clickSound";
  audio.innerHTML = '<source src="./assets/images/aud/sound.ogg" type="audio/ogg">Your browser does not support the audio element.';
  document.body.appendChild(audio);

  // Function to play the sound
  function playSound() {
      var audio = document.getElementById("clickSound");
      audio.play();
  }

  // Event listener for mouse press
  document.addEventListener("mousedown", function () {
      playSound();
  });
});

// Age on sidebar
const birthdate = new Date('2001-04-18T00:00:00');
function updateAge() {
  const ageElement = document.getElementById('age');
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  ageElement.textContent = ageInYears.toFixed(10);
}
setInterval(updateAge, 100);
updateAge();


// Page Up and Down
function createScrollButton(id, scrollValue, scrollDirection) {
  const button = document.createElement('button');
  button.id = id;
  button.className = 'scroll-button ' + scrollDirection;
  button.innerHTML = `<img src="./assets/images/sidebar/${scrollDirection === 'scroll-top' ? 'chevron-angle-svgrepo-com.svg' : 'down-arrow-download-svgrepo-com.svg'}" alt="design icon" width="40">`;
  
  button.addEventListener('click', function() {
    const targetScrollValue = scrollDirection === 'scroll-bottom' ? document.documentElement.scrollHeight : scrollValue;
    window.scrollTo({
      top: targetScrollValue,
      behavior: 'smooth'
    });
  });
  
  document.body.appendChild(button);
}
createScrollButton('scrollTopButton', 0, 'scroll-top');
createScrollButton('scrollBottomButton', 0, 'scroll-bottom');


// Drop Down in MOBILE VIEW
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const projectItems = document.querySelectorAll("[data-filter-item]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Remove 'active' class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked button
      button.classList.add("active");

      // Show only projects related to the selected category
      projectItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");
        if (itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Show only projects related to "Data Analytics" by default
  projectItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");
    if (itemCategory !== "generative ai") {
      item.style.display = "none";
    }
  });
});
