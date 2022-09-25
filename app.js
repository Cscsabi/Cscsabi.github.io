const play = () => {
  const resultText = document.getElementById("result-text");
  const playerScoreText = document.getElementById("player-score");
  const computerScoreText = document.getElementById("computer-score");
  const computerChoiceText = document.getElementById("computer-choice");
  const computerDivOptions = [
    document.getElementById("computer-rock-div"),
    document.getElementById("computer-paper-div"),
    document.getElementById("computer-scissors-div"),
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
      computerDivOptions[0].style.backgroundColor = "red";
      previousComputerChoice = computerDivOptions[0];
    } else if (computer === "paper") {
      computerDivOptions[1].style.backgroundColor = "red";
      previousComputerChoice = computerDivOptions[1];
    } else {
      computerDivOptions[2].style.backgroundColor = "red";
      previousComputerChoice = computerDivOptions[2];
    }
  };

  const getComputersButton = (computer) => {
    if (computer === "rock") {
      return computerDivOptions[0];
    } else if (computer === "paper") {
      return computerDivOptions[1];
    } else {
      return computerDivOptions[2];
    }
  };

  buttonPressed();
};

const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

play();
