const play = () => {
  const resultText = document.getElementById("result-text");
  const playerScoreText = document.getElementById("player-score");
  const computerScoreText = document.getElementById("computer-score");
  const computerChoiceText = document.getElementById("computer-choice");
  const computerOptions = [
    document.getElementById("computer-rock"),
    document.getElementById("computer-paper"),
    document.getElementById("computer-scissors"),
  ];

  let previousComputerChoice = null;
  let previousPlayerChoice = null;
  let playerScore = 0;
  let computerScore = 0;

  const buttonPressed = () => {
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const playerChoice = [rockButton, paperButton, scissorsButton];
    const computerChoice = ["rock", "paper", "scissors"];

    playerChoice.forEach((player) => {
      player.addEventListener("click", function () {
        if (previousComputerChoice !== null) {
          previousComputerChoice.style.backgroundColor = "";
        }
        if (previousPlayerChoice !== null) {
          previousPlayerChoice.style.backgroundColor = "";
        }
        const computer = computerChoice[Math.floor(Math.random() * 3)];
        computerChoiceText.textContent = `Computer chose: ${capitalize(
          computer
        )}`;
        checkWhoWon(this.innerText.toLowerCase(), computer);
        player.style.backgroundColor = "green";
        previousComputerChoice = getComputersButton(computer);
        previousPlayerChoice = player;
      });
    });
  };

  const checkWhoWon = (player, computer) => {
    if (player === computer) {
      resultText.textContent = "Tie!";
    } else if (player === "rock") {
      if (computer === "paper") {
        computerWon();
      } else {
        playerWon();
      }
    } else if (player === "paper") {
      if (computer === "rock") {
        playerWon();
      } else {
        computerWon();
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        computerWon();
      } else {
        playerWon();
      }
    }
    highlightComputersChoice(computer);
  };

  const computerWon = () => {
    resultText.textContent = "Computer won!";
    computerScore++;
    computerScoreText.textContent = computerScore;
  };

  const playerWon = () => {
    resultText.textContent = "Player won!";
    playerScore++;
    playerScoreText.textContent = playerScore;
  };

  const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    resultText.textContent = "Choose a hand!";
    computerChoiceText.textContent = "";
    previousComputerChoice.style.backgroundColor = "";
    previousPlayerChoice.style.backgroundColor = "";
    previousComputerChoice = null;
    previousPlayerChoice = null;
  };

  document
    .getElementById("reset-button")
    .addEventListener("click", function () {
      resetGame();
    });

  const highlightComputersChoice = (computer) => {
    if (computer === "rock") {
      computerOptions[0].style.backgroundColor = "red";
      previousComputerChoice = computerOptions[0];
    } else if (computer === "paper") {
      computerOptions[1].style.backgroundColor = "red";
      previousComputerChoice = computerOptions[0];
    } else {
      computerOptions[2].style.backgroundColor = "red";
      previousComputerChoice = computerOptions[0];
    }
  };

  const getComputersButton = (computer) => {
    if (computer === "rock") {
      return computerOptions[0];
    } else if (computer === "paper") {
      return computerOptions[1];
    } else {
      return computerOptions[2];
    }
  };

  buttonPressed();
};

const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

play();
