// Declaring Variables

var canvas = document.querySelector('canvas');
// Context
var c = canvas.getContext('2d');

// Resetting canvas dimensions
var innerWidth = window.innerWidth;
var innerHeight = window.innerHeight;

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
    x: undefined,
    y: undefined
};

var maxRadius = 100;
var minRadius = 10;

var colorArray = ['#fcba21', '#f05321', '#024da1', '#f072ac'];

window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 70 && mouse.x - this.x > -70 &&
                mouse.y - this.y < 70 && mouse.y - this.y > -70) {
            if (this.radius < maxRadius) {
                this.radius += 2;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    };
}

var circleArray = [];

function init() {
    circleArray = [];

    for (var i = 0; i < 800; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        // Velocity
        var dx = (Math.random() - 0.5) * 8;
        var dy = (Math.random() - 0.5) * 8;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
init();