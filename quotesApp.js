var generateQuote = document.querySelector("#quotesButton");
var body = document.getElementsByTagName("BODY")[0];
var quote = document.querySelector("#result");
var author_ = document.querySelector("#author");
generateQuote.addEventListener("click", function () {
	body.style.background = getRandomColor();
});

var proxyUrl = "https://cors-anywhere.herokuapp.com/";

var targetUrl = `https://type.fit/api/quotes`;
10;
const getQuotes = () => {
	return fetch(targetUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			var randomNum = Math.floor(Math.random() * 1643);
			quote.innerHTML = data[randomNum]["text"];
			if (data[randomNum]["author"] == null || undefined) {
				author_.innerHTML = "&nbsp;- " + "anonymous";
			}
			author_.innerHTML = "&nbsp;- " + data[randomNum]["author"];
		});
};
generateQuote.addEventListener("click", getQuotes);

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
