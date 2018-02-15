$(function() {
	var clickCounter = 0;
	var numOfClicks = 0;
	var shuffledArray = [];
	var firstCard;
	var firstCardImage;
	var secondCard;
	var secondCardImage;
	var bestScore = localStorage.getItem("bestScore");

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

	function setBestScore() {
		bestScore = bestScore || "-";
		$(".best-score").text(bestScore);
	}

	setBestScore();

	// shuffle cards using Fisher-Yates algorithm
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

	// assign images to card back
	$(".back").each(function(index) {
		$(this)
			.addClass("image")
			.css("background-image", "url(" + shuffledArray[index] + ") ");
	});

	// flip cards and add event listener. limit clicks to only two at a time.
	$(".card").on("click", function() {
		// ignore click if the card is currently flipped
		if ($(this).hasClass("flipped")) {
			return;
		}

		if (numOfClicks === 0) {
			clickCounter++;
			$(".clickcount").text(clickCounter);

			numOfClicks++;

			firstCard = $(this)
				.addClass("selected")
				.toggleClass("flipped");

			firstCardImage = $(this)
				.children("figure.back.image")
				.css("background-image");
		} else if (numOfClicks === 1) {
			clickCounter++;
			$(".clickcount").text(clickCounter);

			numOfClicks++;

			secondCard = $(this)
				.addClass("selected")
				.toggleClass("flipped");

			secondCardImage = $(this)
				.children("figure.back.image")
				.css("background-image");

			checkMatch(firstCardImage, secondCardImage);
		}
		checkWin();
	});

	function checkMatch(firstCardImage, secondCardImage) {
		if (firstCardImage === secondCardImage) {
			numOfClicks = 0;

			$(".selected")
				.removeClass("selected")
				.addClass("matched");

			$(".matched").off("click");

			firstCard = null;
			firstCardImage = null;
			secondCard = null;
			secondCardImage = null;
			flippedCards = [];
		} else {
			setTimeout(function() {
				$(".selected").removeClass("selected");
				$(".flipped").removeClass("flipped");

				numOfClicks = 0;
				firstCard = null;
				firstCardImage = null;
				secondCard = null;
				secondCardImage = null;
				flippedCards = [];
			}, 1000);
		}
	}

	function checkBestScore() {
		if(bestScore === "-") {
			bestScore = 100;
		}
		if(clickCounter < bestScore) {
			localStorage.setItem("bestScore", clickCounter);
			bestScore = localStorage.getItem("bestScore");
			$(".best-score").text(bestScore);
		}
	}

	function checkWin() {
		if ($(".card.matched").length === 24) {
			setTimeout(function() {
				$("#scoreboard").hide();
				$(".board").hide();
				checkBestScore();
				$(".finish-game").show();
			}, 1200);
		}
	}
});