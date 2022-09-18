const play = () => {
  const playerScoreText = document.getElementById("player-score");
  const computerScoreText = document.getElementById("computer-score");
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
        checkWhoWon(this.innerText, computer);
      });
    });
  };

  const checkWhoWon = (playerChoice, computerChoice) => {
    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        computerWon();
      } else {
        playerWon();
      }
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        playerWon();
      } else {
        computerWon();
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        computerWon();
      } else {
        playerWon();
      }
    } else if (playerChoice === computerChoice) {
      resultText.textContent = "Tie!";
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
  };
};

play();
