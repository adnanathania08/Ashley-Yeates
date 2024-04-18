// const hamburgerButton = document.querySelector(".ri-menu-line");
// const hamburgerMenu = document.querySelector(".resmenu");
// let isDisplayed = false;

// hamburgerButton.addEventListener("click", function () {
//   if (isDisplayed == false) {
//     hamburgerMenu.style.display = "block";
//   } else {
//     hamburgerMenu.style.display = "none";
//   }

//   isDisplayed = !isDisplayed;
// });
const hamburgerButton = document.querySelector(".ri-menu-line");
const hamburgerMenu = document.querySelector(".resmenu");

// Add event listener to the hamburger button
hamburgerButton.addEventListener("click", function () {
  // Toggle the display of the hamburger menu
  if (
    hamburgerMenu.style.display === "none" ||
    hamburgerMenu.style.display === ""
  ) {
    hamburgerMenu.style.display = "block";
  } else {
    hamburgerMenu.style.display = "none";
  }
});
// -----------

// -------------------------
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const progressBars = document.querySelectorAll(".progress-bar");
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;
    let currentIndex = 0;

    // Update progress bars to reflect current slide
    function updateProgressBars() {
      progressBars.forEach((bar, index) => {
        if (index === currentIndex) {
          bar.classList.add("active");
        } else {
          bar.classList.remove("active");
        }
      });
    }

    // Navigate to a specific slide
    function goToSlide(index) {
      currentIndex = index;
      slider.style.transform = "translateX(" + -currentIndex * 100 + "%)";
      updateProgressBars();
    }

    // Navigate to the next slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
    }

    // Navigate to the previous slide
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      goToSlide(currentIndex);
    }

    // Function to toggle the visibility of the container
    function toggleContainer(id) {
      const content = document.getElementById(id);
      const openParagraph = document.getElementById("toggle-open-" + id);
      const closeParagraph = document.getElementById("toggle-close-" + id);

      if (content.style.display === "none") {
        content.style.display = "block";
        openParagraph.style.display = "none";
        closeParagraph.style.display = "block";
      } else {
        content.style.display = "none";
        openParagraph.style.display = "block";
        closeParagraph.style.display = "none";
      }
    }

    // Event listeners for toggling the containers
    document
      .getElementById("toggle-open")
      .addEventListener("click", function () {
        toggleContainer("toggle-content");
      });
    document
      .getElementById("toggle-close")
      .addEventListener("click", function () {
        toggleContainer("toggle-content");
      });
    document
      .querySelector(".arrow.left")
      .addEventListener("click", prevSlide);
    document
      .querySelector(".arrow.right")
      .addEventListener("click", nextSlide);
    document
      .getElementById("toggle-open-1")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-1");
      });
    document
      .getElementById("toggle-close-1")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-1");
      });
    document
      .getElementById("toggle-open-2")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-2");
      });
    document
      .getElementById("toggle-close-2")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-2");
      });
    document
      .getElementById("toggle-open-3")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-3");
      });
    document
      .getElementById("toggle-close-3")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-3");
      });
    document
      .getElementById("toggle-open-4")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-4");
      });
    document
      .getElementById("toggle-close-4")
      .addEventListener("click", function () {
        toggleContainer("toggle-content-4");
      });
  });

  //next

  var containerToggle = document.querySelector(".container-toggle");
  containerToggle.addEventListener("click", function () {
    var submenus = document.querySelector(".submenus");
    if (
      submenus.style.display === "none" ||
      submenus.style.display === ""
    ) {
      submenus.style.display = "block";
      this.textContent = "Fabric +";
    } else {
      submenus.style.display = "none";
      this.textContent = "Fabric +";
    }
  });

  var toggles = document.querySelectorAll(".toggle");
  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      var submenu = document.getElementById(targetId);
      if (
        submenu.style.display === "none" ||
        submenu.style.display === ""
      ) {
        submenu.style.display = "block";
        // Add the plus sign only if the submenu is being opened
        if (this.textContent.includes("+")) {
          this.textContent = this.textContent.replace("+", "-");
        }
      } else {
        submenu.style.display = "none";
      }
    });
  });

  var submenuItems = document.querySelectorAll(".submenu p");
  submenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var submenu = this.parentElement;
      var toggleId = submenu.getAttribute("id");
      var toggle = document.querySelector(
        '[data-target="' + toggleId + '"]'
      );
      submenu.style.display = "none";
      toggle.textContent = toggle.textContent.replace("-", "+");
    });
  });
