/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//This function generates a random quote from the array in quotes.js
function getRandomQuote() {
	//Here i assign the length of the array to quote array.
	let quoteLength = quotes.length - 1;
	let randonNumber = Math.floor(Math.random() * quoteLength + 1);
	return quotes[randonNumber];
}

/*This funtion below generates a random color from an array quotes.js
I manually picked the color so I know they are not too bright and makes the quote hard to read.*/
function getRandomColor() {
	let rNum = Math.floor(Math.random() * (color.length - 1) + 1);
	return (document.body.style.backgroundColor = color[rNum]);
}
setInterval(getRandomColor, 5000);
setInterval(printQuote, 5000);

// This function prints the quotes information to the index.html
function printQuote() {
	let randomQuoteObject = getRandomQuote();
	let pQuote = `<p class="quote">${randomQuoteObject.quote}</p>
              <p class="source">${randomQuoteObject.source}`;

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

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);
