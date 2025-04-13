document.addEventListener('DOMContentLoaded', function() {
  // Animation sur les cartes de service au survol
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.08)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  // Suppression du welcome overlay après son animation
  setTimeout(() => {
    const welcome = document.getElementById('welcome');
    if (welcome) {
      welcome.parentNode.removeChild(welcome);
    }
  }, 5000);
});
