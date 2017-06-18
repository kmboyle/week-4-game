

//create a character object
var player = {
	"name": ["Darth Vader", "Han Solo", "Luke Skywalker", "Kylo Ren"],
	"health": [140, 115, 130, 110],
	"attack": [24,18,24,30],
	"counter": [18,24,24,18],
	attackPWUP: function(attack) {
		return attack += attack;
	},
	"isEnemy": false,
	"isPlayer": false,
	"playerLock": false
}
/*create each player
var player = {name: "Darth", health: "100", attack: 24, counter: 18};
var player = {name: "Han Solo", health: "100", attack: 18, counter: 24};
var player = {name: "Luke Skywalker", health: "100", attack: 24, counter: 24};
var player = {name: "Kylo Ren", health: "100", attack: 30, counter: 18};
*/

//$(".Health").html(player.name[0].health[0]);

console.log(player.attack[0]);


console.log(player.attackPWUP(player.attack[0]));

var play = " ";

$(document).ready(function() {

	$(".DarthHP").html(player.health[0]);
	$(".HanHP").html(player.health[1]);
	$(".LukeHP").html(player.health[2]);
	$(".KyloHP").html(player.health[3]);

$(".Player").on("click", function() {
	if (!player.isEnemy) {
		if ($(this).hasClass("Darth"))
		{
			console.log("You picked Darth");
			player.isPlayer = true;
			$(".Attacker").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			var play = player.name[0];
		}
		else if ($(this).hasClass("Han"))
		{
			player.isPlayer = true;
			$(".Attacker").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));


		}
		else if ($(this).hasClass("Luke"))
		{
			player.isPlayer = true;
			$(".Attacker").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			
		}
		else if ($(this).hasClass("Kylo"))
		{
			player.isPlayer = true;
			$(".Attacker").replaceWith(this);
			$("h1").replaceWith($("<h1>Choose Your Enemy</h1>"));
			
		}
	}

	$(".Player").on("click", function() {
	if (!player.isEnemy) {
		player.playerLock = true;
		$(".Defender").replaceWith(this);
		$("h1").replaceWith($("<h1>Prepare For Battle</h1>"));
		}

	$(".Attack").on("click", function() {
	console.log("hi");	
	 if ($(".Player").hasClass("Darth") && player.health[0] > 0 && player.isPlayer) {
		if ($(".Player").hasClass("Han") && player.playerLock) {
				
					player.health[1] -= player.attack[0];
					player.health[0] -= player.counter[1];
					$(".HanHP").html(player.health[1]);
					$(".DarthHP").html(player.health[0]);
					player.attackPWUP(player.attack[0]);
					if (player.health[1] <= 0) {
						$(".Han").replaceWith("<img src = assets/images/x.jpg>");
						player.playerLock = false;	
						$("h1").replaceWith($("<h1>You Won! Select Another Enemy</h1>"));
						$(".Attack").on("click", function() {
							$("h1").replaceWith($("<h1>No Enemy Selected.  Select Another Enemy</h1>"));
								});
					}

	    }
	  }

	}); //end of attack event



  	}); //end of enemy select

});// end of your player select






});//end of document ready

