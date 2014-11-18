
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
var lastGuess = -1;

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

var provideFeedback = function(guess) {	
	guess = +guess;
	if (guess == secret) {
		disableSubmit();
		feedback("That's it.  Hit 'New Game' to play again.");
	} else if (guess < secret) {
		feedback(previous(lastGuess, guess, secret) + "You're too low.");
	} else {
		feedback(previous(lastGuess, guess, secret) + "You're too high.")
	}
}

function previous(lastGuess, guess, secret) {
	var lastOne = Math.abs(secret - lastGuess);
	var thisOne = Math.abs(secret - guess);
	var feedback = "Getting colder.  ";
	if (thisOne < lastOne) {
		feedback = "Getting warmer.  ";
	} 
	if (lastGuess < 0) {
		feedback = "";
	}
	return feedback;
}

var validInput = function(n) {
	var re=/^[0-9]+$/;
	return re.test(n);
}

var makeGuess = function() {
	var guess = $("#userGuess").val();
	if (validInput(guess)) {		
		incrementGuesses();
		provideFeedback(guess);
		appendGuess(guess);
		clearGuess();
		lastGuess = +guess;
	} else {
		feedback("Please enter a number from 1 - 100");
	}
}

var newGame = function() {
	resetGuesses();	
	generateSecret();
	
	$("form").on('click', '#guessButton', function(event) {
  		event.preventDefault();
  		makeGuess();
  	});

  	clearGuesses();
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

function clearGuesses() {
	$("#guessList").html("");
}
