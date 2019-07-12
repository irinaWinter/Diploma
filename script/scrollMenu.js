var currentScroll = 0;

// function getScroll() {	
// 	var scroll = 0;
// 	return function() {
// 		return scroll = currentScroll;
// 	}
// }

window.onscroll = function() {
	var header = document.querySelector('.header');
	var innerHeight = document.documentElement.clientHeight;
	// var lastScroll = getScroll()();
	var lastScroll = currentScroll;
	currentScroll = window.pageYOffset || document.documentElement.scrollBottom;

	if (currentScroll > innerHeight && currentScroll < lastScroll) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed')
	}
}