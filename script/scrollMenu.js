window.onscroll = function() {
	var header = document.querySelector('.header');
	var pageY = window.pageYOffset || document.documentElement.scrollBottom;
	var currentScroll = 0;
	var innerHeight = document.documentElement.clientHeight;

	if (pageY > innerHeight && pageY > currentScroll) {
		header.classList.add('header_fixed');
	} else {
		header.classList.remove('header_fixed')
	}
	console.log(pageY);
	console.log(currentScroll);
}