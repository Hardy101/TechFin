let texts = document.querySelectorAll(".texts");
let currentIndex = 0;

function hideText(index) {
  texts[index].classList.add("hidden");
}

function showText(index) {
  texts[index].classList.remove("hidden");
}

function toggleText() {
  hideText(currentIndex);
  currentIndex = (currentIndex + 1) % texts.length;
  showText(currentIndex);
}

// Initially hide all texts except the first one
texts.forEach((text, index) => {
  if (index !== currentIndex) {
    text.classList.add("hidden");
  }
});

// Set an interval to toggle between text elements infinitely
setInterval(toggleText, 3000); // Adjust the timing as needed
