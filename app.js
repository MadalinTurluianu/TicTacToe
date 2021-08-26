const boxes = [...document.querySelectorAll(".box")];

function Player(name, symbol, first){
    this.name = name;
    this.symbol = symbol;
    this.first = first;

    return {name, symbol, first}
}
