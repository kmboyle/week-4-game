


$(document).ready(function() {

//create a character object
// var player = {
// 	"name": ["Darth Vader", "Han Solo", "Luke Skywalker", "Kylo Ren"],
// 	"health": [140, 115, 130, 110],
// 	"attack": [24,18,24,30],
// 	"counter": [18,24,24,18],
// 	attackPWUP: function(attack) {
// 		return attack += attack;
// 	},
// 	"isEnemy": false,
// 	"isPlayer": false,
// 	"playerLock": false
// }
//create each player
var playerD = {
				name: "Darth", 
				health: 140, 
				attack: 6, 
				counter: 14, 
				attackPWUP: function(){
				return this.attack += 6;
	            },
				isEnemy: false, 
				isPlayer: false, 
				playerLock:false };
var playerH = {
				name: "Han Solo", 
				health: 115, 
				attack: 4, 
				counter: 10, 
				attackPWUP: function(){
				return this.attack += 4;
	            },
				isEnemy: false, 
				isPlayer: false, 
				playerLock:false };
var playerL = {
				name: "Luke Skywalker", 
				health: 130, 
				attack: 8, 
				counter: 6, 
				attackPWUP: function(){
				return this.attack += 8;
	            },
				isEnemy: false, 
				isPlayer: false, 
				playerLock:false };
var playerK = {
				name: "Kylo Ren", 
				health: 110, 
				attack: 4, 
				counter: 12, 
				attackPWUP:function(){
				return this.attack += 4;
	            },
				isEnemy: false, 
				isPlayer: false, 
				playerLock:false };


var play;//to hold players choice
var enemy;//to hold enemy
var count = 3; //hold enemy count

//if player wins, have them pick another enemy.
//  function enemy(){

// $(".Player").on("click", function(){

// if ($(this).hasClass("Darth"))
// 		{
// 			$(this).addClass("Defender");
// 			playerD.playerLock = true;
// 			$(".Defender").replaceWith(this);
// 			$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
// 			enemy = playerD;
// 		}
// 		else if ($(this).hasClass("Han"))
// 		{
// 			$(this).addClass("Defender");
// 			playerH.playerLock = true;
// 			$(".Defender").replaceWith(this);
// 			$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
// 			enemy = playerH;
// 		}
// 		else if ($(this).hasClass("Luke"))
// 		{
// 			$(this).addClass("Defender");
// 			$(".pos3").replaceWith(this);
// 			playerL.playerLock = true;
// 			console.log(this);
// 			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
// 			enemy = playerL;
// 		}
// 		else if ($(this).hasClass("Kylo"))
// 		{
// 			$(this).addClass("Defender");
// 			playerK.playerLock = true;
// 			$(".Defender").replaceWith(this);
// 			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
// 			enemy = playerK;
// 		}
// 			console.log (enemy.name);
// 	});
	
// }

//$(".Health").html(player.name[0].health[0]);

// console.log(player.attack[0]);
function checkHealth(){

		if (play.health <= 0) {
		$("h1").replaceWith($("<h1 style=color:blue;><strong>You Lost!</strong></h1>"));
	}

	if (enemy.health <= 0) {
		count--;
		$("h1").replaceWith($("<h1 style=color:#26FF18;><strong>You Won! Select Another Enemy</strong></h1>"));
		enemy.playerLock = false;
		$(".Defender").replaceWith("<div class = pos2></div>");
		$(".Defender").hide();
		if (count === 0){
		   	$("h1").replaceWith($("<h1 style=color:#26FF18;><strong>CONGRATULATIONS, YOU BEAT THE GAME....credits: KB</strong></h1>"));
		   }
		}
	}

//if player loses, have the game reset.



//if player defeats all enemies, award game won and then reset.

// console.log(player.attackPWUP(player.attack[0]));


	$(".DarthHP").html(playerD.health);
	$(".HanHP").html(playerH.health);
	$(".LukeHP").html(playerL.health);
	$(".KyloHP").html(playerK.health);


$(".Player").on("click", function() {

	if (playerD.isPlayer || playerH.isPlayer || playerK.isPlayer || playerL.isPlayer) {

		if ($(this).hasClass("Darth"))
		{
			$(this).addClass("Defender");
			playerD.playerLock = true;
			$(".pos2").replaceWith(this);
			$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
			enemy = playerD;
		}
		else if ($(this).hasClass("Han"))
		{
			playerH.playerLock = true;
			$(".pos2").replaceWith(this);
			$(this).addClass("Defender");
			$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
			enemy = playerH;
		}
		else if ($(this).hasClass("Luke"))
		{
			playerL.playerLock = true;
			$(".pos2").replaceWith(this);
			$(this).addClass("Defender");
			$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
			enemy = playerL;
		}
		else if ($(this).hasClass("Kylo"))
		{
			$(this).addClass("Defender");
			playerK.playerLock = true;
			$(".pos2").replaceWith(this);
			$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
			enemy = playerK;
			}
			console.log (enemy.name);
	}

	if (!playerD.isPlayer && !playerH.isPlayer && !playerK.isPlayer && !playerL.isPlayer) {

		if ($(this).hasClass("Darth"))
		{
			$(this).addClass("Attacker");
			playerD.isPlayer = true;
			console.log(this);
			$(".pos1").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			play = playerD;
		}
		else if ($(this).hasClass("Han"))
		{
			$(this).addClass("Attacker");
			playerH.isPlayer = true;
			$(".pos1").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			play = playerH;	
		}
		else if ($(this).hasClass("Luke"))
		{
			$(this).addClass("Attacker");
			playerL.isPlayer = true;
			$(".pos1").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			play = playerL;
		}
		else if ($(this).hasClass("Kylo"))
		{
			$(this).addClass("Attacker");
			playerK.isPlayer = true;
			$(".pos1").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			play = playerK;
			
		}
		console.log (play.name);	
	}
});// end of your player select


$(".Attack").on("click", function() {

		console.log(play.attack);
		
		enemy.health  -= play.attack; 
		play.health -= enemy.counter;
		$(".Attacker .HP").html(play.health);
		$(".Defender .HP").html(enemy.health);
		play.attack = play.attackPWUP();
		checkHealth(); //call function checkHealth
	    

});//end of attack event click



});//end of document ready











	//  if ($(".Attacker").hasClass("Darth") && player.health[0] > 0 && player.isPlayer) {
	// 	if ($(".Defender").hasClass("Han") && player.playerLock) {
				
	// 				player.health[1] -= player.attack[0];
	// 				player.health[0] -= player.counter[1];
	// 				$(".HanHP").html(player.health[1]);
	// 				$(".DarthHP").html(player.health[0]);
	// 				player.attackPWUP(player.attack[0]);
	// 				if (player.health[1] <= 0) {
	// 					$(".Han").replaceWith("<img src = assets/images/x.jpg>");
	// 					player.playerLock = false;	
	// 					$("h1").replaceWith($("<h1 style=color:#26FF18;><strong>You Won! Select Another Enemy</strong></h1>"));
	// 					$(".Attack").on("click", function() {
	// 						$("h1").replaceWith($("<h1>No Enemy Selected.  Select Another Enemy</h1>"));
	// 							});
	// 					$(".Attack").on("click", function() {

	// 							if (player.isEnemy) {
	// 								$(this).addClass("Defender");
	// 								player.playerLock = true;
	// 								$(".pos2").replaceWith(this);
	// 								$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
	// 								}
	// 							if ($(".Defender").hasClass("Luke") && player.playerLock) {



	// 							}
	// 					}

	// 				}

	//     }
	//   }

	// }); //end of attack event



