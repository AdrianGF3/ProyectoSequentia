document.querySelectorAll(".flower-button").forEach(button => {
  button.addEventListener("click", function () {
    if (document.getElementById("flowerPopup")) return;

    const popup = document.createElement("div");
    popup.id = "flowerPopup";
    popup.className = "fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center";

    popup.innerHTML = `
      <div class="bg-white p-6 rounded-lg max-w-4xl w-full">
        <div class="flex justify-between mb-4">
          <div class="flex space-x-2 justify-center w-full">
            <button id="digitalBtn" class="px-4 py-2 border-2 text-cyan-800 border-gray-300 rounded-lg font-semibold bg-gray-200">Flores digitales</button>
            <button id="naturalBtn" class="px-4 py-2 text-cyan-800 rounded-lg font-semibold">Flores naturales</button>
          </div>
          <button id="closePopup" class="text-red-600 font-bold text-xl ml-auto">&times;</button>
        </div>
        <div id="flowerContent" class="grid grid-cols-3 gap-4">
          ${getDigitalFlowers()}
        </div>
        <div class="text-center mt-6">
          <button class="bg-gray-200 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow inline-flex items-center">
            🛒 Comprar
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(popup);

    document.getElementById("closePopup").addEventListener("click", () => {
      popup.remove();
    });

    // Botones para alternar contenido
    document.getElementById("digitalBtn").addEventListener("click", () => {
      document.getElementById("flowerContent").innerHTML = getDigitalFlowers();
      updateActiveButton("digital");
    });

    document.getElementById("naturalBtn").addEventListener("click", () => {
      document.getElementById("flowerContent").innerHTML = getNaturalFlowers();
      updateActiveButton("natural");
    });

    function updateActiveButton(type) {
      const digitalBtn = document.getElementById("digitalBtn");
      const naturalBtn = document.getElementById("naturalBtn");
      if (type === "digital") {
        digitalBtn.classList.add("bg-gray-200", "border-2");
        naturalBtn.classList.remove("bg-gray-200", "border-2");
      } else {
        naturalBtn.classList.add("bg-gray-200", "border-2");
        digitalBtn.classList.remove("bg-gray-200", "border-2");
      }
    }
  });
});

// Flores digitales
function getDigitalFlowers() {
  const flowers = [
    { name: "Rosa Roja", img: "img/flor-1.png", desc: "Amor, admiración y respeto", color: "text-cyan-700" },
    { name: "Rosa Blanca", img: "img/flor-2.png", desc: "Pureza, inocencia, perpetuidad", color: "text-cyan-700" },
    { name: "Lirio de agua", img: "img/flor-3.png", desc: "Iluminación, pureza, condolencias", color: "text-cyan-700" },
    { name: "Cempasúchil", img: "img/flor-4.png", desc: "Marca la senda de los difuntos…", color: "text-cyan-700" },
    { name: "Girasol", img: "img/flor-5.png", desc: "Admiración, vitalidad, energía", color: "text-cyan-700" },
    { name: "Tulipán", img: "img/flor-6.png", desc: "Amor, renacimiento, fe, confianza", color: "text-cyan-700" },
  ];

  return flowers.map(f => `
    <div class="border-2 border-gray-300 hover:border-yellow-500 rounded-lg p-4 text-center">
      <img src="${f.img}" alt="${f.name}" class="mx-auto mb-2 w-full h-auto object-cover rounded-md">
      <h3 class="text-lg font-semibold ${f.color} rounded-lg py-1 px-2 mt-2">${f.name}</h3>
      <p class="text-sm text-gray-600">${f.desc}</p>
      <p class="font-bold text-yellow-400 mt-1 border-t-2 border-gray-300 pt-2">2,99€</p>
    </div>
  `).join('');
}

// Flores naturales
function getNaturalFlowers() {
  const flowers = [
    { name: "Ramo Rosas Rojas", img: "img/01. Ramo rosas rojas AdobeStock_48802162.jpeg", desc: "Encanto, distinción y amor", color: "text-green-700" },
    { name: "Ramo Rosas Blancas", img: "img/02. Ramo rosas blancas AdobeStock_412809301.jpeg", desc: "Belleza exótica y elegancia", color: "text-green-700" },
    { name: "Ramo variado", img: "img/03. Ramo variado AdobeStock_129017192.jpeg", desc: "Inocencia, sencillez, alegría", color: "text-green-700" },
    { name: "Centro Rosas rojas", img: "img/04. Centro rosas rojas rec AdobeStock_234582600.jpeg", desc: "Tranquilidad, limpieza, amor", color: "text-green-700" },
    { name: "Centro Rosas blancas", img: "img/05. Centro rosas blancas AdobeStock_42680450.jpeg", desc: "Sensualidad, dulzura, espiritualidad", color: "text-green-700" },
    { name: "Centro variado", img: "img/06. Centro variado AdobeStock_130640932.jpeg", desc: "Prosperidad, romance, honor", color: "text-green-700" },
  ];

  return flowers.map(f => `
    <div class="border-2 border-gray-300 hover:border-yellow-500 rounded-lg p-4 text-center">
      <img src="${f.img}" alt="${f.name}" class="mx-auto mb-2 w-full h-auto object-cover rounded-md">
      <h3 class="text-lg font-semibold ${f.color} rounded-lg py-1 px-2 mt-2">${f.name}</h3>
      <p class="text-sm text-gray-600">${f.desc}</p>
      <p class="font-bold text-yellow-400 mt-1 border-t-2 border-gray-300 pt-2">3,99€</p>
    </div>
  `).join('');
}
