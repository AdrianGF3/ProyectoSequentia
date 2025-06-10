const messagesContainer = document.getElementById('messages');
const form = document.getElementById('messageForm');
const input = document.getElementById('inputMessage');

// Función para crear un mensaje en el DOM
function addMessage(text, isSent, time) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('max-w-[70%]', 'p-3', 'rounded-xl', 'break-words');
  
  if (isSent) {
    messageDiv.classList.add('bg-yellow-400', 'text-gray-900', 'rounded-br-none', 'self-end');
  } else {
    messageDiv.classList.add('bg-gray-300', 'text-gray-900', 'rounded-bl-none', 'self-start');
  }

  // Contenido del mensaje
  messageDiv.innerHTML = `
    <div>${text}</div>
    <div class="text-xs text-gray-700 mt-1 text-right">${time}</div>
  `;

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // hacer scroll al final
}

// Leer mensajes guardados en localStorage y mostrarlos
function loadMessages() {
  const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  savedMessages.forEach(msg => {
    addMessage(msg.text, msg.isSent, msg.time);
  });
}

// Guardar mensajes en localStorage
function saveMessage(text, isSent, time) {
  const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  savedMessages.push({ text, isSent, time });
  localStorage.setItem('chatMessages', JSON.stringify(savedMessages));
}

// Manejar el envío del formulario
form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === '') return;

  const now = new Date();
  const time = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

  // Añadir mensaje al DOM
  addMessage(text, true, time);
  // Guardar mensaje enviado
  saveMessage(text, true, time);

  
  input.value = '';
});

// Cargar mensajes cuando se carga la página
window.addEventListener('load', loadMessages);
