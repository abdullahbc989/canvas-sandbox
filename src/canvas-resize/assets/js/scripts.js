// Declaring Variables
var canvas = document.querySelector('canvas');
// Context
var c = canvas.getContext('2d');

// Resetting canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillRect(100, 100, 100, 100);