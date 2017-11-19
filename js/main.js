
// Random Number Genorator
function getRandomNumber(upper) {
	if (isNaN(upper)) {
		console.log("The argument \"" + upper + "\" that you entered into the getRandomNumber() function is not a number.")
	} else {
		var randomNumber = Math.floor(Math.random() * upper);
		return randomNumber;
	}
}

// Selects and displays the quote
function showQuote() {
	var randomNumber = getRandomNumber(quotes.length)
	var quote   = document.getElementById('quote');
	var credit   = document.getElementById('credit');
	quote.innerText = "\"" + quotes[randomNumber].text + "\"";
	credit.innerText = quotes[randomNumber].credit;
}

// Creates a matching random color for quote text, credit text, page backgrond, and button background 
function randomColor() {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.getElementById('quote').style.color = rgbColor;
	document.getElementById('credit').style.color = rgbColor;
	document.getElementById('quote-button').style.backgroundColor = rgbColor;
	document.getElementById('body').style.backgroundColor = rgbColor;
}

quotes = [
	{
	text: "1 blah blah",
	credit: "1 Some Dude"
	},
	{
	text: "2 blah blah",
	credit: "2 Some Dude"
	},
	{
	text: "3 blah blah",
	credit: "3 Some Dude"
	}
]





document.getElementById('quote-button').addEventListener('click', showQuote, false);
document.getElementById('quote-button').addEventListener('click', randomColor, false);



