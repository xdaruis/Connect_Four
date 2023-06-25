let player = "btn btn-warning";

const dict = {
    "colorbtn btn-warning": "Blue",
    "colorbtn btn-primary": "Yellow",
    "btn btn-warning": "btn btn-primary", //yellow 
    "btn btn-primary": "btn btn-warning"     //blue
};

function colorButton(element) {
    element.className = player;
    document.getElementById("playerMove").innerHTML = dict["color" + player] + " Move";
    player = dict[player];
}