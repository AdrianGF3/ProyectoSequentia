function openPopup() {
  // Crear el contenedor principal del popup
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.className = 'fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50';
  popup.style.display = 'flex'; // para asegurarnos que se vea
  popup.addEventListener('click', closePopup);

  // Contenedor principal del contenido
  const content = document.createElement('div');
  content.className = 'relative bg-white rounded-xl max-w-5xl w-full flex shadow-lg z-10 overflow-hidden';
  content.addEventListener('click', e => e.stopPropagation()); // que no cierre al click dentro

  // Div izquierdo (contenido)
  const left = document.createElement('div');
  left.className = 'p-6 w-full md:w-1/2 flex flex-col text-left text-gray-900';
  left.innerHTML = `
   <div class="flex justify-between items-start mb-3">
      <div>
        <h2 class="text-2xl font-semibold text-blue-900">Título</h2>
        <h3 class="text-lg font-semibold text-blue-700">Subtítulo</h3>
      </div>
      <div class="flex flex-col items-end">
        <span class="text-sm text-gray-500 mb-2">00/00/0000</span>
        <div class="flex items-center gap-3">
          <span class="italic text-blue-700 font-semibold">@hanna_ruiz</span>
          <img src="img/perfilPrueba.jpeg" alt="Usuario" class="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </div>
    <p class="text-sm mb-4 leading-tight text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p class="text-sm leading-tight text-gray-600">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <hr class="my-5 border-gray-300" />
    <div class="space-y-4 text-xs">
      <div class="flex items-start gap-3">
        <img src="img/perfilPrueba.jpeg" alt="@guille.iban" class="w-8 h-8 rounded-full object-cover" />
        <p><span class="font-semibold">@guille.iban</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="flex items-start gap-3">
        <img src="img/perfilPrueba.jpeg" alt="@pere.navas84" class="w-8 h-8 rounded-full object-cover" />
        <p><span class="font-semibold">@pere.navas84</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="flex items-start gap-3">
        <img src="img/perfilPrueba.jpeg" alt="@joana.guti12" class="w-8 h-8 rounded-full object-cover" />
        <p><span class="font-semibold">@joana.guti12</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
    <div class="mt-auto flex items-center gap-6 py-4 border-t border-gray-300 text-gray-600 text-sm">
      <button class="flex items-center gap-1 hover:text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-suit-heart" viewBox="0 0 16 16">
          <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
        </svg>
        <span class="text-black">0</span>
      </button>
      <button class="flex items-center gap-1 hover:text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-activity" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
        </svg>
        <span class="text-black">0</span>
      </button>
      <button class="flex items-center gap-1 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-flower2" viewBox="0 0 16 16">
          <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4m3-12q0 .11-.03.247c-.544.241-1.091.638-1.598 1.084A3 3 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1 1 0 0 1 5 4a3 3 0 0 1 6 0m-.812 6.052A3 3 0 0 0 11 8a3 3 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a7 7 0 0 1-.647-.487m-3.56.617a3 3 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084q.03.137.03.247a3 3 0 1 1-6 0q0-.11.03-.247c.544-.242 1.091-.638 1.598-1.084m-.816-4.721A3 3 0 0 0 5 8c0 .794.308 1.516.812 2.052a7 7 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
        </svg>
        <span class="text-black">0</span>
      </button>
      <div class="flex rounded-full border border-gray-300 overflow-hidden w-full max-w-md">
        <input type="text" placeholder="Enviar un comentario..." 
          class="flex-grow px-4 py-2 text-sm text-gray-600 focus:outline-none"/>
        <button class="text-blue-800 font-semibold px-4 py-2 hover:text-blue-950 ">
          Publicar
        </button>
      </div>
    </div>
  `;

  // Div derecho (imagen)
  const right = document.createElement('div');
  right.className = 'w-full md:w-1/2';
  const img = document.createElement('img');
  img.src = 'img/albert_Einstein.jpg';
  img.alt = 'Imagen ampliada';
  img.className = 'w-full h-full object-cover';
  img.style.display = 'block';
  right.appendChild(img);

  // Añadir al content
  content.appendChild(left);
  content.appendChild(right);


// Añadir content al popup
popup.appendChild(content);

// Añadir el popup al body
document.body.appendChild(popup);

// Deshabilitar scroll del body mientras el popup está abierto
document.body.style.overflow = 'hidden';
}

function closePopup() {
const popup = document.getElementById('popup');
if (popup) {
popup.remove();
// Volver a habilitar el scroll
document.body.style.overflow = 'auto';
}
}