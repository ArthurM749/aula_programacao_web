const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOver = document.querySelector(".game-over");
const score = document.querySelector(".score");
const highScore = document.querySelector("#high-score");
const bullet = document.querySelector(".Obsbullet");
const pointSound = document.querySelector('.power');

let marioLevel = 'start'; 'beg'; 'pro'; 'fly';

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
  
  // Obtendo as dimensões reais do Mario e do Bullet
  const marioRect = mario.getBoundingClientRect();
  const bulletRect = bullet.getBoundingClientRect();
  
  // Ajustando a área de colisão com base nas dimensões reais
  const bulletCollision = 
    marioRect.right > bulletRect.left + 30 && // Margem de 30px para colisão mais precisa
    marioRect.left < bulletRect.right - 30 && // Margem de 30px para colisão mais precisa
    marioRect.bottom > bulletRect.top + 20 && // Margem de 20px para colisão mais precisa
    marioRect.top < bulletRect.bottom - 20;   // Margem de 20px para colisão mais precisa

  const pipeCollision = pipePosition <= 120 && pipePosition > 0 && marioPosition < 112;

  if (pipeCollision || bulletCollision) {
    const backgroundMusic = document.getElementById("backgroundMusic");
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
      soundMarioDie.classList.add("playng"); 
      soundMarioDie.currentTime = 0; 
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

// =================SPAWNA O BULLET========================================
const spawnBullet = () => {
  const randomDelay = Math.random() * 7000 + 3000; // Delay aleatório entre 3 e 10 segundos

  setTimeout(() => {
    bullet.style.display = "block"; 
    bullet.style.animation = "bullet-animation 1.4s infinite linear";

    setTimeout(() => {
      bullet.style.animation = "none"; 
      bullet.style.display = "none"; 
    }, 1400); 

    spawnBullet(); 
  }, randomDelay);
};

// Inicia o ciclo de aparição do bullet após 5 segundos do início do jogo
const startBulletSpawn = () => {
  bullet.style.display = "none";
  setTimeout(() => {
    spawnBullet();
  }, 5000); // 5 segundos de delay inicial
};

// Chamando startBulletSpawn ao invés de spawnBullet diretamente
startBulletSpawn();
//================================================================

// ===========SPAWNA A TURTLE====================
const spawnTurtle = () => {
  const randomDelay = Math.random() * 5000 + 3000; // Delay aleatório entre 3 e 8 segundos

  setTimeout(() => {
    const shouldShowTurtle = Math.random() < 0.2; 

    if (shouldShowTurtle) {
      pipe.src = './images/turtle.gif'; 
    } else {
      pipe.src = './images/pipe.png'; 
    }

    spawnTurtle();
  }, randomDelay);
};

spawnTurtle();
//=====================================================

const restartGame = function () {
  gameOver.style.display = "none";

  mario.style.animationPlayState = "running";
  mario.src = "./images/mario.gif";
  mario.style.width = "150px";
  mario.style.marginLeft = "0";
  mario.style.bottom = "0";
  
  bullet.style.animationPlayState = "running";
  bullet.style.display = "none"; // Esconde o bullet
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
  
  // Reinicia o ciclo do bullet com delay
  startBulletSpawn();
};

document.querySelector(".retry").addEventListener("click", restartGame);
document.querySelector(".game-board").addEventListener("keydown", jump);
document.querySelector(".game-board").addEventListener("touchstart", jump);

