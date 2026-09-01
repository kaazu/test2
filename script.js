const greetings = [
  "Hello, World!",
  "こんにちは、世界!",
  "Bonjour, le monde!",
  "Hola, Mundo!",
  "你好,世界!",
];

const greetingEl = document.getElementById("greeting");
const buttonEl = document.getElementById("greet-btn");

let index = 0;

buttonEl.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  greetingEl.textContent = greetings[index];
});
