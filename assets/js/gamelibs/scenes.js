
//Loading Scene
Crafty.scene("Loading",
function() {

    // first white
    //Crafty.background("#FFF");
    // then picture when loaded
    //Crafty.background("url(" + game.path + "/assets/img/traktor_bg.png)");
    /*
    Crafty.e("2D", "DOM", "Text").css({
        "color": "#EEE",
        "font-size": "2em",
        "padding": "2em",
        "white-space": "nowrap",
        "text-align": "center"
    }).text("Ladataan...");
    */

    Crafty.load(
    	[
    	game.path + "/assets/img/1kg.png", 
    	game.path + "/assets/img/1000gram.png", 
    	game.path + "/assets/img/bases.png", 
    	game.path + "/assets/img/farms.png", 
    	game.path + "/assets/img/shadows.png", 
    	game.path + "/assets/img/nameplates.png", 
    	game.path + "/assets/img/traktor_bg.png",
    	game.path + "/assets/img/traktor_c1.png", 
    	game.path + "/assets/img/traktor_c2.png", 
    	game.path + "/assets/img/traktor_c3.png", 
    	game.path + "/assets/img/traktor_c4.png", 
    	game.path + "/assets/img/traktor_c5.png", 
    	game.path + "/assets/img/traktor_c6.png"
    	],
    function() {
        //when loaded
        // Crafty.audio.play("uncover");
        // go to Game scene
        Crafty.scene("Game");
    },
    function(e) {
        //progress
        //log('loaded ' + e.loaded + ', percent ' + Math.round(e.percent) + ', total ' + e.total);
    },
    function(e) {
        //uh oh, error loading
        alert('Error while loading assets (loaded ' + e.loaded + ', percent ' + Math.round(e.percent) + ', total ' + e.total + ')');
    }
    );

});

//Game Scene
Crafty.scene("Game",
function() {

	//Crafty.audio.play("march");

	// first white
    Crafty.background("#FFF");
    // then picture when loaded
	Crafty.background("url(" + game.path + "/assets/img/traktor_bg.png)");

    Game.generateGame();

});
