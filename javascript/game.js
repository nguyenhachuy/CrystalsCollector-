var power = [];
var totalScore = 0;
var wins = 0;
var losses = 0;

function updateScore() {
	$(".total-score").text(totalScore);
	$(".win").text(wins);
	$(".loss").text(losses);
}

function setupGame() {
	$(".score").text(getRandomInt(19, 120));
}

function setupGem() {

	power = [];
	// Populate power with randoms 
	for(var i = 0; i < 4; i++){
		power.push(getRandomInt(1,12));
		//Attach values dynamically
		$(`.crystal-${i}`).data("value", power[i]);
	}

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function checkGameCondition() {
	var goal = parseInt($(".score").text());
	//Check losing condition 
	if(totalScore > goal) return -1;
	//Check winning condition
	else if(totalScore === goal) return 1;
	//Indicates game is still going on
	else return 0;
}

function updateGameUI() {
	var condition = checkGameCondition();
	switch(condition) {
		case -1:
			losses++;
			totalScore = 0;
			updateScore();
			setupGame();
			setupGem();
			alert("You lost!");
			break;
		case 0:
			updateScore();
			break;
		case 1:
			wins++;
			totalScore = 0;
			updateScore();
			setupGame();
			setupGem();
			alert("You win!");
			break;
	}
}

$(document).ready(function() {
	setupGame();
	setupGem();
	//Adding listeners to crystals
	$(`.gem`).on("click", function() {
		//This is how to get the value fo the crystal
		var value = $(this).data("value");
		totalScore += value;
		updateGameUI();
	});


});