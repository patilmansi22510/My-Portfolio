// Typing Effect
const typingElement = document.getElementById("typing");
const texts = ["Software Developer", "Java Enthusiast", "Web Developer", "Quick Learner"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
// Animate Skill Bars on Scroll
const skillFills = document.querySelectorAll(".skill-bar .fill");

window.addEventListener("scroll", () => {
  skillFills.forEach(fill => {
    const rect = fill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      fill.style.width = fill.getAttribute("data-width");
    }
  });
});
// Animate Education Timeline Cards
const eduCards = document.querySelectorAll(".education-card");

window.addEventListener("scroll", () => {
  eduCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});

// Certificate Modal Popup
const modal = document.getElementById("certModal");
const certLink = document.querySelector(".cert-link");
const modalImg = document.getElementById("certImage");
const closeBtn = document.querySelector(".close");

certLink.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = "certificate.Png"; // replace with your certificate image file
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
