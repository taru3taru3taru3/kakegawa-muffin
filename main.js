// --- Nav scroll effect ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 50);
}, { passive: true });

// --- Hamburger ---
const burger = document.getElementById('burger');
const mobMenu = document.getElementById('mobMenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobMenu.classList.toggle('open');
});
function closeMob() {
  burger.classList.remove('open');
  mobMenu.classList.remove('open');
}
mobMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMob));

// --- Fade-up on scroll ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fu').forEach(el => observer.observe(el));
