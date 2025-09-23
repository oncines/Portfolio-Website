// navbar toggle and active link highlighting
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section"); // all sections in index.html

  // Toggle sidebar
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


  // Smart active link on scroll
  window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120; // adjust offset for navbar height
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        links.forEach(link => link.classList.remove("active"));
    document.querySelector(`.nav-link[href="#${id}"]`).classList.add("active");
      }
    });
  });

  // Close sidebar after clicking a link (mobile)
  links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
  }); 

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});


// Create the back-to-top button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.setAttribute('aria-label', 'Back to Top');

// Add SVG icon inside the button
backToTopBtn.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
  <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8-8 8z"/>
</svg>
`;

document.body.appendChild(backToTopBtn);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight * 0.4) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Scroll smoothly to top when clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Automatically set current year
document.getElementById('year').textContent = new Date().getFullYear();






