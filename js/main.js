
// Random Number Genorator
function getRandomNumber(upper) {
	if (isNaN(upper)) {
		console.log("The argument \"" + upper + "\" that you entered into the getRandomNumber() function is not a number.");
	} else {
		var randomNumber = Math.floor(Math.random() * upper);
		return randomNumber;
	}
}

// Creates a matching random color for quote text, credit text, page backgrond, and button background 
function randomColor() {
	// green color max parameter taken down from 256 to 156 to remove undesirable colors
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 156 );
	var blue = Math.floor(Math.random() * 256 );
	var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	document.getElementById('quote').style.color = rgbColor;
	document.getElementById('credit').style.color = rgbColor;
	document.getElementById('quote-button').style.backgroundColor = rgbColor;
	document.getElementById('body').style.backgroundColor = rgbColor;
}

// Quote type selection
function quoteType() {
	// variable for storing radio selection
	var quoteType;
	// selects all elements with class "quote-radio"
	var quoteTypeElements = document.getElementsByClassName("quote-radio");
	// loop through all elements with class="userGender"
	for(var i = 0; i < quoteTypeElements.length; i++) {
		// if the radio was selected by the user, do this
		if(quoteTypeElements[i].checked) {
			// set value of answer to the value in the radio item
			quoteType = quoteTypeElements[i].value;
		}
	}
	return quoteType;
}

// Used to randomly choose a quote category if all is the selection
function allQuotes() {
	var randomNumber = getRandomNumber(3);
	if (randomNumber === 0) {
		return "wise";
	} else if (randomNumber === 1) {
		return "funny";
	} else {
		return "movie";
	}
}

// Selects and displays the quote
function showQuote() {
	// Sets a variable with the category object (i.e. wise) in quotes object, that was specified by radio selection
	var quoteObject = quoteType();
	// If 'all' is the selected category then the variale is randaomly set using the allQuotes()
	if (quoteObject === "all") {
		quoteObject = allQuotes();
	}
	// variable used to select a random quote from the quote object
	var randomNumber = getRandomNumber(quotes[quoteObject].length);
	var quote   = document.getElementById('quote');
	var credit   = document.getElementById('credit');
	// sets the text of the h1 with id 'quote' to the specified object in the quotes and randonmly chooses one its entries
	quote.innerText = "\"" + quotes[quoteObject][randomNumber].text + "\"";
	// does the same as above but for the corresponding p tag with id 'credit'
	credit.innerText = quotes[quoteObject][randomNumber].credit;
}

// quotes object for storing all quotes according to their category 
var quotes = {
	wise: [
		{
			text: "An investment in knowledge pays the best interest.",
			credit: "Benjamin Franklin"
		},
		{
			text: "I know the world isn't fair, but why isn't it ever unfair in my favor?",
			credit: "Bill Watterson"
		},
		{
			text: "Tell me and I forget.\nTeach me and I remember.\nInvolve me and I learn.",
			credit: "Benjamin Franklin"
		},
		{
			text: "Success is not final,\nfailure is not fatal:\nit is the courage\nto continue that counts.",
			credit: "Winston Churchill"
		}
	],
	funny: [
		{
			text: "1 funny",
			credit: "1 funny credit"
		},
		{
			text: "2 funny",
			credit: "2 funny credit"
		},
		{
			text: "3 funny",
			credit: "3 funny credit"
		},
		{
			text: "4 funny",
			credit: "4 funny credit"
		}
	], 
	movie: [
		{
			text: "1 movie",
			credit: "1 movie credit"
		},
		{
			text: "2 movie",
			credit: "2 movie credit"
		},
		{
			text: "3 movie",
			credit: "3 movie credit"
		},
		{
			text: "4 movie",
			credit: "4 movie credit"
		}
	]
};

// Event listeners both set to the same button, top is to display text, bottom is to display color
document.getElementById('quote-button').addEventListener('click', showQuote, false);
document.getElementById('quote-button').addEventListener('click', randomColor, false);



