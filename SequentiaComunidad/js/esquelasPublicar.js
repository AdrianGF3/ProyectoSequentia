// Botones y elementos
const openPopupBtn = document.getElementById('openObituaryPopup');
const closePopupBtn = document.getElementById('closeObituaryPopup');
const popup = document.getElementById('obituaryPopup');
const imageLabel = document.getElementById('imageLabel');
const imageInput = document.getElementById('obituaryImage');
const imagePreview = document.getElementById('imagePreview');
const publishBtn = document.getElementById('publishObituary');

// Abrir el popup
openPopupBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

// Cerrar el popup
closePopupBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  resetForm(); // Limpia al cerrar
});

// Mostrar la imagen seleccionada y ocultar el texto del botón
imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imagePreview.src = e.target.result;
      imagePreview.classList.remove('hidden');
      imageLabel.classList.add('hidden'); // Oculta el texto "Seleccionar imagen"
    };
    reader.readAsDataURL(file);
  }
});

// Publicar esquela con fecha
publishBtn.addEventListener('click', () => {
  const title = document.getElementById('obituaryTitle').value;
  const subtitle = document.getElementById('obituarySubtitle').value;
  const text = document.getElementById('obituaryText').value;
  const date = new Date().toLocaleDateString(); // Ej: "18/5/2025"

  // Aquí puedes crear el bloque de esquela publicado
  console.log('Esquela publicada:', {
    titulo: title,
    subtitulo: subtitle,
    texto: text,
    fecha: date
  });

  alert("Esquela publicada con fecha: " + date);

  popup.classList.add('hidden');
  resetForm(); // Limpia después de publicar
});

// Función para limpiar el formulario
function resetForm() {
  document.getElementById('obituaryTitle').value = '';
  document.getElementById('obituarySubtitle').value = '';
  document.getElementById('obituaryText').value = '';
  imageInput.value = '';
  imagePreview.src = '';
  imagePreview.classList.add('hidden');
  imageLabel.classList.remove('hidden');
}
