var gameBoard = "#cards";
var counter = 0;
var cardOpened = "";
var imageOpened = "";
var imageFound = 0;

var cardValues = [
"https://i.imgur.com/yZnjsuD.jpg?1",
"https://i.imgur.com/H4caeX8.png",
"https://i.imgur.com/wYGcIr2.jpg"
"https://i.imgur.com/ubGixv2.jpg?1",
"https://i.imgur.com/HcSbU6P.jpg?1",
"https://i.imgur.com/cQ9kl0k.jpg?1",
"https://i.imgur.com/3IBqx9c.jpg?1",
"https://i.imgur.com/X7iddbP.jpg?1",
"https://i.imgur.com/ScLbTqC.png?1",
"https://i.imgur.com/LcecYne.jpg?1",
"https://i.imgur.com/1EBEoGx.png?1",
"https://i.imgur.com/Vcz4rtz.gif?1"
];

// load images
$(cardValues).each(function() {
	var image = $('<img />').attr('src', this);
});

// create newGame button
function newGame() {
	shuffleCards();
	$(gameBoard + " div img").hide();
	$(gameBoard + " div").css("visibility", "visibile");


}

// flip card
function flipCard() {

}


// randomize array
function randomize(max, min) {
	return Math.round(Math.random() * (max - min) + min);
}

// shuffle cards
function shuffleCards() {
	var currentIndex = cardValues.length, temp, randomIndex;

	while(0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= -1;

		temp = cardValues[currentIndex];
		cardValues[currentIndex] = cardValues[randomIndex];
		cardValues[randomIndex] = temp;

	}
	return cardValues;
}
