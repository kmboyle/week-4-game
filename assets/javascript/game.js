


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
				attack: 12, 
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
				attack: 6, 
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
				attack: 10, 
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

// }

//$(".Health").html(player.name[0].health[0]);
function restart(play, enemy){

	$(".restart").html("<button>Restart</button>");

	$(".restart").on("click",function(){

	var playerD = {
				name: "Darth", 
				health: 140, 
				attack: 12, 
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
				attack: 6, 
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
				attack: 10, 
				counter: 12, 
				attackPWUP:function(){
				return this.attack += 4;
	            },
				isEnemy: false, 
				isPlayer: false, 
				playerLock:false };


				// //reset game values
		  //  	    play.isPlayer = false;
		  //       enemy.playerLock = false;
		  //       play = " ";
		  //       enemy = " ";
		  //       enemy.health = 0;
		  //       play.health = 0;
		  //       play.attack = 0;
	
	play = " ";//to hold players choice
	enemy = " ";//to hold enemy
	count = 3; //hold enemy count

    $(".Attacker").detach();
	$(".Defender").detach();
	$(".Player").removeClass(".Attacker");
	$(".Player").removeClass(".Defender");

	$(".DarthOrig").html($("<div class = 'Player Darth'><h4>Darth Vader</h4><img class= 'img-responsive center-block' src='assets/images/Darth_Vader1.jpg' alt='Darth'/><h4 class = 'DarthHP HP text-centered'>#</h4></div>"));
	$(".HanOrig").html($("<div class = 'Player Han'><h4>Han Solo</h4><img class= 'img-responsive center-block' src='assets/images/han solo1.jpg' alt='Han'/><h4 class = 'HanHP HP text-centered'>#</h4></div>"));
	$(".LukeOrig").html($("<div class = 'Player Luke'><h4>Luke Skywalker</h4><img class= 'img-responsive center-block' src='assets/images/luke skywalker1.jpg' alt='Luke'/><h4 class = 'LukeHP HP text-centered'>#</h4></div>"));
	$(".KyloOrig").html($("<div class = 'Player Kylo'><h4>Kylo Ren</h4><img class= 'img-responsive center-block' src='assets/images/Kylo Ren1.jpg' alt='Kylo'/><h4 class = 'KyloHP HP text-centered'>#</h4></div>"));

	$(".DarthHP").html(playerD.health);
	$(".HanHP").html(playerH.health);
	$(".LukeHP").html(playerL.health);
	$(".KyloHP").html(playerK.health);
	$(".prompt").replaceWith($("<h1 prompt>Choose Your Enemy</h1>"));
	$(".restart").hide("<button>Restart</button>");
	start();
});
}
// console.log(player.attack[0]);
function checkHealth(){

		if (play.health <= 0) {
		$(".Attacker").hide();	
		$(".prompt").replaceWith($("<h1 prompt style=color:blue;><strong>You Lost!</strong></h1>"));
		play.isPlayer = false;
		enemy.playerLock = false;
		enemy.health = 0;
		play.health = 0;
		play.attack = 0;
		play = " ";
		enemy = " ";
			restart();
			$(".prompt").replaceWith($("<h1 prompt>Choose Your Enemy</h1>"));
	}

	if (enemy.health <= 0) {
		count--;
		$(".prompt").html("<h1 prompt style=color:#26FF18;><strong>You Won! Select Another Enemy</strong></h1>");
		enemy.playerLock = false;
		$(".Defender").detach();
		$(".Defender").hide();
		if (count === 0){
		   	$(".prompt").replaceWith($("<h1 prompt style=color:#26FF18;><strong>CONGRATULATIONS, YOU BEAT THE GAME....credits: KB</strong></h1>"));
		   		$(".Attacker").hide();
		   	    restart();
		   	    $(".prompt").replaceWith($("<h1 prompt>Choose Your Enemy</h1>"));
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



function start(){

$(".Player").on("click", function() {

	if (playerD.isPlayer || playerH.isPlayer || playerK.isPlayer || playerL.isPlayer) {
      if(!$(this).hasClass("Attacker") &&  $(".pos2").is(":empty")){
      console.log("inside function");						
		if ($(this).hasClass("Darth"))
		{
			$(this).addClass("Defender");
			playerD.playerLock = true;
			$(".pos2").html(this);
			$(".prompt").text("Prepare For Battle");
			enemy = playerD;
		}
		else if ($(this).hasClass("Han"))
		{
			playerH.playerLock = true;
			$(".pos2").html(this);
			$(this).addClass("Defender");
			$(".prompt").text("Prepare For Battle");
			enemy = playerH;
		}
		else if ($(this).hasClass("Luke"))
		{
			playerL.playerLock = true;
			$(".pos2").html(this);
			$(this).addClass("Defender");
			$(".prompt").text("Prepare For Battle");
			enemy = playerL;
		}
		else if ($(this).hasClass("Kylo"))
		{
			$(this).addClass("Defender");
			playerK.playerLock = true;
			$(".pos2").html(this);
			$(".prompt").text("Prepare For Battle");
			enemy = playerK;
			}
			console.log (enemy.name);
	      }
	}

	if (!playerD.isPlayer && !playerH.isPlayer && !playerK.isPlayer && !playerL.isPlayer) {

		if ($(this).hasClass("Darth"))
		{
			$(this).addClass("Attacker");
			playerD.isPlayer = true;
			console.log(this);
			$(".pos1").html(this);
			$(".prompt").text("Choose Your Enemy");
			play = playerD;
		}
		else if ($(this).hasClass("Han"))
		{
			$(this).addClass("Attacker");
			playerH.isPlayer = true;
			$(".pos1").html(this);
			$(".prompt").text("Choose Your Enemy");
			play = playerH;	
		}
		else if ($(this).hasClass("Luke"))
		{
			$(this).addClass("Attacker");
			playerL.isPlayer = true;
			$(".pos1").html(this);
			$(".prompt").text("Choose Your Enemy");
			play = playerL;
		}
		else if ($(this).hasClass("Kylo"))
		{
			$(this).addClass("Attacker");
			playerK.isPlayer = true;
			$(".pos1").html(this);
			$(".prompt").text("Choose Your Enemy");
			play = playerK;
			
		}
		console.log (play.name);	
	}

	
});// end of your player select
}
function attack(){
$(".Attack").on("click", function() {

		console.log(play.attack);
		if (enemy.playerLock){
		enemy.health  -= play.attack; 
		play.health -= enemy.counter;
		$(".Attacker .HP").html(play.health);
		$(".Defender .HP").html(enemy.health);
		play.attack = play.attackPWUP();
		checkHealth(); //call function checkHealth
		} else {
			$("prompt").text("First, Select Another Enemy");
			
		} 		    

});//end of attack event click
}
start();
attack();


});//end of document ready











	