// Sidebar for mobileview
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// Badges
const professions = [
  { name: "Data Analyst", color: "lightblue" },
  { name: "Data Engineer", color: "redorange" },
  { name: "Data Scientist", color: "lightgreen" },
  { name: "ML Engineer", color: "gold" },
  { name: "Statistician", color: "lightpink" },
  { name: "MLOPS Engineer", color: "silver" },
  { name: "Web Developer", color: "crimson" },
  { name: "App Developer", color: "beige" },
  { name: "Python Developer", color: "cyan" },
  { name: "AI Specialist", color: "lime" },
    { name: "Data Scientist", color: "teal" },
    { name: "AIOPS Enginner", color: "pink" },
    { name: "LLMOPS Enginner", color: "orange" },
    { name: "Data Architect", color: "purple" },
    { name: "Research Scientist", color: "blue" },
    { name: "Data Consultant", color: "green" },
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






// click sound
document.addEventListener("click", function () {
  playSound();
});
function playSound() {
  var audio = document.getElementById("clickSound");
  audio.play();
}


//  scrollbar
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
setInterval(updateAge, 100);
updateAge();



// botton
document.getElementById('scrollTopButton').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
document.getElementById('scrollBottomButton').addEventListener('click', function() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
});



// scripts.js

document.addEventListener("DOMContentLoaded", function() {
  const chunkSize = 500; // Size of the chunk to load in bytes

  async function fetchChunk(url, start, end) {
      const response = await fetch(url, {
          headers: {
              'Range': `bytes=${start}-${end}`
          }
      });

      if (!response.ok) {
          return null;
      }

      return await response.text();
  }

  document.querySelectorAll('.file').forEach(fileElement => {
      const codeBlock = fileElement.querySelector('code');
      const loadMoreButton = fileElement.querySelector('.load-more');
      const closeButton = fileElement.querySelector('.close-file');
      const url = fileElement.getAttribute('data-url');
      const language = fileElement.getAttribute('data-lang');
      let currentPosition = 0;
      let content = '';

      async function loadMore() {
          const chunk = await fetchChunk(url, currentPosition, currentPosition + chunkSize - 1);

          if (chunk === null) {
              loadMoreButton.disabled = true;
              loadMoreButton.textContent = 'No more content';
              return;
          }

          content += chunk;
          codeBlock.textContent = content;
          Prism.highlightElement(codeBlock);
          currentPosition += chunkSize;
      }

      async function closeFile() {
          content = '';
          currentPosition = 0;
          loadMoreButton.disabled = false;
          loadMoreButton.textContent = 'Load More';
          // Load the first chunk again
          const initialChunk = await fetchChunk(url, currentPosition, currentPosition + chunkSize - 1);
          if (initialChunk !== null) {
              content = initialChunk;
              codeBlock.textContent = content;
              Prism.highlightElement(codeBlock);
              currentPosition += chunkSize;
          }
      }

      loadMoreButton.addEventListener('click', loadMore);
      closeButton.addEventListener('click', closeFile);

      // Load the first chunk initially
      loadMore();
  });
});




