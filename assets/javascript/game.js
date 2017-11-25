//on load show character options
	//each character should have their name and HP displayed in their boxes
	//wait for player to choose a character
//when a player chooses a character
	//remove the remaining characters to the enemies to attack section
	//wait for player to choose enemy to fight
//when player chooses enemy to fight
	//move enemy to defender section
	//wait for for player to push fight button
//when player clicks fight button
	// message displays the amount of each attack
	//player's attack power reduces defender's hp
	//defender's counter attack power reduces player's hp
	//player's attack power is added by its base each time attack button is clicked
	//counter attack power does not change
//if player loses
	//message displays Game Over
	//button will appear to restart game
//if player wins
	//defender disappears
	//message displays you have defeated enemy and now you may choose to fight another enemy
	//players hp and attack power does NOT reset
//if attack button is clicked before player chooses an enemey
	//message displays no enemies chosen
//if all enemies have been defeated
	//display message You Won Game Over

var enemyLuke = "<div class='inner' id='enemy-1'>Name<img src='assets/images/luke.jpg'><div id='player-1-hp'></div></div>"

function playerChoice1(){
$('#player-2').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#player-3').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#player-4').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));

};
function enemyChoice1(){
$('#enemy-1').attr('id', 'defender-1');
$("#defender").append($('#defender-1'));
// $("#enemy").append($('#player-3'));
// $("#enemy").append($('#player-4'));
};

$(document).ready(function(){


// $("#enemy-1").hide(0);
// $("#enemy-2").hide(0);
// $("#enemy-3").hide(0);
// $("#enemy-4").hide(0);

$("#player-1").click(playerChoice1);
$("#enemy").on("click", "#enemy-1", enemyChoice1);





});