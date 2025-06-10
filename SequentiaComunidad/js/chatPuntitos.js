 // Seleccionamos todos los chat-items
  const chatItems = document.querySelectorAll('.chat-item');

  chatItems.forEach(item => {
    const btn = item.querySelector('.options-btn');
    const menu = item.querySelector('.options-menu');

    btn.addEventListener('click', e => {
      e.stopPropagation();

      // Cerrar otros menús abiertos
      document.querySelectorAll('.options-menu').forEach(m => {
        if (m !== menu) m.classList.add('hidden');
      });

      menu.classList.toggle('hidden');
    });
  });

  // Cerrar menú si clic fuera
  document.addEventListener('click', () => {
    document.querySelectorAll('.options-menu').forEach(menu => menu.classList.add('hidden'));
  });