function showYear() {
	var textYear = document.querySelector('.copyright__year');
	var date = new Date();
	var year = date.getFullYear();
	textYear.textContent = year;
}
window.onload = showYear();