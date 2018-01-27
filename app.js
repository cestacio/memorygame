var gameBoard = "#cards";
var counter = 0;
var cardOpened = "";
var imageOpened = "";
var imageFound = 0;

var cards = [
    "https://i.imgur.com/Vcz4rtzundefined.gif?2",
    "https://i.imgur.com/1EBEoGxundefined.png?1",
    "https://i.imgur.com/cQ9kl0kundefined.jpg?1",
    "https://i.imgur.com/3IBqx9cundefined.jpg?1",
    "https://i.imgur.com/X7iddbPundefined.jpg?1",
    "https://i.imgur.com/wYGcIr2undefined.jpg",
    "https://i.imgur.com/ubGixv2undefined.jpg?1",
    "https://i.imgur.com/HcSbU6Pundefined.jpg?1",
    "https://i.imgur.com/LcecYneundefined.jpg?1",
    "https://i.imgur.com/ScLbTqCundefined.png?1",
    "https://i.imgur.com/H4caeX8undefined.png",
    "https://i.imgur.com/yZnjsuDundefined.jpg?1",
    "https://i.imgur.com/Vcz4rtzundefined.gif?2",
    "https://i.imgur.com/1EBEoGxundefined.png?1",
    "https://i.imgur.com/cQ9kl0kundefined.jpg?1",
    "https://i.imgur.com/3IBqx9cundefined.jpg?1",
    "https://i.imgur.com/X7iddbPundefined.jpg?1",
    "https://i.imgur.com/wYGcIr2undefined.jpg",
    "https://i.imgur.com/ubGixv2undefined.jpg?1",
    "https://i.imgur.com/HcSbU6Pundefined.jpg?1",
    "https://i.imgur.com/LcecYneundefined.jpg?1",
    "https://i.imgur.com/ScLbTqCundefined.png?1",
    "https://i.imgur.com/H4caeX8undefined.png",
];

/* load images
$(cards).each(function() {
	var image = $("<img />").attr("src", this);
});*/

// click start new game

// shuffle cards
function shuffleCards() {
    var randomIndex = 0;
    var temp = 0;

    for (var i = 0; i < cards.length; i++) {
        randomIndex = Math.floor(Math.random() * i);
        temp = cards[i];
        cards[i] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    assignCards();
}

function assignCards() {
    $('.card').each(function(index) {
        $(this).attr(data - card - )
    })
}

// flip card
function flipCard() {}

// keep track of number of clicks

// store lowest scoring game in local storage so that players can see record of 
// best game played

// create newGame button
function newGame() {
    shuffleCards();
    $(gameBoard + " div img").hide();
    $(gameBoard + " div").css("visibility", "visibile");
}

