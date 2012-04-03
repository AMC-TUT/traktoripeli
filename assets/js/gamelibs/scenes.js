
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
	
	Crafty.e('Base01').attr({ x: 414, y: 184, z: 2 });
	Crafty.e('Base02').attr({ x: 554, y: 184, z: 2 });
	Crafty.e('Base03').attr({ x: 694, y: 184, z: 2 });
	Crafty.e('Base04').attr({ x: 834, y: 184, z: 2 });
	Crafty.e('Base05').attr({ x: 344, y: 284, z: 2 });
	Crafty.e('Base06').attr({ x: 484, y: 284, z: 2 });
	Crafty.e('Base07').attr({ x: 624, y: 284, z: 2 });
	Crafty.e('Base08').attr({ x: 764, y: 284, z: 2 });
	Crafty.e('Base09').attr({ x: 904, y: 284, z: 2 });
	Crafty.e('Base10').attr({ x: 274, y: 384, z: 2 });
	Crafty.e('Base11').attr({ x: 414, y: 384, z: 2 });
	Crafty.e('Base12').attr({ x: 554, y: 384, z: 2 });
	Crafty.e('Base13').attr({ x: 694, y: 384, z: 2 });
	Crafty.e('Base14').attr({ x: 834, y: 384, z: 2 });
	Crafty.e('Base15').attr({ x: 974, y: 384, z: 2 });
	Crafty.e('Base16').attr({ x: 344, y: 484, z: 2 });
	Crafty.e('Base17').attr({ x: 484, y: 484, z: 2 });
	Crafty.e('Base18').attr({ x: 624, y: 484, z: 2 });
	Crafty.e('Base19').attr({ x: 764, y: 484, z: 2 });
	Crafty.e('Base20').attr({ x: 904, y: 484, z: 2 });
	Crafty.e('Base21').attr({ x: 414, y: 584, z: 2 });
	Crafty.e('Base22').attr({ x: 554, y: 584, z: 2 });
	Crafty.e('Base23').attr({ x: 694, y: 584, z: 2 });
	Crafty.e('Base24').attr({ x: 834, y: 584, z: 2 });

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

	Crafty.e('Tractor').attr({ x: 240, y: 240, z: 2 });
	// var tractor = Crafty.map.search({_x: 240, _y: 240, _w: 64, _h: 64 })[0];

});
