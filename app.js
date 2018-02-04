$(function() {
	var clickCounter = 0;
	var numOfClicks = 0;
	var shuffledArray = [];
	var matchedPairs = 0;
	var firstCard;
	var firstCardImage;
	var secondCard;
	var secondCardImage;

	var cardsArray = [
		"images/1.jpg",
		"images/1.jpg",
		"images/2.jpg",
		"images/2.jpg",
		"images/3.jpg",
		"images/3.jpg",
		"images/4.jpg",
		"images/4.jpg",
		"images/5.jpg",
		"images/5.jpg",
		"images/6.jpg",
		"images/6.jpg",
		"images/7.jpg",
		"images/7.jpg",
		"images/8.jpg",
		"images/8.jpg",
		"images/9.jpg",
		"images/9.jpg",
		"images/10.jpg",
		"images/10.jpg",
		"images/11.jpg",
		"images/11.jpg",
		"images/12.jpg",
		"images/12.jpg"
	];

	var cardId = [
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24
	];

	//shuffle cards using Fisher-Yates algorithm
	function shuffle(array) {
		var random = array.length,
			temp,
			indexs;
		while (random) {
			index = Math.floor(Math.random() * random--);
			temp = array[random];
			array[random] = array[index];
			array[index] = temp;
		}
		return array;
	}

	shuffledArray = shuffle(cardsArray);

	//assign images to cards
	$(".back").each(function(index) {
		$(this)
			.addClass("image")
			.css("background-image", "url(" + shuffledArray[index] + ") ")
			.attr("id", cardId[index]);
	});

	//add event listener. limit clicks to only two at a time.
	$(".card").off("click");
	$(".card").on("click", function() {
		if (numOfClicks === 0) {
			clickCounter++;
			$("#clickcount").text(clickCounter);

			numOfClicks++;

			firstCard = $(this)
				.addClass("selected")
				.toggleClass("flipped");

			firstCardImage = $(this)
				.children("figure.back.image")
				.css("background-image");
		} else if (numOfClicks === 1) {
			clickCounter++;
			$("#clickcount").text(clickCounter);

			numOfClicks++;

			secondCard = $(this)
				.addClass("selected")
				.toggleClass("flipped");

			secondCardImage = $(this)
				.children("figure.back.image")
				.css("background-image");

			//check if the cards match
			if (firstCardImage === secondCardImage) {
				matchedPairs++;
				numOfClicks = 0;

				$(".selected")
					.removeClass("selected")
					.addClass("matched");

				//turn off event listener for matched cards
				$(".matched").off("click");

				firstCard = null;
				firstCardImage = null;
				secondCard = null;
				secondCardImage = null;
			} else {
				setTimeout(function() {
					$(".selected").removeClass("selected");
					$(".flipped").removeClass("flipped");

					numOfClicks = 0;
					firstCard = null;
					firstCardImage = null;
					secondCard = null;
					secondCardImage = null;
				}, 1200);
			}
		}

		if ($(".card.matched").length === 24) {
			console.log("Congratulations, you won!");
		}
	});
});
