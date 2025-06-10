const publishButton = document.getElementById('publishObituary');
const esquelasList = document.getElementById('esquelasList');
const obituaryImageInput = document.getElementById('obituaryImage');

function renderEsquela({ title, subtitle, text, imageUrl, date }) {
  const newEsquela = document.createElement('div');
  newEsquela.classList.add(
    'flex', 'bg-white', 'ml-5', 'mr-8', 'border',
    'border-gray-200', 'rounded-2xl', 'shadow-md', 'p-6', 'space-x-6'
  );

  newEsquela.innerHTML = `
    <div class="flex-1">
      <div class="flex justify-between items-start">
        <h1 class="text-2xl font-bold text-black mb-2">${title}</h1>
        <span class="text-sm text-gray-500">${date}</span>
      </div>
      <div class="flex justify-between items-start">
        <h2 class="text-lg text-gray-600 font-semibold mb-4">${subtitle}</h2>
        <span class="text-sm text-gray-400">@user</span>
      </div>
      <p class="text-gray-600 text-sm mt-2">${text}</p>

        <div class="flex items-center space-x-6 text-gray-400 text-sm mt-4">
          <!-- Botón Like -->
          <button class="like-button flex items-center space-x-1 p-1 rounded transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-suit-heart" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
            </svg>
            <span class="text-black">0</span>
          </button>
        
          <!-- Botón Activity -->
          <button class="activity-button flex items-center space-x-1 p-1 rounded transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-activity" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
            </svg>
            <span class="text-black">0</span>
          </button>
        
          <!-- Botón Flower -->
          <button id="flower-button-1" class="flower-button flex items-center space-x-1 p-1 rounded transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-flower2" viewBox="0 0 16 16">
              <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
            </svg>
            <span class="text-black">0</span>
          </button>
        </div>
    </div>
    <div id="popup-img" onclick="openPopup()" class="max-w-[200px] w-full  flex-shrink-0 rounded-2xl overflow-hidden">
    ${imageUrl ? `
      
        <img src="${imageUrl}" alt="Imagen" class="w-full h-full object-cover " />
      </div> 
       </div>
    ` : ''}
  `;


  esquelasList.prepend(newEsquela);

  // Volver a asignar los listeners al nuevo botón de flor
const flowerButtons = newEsquela.querySelectorAll('.flower-button-1');
flowerButtons.forEach(btn => {
  btn.addEventListener('click', showFlowerPopup);
});

}


// Guardar en localStorage
function saveEsquela(esquelaData) {
  const esquelas = JSON.parse(localStorage.getItem('esquelas')) || [];
  esquelas.unshift(esquelaData); // Agrega al principio
  localStorage.setItem('esquelas', JSON.stringify(esquelas));
}

// Publicar nueva esquela
publishButton.addEventListener('click', () => {
  const title = document.getElementById('obituaryTitle').value.trim();
  const subtitle = document.getElementById('obituarySubtitle').value.trim();
  const text = document.getElementById('obituaryText').value.trim();
  const file = obituaryImageInput.files[0];
  const date = new Date().toLocaleDateString();

  if (!title || !subtitle || !text) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      const esquelaData = { title, subtitle, text, imageUrl, date };
      renderEsquela(esquelaData);
      saveEsquela(esquelaData);
    };
    reader.readAsDataURL(file);
  } else {
    const esquelaData = { title, subtitle, text, imageUrl: null, date };
    renderEsquela(esquelaData);
    saveEsquela(esquelaData);
  }

  // Limpiar formulario y cerrar popup
  document.getElementById('obituaryTitle').value = '';
  document.getElementById('obituarySubtitle').value = '';
  document.getElementById('obituaryText').value = '';
  obituaryImageInput.value = '';
  document.getElementById('imagePreview').classList.add('hidden');
  document.getElementById('obituaryPopup').classList.add('hidden');
});

// Al cargar la página, recuperar esquelas guardadas
window.addEventListener('DOMContentLoaded', () => {
  const esquelas = JSON.parse(localStorage.getItem('esquelas')) || [];
  esquelas.forEach(esquela => renderEsquela(esquela));
});
