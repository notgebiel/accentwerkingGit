const correct = 'Correct!';
const fout = 'Dit antwoord is fout, misschien is het eent typfout?';

function vraag1() {
	let userInput1 = document.getElementById('vraag1').value;
	userInput1 = userInput1.toLowerCase();
	//alert(userInput1);
	let antwoord1 = 'vesuvius'

	if (userInput1 === antwoord1) {
		document.getElementById('label1').innerHTML = correct;
		document.getElementById('label1').style.color = "#81FF38"
	}

	else {
		document.getElementById('label1').innerHTML = fout;
		document.getElementById('label1').style.color = "red";
	}
}

function vraag2() {
	let antwoord = 'rome';
	let userInput2 = document.getElementById
	('vraag2').value;
	userInput2 = userInput2.toLowerCase();

	if (userInput2 = antwoord) {
		document.getElementById('label2').innerHTML = correct;
		document.getElementById('label2').style.color = '#81FF38';
	}

	else {
		document.getElementById('label2').innerHTML = fout;
		document.getElementById('label2').style.color = 'red';
	}

}