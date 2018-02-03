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
			.css("background-image", "url(" + shuffledArray[index] + ") ");
	});

	//add event listener. limit clicks to only two at a time.
	$(".card").off("click");
	$(".card").on("click", function() {
		if (numOfClicks === 0) {
			clickCounter++;
			$("#clickcount").html(clickCounter);

			numOfClicks++;
			firstCard = $(this)
				.addClass("selected")
				.toggleClass("flipped");

			firstCardImage = $(this)
				.children("figure.back.image")
				.css("background-image");
		} else if (numOfClicks === 1) {
			clickCounter++;
			$("#clickcount").html(clickCounter);

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

				firstCard = null;
				firstCardImage = null;
				secondCard = null;
				secondCardImage = null;
			} else {
				setTimeout(function() {
					$(".selected").removeClass("selected");
					$(".flipped").removeClass("flipped");
				}, 1200);

				numOfClicks = 0;
				firstCard = null;
				firstCardImage = null;
				secondCard = null;
				secondCardImage = null;
			}
		}

		if (matchedPairs === 12) {
			alert("Congratulations, you won! Play again?");
		}
	});
});
