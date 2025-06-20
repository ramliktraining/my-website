// ✅ AOS Init
AOS.init({ duration: 1000, once: true });

// ✅ Typewriter
const phrases = [
  "Welcome to Ramlik's Website  ",
  "Creating engaging web experiences",
  "Let's build something great!"
];
const textElement = document.querySelector(".typewriter-text");
let phraseIndex = 0, letterIndex = 0, isDeleting = false;
function type() {
  let current = phrases[phraseIndex];
  textElement.textContent = current.substring(0, letterIndex += isDeleting ? -1 : 1);
  if (!isDeleting && letterIndex === current.length) isDeleting = true, setTimeout(type, 1500);
  else if (isDeleting && letterIndex === 0) isDeleting = false, phraseIndex = (phraseIndex + 1) % phrases.length, setTimeout(type, 300);
  else setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener("DOMContentLoaded", type);

// ✅ Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const inc = Math.ceil(target / speed);
    if (current < target) {
      counter.innerText = current + inc;
      setTimeout(update, 20);
    } else counter.innerText = target;
  };
  const onScroll = () => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) update(), window.removeEventListener("scroll", onScroll);
  };
  window.addEventListener("scroll", onScroll);
});

// ✅ Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-progress-bar");
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollProgress) scrollProgress.style.width = scrolled + "%";
});

// ✅ Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('dark-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const userPref = localStorage.getItem('theme');
  if (userPref === 'dark' || (!userPref && prefersDark)) {
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀️ Light Mode';
  }
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
  }
});

// ✅ barba.js Transitions
barba.init({
  transitions: [{
    name: 'fade',
    leave(data) {
      return gsap.to(data.current.container, { opacity: 0, duration: 0.5 });
    },
    enter(data) {
      return gsap.from(data.next.container, { opacity: 0, duration: 0.5 });
    }
  }]
});

// ✅ Service Worker Registration
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(reg => console.log('SW registered:', reg.scope))
    .catch(err => console.error('SW registration failed:', err));
}
