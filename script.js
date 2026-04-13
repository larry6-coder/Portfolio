const roles = [
  "Front-End Developer",
  "Graphic Designer",
  "Photographer",
  "Video Editor"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = roles[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent = currentText.substring(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

function scrollToContact(){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}