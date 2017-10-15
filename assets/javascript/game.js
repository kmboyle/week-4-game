


$(document).ready(function() {


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

function restart(){

	$(".restart").html("<button>Restart</button>");
	$(".restart").show("<button>Restart</button>");

	$(".restart").on("click",function(){
	
	$(".prompt").html("<h1 class ='text-left prompt'>Choose Your Player</h1>");
    $(".Attacker").detach();
	$(".Defender").detach();
	$(".Player").removeClass(".Attacker");
	$(".Player").removeClass(".Defender");

	$(".DarthOrig").html("<div class = 'Player Darth'><h4>Darth Vader</h4><img class= 'img-responsive center-block img-thumbnail' src='assets/images/Darth_Vader1.jpg' alt='Darth'/><h4 class = 'DarthHP HP text-centered'>#</h4></div>");
	$(".HanOrig").html("<div class = 'Player Han'><h4>Han Solo</h4><img class= 'img-responsive center-block img-thumbnail' src='assets/images/han solo1.jpg' alt='Han'/><h4 class = 'HanHP HP text-centered'>#</h4></div>");
	$(".LukeOrig").html("<div class = 'Player Luke'><h4>Luke Skywalker</h4><img class= 'img-responsive center-block img-thumbnail' src='assets/images/luke skywalker1.jpg' alt='Luke'/><h4 class = 'LukeHP HP text-centered'>#</h4></div>");
	$(".KyloOrig").html("<div class = 'Player Kylo'><h4>Kylo Ren</h4><img class= 'img-responsive center-block img-thumbnail' src='assets/images/Kylo Ren1.jpg' alt='Kylo'/><h4 class = 'KyloHP HP text-centered'>#</h4></div>");

	$(".DarthHP").html(playerD.health);
	$(".HanHP").html(playerH.health);
	$(".LukeHP").html(playerL.health);
	$(".KyloHP").html(playerK.health);
	
	$(".restart").hide("<button>Restart</button>");
	start();
});
}
// console.log(player.attack[0]);
function checkHealth(){
console.log("Player " + play.name);
		if (play.health <= 0) {
		//$(".Attacker").hide();	
		$(".prompt").html("<h1 prompt style=color:blue;><strong>You Lost!</strong></h1>");
			   //reset game values
			    play.attack = 0;
			    count = 3;
		   	    play.isPlayer = false;
		        enemy.playerLock = false;
		        play = " ";
		        enemy = " ";
		        enemy.health = 0;
		        play.health = 0;
		        playerD.health = 140;
				playerH.health = 115;
				playerL.health = 130;
				playerK.health = 110;
				
			 console.log("Player " + play.attack);
			restart();
			
	}

	if (enemy.health <= 0) {
		count--;
		$(".prompt").html("<h1 prompt style=color:#26FF18;><strong>You Won! Select Another Enemy</strong></h1>");
		enemy.playerLock = false;
		$(".Defender").detach();
		//$(".Defender").hide();
		if (count === 0){
		   	$(".prompt").html("<h1 prompt style=color:#26FF18;><strong>CONGRATULATIONS, YOU BEAT THE GAME....credits: KB</strong></h1>");
		   		//$(".Attacker").hide();
		   	    //reset game values
		   	    play.attack = 0;
			    count = 3;
			 	play.isPlayer = false;
		        enemy.playerLock = false;
		        play = " ";
		        enemy = " ";
		        enemy.health = 0;
		        play.health = 0;
		        playerD.health = 140;
				playerH.health = 115;
				playerL.health = 130;
				playerK.health = 110;
				restart();
		   }
		}
	}


	$(".DarthHP").html(playerD.health);
	$(".HanHP").html(playerH.health);
	$(".LukeHP").html(playerL.health);
	$(".KyloHP").html(playerK.health);



function start(){

$(".Player").on("click", function() {

	
	//this is for the defender choice.  First time through, this will pass and go to player choice
	if (playerD.isPlayer || playerH.isPlayer || playerK.isPlayer || playerL.isPlayer) {
      if(!$(this).hasClass("Attacker") &&  $(".pos2").is(":empty")) {						
		if ($(this).hasClass("Darth"))
		{
			$(this).addClass("Defender");
			playerD.playerLock = true;
			$(".pos2").html(this);
			$(".prompt").text("Prepare For Battle");
			enemy = playerD;
			enemy.playerLock=true;
		}
		else if ($(this).hasClass("Han"))
		{
			playerH.playerLock = true;
			$(".pos2").html(this);
			$(this).addClass("Defender");
			$(".prompt").text("Prepare For Battle");
			enemy = playerH;
			enemy.playerLock=true;
		}
		else if ($(this).hasClass("Luke"))
		{
			playerL.playerLock = true;
			$(".pos2").html(this);
			$(this).addClass("Defender");
			$(".prompt").text("Prepare For Battle");
			enemy = playerL;
			enemy.playerLock=true;
		}
		else if ($(this).hasClass("Kylo"))
		{
			$(this).addClass("Defender");
			playerK.playerLock = true;
			$(".pos2").html(this);
			$(".prompt").text("Prepare For Battle");
			enemy = playerK;
			enemy.playerLock=true;
			}
			console.log (enemy.name);
	      }
	}
	//this is player choice
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
		console.log (play.name);
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
//call start function to begin game
start();
//call attack function next, and this will run through health check and restart functions
attack();

});//end of document ready











	