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

var luke = {
	hp: 120,
	ap: 20,
	nap: 20,
	cap: 30,
}
var quiGon = {
	hp: 150,
	ap: 8,
	nap: 8,
	cap: 25,
}

var darthMaul = {
	hp: 175,
	ap: 11,
	nap: 11,
	cap: 24,
}

var anakin = {
	hp: 250,
	ap: 15,
	nap: 15,
	cap: 25,

}

var player = {}
var opponent = {}
var lightsaber1 = new Audio('assets/sounds/lightsaber1.wav');
var lightsaber2 = new Audio('assets/sounds/lightsaber2.wav');
var lightsaberOn = new Audio('assets/sounds/lightsaber-on.wav');
var gameOver = new Audio('assets/sounds/star-wars-game-over-music.wav');
var clickCount = 0;

function playerChoice1(){
// console.log($('#character-1').data().hp);
$('#character-1-hp').attr('id', 'playerhp');
$('#character-2').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#character-3').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));
$('#character-4').attr('id', 'enemy-4');
$("#enemy").append($('#enemy-4'));
player = luke;
console.log(player.hp);
console.log(player.nap);
console.log("-------------");
lightsaberOn.play();
youWon();

};
function playerChoice2(){
$('#character-2-hp').attr('id', 'playerhp')
$('#character-1').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#character-3').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));
$('#character-4').attr('id', 'enemy-4');
$("#enemy").append($('#enemy-4'));
player = quiGon;
console.log(player.hp);
console.log(player.nap);
console.log("-------------");
lightsaberOn.play();



};
function playerChoice3(){
$('#character-3-hp').attr('id', 'playerhp')
$('#character-1').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#character-2').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#character-4').attr('id', 'enemy-4');
$("#enemy").append($('#enemy-4'));
player = darthMaul;
console.log(player.hp);
console.log(player.nap);
console.log("-------------");
lightsaberOn.play();


};
function playerChoice4(){
$('#character-4-hp').attr('id', 'playerhp')
$('#character-1').attr('id', 'enemy-1');
$("#enemy").append($('#enemy-1'));
$('#character-2').attr('id', 'enemy-2');
$("#enemy").append($('#enemy-2'));
$('#character-3').attr('id', 'enemy-3');
$("#enemy").append($('#enemy-3'));
player = anakin;
console.log(player.hp);
console.log(player.nap);
console.log("-------------");
lightsaberOn.play();
youWon();


};
function fight(){
	opponent.hp-=player.nap;
	player.hp-=opponent.cap;
	console.log(player.hp);
	console.log(opponent.hp);
	$("#opponenthp").html(opponent.hp);
	$("#playerhp").html(player.hp);
	player.nap+=player.ap;
	console.log(player.nap);
	console.log(opponent.cap);
	clickCount++;
	if (player.hp <= 0 && opponent.hp <= 0){
		setTimeout(function(){
			$("h1").html("EVERYBODY DIED");
			$("#player").html("<img src='assets/images/darth-sidious.png' style='max-width: 400px; max-height: 200px; border-radius: 10px;'>");
			$("h2[class='defender-title']").html("EVERYBODY DIED");
			$("#defender").html("<img src='assets/images/darth-sidious.png' style='max-width: 400px; max-height: 200px; border-radius: 10px;'>");
			$("#play-again-button").css("display", "inline");
		}, 100);
		$('audio').each(function(){ this.muted = true });
		gameOver.play();
		// playAgain();	
	}else if (player.hp <= 0){
		setTimeout(function(){
		$("h1").html("YOU LOST");
		$("#player").html("<img src='assets/images/darth-sidious.png' style='max-width: 400px; max-height: 200px; border-radius: 10px;'>");
		$("#play-again-button").css("display", "inline");
		}, 100);
		$('audio').each(function(){ this.muted = true });
		$('#fight-button').off('click');		
		gameOver.play();	
	}else if ($("#enemy")[0].innerText === "" && opponent.hp <= 0){
		setTimeout(function(){
		$("h1").html("YOU LOST");
		}, 100);
	}else if (opponent.hp <= 0){
		$("#defender").html('YOU BEAT YOUR OPPONENT! CHOOSE YOUR NEXT ENEMY!');
		$("#enemy").on("click", "#enemy-1", enemyChoice1);
		$("#enemy").on("click", "#enemy-2", enemyChoice2);
		$("#enemy").on("click", "#enemy-3", enemyChoice3);
		$("#enemy").on("click", "#enemy-4", enemyChoice4);
		$('#fight-button').off('click');
		console.log($("#defender"));
	}else if (clickCount % 2 === 0){
		lightsaber1.play();
	}else if (clickCount % 2 != 0){
		lightsaber2.play();
	}
	console.log($("#enemy"));
	console.log($("#defender"));
	setTimeout(youWon, 3000);

};



