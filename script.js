// Scroll reveal animations for sections
const sections = document.querySelectorAll('section');
const fadeSections = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

fadeSections.forEach(section => observer.observe(section));

// Highlight active nav link on scroll
const navLinks = document.querySelectorAll('.topnav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;

  sections.forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`.topnav a[href="#${id}"]`);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navLinks.forEach(a => a.classList.remove('active'));
      if (link) link.classList.add('active');
    }
  });
});