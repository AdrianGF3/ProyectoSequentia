document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', e => {
    // Botón rojo (like-button)
    if (e.target.closest('.like-button')) {
      const button = e.target.closest('.like-button');
      const span = button.querySelector('span');
      let count = Number(span.textContent);
      const isActive = button.dataset.active === 'true';

      if (isActive) {
        span.textContent = count - 1;
        button.dataset.active = 'false';
      } else {
        span.textContent = count + 1;
        button.dataset.active = 'true';
      }

      // No cambia color
    }

    // Botón azul (activity-button)
    if (e.target.closest('.activity-button')) {
      const button = e.target.closest('.activity-button');
      const span = button.querySelector('span');
      let count = Number(span.textContent);
      const isActive = button.dataset.active === 'true';

      if (isActive) {
        span.textContent = count - 1;
        button.dataset.active = 'false';
      } else {
        span.textContent = count + 1;
        button.dataset.active = 'true';
      }

      // Tampoco cambia nada visual
    }
  });
});
