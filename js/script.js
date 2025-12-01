// Intro animation
window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".hero").classList.add("hero-loaded");
  }, 1500); // 1.5 second delay
});

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.15 }
);
document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
