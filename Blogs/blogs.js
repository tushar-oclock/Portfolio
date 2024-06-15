// Sidebar for mobileview
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

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

// click sound
document.addEventListener("DOMContentLoaded", function () {
  // Create audio element
  var audio = document.createElement("audio");
  audio.id = "clickSound";
  audio.innerHTML = '<source src="../assets/images/aud/sound.ogg" type="audio/ogg">Your browser does not support the audio element.';
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

// Age on Sidebar
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
  button.innerHTML = `<img src="../assets/images/sidebar/${scrollDirection === 'scroll-top' ? 'chevron-angle-svgrepo-com.svg' : 'down-arrow-download-svgrepo-com.svg'}" alt="design icon" width="40">`;
  
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


// Load Github Python FIles and Load & Close more Button
document.querySelectorAll('.file').forEach(fileElement => {
  const codeBlock = fileElement.querySelector('code');
  const loadMoreButton = fileElement.querySelector('.load-more');
  const closeButton = fileElement.querySelector('.close-file');
  const url = fileElement.getAttribute('data-url');
  const language = fileElement.getAttribute('data-lang');
  let currentPosition = 0;
  let content = '';

  async function fetchChunk(url, start, end) {
    const response = await fetch(url, { headers: { 'Range': `bytes=${start}-${end}` } });
    if (!response.ok) return null;
    return await response.text();
  }

  async function loadMore() {
    const chunk = await fetchChunk(url, currentPosition, currentPosition + 499);
    if (chunk === null) return loadMoreButton.disabled = true, loadMoreButton.textContent = 'No more content';
    content += chunk;
    codeBlock.textContent = content;
    Prism.highlightElement(codeBlock);
    currentPosition += 500;
  }

  async function closeFile() {
    content = '';
    currentPosition = 0;
    loadMoreButton.disabled = false;
    loadMoreButton.textContent = 'Load More';
    if (await fetchChunk(url, 0, 499) !== null) await loadMore();
  }

  loadMoreButton.addEventListener('click', loadMore);
  closeButton.addEventListener('click', closeFile);
  loadMore();
});


// Scroll SPAN to H3
document.querySelectorAll('.blogbadge .badge').forEach(span => {
  span.addEventListener('click', () => {
    const spanText = span.textContent.trim();
    const h3 = [...document.querySelectorAll('.service-title')].find(h3 => h3.textContent.trim() === '🚀' + spanText + ' :');
    if (h3) {
      const offset = h3.getBoundingClientRect().top + window.scrollY - (window.innerHeight * 0.1);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});



