var button = document.querySelector('.Hamburger');
button.addEventListener('click', showHideMenu);



function showHideMenu() {
	var menu = document.querySelector('.menu'),
		main = document.querySelector('.main'),
		footer = document.querySelectorAll('.footer'),
		link = document.querySelectorAll('.menu__a');

	button.classList.toggle('change');
	menu.classList.toggle('close');
	main.classList.toggle('close');
	footer.forEach(function(element) {
		element.classList.toggle('close');
	});
	link.forEach(function(element) {
		element.addEventListener('click', function() {
			showHideMenu();
		});
	});

};

window.onresize = function() {
	var burger = document.querySelector('.Hamburger');
	var menu = document.querySelector('.menu');
	var menu__li = document.querySelectorAll('.menu__li');
	if (document.documentElement.clientWidth >= 1200) {
		burger.classList.add('close');
		menu.classList.remove('close');
	} else {
		burger.classList.remove('close');
		menu.classList.add('close');
	}
}