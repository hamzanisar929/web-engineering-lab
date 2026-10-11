function greet(name) {
  return `Hello, ${name}!`;
}

// Export for Node's test runner, while keeping this usable as a browser script.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { greet };
}

if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");
  if (heading) {
    heading.textContent = greet("World");
  }
}
