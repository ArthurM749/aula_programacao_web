const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
const highScore = document.querySelector("#high-score");
const bullet = document.querySelector(".Obsbullet");

const gameSound = document.querySelector('.gamesound');
const diemario = document.querySelector('.die');
const jumpMa = document.querySelector('.jumpMario');
const Obsbullet = document.querySelector('.Obsbullet');
let marioLevel = 'start'; 'beg'; 'pro'; 'fly';
const pointSound = document.querySelector('.power');


const setCookie = function (name, value, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();

  document.cookie = name + "=" + value + ";" + expires + ";SameSite=Lax;path=/";
};

const getCookie = function (name) {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  name = name + "=";

  console.log(ca);
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
};

// ========SOM DE FUNDO DO JOGO==============
var audio = document.getElementById("backgroundMusic");
audio.play();
//==========================================

var scoreValue = -1;
var highScoreValue = getCookie("high-score");

highScore.textContent = getCookie("high-score");

const jump = () => {
  if (gameOver.style.display === "block" || mario.classList.contains("jump")) {
    return;
  }

  mario.classList.add("jump");
  //======================SOM DE PULAR ==================================

  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      const audio = document.getElementById("soundJump");

      if (!audio.classList.contains("playng")) {
        audio.classList.add("playng");
        audio.currentTime = 0;
        audio.play();
        audio.classList.remove("playng");
      }
    }


    //////////
    if (scoreValue < 5 && marioLevel !== 'starter') {
        mario.src = 'images/mario-starter.gif';
        marioLevel = 'starter';
        
        
    } else if (scoreValue >= 5 && scoreValue < 10 && marioLevel !== 'beginner') {
        mario.src = './images/mario-beginner.gif';
        marioLevel = 'beginner';
    } else if (scoreValue >= 10 && marioLevel !== 'pro') {
        mario.src = './images/mario-pro.gif';
        marioLevel = 'pro';
    }
    if (marioLevel === 'pro') {
        mario.src = './images/mario-flying.gif';
        setTimeout(() => {
            mario.src = './images/mario-pro.gif';
        }, 500);
    }
    if (scoreValue === 5 ) {
    pointSound.currentTime = 0;
    pointSound.play();
    }
    if (scoreValue === 10) {
    pointSound.currentTime = 0;
    pointSound.play();
    }

  });

  scoreValue += 1;
  score.textContent = scoreValue;

  if (highScoreValue < scoreValue) {
    setCookie("high-score", scoreValue, 365);
    highScoreValue = scoreValue;
    highScore.textContent = highScoreValue;
  }

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const waitingFailure = () => {
  const pipePosition = pipe.offsetLeft;
  const bulletPosition = bullet.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
  const bulletTop = +window.getComputedStyle(bullet).top.replace("px", ""); // Captura a posição vertical do bullet
  const bulletHeight = bullet.offsetHeight; // Captura a altura do bullet
  const bulletWidth = bullet.offsetWidth; // Captura a largura do bullet
  const backgroundMusic = document.getElementById("backgroundMusic");

  if (
    (pipePosition <= 120 && pipePosition > 0 && marioPosition < 112) ||
    (bulletPosition <= 120 && bulletPosition > 0 && 
     marioPosition + 150 > bulletTop && // Verifica se o Mario está dentro da altura do bullet
     marioPosition < bulletTop + bulletHeight && // Verifica se o Mario está dentro da altura do bullet
     bulletPosition <= 120 && bulletPosition + bulletWidth > 0) // Verifica se o Mario está dentro da largura do bullet
  ) {
    backgroundMusic.pause(); // Pausa a música de fundo
    backgroundMusic.currentTime = 0; // Reinicia a música para o início

    mario.style.animationPlayState = "paused";
    mario.style.bottom = `${marioPosition}px`;

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    bullet.style.animationPlayState = "paused";
    bullet.style.left = `${bulletPosition}px`;

    gameOver.style.display = "block";

    const soundMarioDie = document.getElementById("soundMarioDie");

    if (!soundMarioDie.classList.contains("playng")) {
      soundMarioDie.classList.add("playng"); // Corrige o método para adicionar a classe
      soundMarioDie.currentTime = 0; // Reinicia o áudio antes de tocar
      soundMarioDie.play().catch((error) => {
        console.error("Erro ao reproduzir o som de morte do Mario:", error);
      });
      soundMarioDie.classList.remove("playng");
    }

    clearInterval(loop);

    document.removeEventListener("keydown", jump);
    document.removeEventListener("touchstart", jump);
  }
};

var loop = setInterval(waitingFailure, 10);

const restartGame = function () {
  gameOver.style.display = "none";

  mario.style.animationPlayState = "running";
  mario.src = "./images/mario.gif";
  mario.style.width = "150px";
  mario.style.marginLeft = "0";
  mario.style.bottom = "0";
  
  bullet.style.animationPlayState = "running";
  bullet.style.left = "auto";

  pipe.style.left = "auto";
  pipe.style.animation = "pipe-animation 1s infinite linear";

  // Reiniciar a música de fundo ao recomeçar o jogo
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.currentTime = 0; // Reinicia a música do início
  backgroundMusic.play().catch((error) => {
    console.error("Erro ao reproduzir a música de fundo:", error);
  });

  scoreValue = 0;
  score.textContent = scoreValue;

  document.addEventListener("keydown", jump);
  document.addEventListener("touchstart", jump);

  loop = setInterval(waitingFailure, 10);
};

document.querySelector(".retry").addEventListener("click", restartGame);
document.querySelector(".game-board").addEventListener("keydown", jump);
document.querySelector(".game-board").addEventListener("touchstart", jump);

