var dots = document.querySelectorAll('.dots__item');
var work = document.querySelectorAll('.portfolio__item');

for (var i = 0; i < dots.length; i++) {
	var dot = dots[i];
	
	dot.onclick = function() {
		console.log(el);
	}
}