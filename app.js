function Player(name, symbol, isFirst) {
    this.name = name;
    this.symbol = symbol;
    this.isFirst = isFirst;

    return {name, symbol, isFirst}
}

const player1 = Player("P1", "X", true);
const player2 = Player("P2", "O", false);

const game = {
    round: 1,
    boxes: [...document.querySelectorAll(".box")],
    symbol: "will be defined in the round logic",

// conditions for a player to win

    someoneWon: function() {
        if (this.boxes[0].textContent === player1.symbol && this.boxes[1].textContent === player1.symbol && this.boxes[2].textContent === player1.symbol ||
            this.boxes[3].textContent === player1.symbol && this.boxes[4].textContent === player1.symbol && this.boxes[5].textContent === player1.symbol ||
            this.boxes[6].textContent === player1.symbol && this.boxes[7].textContent === player1.symbol && this.boxes[8].textContent === player1.symbol ||
            this.boxes[0].textContent === player1.symbol && this.boxes[4].textContent === player1.symbol && this.boxes[8].textContent === player1.symbol ||
            this.boxes[2].textContent === player1.symbol && this.boxes[4].textContent === player1.symbol && this.boxes[6].textContent === player1.symbol ||
            this.boxes[0].textContent === player1.symbol && this.boxes[3].textContent === player1.symbol && this.boxes[6].textContent === player1.symbol ||
            this.boxes[1].textContent === player1.symbol && this.boxes[4].textContent === player1.symbol && this.boxes[7].textContent === player1.symbol ||
            this.boxes[2].textContent === player1.symbol && this.boxes[5].textContent === player1.symbol && this.boxes[8].textContent === player1.symbol
            ) {
                console.log("Player1 WON");
                this.round = 0;
                for (box of this.boxes) {
                    box.textContent = "";
                }
        }else if (
            this.boxes[0].textContent === player2.symbol && this.boxes[1].textContent === player2.symbol && this.boxes[2].textContent === player2.symbol ||
            this.boxes[3].textContent === player2.symbol && this.boxes[4].textContent === player2.symbol && this.boxes[5].textContent === player2.symbol ||
            this.boxes[6].textContent === player2.symbol && this.boxes[7].textContent === player2.symbol && this.boxes[8].textContent === player2.symbol ||
            this.boxes[0].textContent === player2.symbol && this.boxes[4].textContent === player2.symbol && this.boxes[8].textContent === player2.symbol ||
            this.boxes[2].textContent === player2.symbol && this.boxes[4].textContent === player2.symbol && this.boxes[6].textContent === player2.symbol ||
            this.boxes[0].textContent === player2.symbol && this.boxes[3].textContent === player2.symbol && this.boxes[6].textContent === player2.symbol ||
            this.boxes[1].textContent === player2.symbol && this.boxes[4].textContent === player2.symbol && this.boxes[7].textContent === player2.symbol ||
            this.boxes[2].textContent === player2.symbol && this.boxes[5].textContent === player2.symbol && this.boxes[8].textContent === player2.symbol
        ) {
                console.log("Player1 WON");
                this.round = 0;
                for (box of this.boxes) {
                    box.textContent = "";
                }
            }
    }
}

// rounds logic + game logic + check if someone won

for (box of game.boxes) {
    box.addEventListener("click", function() {
        if (this.textContent === "") {
            if (game.round%2 !== 0) {
                game.symbol = player1.symbol;
            }else {
                game.symbol = player2.symbol;
            }
            this.textContent = game.symbol;
            game.someoneWon();
            game.round++;
        }
    })
}

