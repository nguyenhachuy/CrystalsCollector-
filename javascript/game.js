var power = [];
var score = 0;


function updateScore(value) {
	$(".total-score").text(value);
}

function setupGame() {
	$(".score").text(getRandomInt(19, 120));
}

function setupGem() {
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
	var score = parseInt($(".total-score").text());
	var goal = parseInt($(".score").text());
	//Check losing condition 
	if(score > goal) return -1;
	//Check winning condition
	else if(score === goal) return 1;
	//Indicates game is still going on
	else return 0;
}

$(document).ready(function() {
	setupGame();
	setupGem();
	//Adding listeners to crystals
	$(`.gem`).on("click", function() {
		//This is how to get the value fo the crystal
		var value = $(this).data("value");
		score += value;
		updateScore(score);
		console.log(checkGameCondition());		
	});


});