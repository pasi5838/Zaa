
const levels = [
  { answer: "ulat", image: "images/1.jpg" },
  { answer: "semut", image: "images/2.jpg" },
  { answer: "kucing", image: "images/3.jpg" },
  { answer: "ular", image: "images/4.jpg" },
  { answer: "gajah", image: "images/5.jpg" },
  { answer: "paus", image: "images/6.jpg" },
  { answer: "kuda laut", image: "images/7.jpg" },
  { answer: "unta", image: "images/8.jpg" },
  { answer: "lalat", image: "images/9.jpg" },
  { answer: "landak", image: "images/10.jpg" },
  { answer: "kepiting", image: "images/11.jpg" },
  { answer: "kecoa", image: "images/12.jpg" },
  { answer: "jangkrik", image: "images/13.jpg" },
  { answer: "kelelawar", image: "images/14.jpg" },
  { answer: "hiu", image: "images/15.jpg" },
  { answer: "bebek", image: "images/16.jpg" },
  { answer: "rusa", image: "images/17.jpg" },
  { answer: "tupai", image: "images/18.jpg" },
  { answer: "katak", image: "images/19.jpg" },
  { answer: "tikus", image: "images/20.jpg" },
  { answer: "kura kura", image: "images/21.jpg" },
  { answer: "buaya", image: "images/22.jpg" },
  { answer: "jerapah", image: "images/23.jpg" },
  { answer: "panda", image: "images/24.jpg" },
  { answer: "zebra", image: "images/25.jpg" },
  { answer: "harimau", image: "images/26.jpg" },
  { answer: "badak", image: "images/27.jpg" },
  { answer: "belalang", image: "images/28.jpg" },
  { answer: "laba laba", image: "images/29.jpg" },
  { answer: "ayam", image: "images/30.jpg" }
];

let currentLevel = 0;
let typedAnswer = "";

function loadLevel() {
  const level = levels[currentLevel];
  document.getElementById("animal-image").src = level.image;
  document.getElementById("level").textContent = "Level " + (currentLevel + 1);
  document.getElementById("answer-box").textContent = typedAnswer;
  generateLetters(level.answer);
}

function generateLetters(answer) {
  const letterContainer = document.getElementById("letters");
  letterContainer.innerHTML = "";
  const unique = Array.from(new Set(answer.replaceAll(" ", "").split("")));
  const randomLetters = [...unique];
  while (randomLetters.length < 12) {
    const char = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    randomLetters.push(char);
  }
  randomLetters.sort(() => 0.5 - Math.random());
  randomLetters.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.onclick = () => {
      typedAnswer += letter;
      document.getElementById("answer-box").textContent = typedAnswer;
    };
    letterContainer.appendChild(btn);
  });
}

document.getElementById("delete-button").onclick = () => {
  typedAnswer = typedAnswer.slice(0, -1);
  document.getElementById("answer-box").textContent = typedAnswer;
};

document.getElementById("check-button").onclick = () => {
  const correct = levels[currentLevel].answer.replaceAll(" ", "");
  if (typedAnswer.toLowerCase() === correct.toLowerCase()) {
    typedAnswer = "";
    currentLevel++;
    if (currentLevel >= levels.length) {
      document.getElementById("message").textContent = "Selamat! Kamu telah menyelesaikan semua level!";
    } else {
      loadLevel();
    }
  } else {
    document.getElementById("message").textContent = "Jawaban salah, coba lagi.";
  }
};

document.getElementById("restart-button").onclick = () => {
  currentLevel = 0;
  typedAnswer = "";
  loadLevel();
  document.getElementById("message").textContent = "";
};

window.onload = loadLevel;
