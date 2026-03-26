// MOBILE MENU TOGGLE
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      revealSections(); // your function that animates sections
    }, 100); // wait a tiny bit for scrolling
  });
});

// CONTACT FORM SUBMIT
function submitForm(event) {
  event.preventDefault();
  showToast("Message Sent Successfully!");
}

// TOAST FUNCTION
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.style.display = "block";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.opacity = "0";
  }, 1500);

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// FADE IN ANIMATION ON SCROLL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const position = sec.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
    }
  });
});

// VIDEO PLAYBACK SPEED
window.addEventListener("load", function () {
  const video = document.getElementById("bgVideo");
  if (video) {
    video.playbackRate = 3.0;
  }
});

window.addEventListener("load", () => {
  document.getElementById("hero").style.opacity = "1";
  document.getElementById("hero").style.transform = "translateY(0)";
});

