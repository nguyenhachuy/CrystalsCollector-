var power = [];

$(`.crystal${i}`).on("click", function() {
	alert("yo");
});


// Populate power with randoms 
for(var i = 0; i < 4; i++){
	power.push(Math.floor((Math.random() * 12)));
}
