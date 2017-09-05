// Declaring Variables
var canvas = document.querySelector('canvas');
// Context
var c = canvas.getContext('2d');

// Resetting canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "rgba(255, 0, 0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.5)";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.5)";
c.fillRect(300, 300, 100, 100);

// Lines

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

// Arcs / Circles

c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

colors = ["red", "blue", "purple", "pink", "green"];

for (var i=0; i<10; i++) {
    c.beginPath();
    c.arc(300 + (i * 30), 300, 30, 0, Math.PI * 2, false);
    c.strokeStyle = colors[Math.floor(Math.random() * 5)];
    c.stroke();
    c.beginPath();
    c.arc(300, 300 + (i * 30), 30, 0, Math.PI * 2, false);
    c.strokeStyle = colors[Math.floor(Math.random() * 5)];
    c.stroke();
    c.beginPath();
    c.arc(300 - (i * 30), 300, 30, 0, Math.PI * 2, false);
    c.strokeStyle = colors[Math.floor(Math.random() * 5)];
    c.stroke();
}