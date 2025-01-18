console.log(`Game is best to: ${localStorage.getItem('score')}`);
console.log(`Game Mode is: ${localStorage.getItem('mode')}`);
let body = document.getElementsByTagName('body')[0];
let button = document.getElementsByTagName('button');
let gameMode = localStorage.getItem('mode')
let maxScore = localStorage.getItem('score')
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");
let submitBtn = document.getElementById("submitBtn");
let nextBtn = document.getElementById("nextBtn");
let resultText = document.getElementById("resultText");
let gameIcon = document.getElementById("gameIcon");
let roundSummary = document.getElementById("roundSummary");
let titleTabs = document.getElementById("titleTabs");
let playerScore = document.getElementById("playerScore");
let playAgain = document.getElementById("playAgain");
let playerNum = 0;
playerScore.innerText = playerNum.toString();
let cpuScore = document.getElementById("cpuScore");
let cpuNum = 0;
cpuScore.innerText = cpuNum.toString();
let gameChoices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerChoice = "";
let player1choice = "";
let player2choice = "";
let finalScore = false
rockBtn.addEventListener("click", function () {
  gameIcon.src = "/Assets/rockmonsteravi.webp";
  gameIcon.alt = "Rock Monster";
});

paperBtn.addEventListener("click", function () {
  gameIcon.src = "/Assets/papermonsteravi.webp";
  gameIcon.alt = "Paper Monster";
});
scissorsBtn.addEventListener("click", function () {
  gameIcon.src = "/Assets/scissorsmonsteravi.webp";
  gameIcon.alt = "Scissors Monster";
});
lizardBtn.addEventListener("click", function () {
  gameIcon.src = "/Assets/lizardmonsteravi.png";
  gameIcon.alt = "Lizard Monster";
});
spockBtn.addEventListener("click", function () {
  gameIcon.src = "/Assets/spockavi.jpg";
  gameIcon.alt = "Spock in a robot suit";
});
rockBtn.addEventListener("click", function () {
  playerChoice = "rock";
  console.log(`user selected ${playerChoice}`);
});

paperBtn.addEventListener("click", function () {
  playerChoice = "paper";
  console.log(`user selected ${playerChoice}`);
});
scissorsBtn.addEventListener("click", function () {
  playerChoice = "scissors";
  console.log(`user selected ${playerChoice}`);
});
lizardBtn.addEventListener("click", function () {
  playerChoice = "lizard";
  console.log(`user selected ${playerChoice}`);
});
spockBtn.addEventListener("click", function () {
  playerChoice = "spock";
  console.log(`user selected ${playerChoice}`);
});

switch(maxScore)
{
  case '1':
    roundName.innerText = "Sudden Death"
    break;
  case '3':
    roundName.innerText = "Objective: First to 3"
    break;
  case '4':
    roundName.innerText = "Objective: First to 4"
    break;
}

async function cpuGenerate() {
  const promise = await fetch(
    `https://rpsls-fxbafyb6e3ecd4e3.westus-01.azurewebsites.net/RPSLS/GoRPSLS`
  );
  const cpuChoice = await promise.text();
  roundEnd(playerChoice, cpuChoice, maxScore);
}

if(gameMode == '1v1')
{
  body.className = "redBG"
  submitBtn.className = "d-none"
  nextBtn.className = ''
  resultText.innerText = 'Player 1, make your selection...'
  slot1name.innerText = "Player 1"
  slot2name.innerText = "Player 2"
  gameIcon.src = "/Assets/cloudBG.png";
  titleTabs.style.color = 'lightpink'
  resultText.style.color = 'lightpink'
  slot1name.style.color = 'lightpink'
  slot2name.style.color = 'lightpink'
  roundName.style.color = 'lightpink'
  roundSummary.style.color = 'lightpink'
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundImage = "linear-gradient(to bottom right,crimson,cornsilk)"
  }
}

nextBtn.addEventListener("click", function(){
  player1choice = playerChoice
  nextBtn.className = "d-none"
  submitBtn.className = ''
  resultText.innerText = 'Player 2, make your selection...'
  gameIcon.src = "/Assets/cloudBG.png";
})

submitBtn.addEventListener("click", function () {
  if(gameMode == 'vscpu')
  {
  cpuGenerate();
  }
  else{
    player2choice = playerChoice
    roundEnd(player1choice, player2choice, maxScore)
    nextBtn.className = ''
  submitBtn.className = 'd-none'
  gameIcon.src = "/Assets/cloudBG.png";
  }
  
  if(!finalScore && gameMode == '1v1')
  {
    resultText.innerText = 'Player 1, make your selection...'
  }
});

