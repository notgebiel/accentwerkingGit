function setNotes() {
	let textarea = document.getElementById('textarea').value;
	localStorage.setItem('notes-cookie', textarea);
	//alert(localStorage.getItem('notes-cookie'));
	document.getElementById('notes-p').innerHTML = localStorage.getItem('notes-cookie');
}
if (localStorage.getItem('notes-cookie') !=  null) {
	document.getElementById('notes-p').innerHTML = localStorage.getItem('notes-cookie');
}
else {
	document.getElementById('notes-p').innerHTML = 'u hebt geen notities opgeslagen.'
}