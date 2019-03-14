$(document).ready(function(){
var magic8Ball = {};

magic8Ball.listOfAnswers = ["No", "Yes", "For sure", "I don't think so", "Of course", "What do YOU think?", "Maybe tomorrow", "Be more specific", "My sources tell me no", "My sources tell me yes"];

magic8Ball.askQuestion = function(question){
	var randomNumber = Math.random();
    var randomNumberForListOfAnswers = randomNumber*this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumberForListOfAnswers);
    var answer = this.listOfAnswers[randomIndex];
$("#8ball").effect("shake");
$("#answer").text(answer);
$("#answer").fadeIn(4000);
	console.log(question);
    console.log(answer);
};

var onClick = function() {
$("#answer").hide();
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
var questionButton = prompt("Give me a yes/no question");

magic8Ball.askQuestion(questionButton);
   };

$("#questionButton").click(onClick);
	});
