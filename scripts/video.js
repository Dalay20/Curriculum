document.addEventListener('DOMContentLoaded', () => {
  const videoWrapper = document.getElementById('video-wrapper');
  const videoSection = document.getElementById('video-section');
  const closeButton = document.getElementById('close-button');

  let isManuallyClosed = false;

  window.addEventListener('scroll', () => {
    const rect = videoSection.getBoundingClientRect();

    // Si el usuario hace scroll hacia abajo
    if (rect.bottom < 0) {
      if (!isManuallyClosed) {
        videoWrapper.classList.add('fixed');
        videoWrapper.style.display = 'block';
      }
    } else {
      // Al volver arriba, siempre mostramos el video en su posición original
      videoWrapper.classList.remove('fixed');
      videoWrapper.style.display = 'block';
      isManuallyClosed = false;
    }
  });

  closeButton.addEventListener('click', () => {
    // Solo ocultamos visualmente, no borramos el src
    videoWrapper.style.display = 'none';
    isManuallyClosed = true;
  });
});