function roundEnd(player, cpu, max) {
  console.log(player);
  console.log(cpu);
  console.log(max);
  if (player == cpu && gameMode == 'vscpu') {
    cpuGenerate()
  } 
  else if (player == cpu && gameMode == '1v1')
  {
    roundSummary.innerText = "TIE - Play Again"
  }
  else if (gameMode == 'vscpu') 
  {
    if (player == "rock") {
      switch (cpu) {
        case "paper":
          cpuNum++;
          console.log("LOSE");
          console.log(cpuNum);
          roundSummary.innerText = "CPU chose paper."
          cpuScore.innerText = cpuNum;

          break;
        case "scissors":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose scissors."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "lizard":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose lizard."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "spock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose spock."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        default:
          break;
      }
    } else if (player == "paper") {
      switch (cpu) {
        case "rock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose rock."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "scissors":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose scissors."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "lizard":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose lizard."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "spock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose spock."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        default:
          break;
      }
    } else if (player == "scissors") {
      switch (cpu) {
        case "rock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose rock."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "paper":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose paper."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "lizard":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose lizard."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "spock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose spock."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        default:
          break;
      }
    } else if (player == "lizard") {
      switch (cpu) {
        case "rock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose rock."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "paper":
          playerNum++;
          roundSummary.innerText = "CPU chose paper."
          console.log("WIN");
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "scissors":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose scissors."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "spock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose spock."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        default:
          break;
      }
    } else if (player == "spock") {
      switch (cpu) {
        case "rock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose rock."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "paper":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose paper."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "scissors":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "CPU chose scissors."
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "lizard":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "CPU chose lizard."
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        default:
          break;
      }
    }
  }else{
    //1v1
    if (player == "rock") {
      switch (cpu) {
        case "paper":
          cpuNum++;
          console.log("LOSE");
          console.log(cpuNum);
          roundSummary.innerText = "Paper covers Rock. P2 wins"
          cpuScore.innerText = cpuNum;

          break;
        case "scissors":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Rock smashes Scissors. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "lizard":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Rock smashes Lizard. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "spock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Spock vaporizes Rock. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        default:
          break;
      }
    } else if (player == "paper") {
      switch (cpu) {
        case "rock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Paper covers Rock. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "scissors":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Scissors cuts paper. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "lizard":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Lizard eats paper. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "spock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Paper disapproves Spock. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        default:
          break;
      }
    } else if (player == "scissors") {
      switch (cpu) {
        case "rock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Rock smashes Scissors. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "paper":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Scissors cuts Paper. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "lizard":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Scissors cuts Lizard. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "spock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Spock smashes Scissors. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        default:
          break;
      }
    } else if (player == "lizard") {
      switch (cpu) {
        case "rock":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Rock smashes Lizard. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "paper":
          playerNum++;
          roundSummary.innerText = "Lizard eats Paper. P1 wins"
          console.log("WIN");
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "scissors":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Scissors cuts Lizard. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "spock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Lizard poisons Spock. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        default:
          break;
      }
    } else if (player == "spock") {
      switch (cpu) {
        case "rock":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Spock vaporizes Rock. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "paper":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Paper disapproves Spock. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        case "scissors":
          playerNum++;
          console.log("WIN");
          roundSummary.innerText = "Spock smashes Scissors. P1 wins"
          console.log(playerNum);
          playerScore.innerText = playerNum;

          break;
        case "lizard":
          cpuNum++;
          console.log("LOSE");
          roundSummary.innerText = "Lizard poisons Spock. P2 wins"
          console.log(cpuNum);
          cpuScore.innerText = cpuNum;

          break;
        default:
          break;
      }
    }
  }

let playerWin = true

  if(playerNum == max)
  {
    finalScore = true
    switch(gameMode)
    {
      case 'vscpu':
        body.className = 'winBG'
        playerWin = true
        endScreen(playerWin)
        break;
      case '1v1':
        playerWin = true
        end1v1Screen(playerWin)
        break;
    }
  }else if(cpuNum == max)
  {
    finalScore = true
    switch(gameMode)
    {
      case 'vscpu':
        body.className = 'loseBG'
        playerWin = false
        endScreen(playerWin)
        break;
      case '1v1':
        playerWin = false
        end1v1Screen(playerWin)
        break;
    }
  }
}

function endScreen(win) {
  console.log(win)
  nextBtn.hidden = true
  submitBtn.hidden = true
  titleTabs.hidden = true
  retryBtn.className = ' '
  if (win == true) {
    resultText.innerText = "The player wins!!";
  } else {
    resultText.innerText = "The CPU wins!!";
  }
}

function end1v1Screen(win) {
  nextBtn.hidden = true
  submitBtn.hidden = true
  titleTabs.hidden = true
  retryBtn.className = ' '
  if (win == true) {
    resultText.innerText = "Player 1 wins!!";
  } else {
    resultText.innerText = "Player 2 wins!!";
  }
}
let cpu1round = document.getElementById("cpu1round");
let cpu5round = document.getElementById("cpu5round");
let cpu7round = document.getElementById("cpu7round");
let vscpuBtn = document.getElementById("vscpuBtn");
let onev1Btn = document.getElementById("onev1Btn");
