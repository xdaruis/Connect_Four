document.onload = createBoard();

function createBoard() {
    for (let j = 5; j >= 1; --j) {
        createLine(j, true, "&nbsp;&nbsp;");
    }
    createLine("0", false, "X");
}

function createLine(j, disabledState, text) {
    const newBox = document.createElement("div");
    newBox.className = "d-flex justify-content-center";
    document.body.appendChild(newBox);
    for (let i = 0; i <= 6; ++i) {
        const button = document.createElement("button");
        button.id = "" + j + i;
        button.className = "btn btn-outline-secondary";
        button.innerHTML = "" + button.id;
        button.disabled = disabledState;
        button.onclick= function() { colorButton(this); };
        newBox.appendChild(button);
    }
}

const winnerCombos = [];

let combosNum = 0; //69

document.onload = generateWinCombinations();

function generateWinCombinations() {
    winnerCombos[0] = [];
    for (let i = 0; i < 6; ++i) {
        for (let j = 0; j < 4; ++j) {
            for (let k = 0; k < 4; ++k) {
                winnerCombos[combosNum].push("" + i + (j + k));
            }
            // console.log(winnerCombos[combosNum]);
            ++combosNum;
            winnerCombos[combosNum] = [];
        }
    }
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 4; ++j) {
            for (let k = 0; k < 4; ++k) {
                winnerCombos[combosNum].push("" + (i + k) + (j + k));
            }
            // console.log(winnerCombos[combosNum]);
            ++combosNum;
            winnerCombos[combosNum] = [];
        }
    }
    for (let i = 3; i < 6; ++i) {
        for (let j = 0; j < 4; ++j) {
            for (let k = 0; k < 4; ++k) {
                winnerCombos[combosNum].push("" + (i - k) + (j + k));
            }
            // console.log(winnerCombos[combosNum]);
            winnerCombos[++combosNum] = [];
        }
    }
    for (let i = 0; i < 7; ++i) {
        for (let j = 0; j < 3; ++j) {
            for (let k = 0; k < 4; ++k) {
                winnerCombos[combosNum].push("" + (j + k) + i);
            }
            // console.log(winnerCombos[combosNum]);
            winnerCombos[++combosNum] = [];
        }
    }
    // console.log(combosNum);
}

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
    for (let i = 0; i < combosNum; ++i) {
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
    document.getElementById(++aboveId[0] + aboveId[1]).disabled = false;
    document.getElementById(++aboveId[0] + ++aboveId[1]).innerHTML = "X";
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