// Button to change bio background color
document.getElementById("colorButton").onclick = function() {
  const bio = document.querySelector(".bio");
  bio.style.background = "#ffeaa7";
};

// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  }
});

// Heading hover effect
const heading = document.querySelector(".about-section h2");
heading.addEventListener("mouseover", () => {
  heading.style.color = "#e67e22";
});
heading.addEventListener("mouseout", () => {
  heading.style.color = "#333";
});
