let e = !1;
const s = document.querySelector("#navlinks"),
  l = document.querySelector("#hamburger"),
  t = document.querySelector("#navLayer"),
  i = [...s.querySelector("ul").children];
function a() {
  e
    ? (s.classList.add(
        "!visible",
        "!scale-100",
        "!opacity-100",
        "!lg:translate-y-0"
      ),
      l.classList.add("toggled"),
      t.classList.add("origin-top", "scale-y-100"))
    : (s.classList.remove(
        "!visible",
        "!scale-100",
        "!opacity-100",
        "!lg:translate-y-0"
      ),
      l.classList.remove("toggled"),
      t.classList.remove("origin-top", "scale-y-100"));
}
l.addEventListener("click", () => {
  (e = !e), a();
});
i.forEach((c) => {
  c.addEventListener("click", () => {
    (e = !e), a();
  });
});

// Text animation carousel
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
