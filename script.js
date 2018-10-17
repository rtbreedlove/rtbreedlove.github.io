var canv = document.getElementById("canvasGame");
var c = canv.getContext("2d");

const FPS = 3; // frames per second

canv.width = 800;
canv.height = 600;

// set up the game loop
setInterval(screen, 1000 / FPS);

function screen() {

    // draw space
    c.fillStyle = "black";
    c.fillRect(0,0,canv.width,canv.height);
    

    // draw star
    c.fillStyle = "white";
    var starcount = 10; // number of stars on screen
    var i;
    for (i = 0; i < starcount; i++) {
        c.fillRect(Math.floor(Math.random() * canv.width) + 1, Math.floor(Math.random() * canv.height) + 1, 10, 10);
    }
}

