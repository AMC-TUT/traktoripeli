
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
    	game.path + "/assets/img/farm1.png", 
    	game.path + "/assets/img/farm2.png", 
    	game.path + "/assets/img/shadow1.png", 
    	game.path + "/assets/img/shadow2.png", 
    	game.path + "/assets/img/nametag1.png", 
    	game.path + "/assets/img/nametag2.png", 
    	game.path + "/assets/img/traktor_bg.png",
    	game.path + "/assets/img/traktor_c1.png", 
    	game.path + "/assets/img/traktor_c2.png", 
    	game.path + "/assets/img/traktor_c3.png", 
    	game.path + "/assets/img/traktor_c4.png", 
    	game.path + "/assets/img/traktor_c5.png", 
    	game.path + "/assets/img/traktor_c6.png", 
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

    //Crafty.background("#aaa");
	Crafty.background("url(" + game.path + "/assets/img/traktor_bg.png)");

	Crafty.e('Shadow').attr({ x: 228, y: 50, z: 2 });
	Crafty.e('Shadow').attr({ x: 746, y: 50, z: 2 });
	Crafty.e('Shadow').attr({ x: 564, y: 780, z: 2, rotation: 180 });
	Crafty.e('Shadow').attr({ x: 1082, y: 780, z: 2, rotation: 180 });
	Crafty.e('Shadow').attr({ x: 50, y: 583, z: 2, rotation: 270 });
	Crafty.e('Shadow').attr({ x: 1260, y: 247, z: 2, rotation: 90 });

	Crafty.e('Farm').attr({ x: 228, y: 50, z: 3 });
	Crafty.e('Farm').attr({ x: 746, y: 50, z: 3 });
	Crafty.e('Farm').attr({ x: 534, y: 750, z: 3, rotation: 180 });
	Crafty.e('Farm').attr({ x: 1052, y: 750, z: 3, rotation: 180 });
	Crafty.e('Farm').attr({ x: 50, y: 553, z: 3, rotation: 270 });
	Crafty.e('Farm').attr({ x: 1230, y: 247, z: 3, rotation: 90 });

	Crafty.e('Nameplate11').attr({ x: 162, y: 0, z: 2 });
	Crafty.e('Nameplate12').attr({ x: 381, y: 0, z: 2 });
	Crafty.e('Nameplate21').attr({ x: 680, y: 0, z: 2 });
	Crafty.e('Nameplate22').attr({ x: 899, y: 0, z: 2 });
	Crafty.e('Nameplate31').attr({ x: 162, y: 750, z: 2 });
	Crafty.e('Nameplate32').attr({ x: 381, y: 750, z: 2 });
	Crafty.e('Nameplate41').attr({ x: 680, y: 750, z: 2 });
	Crafty.e('Nameplate42').attr({ x: 899, y: 750, z: 2 });
	Crafty.e('Nameplate51').attr({ x: 0, y: 197, z: 2 });
	Crafty.e('Nameplate52').attr({ x: 0, y: 553, z: 2 });
	Crafty.e('Nameplate61').attr({ x: 1061, y: 197, z: 2 });
	Crafty.e('Nameplate62').attr({ x: 1061, y: 553, z: 2 });

	Game.generateHomebases();

	Game.generateBases();

	Game.generateWeights();


	Crafty.e('Tractor').attr({ x: 240, y: 240, z: 2 });

	// traktorin kääntäminen toimii tällä consolista
	// var tractor = Crafty.map.search({_x: 240, _y: 240, _w: 64, _h: 64 })[0];
	// tractor.multiway( 2, { UP_ARROW: (tractor._rotation - 90) % 360, DOWN_ARROW: (tractor._rotation + 90) % 360 });

});
