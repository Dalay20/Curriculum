const menuToggle = document.getElementById('menu-toggle');
const floatingMenu = document.getElementById('floating-menu');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  floatingMenu.classList.toggle('show');
});

// Seleccionamos todos los enlaces dentro del menú flotante
const menuLinks = floatingMenu.querySelectorAll('a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Al hacer clic en un enlace, quitamos las clases para cerrar el menú
    menuToggle.classList.remove('active');
    floatingMenu.classList.remove('show');
  });
});
