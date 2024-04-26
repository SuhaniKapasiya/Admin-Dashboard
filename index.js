// Select all elements with the class "class-A"
const classAElements = document.querySelectorAll(".class-A");

// Loop through each element
classAElements.forEach((element) => {
  // Add event listener for mouseenter (hover in)
  element.addEventListener("mouseenter", () => {
    element.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)"; // Add shadow on hover
  });
  // Add event listener for mouseleave (hover out)
  element.addEventListener("mouseleave", () => {
    element.style.boxShadow = "none"; // Remove shadow when not hovered
  });
});
