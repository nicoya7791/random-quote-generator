/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//This function generates a random quote from the array in quotes.js
function getRandomQuote() {
	//generate random number to to used as index of the objet in quotes array.
	let randonNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randonNumber];
}

/*This funtion below generates a random color from an array quotes.js
I use an array of collor and loop through them with a random number.*/
function getRandomColor() {
	let rNum = Math.floor(Math.random() * color.length);
	return (document.body.style.backgroundColor = color[rNum]);
}

// This function returns the quotes information to the index.html
function printQuote() {
	let randomQuoteObject = getRandomQuote();
	let pQuote = `<p class="quote">${randomQuoteObject.quote}</p>
              <p class="source">${randomQuoteObject.source}`;
	// the following conditonal check for property in the object randomQuoteObject. If property exist, we add it to the quote to be printed.
	if (randomQuoteObject.citation) {
		pQuote += `<span class="citation">${randomQuoteObject.citation}</span>`;
	}

	if (randomQuoteObject.year) {
		pQuote += `<span class="year">${randomQuoteObject.year}</span>`;
	}
	if (randomQuoteObject.profession) {
		pQuote += `<span class="year">${randomQuoteObject.profession}</span>`;
	}
	pQuote += `</p>`;
	getRandomColor();
	return (document.getElementById("quote-box").innerHTML = pQuote);
}
//this code execute the function with a time delay of 5 seconds.
setInterval(getRandomColor, 5000);
setInterval(printQuote, 5000);

//send the quotes information to html when the button "show another quote is clicked"
document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);
