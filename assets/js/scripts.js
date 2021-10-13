function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}

function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}

function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("Commonly used data types DO NOT include:", ["Strings", "Booleans", "Alerts", "Number"], "Alerts"),
	new Question("The condition in an if/else statement is enclosed within _____.", ["Quotation Marks", "Curly Brackets", "Square Brackets ", "Parenthesis"], "Parenthesis"),
	new Question("    question: 'Arrays in JavaScript can be used to store _____.", ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"], "1All of the Above"),
	new Question("String values must be enclosed within _____ when being assigned to variables.", ["Commas", "Quotation Marks", "Curly Brackets", "Parenthesis"], "Quotation Marks"),
  new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "Terminal", "For Loops", "console.log"], "console.log"),
];

var quiz = new Quiz (questions);

populate();


//QUIZ TIMER
var total_seconds = 60 * 1;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);
var timer;

function CheckTime() {
  document.getElementById("timer").innerHTML = 'Time Left: ' + c_seconds + ' seconds ';

  if (total_seconds <= 0) {
    score();
  } else {
    total_seconds = total_seconds - 1;
    c_minutes = parseInt(total_seconds / 60);
    c_seconds = parseInt(total_seconds % 60);
    timer = setTimeout(CheckTime, 1000);
  }
}
timer = setTimeout(CheckTime, 1000);

function score() {
  // stop timer
  clearInterval(timer);
}