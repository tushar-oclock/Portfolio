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
  { name: "Android Developer", color: "khaki" },
  { name: "Prompt Engineer", color: "plum" },
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


// Smooth Scroll Function for Top and Bottom Buttons
function createScrollButton(id, scrollDirection) {
  const button = document.createElement('button');
  button.id = id;
  button.className = 'scroll-button ' + scrollDirection;
  button.innerHTML = `<img src="./assets/images/sidebar/${scrollDirection === 'scroll-top' ? 'chevron-angle-svgrepo-com.svg' : 'down-arrow-download-svgrepo-com.svg'}" alt="design icon" width="40">`;
  
  button.addEventListener('click', function() {
    // Scroll to the top or bottom based on scroll direction
    window.scrollTo({
      top: scrollDirection === 'scroll-top' ? 0 : document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
  
  document.body.appendChild(button);
}

// Call functions to create scroll buttons
createScrollButton('scrollTopButton', 'scroll-top');
createScrollButton('scrollBottomButton', 'scroll-bottom');




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

document.addEventListener('mousemove', (event) => {
  const tailDot = document.createElement('div');
  tailDot.classList.add('tail-dot');

  const dotSize = 8; // Same size as defined in CSS

  // Use `fixed` positioning to tie dots to viewport
  const x = Math.max(0, Math.min(event.clientX, window.innerWidth - dotSize));
  const y = Math.max(0, Math.min(event.clientY, window.innerHeight - dotSize));

  tailDot.style.left = `${x - dotSize / 2}px`;
  tailDot.style.top = `${y - dotSize / 2}px`;

  document.body.appendChild(tailDot);

  // Remove the dot after the animation ends
  setTimeout(() => {
    tailDot.remove();
  }, 500);
});


window.onload = function () {
  setTimeout(function () {
      document.getElementById("gif-container").style.display = "block";
  }, 2000); // Delay in milliseconds (e.g., 2000ms = 2 seconds)
}


const playPauseBtn = document.getElementById('playPauseBtn');
const songIcon = document.getElementById('songIcon');
const audioPlayer = document.getElementById('audioPlayer');

// Initially, the song will play automatically because of the autoplay attribute

// Toggle play/pause when the button is clicked
playPauseBtn.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    // Change the SVG to a "pause" version
    songIcon.src = 'assets/images/song.svg';  // You can modify the SVG here if needed for pause icon
    // Alternatively, modify the content of the SVG inline using JavaScript for more complex toggles
  } else {
    audioPlayer.pause();
    // Change the SVG back to "play" version
    songIcon.src = 'assets/images/song.svg';  // Use same or alternate SVG as needed for play
  }
});
