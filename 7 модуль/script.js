var my_obj = document.querySelector('.circle');
var container = document.querySelector('.container');

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
function getdate() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	
	var day = date.getDate();
	return year + "." + month + '.' + day;
}
function showDate() {
	this.textContent = getdate();
}
function discardСhanges() {
	this.textContent = " ";
	this.style = " ";
}

my_obj.addEventListener('mouseover', makeACircle);
my_obj.addEventListener('mouseout', makeASquare);
my_obj.addEventListener('click', changeBackground);
my_obj.addEventListener('contextmenu', rotate);
my_obj.addEventListener('mouseenter', showDate);
my_obj.addEventListener('dblclick', discardСhanges);



// click		ГОТОВО
// dblcklick	ГОТОВО
// mouseover	ГОТОВО
// mouseout		ГОТОВО
// mouseenter	ГОТОВО
// mouseleave
// mouseup
// mousedown
// contextmenu	ГОТОВО