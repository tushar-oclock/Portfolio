// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

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



new kursor({
  type: 1,
  removeDefaultCursor:true,
  color: "#FFD870"
})




document.addEventListener("click", function() {
  playSound();
});

function playSound() {
  var audio = document.getElementById("clickSound");
  audio.play();
}

document.getElementById('background-video').addEventListener('loadeddata', function() {
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
    if (itemCategory !== "data analytics") {
      item.style.display = "none";
    }
  });
});




document.addEventListener('DOMContentLoaded', function () {
  // Get the active button
  const activeButton = document.querySelector('.select-item .active');
  // Get the select value element
  const selectValue = document.querySelector('[data-select-value]');

  // Check if the active button exists
  if (activeButton) {
    // Set the default value to the text content of the active button
    selectValue.textContent = activeButton.textContent;
  }

  // Add event listeners to update the select value when a new item is selected
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      this.classList.add('active');
      selectValue.textContent = this.textContent;
    });
  });
});


document.getElementById('show-alert').addEventListener('click', function() {
  Swal.fire({
    width: 600,
    imageUrl: "/assets/images/tat.jpg", 
    customClass: {
      popup: 'swal2-custom-background', 
      image: 'swal2-custom-image', 
    },
    backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    showConfirmButton: false, 
  });
});
