
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
	secret = 50;
}

var clearGuess = function() {
	$("#userGuess").val("");
}

var disableSubmit = function() {
	$("form").off('click', '#guessButton');
}

