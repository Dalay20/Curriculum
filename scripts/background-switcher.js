const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.remove('fondo-hueso', 'fondo-azul', 'fondo-blanco');

      if (entry.target.classList.contains('grupo-hueso')) {
        document.body.classList.add('fondo-hueso');
      } else if (entry.target.classList.contains('grupo-azul')) {
        document.body.classList.add('fondo-azul');
      } else if (entry.target.classList.contains('grupo-blanco')) {
        document.body.classList.add('fondo-blanco');
      }
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));
