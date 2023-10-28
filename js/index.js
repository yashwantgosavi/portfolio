// Function to change the title and favicon when the tab becomes visible
function changeTitleAndFavicon() {
    document.title = "Yash Web Design | Full Service Digital Freelancer That Drives Revenue";
    document.querySelector("link[rel*='icon']").href = "../media/png/favicon.ico";
}

// Function to restore the original title and favicon when the tab becomes hidden
function restoreTitleAndFavicon() {
    document.title = "Missing you already";
    document.querySelector("link[rel*='icon']").href = "../media/png/sad.ico";
}

// Check if the Page Visibility API is supported
if (document.hidden !== undefined) {
    // Add event listeners for visibility changes
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            restoreTitleAndFavicon(); // Tab is hidden
        } else {
            changeTitleAndFavicon(); // Tab is visible again
        }
    });
} else {
    console.log("Page Visibility API not supported.");
}



// --------------------------- fadein on mousescroll -------------------------
// const $paragraph = $("p,li,a,div,h1,h2,img,h3,h4,h5,h6,b,address,footer,ul,button");
// $(window).scroll(function() {
//   $paragraph.each(function() {
//     const paragraphMiddle = $(this).offset().top + 0.5 * $(this).height();
//     const windowBottom = $(window).scrollTop() + $(window).height();
//     if (paragraphMiddle < windowBottom) {
//       $(this).addClass("textFade");
//     }
//   });
// });
// $(window).scroll();

// ------------------------------------------------------------------------------------

// Get all the clickable links by class name
const clickableLinks = document.querySelectorAll('.btn.btn-primary');

// Add click event listeners to each link
clickableLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default behavior of the link
        const href = link.getAttribute('href'); // Get the href attribute

        // Remove the 'show' class from all elements
        document.querySelectorAll('.collapse').forEach(element => {
            element.classList.remove('show');
        });

        // Add the 'show' class to the target element with the corresponding ID
        const targetElement = document.getElementById(href.substring(1)); // Remove the '#' from href
        if (targetElement) {
            targetElement.classList.add('show');
        }
    });
});

// ---------------------- 50+ Counter -------------------
const counter = document.getElementById('count');
const target = 50; // Change this to your target number
const duration = 2000; // Duration of the animation in milliseconds
const steps = 50; // Number of steps

const stepValue = target / steps;
const stepDuration = duration / steps;

let currentCount = 0;
let step = 0;

function updateCounter() {
    counter.textContent = Math.floor(currentCount);
}

function animateCounter() {
    if (step < steps) {
        currentCount += stepValue;
        updateCounter();
        step++;
        setTimeout(animateCounter, stepDuration);
    } else {
        currentCount = target;
        updateCounter();
    }
}

animateCounter();



// ---------------- social links show hide ---------


  document.addEventListener("DOMContentLoaded", function () {
    const linksElement = document.querySelector(".links");
    const socialLinksElement = document.getElementById("socialLinks");
    const closeIcon = document.getElementById("closeIcon");
  
    // Function to toggle the .visible class
    function toggleVisibleClass() {
      socialLinksElement.classList.toggle("visible");
    }
    // Add click event listener
    linksElement.addEventListener("click", toggleVisibleClass);
  
    // Add click event listener to close the element
    closeIcon.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click from reaching the linksElement
      socialLinksElement.classList.remove("visible");
    });
  });
  

 

// ---------------------- type writter ----------------------
class Typewritter {
  constructor({ text, time = 500 }) {
    this.texts = text.split(",");
    this.sT = document.querySelector(".secondary__title");
    this.pT = document.querySelector(".primary__title"); // Reference to the primary__title element
    this.realTime = time; // tiempo real
    this.wait = time + 1000; // tiempo de espera
    this.changeTime = 0; // tiempo que usara el intervalo
    this.length = this.texts.length; // cantidad de letras
    this.countChar = 0; // contador de letras escritas
    this.current = 0;
    this.flag = false;

    this.cutText();
  }

  cutText() {
    const text = this.texts[this.current];
    const tLength = this.texts[this.current].length;

    // tiempo de espera al finalizar la palabra
    if (this.countChar === tLength) {
      this.changeTime = this.wait;
    }

    // cambio de tiempo de retorno
    if (this.flag && this.countChar === tLength - 1) {
      this.changeTime = this.realTime / 4;
    }

    // tiempo real para cada letra desde que comienza la palabra
    if (this.countChar === 0) {
      this.changeTime = this.realTime;
    }

    this.drawText(text.substr(0, this.countChar));

    // If flag is false, increase the counter to continue writing
    if (!this.flag) {
      this.countChar++;
      if (this.countChar === tLength) {
        this.flag = true;
      }

      // If flag is true, decrease the counter to remove letters
    } else if (this.flag) {
      this.countChar--;
      if (this.countChar === 0) {
        this.flag = false;
        this.current = ++this.current % this.length;
      }
    }

    setTimeout(() => this.cutText(), this.changeTime);
  }

  drawText(chars) {
    this.sT.innerHTML = chars;
  }
}

new Typewritter({
  text: " Web Developer,  UI-UX Designer, Graphic Designer, Fine Artist",
  time: 80
});
