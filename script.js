var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");
var random = document.querySelector(".random");
var radial = document.querySelector(".radial");
var linear = document.querySelector(".linear");
var left = document.querySelector(".left");
var up = document.querySelector(".up");
var right = document.querySelector(".right");
var down = document.querySelector(".down");
var topleft = document.querySelector(".topleft");
var topright = document.querySelector(".topright");
var bottomright = document.querySelector(".bottomright");
var bottomleft = document.querySelector(".bottomleft");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value + " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "inline-block";
	document.getElementById("radialDirection").style.display = "none";
}
function setGradientLeft() {
	body.style.background = "linear-gradient(to left, "
	+ color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value + " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "inline-block";
}
function setGradientTop() {
	body.style.background = "linear-gradient(to top, "
	+ color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value + " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "inline-block";
}
function setGradientBottom() {
	body.style.background = "linear-gradient(to bottom, "
	+ color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value + " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "inline-block";
}
function randomColours() {
	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}
function radialGradient() {
	body.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value+ " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "none";
	document.getElementById("radialDirection").style.display = "inline-block";
}
function radialTopLeft() {
	body.style.background = "radial-gradient(at top left," + color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value+ " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "none";
}
function radialTopRight() {
	body.style.background = "radial-gradient(at top right," + color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value+ " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "none";
}
function radialBottomRight() {
	body.style.background = "radial-gradient(at bottom right," + color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value+ " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "none";
}
function radialBottomLeft() {
	body.style.background = "radial-gradient(at bottom left," + color1.value + ", " + color2.value + ")";
	css.textContent = "Colour 1 = " + color1.value+ " : " + "Colour 2 = " + color2.value;
	document.getElementById("direction").style.display = "none";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColours);
radial.addEventListener("click", radialGradient);
linear.addEventListener("click", setGradient);
left.addEventListener("click", setGradientLeft);
up.addEventListener("click", setGradientTop);
right.addEventListener("click", setGradient);
down.addEventListener("click", setGradientBottom);
topleft.addEventListener("click", radialTopLeft);
topright.addEventListener("click", radialTopRight);
bottomright.addEventListener("click", radialBottomRight);
bottomleft.addEventListener("click", radialBottomLeft);

window.onload = randomColours();
