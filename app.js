function drawLine(xa, ya, xb, yb) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(xa, ya);
    ctx.lineTo(xb, yb);
    ctx.stroke();
}


function handleLoaded() {
    console.log("loaded!");
    for (var i = 0; i < 1920; i += 10) {
        drawLine(i, 0, 1920, 1080);
    }
    for (var i = 0; i < 1920; i += 10) {
        drawLine(0, 0, i, 1080);
    }
}

document.addEventListener("DOMContentLoaded", handleLoaded);