var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");
var random = document.querySelector(".random");
var radial = document.querySelector(".radial");

function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value + ", " + color2.value + ")";
	css.innerHTML = "Colour 1 = " + color1.value + " : " + "Colour 2 = " + color2.value;
}
function randomColours() {
	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}
function radialGradient() {
	body.style.background = "radial-gradient(" + color1.value + ", " + color2.value + ")";
	css.innerHTML = "Colour 1 = " + color1.value + " : " + "Colour 2 = " + color2.value;
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomColours);
radial.addEventListener("click", radialGradient);

window.onload = randomColours();