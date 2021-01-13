/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
//===>array is in quotes.js
// let html = document.querySelector(".object");

/***
 * `getRandomQuote` function
 ***/
//
function getRandomQuote() {
	let a = quotes.length - 1;
	let randonNumber = Math.floor(Math.random() * a + 1);
	return quotes[randonNumber];
}
/***
 * getRandomColor function
 ***/

function getRandomColor() {
	let rNum = Math.floor(Math.random() * (color.length - 1) + 1);
	return (document.body.style.backgroundColor = color[rNum]);
}
/***
 * `printQuote` function
 ***/
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
printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
	.getElementById("load-quote")
	.addEventListener("click", setInterval(printQuote, 5000), true);
