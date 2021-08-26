const main = document.querySelector("main");
const form = document.querySelector("form");
const inputP1 = document.getElementById("player1");
const inputP2 = document.getElementById("player2");
const inputX = document.getElementById("X");
const inputO = document.getElementById("O");
const h2 = document.querySelector("h2");

function Player(name, symbol, isFirst) {
  this.name = name;
  this.symbol = symbol;
  this.isFirst = isFirst;

  return { name, symbol, isFirst };
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameP1 = inputP1.value;
  const nameP2 = inputP2.value;
  const symbolP1 = inputX.checked ? "X" : "O";
  const symbolP2 = inputX.checked ? "O" : "X";
  game.player1 = Player(nameP1, symbolP1, true);
  game.player2 = Player(nameP2, symbolP2, false);
  form.style.display = "none";
  main.style.display = "grid";
});

const game = {
  player1: null,
  player2: null,
  symbol: null,
  round: 1,
  boxes: [...document.querySelectorAll(".box")],

  // conditions for a player to win

  someoneWon: function () {
    if (
      (this.boxes[0].textContent === this.player1.symbol &&
        this.boxes[1].textContent === this.player1.symbol &&
        this.boxes[2].textContent === this.player1.symbol) ||
      (this.boxes[3].textContent === this.player1.symbol &&
        this.boxes[4].textContent === this.player1.symbol &&
        this.boxes[5].textContent === this.player1.symbol) ||
      (this.boxes[6].textContent === this.player1.symbol &&
        this.boxes[7].textContent === this.player1.symbol &&
        this.boxes[8].textContent === this.player1.symbol) ||
      (this.boxes[0].textContent === this.player1.symbol &&
        this.boxes[4].textContent === this.player1.symbol &&
        this.boxes[8].textContent === this.player1.symbol) ||
      (this.boxes[2].textContent === this.player1.symbol &&
        this.boxes[4].textContent === this.player1.symbol &&
        this.boxes[6].textContent === this.player1.symbol) ||
      (this.boxes[0].textContent === this.player1.symbol &&
        this.boxes[3].textContent === this.player1.symbol &&
        this.boxes[6].textContent === this.player1.symbol) ||
      (this.boxes[1].textContent === this.player1.symbol &&
        this.boxes[4].textContent === this.player1.symbol &&
        this.boxes[7].textContent === this.player1.symbol) ||
      (this.boxes[2].textContent === this.player1.symbol &&
        this.boxes[5].textContent === this.player1.symbol &&
        this.boxes[8].textContent === this.player1.symbol)
    ) {
      h2.textContent = `Congratulations ${this.player1.name} you won!!!`;
      this.round = 0;
      playAgainBtn.style.display = "block";
    } else if (
      (this.boxes[0].textContent === this.player2.symbol &&
        this.boxes[1].textContent === this.player2.symbol &&
        this.boxes[2].textContent === this.player2.symbol) ||
      (this.boxes[3].textContent === this.player2.symbol &&
        this.boxes[4].textContent === this.player2.symbol &&
        this.boxes[5].textContent === this.player2.symbol) ||
      (this.boxes[6].textContent === this.player2.symbol &&
        this.boxes[7].textContent === this.player2.symbol &&
        this.boxes[8].textContent === this.player2.symbol) ||
      (this.boxes[0].textContent === this.player2.symbol &&
        this.boxes[4].textContent === this.player2.symbol &&
        this.boxes[8].textContent === this.player2.symbol) ||
      (this.boxes[2].textContent === this.player2.symbol &&
        this.boxes[4].textContent === this.player2.symbol &&
        this.boxes[6].textContent === this.player2.symbol) ||
      (this.boxes[0].textContent === this.player2.symbol &&
        this.boxes[3].textContent === this.player2.symbol &&
        this.boxes[6].textContent === this.player2.symbol) ||
      (this.boxes[1].textContent === this.player2.symbol &&
        this.boxes[4].textContent === this.player2.symbol &&
        this.boxes[7].textContent === this.player2.symbol) ||
      (this.boxes[2].textContent === this.player2.symbol &&
        this.boxes[5].textContent === this.player2.symbol &&
        this.boxes[8].textContent === this.player2.symbol)
    ) {
      h2.textContent = `Congratulations ${this.player2.name} you won!!!`;
      this.round = 0;
      playAgainBtn.style.display = "block";
    } else if (
      this.boxes[0].textContent !== "" &&
      this.boxes[1].textContent !== "" &&
      this.boxes[2].textContent !== "" &&
      this.boxes[3].textContent !== "" &&
      this.boxes[4].textContent !== "" &&
      this.boxes[5].textContent !== "" &&
      this.boxes[6].textContent !== "" &&
      this.boxes[7].textContent !== "" &&
      this.boxes[8].textContent !== ""
    ) {
        h2.textContent = `Close match, it's a draw!!!`;
        this.round = 0;
        playAgainBtn.style.display = "block";
    }
  },
};

// rounds logic + game logic + check if someone won

for (box of game.boxes) {
  box.addEventListener("click", function () {
    if (this.textContent === "") {
      if (game.round % 2 !== 0) {
        game.symbol = game.player1.symbol;
      } else {
        game.symbol = game.player2.symbol;
      }
      this.textContent = game.symbol;
      game.someoneWon();
      game.round++;
    }
  });
}

// Play again

const playAgainBtn = document.querySelector(".play-again__btn");

playAgainBtn.addEventListener("click", function () {
  this.style.display = "none";
  h2.textContent = "";
  for (box of game.boxes) {
    box.textContent = "";
  }
});
