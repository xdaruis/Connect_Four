let player = "btn btn-warning";

const dict = {
    "colorbtn btn-warning": "Blue",
    "colorbtn btn-primary": "Yellow",
    "btn btn-warning": "btn btn-primary",
    "btn btn-primary": "btn btn-warning"
};

function activateAboveButton(element) {
    let aboveId = element.id;
    document.getElementById(aboveId[0] + ++aboveId[1]).disabled = false;
    document.getElementById(aboveId[0] + ++aboveId[1]).innerHTML = "X";
}

function colorButton(element) {
    element.innerHTML = "&nbsp;&nbsp";
    element.className = player;
    document.getElementById("playerMove").innerHTML = dict["color" + player] + " Move";
    player = dict[player];
    activateAboveButton(element);
}