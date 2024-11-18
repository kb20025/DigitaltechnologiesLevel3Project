document.addEventListener("DOMContentLoaded", function () {
  const ctaBtn = document.querySelector('.cta-btn');
  
  ctaBtn.addEventListener('mouseover', () => {
    ctaBtn.classList.add('pulse');
  });
  
  ctaBtn.addEventListener('mouseout', () => {
    ctaBtn.classList.remove('pulse');
  });
});
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
    navbar.classList.toggle('open'); 
});

