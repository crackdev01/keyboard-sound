//Init setup
let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Variables
let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

let colors = [
    "#468966",
    "#FFF0A5",
    "#FFB03B",
    "#B64926",
    "#8E2800"
];

let red = ["#FF0000"];

let radius = 30;
let gravity = .5;
let friction = 0.99;
let floor = .7;
let num = 20;
let rad1 = 4;
let rad2 = 20;

//Event Listners
addEventListener("mousemove", function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    init();
});

addEventListener("click", function() {
    ballArray = [];
})
addEventListener("keyup", function(e) {
    const keyup = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //key R
    if (e.keyCode === 82) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        lowGravity();
        
        init();        
    }
    //key T
    if (e.keyCode === 84) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        highGravity();
        
        init();        
    }
    //key Y
    if (e.keyCode === 89) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        lowGravity();
        
        init();        
    }
    //key U
    if (e.keyCode === 85) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        lowGravity();
        
        init();        
    }
    //key I
    if (e.keyCode === 73) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        lowGravity();
        
        init();        
    }
    //key O
    if (e.keyCode === 79) {
        if (ballArray.length >= 100) {
            ballArray.length = 10;
        }
        num = 1;
        rad1 = 100;
        rad2 = 100;
        gravity = 1.5;
        friction = .3;

        init();
    }
    //key P
    if (e.keyCode === 80) {
        if (ballArray.length >= 100) {
            ballArray.length = 15;
        }
        num = 5;
        rad1 = 50;
        rad2 = 100;
        gravity = .3;
        friction = .99;
        
        init();        
    }
    //key A
    if (e.keyCode === 65) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        lowGravity();
        
        init();        
    }
    //key S
    if (e.keyCode === 83) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        lowGravity();
        
        init();        
    }
    //key D
    if (e.keyCode === 68) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        highGravity();
        
        init();        
    }
    //key F
    if (e.keyCode === 70) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        highGravity();
        
        init();        
    }
    //key G
    if (e.keyCode === 71) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        highGravity();
        
        init();        
    }
    //key H
    if (e.keyCode === 72) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        lowGravity();
        
        init();        
    }
    //key J
    if (e.keyCode === 74) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        lowNum();
        highGravity();
        
        init();        
    }
    //key K
    if (e.keyCode === 75) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        lowGravity();
        
        init();        
    }
    //key L
    if (e.keyCode === 76) {
        if (ballArray.length >= 100) {
            ballArray.length = 75;
        }
        highNum();
        highGravity();
        
        init();        
    }
})
function lowNum() {
    num = 3;
    rad1 = 25;
    rad2 = 35;
}
function highNum() {
    num = 50;
    rad1 = 5;
    rad2 = 20;
}
function lowGravity() {
    gravity = .2;
    friction = .99;
}
function highGravity() {
    gravity = .7;
    friction = .8;
}

//Utility Functions
function randomIntFromRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomColor(x) {
    return x[Math.floor(Math.random() * x.length)];
}

//Objects
function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction;
        } else {
            this.dy += gravity;
        }

        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius <= 0) {
            this.dx = -this.dx * floor;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath(); 
    };
}

//Implementation
let ball;
let ballArray = [];

function init() {
    
    for (let i = 0; i < num; i++) {
        let radius = randomIntFromRange(rad1, rad2);
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(0, canvas.height - radius);
        let dx = randomIntFromRange(-2, 2);
        let dy = randomIntFromRange(-2, 2);
        let color = randomColor(colors);
        ballArray.push(new Ball(x, y, dx, dy, radius, color));
    }
}

//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update();
    }
    
}

init();
animate();


/*************[Play key , Animate key]***************/
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
