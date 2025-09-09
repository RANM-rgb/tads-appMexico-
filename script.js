// Función para convertir a HEX
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b].map(x => {
      const hex = parseInt(x).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("")
  );
}

// Inicializar colores base
let verdeBase = { r: 0, g: 153, b: 0 };
let rojoBase = { r: 144, g: 0, b: 0 };

// Referencias
const sliderVerde = document.getElementById("slider-verde");
const sliderRojo = document.getElementById("slider-rojo");
const franjaVerde = document.getElementById("franja-verde");
const franjaRojo = document.getElementById("franja-rojo");
const hexVerde = document.getElementById("hex-verde");
const hexRojo = document.getElementById("hex-rojo");
const resetBtn = document.getElementById("resetBtn");

// Actualizar franja verde
sliderVerde.addEventListener("input", () => {
  const g = sliderVerde.value;
  const color = `rgb(${verdeBase.r}, ${g}, ${verdeBase.b})`;
  franjaVerde.style.backgroundColor = color;
  hexVerde.textContent = rgbToHex(verdeBase.r, g, verdeBase.b);
});

// Actualizar franja roja
sliderRojo.addEventListener("input", () => {
  const r = sliderRojo.value;
  const color = `rgb(${r}, ${rojoBase.g}, ${rojoBase.b})`;
  franjaRojo.style.backgroundColor = color;
  hexRojo.textContent = rgbToHex(r, rojoBase.g, rojoBase.b);
});

// Resetear valores
resetBtn.addEventListener("click", () => {
  sliderVerde.value = 153;
  sliderRojo.value = 144;

  franjaVerde.style.backgroundColor = `rgb(0,153,0)`;
  franjaRojo.style.backgroundColor = `rgb(144,0,0)`;

  hexVerde.textContent = "#009900";
  hexRojo.textContent = "#900000";
});
