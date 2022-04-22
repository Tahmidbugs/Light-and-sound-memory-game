// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// gloval variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var tries = 3;

var timeleft;
var timer;

//sound effects initialization
var clock_sound = document.getElementById("clocktick");
var buzz_sound = document.getElementById("buzz");
var lose_sound = document.getElementById("gameover");
var win_sound = document.getElementById("gamewin");
var wrong_sound= document.getElementById("wrong");

// Generates random number between 1 and 8 and stores it in the pattern array
function patternGenerator() {
  for (let i = 1; i <= 8; i++) {
    pattern.push(Math.floor(Math.random() * 8) + 1); 
  }
}

function startGame() {
  //initialize game variables
  if(pattern.length==0)
    patternGenerator();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("timerArea").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  clock_sound.pause();
  progress = 0;
  clearInterval(timer);
  document.getElementById("time").style.backgroundColor = "#8a5180";
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timerArea").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 600.4,
  6: 356,
  7: 500,
  8: 230,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    if (i < progress) clearInterval(timer);
    //console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    if (clueHoldTime > 200) clueHoldTime -= 100;
    delay += clueHoldTime;
    delay += cluePauseTime;
    // gives timelimit according to how much progress the user has made
    if (i == progress) {
      timeleft = progress + 10;
      timer = setInterval(startTimer, 1000);
    }
  }
}

function loseGame() {
  stopGame();
  lose_sound.play();
  Swal.fire({
    icon: "error",
    title: "Game over",
    text: "you have used all your tries",
    background: "#000000",
    color: '#CF6E6E',
    imageUrl: 'https://cdn.glitch.global/c75755ef-9e04-4d98-bce5-829d609a3bb7/lose.gif?v=1650564615539',
    imageWidth: 250,
    imageHeight: 250,
    confirmButtonText: "I tried :(",
    
    
  });
  tries=3;
}


function winGame() {
  stopGame();
  win_sound.play();
  Swal.fire({
    icon: "success",
    title: "Good job!",
    text: "You won the game",
    background: "#000000",
    color: '#3F866A',
    imageUrl: 'https://cdn.glitch.global/c75755ef-9e04-4d98-bce5-829d609a3bb7/win.gif?v=1650564411811',
    imageWidth: 400,
    imageHeight: 200,
    confirmButtonText: "I'm amazing",
  });
}

// Function runs everytime a user clicks one of the game buttons
function guess(btn) {
 
  if (!gamePlaying) return;

  //if user guessed correctly
  if (btn == pattern[guessCounter]) {
    clock_sound.pause();
    
    //if turn is not over
    if (guessCounter != progress)
      guessCounter++;
    
    // if turn is over
    else {
      clearInterval(timer);
      
      // if it was the last turn and user got it right
      if (progress == pattern.length - 1)
        winGame();
      else {
        progress++;
        playClueSequence();
        //console.log(progress);
      }
    }
  } 
  //if user guessed incorrectly
  else {
    clock_sound.pause();
    wrong_sound.play();
    clearInterval(timer);
    tries--;
    if (tries == 0) loseGame();
    
    //if there are tries remaining
    else {
    
      Swal.fire({
        icon: "error",
        title: "NOPE. Wrong answer",
        text: "you have " + tries + " tries left",
        confirmButtonText: "Let's try again",
        background: "#000000",
        color: '#CF6E6E',
         imageUrl: 'https://cdn.glitch.global/c75755ef-9e04-4d98-bce5-829d609a3bb7/wrong.gif?v=1650564895870',
        imageWidth: 400,
        imageHeight: 200,
      }).then((result) => {
        document.getElementById("time").style.backgroundColor = "#8a5180";
        playClueSequence();
      });
    }
  }
}

// This function allows the user some time to answer, making the game more challenging, implements additional features such as clock ticking sounds
function startTimer() {
  if (timeleft == 0) {
    clock_sound.pause();
    buzz_sound.play();
    clearInterval(timer);
    tries--;
    if (tries == 0) loseGame();
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...you ran out of time",
        text: "you have " + tries + " tries left",
        confirmButtonText: "Let's try again",
        background: "#000",
        color: '#CF6E6E',
        imageUrl: 'https://cdn.glitch.global/c75755ef-9e04-4d98-bce5-829d609a3bb7/timeup.gif?v=1650564616482',
        imageWidth: 250,
        imageHeight: 250,
      }).then((result) => {
        document.getElementById("time").style.backgroundColor = "#8a5180";
        playClueSequence();
      });
    }
    
  } else if (timeleft <= 5) {
    clock_sound.play();
    document.getElementById("time").style.backgroundColor = "red";
  }

  document.getElementById("time").innerHTML = timeleft + " seconds";
  timeleft -= 1;
}
