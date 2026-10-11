function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}

if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");
  if (heading) {
    heading.textContent = greet("World");
  }

  const navLinks = document.querySelectorAll("nav a");
  const feedback = document.getElementById("feedback");

  function updateCurrentSection() {
    const currentId =
      feedback &&
      feedback.getBoundingClientRect().top <= window.innerHeight * 0.45
        ? "feedback"
        : "schedule";
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${currentId}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  window.addEventListener("scroll", updateCurrentSection, { passive: true });
  window.addEventListener("resize", updateCurrentSection);
  updateCurrentSection();

  const form = document.getElementById("feedback-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      document.getElementById("form-status").textContent =
        "Feedback prepared successfully. This lab demo does not send messages.";
    });
  }
}
