// Optional if you want to add custom interactions with JavaScript
document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
  });
  