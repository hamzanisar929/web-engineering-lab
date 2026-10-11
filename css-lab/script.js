const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");
const searchStatus = document.getElementById("search-status");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const exercises = [...document.querySelectorAll(".exercise")];
  exercises.forEach((exercise) => exercise.classList.remove("search-result"));
  const match = query
    ? exercises.find((exercise) =>
        exercise.textContent.toLowerCase().includes(query),
      )
    : null;
  if (match) {
    match.classList.add("search-result");
    match.scrollIntoView({ block: "start" });
    match.querySelector("h2").focus({ preventScroll: true });
    searchStatus.textContent = `Found: ${match.querySelector("h2").textContent}.`;
  } else {
    searchStatus.textContent =
      "No matching exercise. Try a topic such as Flexbox, loader or units.";
  }
});
