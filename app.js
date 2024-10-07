let orangeBtn = document.querySelector(".hireMe");
let hero = document.getElementById("architect");

function changeHero() {
  hero.innerHTML = "Architect, 3D artist and sometimes also Web Developer";
}

orangeBtn.addEventListener("click", changeHero);

const button = document.getElementById("orange-btn");

// Function to generate random position
function moveButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Calculate random positions but ensure the button stays within the window boundaries
  const newLeft = Math.random() * (windowWidth - button.offsetWidth);
  const newTop = Math.random() * (windowHeight - button.offsetHeight);

  // Apply the new positions
  button.style.left = `${newLeft}px`;
  button.style.top = `${newTop}px`;
}

// Event listener to trigger when the user hovers over the button
button.addEventListener("mouseover", moveButton);
