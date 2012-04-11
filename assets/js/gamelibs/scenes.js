

//Loading Scene
Crafty.scene("Loading",
function() {

    Crafty.e("HTML")
    .attr({x:20, y:20, w:460, h:50})
    .append('<div class="progress progress-warning active"><div class="bar"></div></div>');
    
    // to be return later
    var crstage_attr = $("#cr-stage").attr("style");
    
    $('#cr-stage').removeAttr("style");
    $('#cr-stage > div').removeAttr("style"); 
    $('#ent1').addClass("span6").removeAttr("style");

    Crafty.load(
    	[
    	game.path + "/assets/img/1kg.png", 
    	game.path + "/assets/img/1000gram.png", 
    	game.path + "/assets/img/farms.png", 
    	game.path + "/assets/img/shadows.png", 
        game.path + "/assets/img/bg.png",
    	game.path + "/assets/img/nameplates.png", 
    	game.path + "/assets/img/traktor_c1.png", 
    	game.path + "/assets/img/traktor_c2.png", 
    	game.path + "/assets/img/traktor_c3.png", 
    	game.path + "/assets/img/traktor_c4.png", 
    	game.path + "/assets/img/traktor_c5.png", 
    	game.path + "/assets/img/traktor_c6.png"
    	],
    function() {
        // show full progress bar
        $(".progress .bar").css("width", "100%");
     
        // show loading scene properly before moving along
        setTimeout(function() {
//sdmmd=djd
            // remove loading stuff from DOM
            $(".loading").remove();
            $(".container").removeClass("container-loading");
            $("#cr-stage").removeClass("loading-scene").attr("style", crstage_attr);
            $("html").removeClass("loading-html");
            $("#ent1").removeClass("span6");

            // go to DashBoard scene
            Crafty.scene("DashBoard");
        }, 1000);
    },
    function(e) {
        //progress
        $(".progress .bar").css("width", Math.round(e.percent) + "%");
        // log('loaded ' + e.loaded + ', percent ' + Math.round(e.percent) + ', total ' + e.total);
    },
    function(e) {
        //uh oh, error loading
        alert('Error while loading game assets (loaded ' + e.loaded + ', percent ' + Math.round(e.percent) + ', total ' + e.total + ')');
    }
    );

});

//Game Scene
Crafty.scene("DashBoard",
function() {
    // play audio in DashBoard (working but disabled for dev)
    // Game.audio = Crafty.audio.play("march");

    // background
    Crafty.background("url(" + game.path + "/assets/img/bg.png)");

    // generate farms
    Game.generateFarms();

    Game.sockets.dashboard = true;
    log("Game.sockets.dashboard = true");

    this.bind('SocketsReadyEvent', function() {
        
        log('SocketsReadyEvent');

        _.each(Game.qrcodes.images, function(qrcode) {
            
            var ent = Crafty.e("2D, DOM, Image, QRCode")
            .attr({ x: qrcode._x, y: qrcode._y, z: 4 });

            var json = { "action": qrcode.action, "id": Game.sockets.roomID };

            $.ajax({
                type: "GET",
                url: 'http://sportti.dreamschool.fi/galaxy/api/qrcode/JSON',
                data: json,
                cache: false,
                success: function(data) {
                   var qr = $(data)[2];
                   //log(qr)
                   ent.image( $(qr).attr('src') ); //game.path + "/assets/img/qrcode.png");
                   //
                   if(!_.isUndefined(qrcode.action)) {
                      ent.addComponent(qrcode.action.toUpperCase());
                   } 
                }
            });

       //     Game.qrcodes.generated = 1;

            // for speedy dev
            // ent.image(game.path + "/assets/img/qrcode.png");
        });
    });

    // generate images only once
    //if(!Game.qrcodes.generated) {
    //}

    // description for the game
    Crafty.e("2D, DOM, GameRules, Text")
        .attr({ x: 320, y: 475, z: 4, w: 640, h: 130 })
        .text("<strong>Tavoite: </strong>" + Game.description);

    //error = fubar
    
    // for debug
    /*
    setTimeout(
        function() { 
            // stop playing audio 
            Game.audio.mute();

            // go to Game scene
            Crafty.scene("Game");
        }, 2000);
    */
    //Crafty.scene("Game");
});

//Game Scene
Crafty.scene("Game",
function() {
    // when loaded play sound and...
    // Crafty.audio.play("troot");

	//Crafty.audio.play("march");

	// first white
    // Crafty.background("#FFF");
    // then picture when loaded

	Crafty.background("url(" + game.path + "/assets/img/bg.png)");

    Game.generateGame();

});
