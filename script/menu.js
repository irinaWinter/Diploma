var button = document.querySelector('.Hamburger');
button.addEventListener('click', showHideMenu);



function showHideMenu() {
	var menu = document.querySelector('.menu'),
		main = document.querySelector('.main'),
		footer = document.querySelectorAll('.footer');

	menu.classList.toggle('close');
	main.classList.toggle('close');
	footer.forEach(function(element) {
		element.classList.toggle('close');
	});
};