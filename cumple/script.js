const btn = document.getElementById("btn");
const message = document.getElementById("message");
const title = document.getElementById("title");
const photo = document.getElementById("photo");
const dedication = document.getElementById("dedication");
const music = document.getElementById("music");

title.classList.add("blink-soft");

const texto = "🎉 Feliz cumpleaños Dani 🎂";

const textoDedicatoria = "Dulce luz que llegó al mundo para alegrarlo. " +
  "Amor que se siente en cada palabra y sonrisa. " +
  "Nace hoy un nuevo capítulo lleno de esperanza. " +
  "Inspiras a quienes tenemos la fortuna de conocerte. " +
  "Eres motivo de gratitud, alegría y cariño sincero. " +
  "Lates fuerte en cada recuerdo bonito que dejas." +
  "Agradecemos tu vida todos los días. ✨";

// Letras iniciales a resaltar (rosa)
const iniciales = ["D", "A", "N", "I", "E", "L", "A"];

let index = 0;
let indexDed = 0;

// Escribe el texto principal (Feliz cumpleaños)
function escribirTexto() {
  if (index < texto.length) {
    message.textContent += texto.charAt(index);
    index++;
    setTimeout(escribirTexto, 85);
  }
}

// Escribe la dedicatoria de corrido y resalta iniciales
function escribirDedicatoria() {
  if (indexDed < textoDedicatoria.length) {
    let char = textoDedicatoria.charAt(indexDed);

    // Si es una inicial a resaltar
    if (iniciales.includes(char)) {
      dedication.innerHTML += `<span class="acrostic-letter">${char}</span>`;
    } else {
      dedication.innerHTML += char;
    }

    indexDed++;
    setTimeout(escribirDedicatoria, 35); // velocidad de escritura
  }
}

btn.addEventListener("click", () => {
  // Ocultar intro
  title.style.display = "none";
  btn.style.display = "none";

  // Mostrar texto principal arriba
  message.classList.remove("hidden");
  message.classList.add("top-message", "show-message");
  message.textContent = "";
  index = 0;
  escribirTexto();

  // Mostrar foto
  photo.classList.remove("hidden");
  photo.classList.add("fade-in");

  // Mostrar dedicatoria debajo
  dedication.classList.remove("hidden");
  dedication.innerHTML = "";
  indexDed = 0;

  // Espera a que termine el texto principal antes de empezar la dedicatoria
  setTimeout(() => {
    escribirDedicatoria();
  }, texto.length * 85 + 300);

  // Música
  music.volume = 0.5;
  music.play();

  // Confetti
  confetti({
    particleCount: 250,
    spread: 120,
    origin: { y: 0.6 }
  });
});