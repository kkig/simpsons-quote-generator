const quoteButton = document.querySelector('.quoteButton');
const endpoint = 'https://thesimpsonsquoteapi.glitch.me/quotes';

const getQuote = () => {
	fetch(endpoint)
		.then(response => {
			return response.json();
		})
		.then(data => {
			displayQuote(data[0].quote);
			displayChara(data[0].character);
		})
		.catch(() => {
			console.log('An error has occured.')
		})
};

//display data
const displayQuote = (quote) => {
	const quoteText = document.querySelector('.quateText');
	quoteText.textContent = quote;
};

const displayChara = (character) => {
	const quoteCha = document.querySelector('.quoteCha');
	quoteCha.textContent = character + ':';
};

quoteButton.addEventListener('click', getQuote);



/*
quoteButton.onclick = function getQuote() {
	fetch(endpoint)
		.then(responce => {
			return responce.json();
		})
		.then(data => {
			displayQuote(data[0].quote);
		})
}
*/
