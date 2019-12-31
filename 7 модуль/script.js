var my_obj = document.querySelector('.circle');

function my_alert() {
	alert('fhg');
}

function makeASquare(event) {
	this.style.borderRadius = "0";
	event.preventDefault();
}
function makeACircle(event) {
	this.style.borderRadius = "50%";
	event.preventDefault();
}
function generateColor(event) {
	return '#' + Math.floor(Math.random() * 16777216).toString(16);
	event.preventDefault();
}
function changeBackground(event) {
	this.style = "background: radial-gradient(circle at 65% 15%, " + generateColor() + ", " + generateColor() + ");";
	event.preventDefault();
}
function rotate(event) {
	var angle = Math.random() * 360;
	this.style = "transform: rotate(" + angle + "deg);";
	event.preventDefault();
}

my_obj.addEventListener('mouseover', makeACircle);
my_obj.addEventListener('mouseout', makeASquare);
my_obj.addEventListener('click', changeBackground);
my_obj.addEventListener('contextmenu', rotate);

// click		ГОТОВО
// dblcklick
// mouseover	ГОТОВО
// mouseout		ГОТОВО
// mouseenter
// mouseleave
// mouseup
// mousedown
// contextmenu	ГОТОВО