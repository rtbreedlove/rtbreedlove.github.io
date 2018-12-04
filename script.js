var canv = document.getElementById("canvasGame");
var c = canv.getContext("2d");

const FPS = 1; // frames per second

canv.width = window.innerWidth;
canv.height = window.innerHeight;

// set up the game loop
setInterval(screen, 1000 / FPS);

// create stars data
var starsCount = Math.floor(Math.random() * 10) + 1; // number of stars on screen
function starsPositionX (posX) {
    posX = Math.floor(Math.random() * canv.width) + 1;
    return posX;
};
function starsPositionY (posY) {
    posY = Math.floor(Math.random() * canv.height) + 1;
    return posY;
};


var stars = [
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
    {   active:true,
        positionX:0,
        positionY:0,
        size:0,
        rotation:0,
        intensity:0,
    },
];



function screen() {

    // draw space
    c.fillStyle = "black";
    c.fillRect(0,0,canv.width,canv.height);
    

    // draw star
    c.fillStyle = "white";
    var i;
    for (i = 0; i < starcount; i++) {
        c.fillRect(Math.floor(Math.random() * canv.width) + 1, Math.floor(Math.random() * canv.height) + 1, 10, 10);
    }
}

