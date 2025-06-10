 const openPopup = document.getElementById('openPopup');
  const closePopup = document.getElementById('closePopup');
  const popup = document.getElementById('popup');
  const sendBtn = document.getElementById('sendSuggestion');
  const suggestionText = document.getElementById('suggestionText');
  const successMessage = document.getElementById('successMessage');

  openPopup.addEventListener('click', () => {
    popup.classList.remove('hidden');
    successMessage.classList.add('hidden');
  });

  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
    suggestionText.value = "";
    successMessage.classList.add('hidden');
  });

  sendBtn.addEventListener('click', () => {
    const suggestion = suggestionText.value.trim();
    if (suggestion) {
      successMessage.classList.remove('hidden');

      // Opcional: Cierra el popup tras 2 segundos
      setTimeout(() => {
        popup.classList.add('hidden');
        suggestionText.value = "";
        successMessage.classList.add('hidden');
      }, 2000);
    } else {
      successMessage.classList.add('hidden');
    }
  });
 
 // Botones eventos
 document.querySelectorAll(".vote-button").forEach(button => {
    button.addEventListener("click", () => {
      const span = button.querySelector("span");
      const isActive = button.classList.contains("active");

      if (isActive) {
        span.textContent = "0";
        button.classList.remove("active");
      } else {
        span.textContent = "1";
        button.classList.add("active");
      }
    });
  });