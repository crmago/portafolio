document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');

  // Escucha el fin de la animación de expansión
  overlay.addEventListener('animationend', () => {
    overlay.classList.add('finished'); // Marca el fin de la animación
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const typingEffect = document.querySelector('.typing-effect');
  typingEffect.classList.add('typing');
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active'); // Alterna la clase 'active' del menú
  });
});