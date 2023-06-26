let player = "btn btn-warning";

const dict = {
    "colorbtn btn-warning": "Blue",
    "colorbtn btn-primary": "Yellow",
    "btn btn-warning": "btn btn-primary", //yellow 
    "btn btn-primary": "btn btn-warning"     //blue
};

function activateAboveButton(element) {
    let aboveId = element.id;
    // ++aboveId[1];
    // alert(aboveId);
    // setCharAt(aboveId, 1, ++aboveId[1]);
    // alert(aboveId[0] + ++aboveId[1]);
    document.getElementById(aboveId[0] + (++aboveId[1])).disabled = false;
    document.getElementById(aboveId[0] + (++aboveId[1])).innerHTML = "X";
}

function colorButton(element) {
    // document.getElementById()
    element.innerHTML = "&nbsp;&nbsp";
    activateAboveButton(element);
    element.className = player;
    document.getElementById("playerMove").innerHTML = dict["color" + player] + " Move";
    player = dict[player];
}