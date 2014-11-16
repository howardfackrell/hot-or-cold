
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(400);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(400);
  	});

  	$(".new").click(function(event) {
  		event.preventDefault();
  		newGame();
  	});

  	newGame();

});

var secret = -1;

var incrementGuesses = function() {
	var guessesElement = $("#count");
	var guesses = guessesElement.html();
	guesses = +guesses;
	guesses++;
	guessesElement.html(guesses);
}

var resetGuesses = function() {
	$("#count").html("0");
}

var makeGuess = function() {
	incrementGuesses();
	var guess = $("#userGuess").val();
	guess = +guess;
	if (guess === secret) {
		disableSubmit();
		alert("done");
	}
	appendGuess(guess);
	clearGuess();
}

var newGame = function() {
	resetGuesses();	
	generateSecret();
	
	$("form").on('click', '#guessButton', function(event) {
  		event.preventDefault();
  		makeGuess();
  	});
}

var generateSecret = function() {
	secret = getRandomInt(1,  100);
}

var clearGuess = function() {
	$("#userGuess").val("");
}

var disableSubmit = function() {
	$("form").off('click', '#guessButton');
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function feedback(feedback) {
	$("#feedback").html(feedback);
}

function appendGuess(guess) {
	$("#guessList").append($("<li>" + guess + "</li>"));
}
