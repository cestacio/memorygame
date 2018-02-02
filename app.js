$(function() {
    var clicks = 0;
    var shuffledArray = [];

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
    $(".card").each(function(index) {
        $(this)
            .addClass("image")
            .css("background-image", "url(" + shuffledArray[index] + ") ");
    });

    //hide image and only show when clicked

    // add event listener and update count for each click
    $(".card").on("click", function() {
        $("#clickcount").html(clicks++);
        $(this).fadeOut(500, function() {
            $(this).fadeIn(500);
        });
    });
});