function enemyChoice1(){
// console.log($(this));
$('#enemy-1').attr('id', 'defender-1');
$('#character-1-hp').attr('id', 'opponenthp');
$("#defender").html($('#defender-1'));
$("#enemy").off("click", "#enemy-2");
$("#enemy").off("click", "#enemy-3");
$("#enemy").off("click", "#enemy-4");
$('#fight-button').on('click', fight);

opponent = luke;
// opponent.hp++;
console.log(opponent.hp);
console.log(opponent.cap);
console.log("-------------");
// lightsaberOn.play();
// lightsaberOn.loop = true;
lightsaberOn.play();

};
function enemyChoice2(){
$('#enemy-2').attr('id', 'defender-1');
$('#character-2-hp').attr('id', 'opponenthp');
$("#defender").html($('#defender-1'));
$("#enemy").off("click", "#enemy-1");
$("#enemy").off("click", "#enemy-3");
$("#enemy").off("click", "#enemy-4");
$('#fight-button').on('click', fight);

opponent = quiGon;
console.log(opponent.hp);
console.log(opponent.cap);
console.log("-------------");
lightsaberOn.play();


};
function enemyChoice3(){
$('#enemy-3').attr('id', 'defender-1');
$('#character-3-hp').attr('id', 'opponenthp');
$("#defender").html($('#defender-1'));
$("#enemy").off("click", "#enemy-1");
$("#enemy").off("click", "#enemy-2");
$("#enemy").off("click", "#enemy-4");
$('#fight-button').on('click', fight);

opponent = darthMaul;
console.log(opponent.cap);
console.log("-------------");
lightsaberOn.play();

};

function enemyChoice4(){
$('#enemy-4').attr('id', 'defender-1');
$('#character-4-hp').attr('id', 'opponenthp');
$("#defender").html($('#defender-1'));
$("#enemy").off("click", "#enemy-1");
$("#enemy").off("click", "#enemy-2");
$("#enemy").off("click", "#enemy-3");
$('#fight-button').on('click', fight);

opponent = anakin;
console.log(opponent.hp);
console.log(opponent.cap);
console.log("-------------");
lightsaberOn.play();

};

function youWon(){
	if ($("#enemy")[0].innerText === "" && $("#defender")[0].innerText === ""){
		alert("you won")
	}
}

$(document).ready(function(){
$("#character-1-hp").html(luke.hp);
$("#character-2-hp").html(quiGon.hp);
$("#character-3-hp").html(darthMaul.hp);
$("#character-4-hp").html(anakin.hp);
console.log($("#enemy"));
console.log($("#defender"));


// $("#enemy-1").hide(0);
// $("#enemy-2").hide(0);
// $("#enemy-3").hide(0);
// $("#enemy-4").hide(0);

// $("#character-1").click(playerChoice1);
// $("#character-2").click(playerChoice2);
$("#player").on("click", "#character-1", playerChoice1);
$("#player").on("click", "#character-2", playerChoice2);
$("#player").on("click", "#character-3", playerChoice3);
$("#player").on("click", "#character-4", playerChoice4);

// $("#character-3").click(playerChoice3);
// $("#character-4").click(playerChoice4);
$("#enemy").on("click", "#enemy-1", enemyChoice1);
$("#enemy").on("click", "#enemy-2", enemyChoice2);
$("#enemy").on("click", "#enemy-3", enemyChoice3);
$("#enemy").on("click", "#enemy-4", enemyChoice4);

// $('#fight-button').on('click', function(){
// 	console.log(fight(2,3))
// });
// console.log(luke.hp + luke.hp)
$("#play-again-button").on("click", function(){

	location.reload();
})
	









});