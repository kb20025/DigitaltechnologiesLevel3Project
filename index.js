document.addEventListener("DOMContentLoaded", function () {
  const ctaBtn = document.querySelector('.cta-btn');
  
  ctaBtn.addEventListener('mouseover', () => {
    ctaBtn.classList.add('pulse');
  });
  
  ctaBtn.addEventListener('mouseout', () => {
    ctaBtn.classList.remove('pulse');
  });
});
