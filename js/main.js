
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
	credit.innerText = "- " + quotes[quoteObject][randomNumber].credit;
}

// quotes object for storing all quotes according to their category 
var quotes = {
	wise: [
		{
			text: "Success is not final,\nfailure is not fatal:\nit is the courage\nto continue that counts.",
			credit: "Winston Churchill"
		},
		{
			text: "Kites rise highest against the wind - not with it.",
			credit: "Winston Churchill"
		},
		{
			text: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
			credit: "Winston Churchill"
		},
		{
			text: "Either write something worth reading or do something worth writing.",
			credit: "Benjamin Franklin"
		},
		{
			text: "Tell me and I forget.\nTeach me and I remember.\nInvolve me and I learn.",
			credit: "Benjamin Franklin"
		},
		{
			text: "An investment in knowledge pays the best interest.",
			credit: "Benjamin Franklin"
		},
		{
			text: "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
			credit: "Benjamin Franklin"
		},
		{
			text: "Half a truth is often a great lie",
			credit: "Benjamin Franklin"
		},
		{
			text: "The secret of getting ahead is getting started.",
			credit: "Mark Twain"
		},
		{
			text: "Patriotism is supporting your country all the time, and your government when it deserves it.",
			credit: "Mark Twain"
		},
		{
			text: "It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.",
			credit: "Mark Twain"
		}
	],
	funny: [
		{
			text: "I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.",
			credit: "Winston Churchill"
		},
		{
			text: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
			credit: "Winston Churchill"
		},
		{
			text: "The best argument against democracy is a five-minute conversation with the average voter.",
			credit: "Winston Churchill"
		},
		{
			text: "I know the world isn't fair, but why isn't it ever unfair in my favor?",
			credit: "Bill Watterson"
		},
		{
			text: "Always remember that you are absolutely unique. Just like everyone else.",
			credit: "Margaret Mead"
		},
		{
			text: "Happiness is having a large, loving, caring, close-knit family in another city.",
			credit: "George Burns"
		},
		{
			text: "When someone hands you a flyer, it's like they're saying here you throw this away.",
			credit: "Mitch Hedberg"
		},
		{
			text: "Fettucini alfredo is macaroni and cheese for adults.",
			credit: "Mitch Hedberg"
		},
		{
			text: "I would imagine that if you could understand Morse code, a tap dancer would drive you crazy.",
			credit: "Mitch Hedberg"
		},
		{
			text: "The depressing thing about tennis is that no matter how good I get, I'll never be as good as a wall.",
			credit: "Mitch Hedberg"
		}
	], 
	movie: [
		{
			text: "You’re gonna need a bigger boat",
			credit: "Jaws, 1975"
		},
		{
			text: "You talkin’ to me?",
			credit: "Taxi Driver, 1976"
		},
		{
			text: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
			credit: "The Princess Bride, 1987"
		},
		{
			text: "I’ll have what she’s having",
			credit: "When Harry Met Sally, 1989"
		},
		{
			text: "I’ll be back",
			credit: "The Terminator, 1984"
		},
		{
			text: "Yippie-ki-yay, mother f**ker!",
			credit: "Die Hard, 1988"
		},
		{
			text: "Leave the gun, take the cannoli",
			credit: "The Godfather, 1972"
		},
		{
			text: "I’m having an old friend for dinner",
			credit: "The Silence of the Lambs, 1991"
		},
		{
			text: "The Dude abides",
			credit: "The Big Lebowski, 1998"
		},
		{
			text: "That’ll do, pig, that’ll do",
			credit: "Babe, 1995"
		},
		{
			text: "Gentlemen, you can't fight in here! This is the war room!",
			credit: "Dr Strangelove, 1964"
		}
	]
};

// Event listeners both set to the same button, top is to display text, bottom is to display color
document.getElementById('quote-button').addEventListener('click', showQuote, false);
document.getElementById('quote-button').addEventListener('click', randomColor, false);



