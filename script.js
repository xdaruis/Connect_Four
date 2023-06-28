const winnerCombos = [
    ["a0", "b0", "c0", "d0"],
    ["a0", "b1", "c2", "d3"],
    ["a0", "a1", "a2", "a3"],
    ["a1", "b1", "c1", "d1"],
    ["a1", "b2", "c3", "d4"],
    ["a1", "a2", "a3", "a4"],
    ["a2", "b2", "c2", "d2"],
    ["a2", "b3", "c4", "d5"],
    ["a2", "a3", "a4", "a5"],
    ["a3", "b3", "c3", "d3"],
    ["a4", "b4", "c4", "d4"],
    ["a5", "b5", "c5", "d5"],

    ["b0", "c0", "d0", "e0"],
    ["b0", "c1", "d2", "e3"],
    ["b0", "b1", "b2", "b3"],
    ["b1", "c1", "d1", "e1"],
    ["b1", "c2", "d3", "e4"],
    ["b1", "b2", "b3", "b4"],
    ["b2", "c2", "d2", "e2"],
    ["b2", "c3", "d4", "e5"],
    ["b2", "b3", "b4", "b5"],
    ["b3", "c3", "d3", "e3"],
    ["b4", "c4", "d4", "e4"],
    ["b5", "c5", "d5", "e5"],

    ["c0", "d0", "e0", "f0"],
    ["c0", "d1", "e2", "f3"],
    ["c0", "c1", "c2", "c3"],
    ["c1", "d1", "e1", "f1"],
    ["c1", "d2", "e3", "f4"],
    ["c1", "c2", "c3", "c4"],
    ["c2", "d2", "e2", "f2"],
    ["c2", "d3", "e4", "f5"],
    ["c2", "c3", "c4", "c5"],
    ["c3", "d3", "e3", "f3"],
    ["c4", "d4", "e4", "f4"],
    ["c5", "d5", "e5", "f5"],

    ["d0", "e0", "f0", "g0"],
    ["d0", "e1", "f2", "g3"],
    ["d0", "d1", "d2", "d3"],
    ["d1", "e1", "f1", "g1"],
    ["d1", "e2", "f3", "g4"],
    ["d1", "d2", "d3", "d4"],
    ["d2", "e2", "f2", "g2"],
    ["d2", "e3", "f4", "g5"],
    ["d2", "d3", "d4", "d5"],
    ["d3", "e3", "f3", "g3"],
    ["d4", "e4", "f4", "g4"],
    ["d5", "e5", "f5", "g5"],

    ["d0", "c1", "b2", "a3"],
    ["d1", "c2", "b3", "a4"],
    ["d2", "c3", "b4", "a5"],

    ["e0", "d1", "c2", "b3"],
    ["e1", "d2", "c3", "b4"],
    ["e2", "d3", "c4", "b5"],
    
    ["e0", "e1", "e2", "e3"],
    ["e1", "e2", "e3", "e4"],
    ["e2", "e3", "e4", "e5"],
    
    ["f0", "e1", "d2", "c3"],
    ["f1", "e2", "d3", "c4"],
    ["f2", "e3", "d4", "c5"],
    
    ["f0", "f1", "f2", "f3"],
    ["f1", "f2", "f3", "f4"],
    ["f2", "f3", "f4", "f5"],

    ["g0", "f1", "e2", "d3"],
    ["g1", "f2", "e3", "d4"],
    ["g2", "f3", "e4", "d5"],
    
    ["g0", "g1", "g2", "g3"],
    ["g1", "g2", "g3", "g4"],
    ["g2", "g3", "g4", "g5"],
];

const WIN_COMBINATIONS = 69;
const movesYellow = [], movesBlue = [];

let player = "Yellow";
let moves = 42;
let gameState = true;

const dict = {
    "movesYellow": movesYellow,
    "movesBlue": movesBlue,
    "Yellow": "btn btn-warning",
    "Blue": "btn btn-primary",
    "nextYellow": "Blue",
    "nextBlue": "Yellow"
};

function isWinner() {
    for (let i = 0; i < WIN_COMBINATIONS; ++i) {
        let hasWon = true;
        for (let j = 0; j < 4; ++j) {
            if (!dict["moves" + player].includes(winnerCombos[i][j])) {
                hasWon = false;
                break;
            }
        }
        if (hasWon) {
            document.getElementById("playerMove").innerHTML = player + " has won!";
            gameState = false;
        }
    }
    if (--moves === 0 && gameState) {
        gameState = false;
        document.getElementById("playerMove").innerHTML = "Draw!";
    }
}

function activateAboveButton(element) {
    let aboveId = element.id;
    document.getElementById(aboveId[0] + ++aboveId[1]).disabled = false;
    document.getElementById(aboveId[0] + ++aboveId[1]).innerHTML = "X";
}

function colorButton(element) {
    if (!gameState) {
        return;
    }
    element.disabled = true;
    element.innerHTML = "&nbsp;&nbsp";
    element.className = dict[player];
    document.getElementById("playerMove").innerHTML = dict["next" + player] + " Move";
    dict["moves" + player].push(element.id);
    isWinner();
    player = dict["next" + player];
    activateAboveButton(element);
}