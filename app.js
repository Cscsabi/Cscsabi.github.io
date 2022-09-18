const play = () => {
  const playerScoreText = document.getElementById("player-score");
  const computerScoreText = document.getElementById("computer-score");
  const computerChoiceText = document.getElementById("computer-choice");
  const resultText = document.getElementById("result-text");
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");
  const playerChoice = [rockButton, paperButton, scissorsButton];
  const computerChoice = ["rock", "paper", "scissors"];
  let playerScore = 0;
  let computerScore = 0;

  const buttonPressed = () => {
    playerChoice.forEach((player) => {
      player.addEventListener("click", function () {
        const computer = computerChoice[Math.floor(Math.random() * 3)];
        computerChoiceText.textContent = capitalize(computer);
        checkWhoWon(this.innerText.toLowerCase(), computer);
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

    // TODO: Picture reset

    play();
  };

  buttonPressed();
};

const capitalize = (str) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

play();
