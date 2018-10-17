var canv = document.getElementById("canvasGame");
var c = canv.getContext("2d");

const FPS = 1; // frames per second

canv.width = window.innerWidth;
canv.height = window.innerHeight;

// set up the game loop
setInterval(screen, 1000 / FPS);

function screen() {

    // draw space
    c.fillStyle = "black";
    c.fillRect(0,0,canv.width,canv.height);
    

    // draw star
    c.fillStyle = "white";
    var starcount = Math.floor(Math.random() * 10) + 1; // number of stars on screen
    var i;
    for (i = 0; i < starcount; i++) {
        c.fillRect(Math.floor(Math.random() * canv.width) + 1, Math.floor(Math.random() * canv.height) + 1, 10, 10);
    }
}

