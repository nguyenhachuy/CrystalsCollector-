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
	$(".score").text(value);
}
// Populate power with randoms 
for(var i = 0; i < 4; i++){
	power.push(Math.floor((Math.random() * 12)));
	//Attach values dynamically
	$(`.crystal-${i}`).data("value", power[i]);
}
