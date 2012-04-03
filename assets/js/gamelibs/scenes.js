
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

	Crafty.e('Team11').attr({ x: 254, y: 76, z: 2 });
	Crafty.e('Team12').attr({ x: 328, y: 76, z: 2 });
	Crafty.e('Team13').attr({ x: 402, y: 76, z: 2 });
	Crafty.e('Team14').attr({ x: 476, y: 76, z: 2 });

	Crafty.e('Team21').attr({ x: 772, y: 76, z: 2 });
	Crafty.e('Team22').attr({ x: 846, y: 76, z: 2 });
	Crafty.e('Team23').attr({ x: 920, y: 76, z: 2 });
	Crafty.e('Team24').attr({ x: 994, y: 76, z: 2 });

	Crafty.e('Team31').attr({ x: 254, y: 692, z: 2 });
	Crafty.e('Team32').attr({ x: 328, y: 692, z: 2 });
	Crafty.e('Team33').attr({ x: 402, y: 692, z: 2 });
	Crafty.e('Team34').attr({ x: 476, y: 692, z: 2 });

	Crafty.e('Team41').attr({ x: 772, y: 692, z: 2 });
	Crafty.e('Team42').attr({ x: 846, y: 692, z: 2 });
	Crafty.e('Team43').attr({ x: 920, y: 692, z: 2 });
	Crafty.e('Team44').attr({ x: 994, y: 692, z: 2 });

	Crafty.e('Team51').attr({ x: 76, y: 273, z: 2 });
	Crafty.e('Team52').attr({ x: 76, y: 347, z: 2 });
	Crafty.e('Team53').attr({ x: 76, y: 421, z: 2 });
	Crafty.e('Team54').attr({ x: 76, y: 495, z: 2 });

	Crafty.e('Team61').attr({ x: 1172, y: 273, z: 2 });
	Crafty.e('Team62').attr({ x: 1172, y: 347, z: 2 });
	Crafty.e('Team63').attr({ x: 1172, y: 421, z: 2 });
	Crafty.e('Team64').attr({ x: 1172, y: 495, z: 2 });

	Crafty.e('Shdw1').attr({ x: 228, y: 50, z: 1 });
	Crafty.e('Shdw2').attr({ x: 746, y: 50, z: 1 });
	Crafty.e('Shdw3').attr({ x: 228, y: 676, z: 1 });
	Crafty.e('Shdw4').attr({ x: 746, y: 676, z: 1 });
	Crafty.e('Shdw5').attr({ x: 50, y: 247, z: 1 });
	Crafty.e('Shdw6').attr({ x: 1156, y: 247, z: 1 });
	Crafty.e('Farm1').attr({ x: 228, y: 50, z: 2 });
	Crafty.e('Farm2').attr({ x: 746, y: 50, z: 2 });
	Crafty.e('Farm3').attr({ x: 228, y: 676, z: 2 });
	Crafty.e('Farm4').attr({ x: 746, y: 676, z: 2 });
	Crafty.e('Farm5').attr({ x: 50, y: 247, z: 2 });
	Crafty.e('Farm6').attr({ x: 1156, y: 247, z: 2 });

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

	Game.generateBases();

	Crafty.e('Tractor').attr({ x: 240, y: 240, z: 2 });

	// traktorin kääntäminen toimii tällä consolista
	// var tractor = Crafty.map.search({_x: 240, _y: 240, _w: 64, _h: 64 })[0];
	// tractor.multiway( 2, { UP_ARROW: (tractor._rotation - 90) % 360, DOWN_ARROW: (tractor._rotation + 90) % 360 });

});
