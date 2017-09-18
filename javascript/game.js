var power = [];
var score = 0;
$(`.gem`).on("click", function() {
	//This is how to get the value fo the crystal
	var value = $(this).data("value");
	console.log(value);
	score += value;
	updateScore(score);
});


function updateScore(value) {
	$(".total-score").text(value);
}
// Populate power with randoms 
for(var i = 0; i < 4; i++){
	power.push(getRandomInt(1,12));
	//Attach values dynamically
	$(`.crystal-${i}`).data("value", power[i]);
}

function setupGame() {
	$(".score").text(getRandomInt(19, 120));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

$(document).ready(function() {
	setupGame();
});