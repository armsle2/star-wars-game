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
var lukeHP = 120
var quiGonHP = 150
var darthMaulHP = 175
var anakinHP = 250

function playerChoice1(){
$('#player-2').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#player-3').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#player-4').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));

};
function playerChoice2(){
$('#player-1').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#player-3').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#player-4').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));

};
function playerChoice3(){
$('#player-1').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#player-2').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#player-4').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));

};
function playerChoice4(){
$('#player-1').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#player-2').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#player-3').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));

};


function enemyChoice1(){
$('#enemy-1').attr('id', 'defender-1');
$("#defender").html($('#defender-1'));

};
function enemyChoice2(){
$('#enemy-2').attr('id', 'defender-1');
$("#defender").html($('#defender-1'));

};
function enemyChoice3(){
$('#enemy-3').attr('id', 'defender-1');
$("#defender").html($('#defender-1'));

};


$(document).ready(function(){
$("#player-1-hp").html(lukeHP);
$("#player-2-hp").html(quiGonHP);
$("#player-3-hp").html(darthMaulHP);
$("#player-4-hp").html(anakinHP);

// $("#enemy-1").hide(0);
// $("#enemy-2").hide(0);
// $("#enemy-3").hide(0);
// $("#enemy-4").hide(0);

// $("#player-1").click(playerChoice1);
// $("#player-2").click(playerChoice2);
$("#player").on("click", "#player-1", playerChoice1);
$("#player").on("click", "#player-2", playerChoice2);
$("#player").on("click", "#player-3", playerChoice2);
$("#player").on("click", "#player-4", playerChoice2);

// $("#player-3").click(playerChoice3);
// $("#player-4").click(playerChoice4);
$("#enemy").on("click", "#enemy-1", enemyChoice1);
$("#enemy").on("click", "#enemy-2", enemyChoice2);
$("#enemy").on("click", "#enemy-3", enemyChoice3);





});