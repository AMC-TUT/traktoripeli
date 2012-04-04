
//Loading Scene
Crafty.scene("Loading",
function() {

    Crafty.background("#000");
    
    Crafty.e("2D", "DOM", "Text").css({
        "color": "#EEE",
        "font-size": "2em",
        "padding": "2em",
        "white-space": "nowrap",
        "text-align": "center"
    }).text("Ladataan...");
    
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
    	game.path + "/assets/img/traktor_c6.png",
    	// audio
    	game.path + "/assets/audio/mp3/jack-tar-march.mp3",
    	game.path + "/assets/audio/mp3/weight-up.mp3",
    	game.path + "/assets/audio/mp3/drop-on-farm.mp3",
    	game.path + "/assets/audio/mp3/cheer.mp3"
    	],
    function() {
        //when loaded
//        Crafty.audio.play("uncover");
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

	Crafty.audio.play("march");
	// first white
    Crafty.background("#FFF");
    // then picture when loaded
	Crafty.background("url(" + game.path + "/assets/img/traktor_bg.png)");

	Crafty.e('Shadow1').attr({ x: 228, y: 50, z: 2 });
	Crafty.e('Shadow1').attr({ x: 746, y: 50, z: 2 });
	Crafty.e('Shadow1').attr({ x: 564, y: 780, z: 2, rotation: 180 });
	Crafty.e('Shadow1').attr({ x: 1082, y: 780, z: 2, rotation: 180 });
	Crafty.e('Shadow2').attr({ x: 50, y: 583, z: 2, rotation: 270 });
	Crafty.e('Shadow2').attr({ x: 1260, y: 247, z: 2, rotation: 90 });
/* eka tehty muut lisättävä samalla tavalla
	Crafty.e('Farm').attr({ x: 228, y: 50, z: 3 });
    ///
	Crafty.e('Farm').attr({ x: 746, y: 50, z: 3 });
	Crafty.e('Farm').attr({ x: 534, y: 750, z: 3, rotation: 180 });
	Crafty.e('Farm').attr({ x: 1052, y: 750, z: 3, rotation: 180 });
	Crafty.e('Farm').attr({ x: 50, y: 553, z: 3, rotation: 270 });
	Crafty.e('Farm').attr({ x: 1230, y: 247, z: 3, rotation: 90 });
*/
	Crafty.e('Nameplate11').attr({ x: 162, y: 5, z: 2 });
	Crafty.e('Nameplate12').attr({ x: 381, y: 5, z: 2 });
	Crafty.e('Nameplate21').attr({ x: 680, y: 5, z: 2 });
	Crafty.e('Nameplate22').attr({ x: 899, y: 5, z: 2 });
	Crafty.e('Nameplate31').attr({ x: 162, y: 755, z: 2 });
	Crafty.e('Nameplate32').attr({ x: 381, y: 755, z: 2 });
	Crafty.e('Nameplate41').attr({ x: 680, y: 755, z: 2 });
	Crafty.e('Nameplate42').attr({ x: 899, y: 755, z: 2 });
	Crafty.e('Nameplate51').attr({ x: 0, y: 193, z: 2 });
	Crafty.e('Nameplate52').attr({ x: 0, y: 557, z: 2 });
	Crafty.e('Nameplate61').attr({ x: 1061, y: 193, z: 2 });
	Crafty.e('Nameplate62').attr({ x: 1061, y: 557, z: 2 });


    Game.generateGame();

});
