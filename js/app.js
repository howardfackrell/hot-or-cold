
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

  	$("#guessButton").click(function(event) {
  		event.preventDefault();
  		incrementGuesses();
  	});

});


var incrementGuesses = function() {
	var guessesElement = $("#count")
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
}

var newGame = function() {
	resetGuesses();	
}

