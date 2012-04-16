

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
        game.path + "/assets/img/bg.png",
    	game.path + "/assets/img/nameplates.png", 
        game.path + "/assets/img/tractor11.png", 
        game.path + "/assets/img/tractor12.png", 
        game.path + "/assets/img/tractor21.png", 
        game.path + "/assets/img/tractor22.png", 
        game.path + "/assets/img/tractor31.png", 
        game.path + "/assets/img/tractor32.png",
        game.path + "/assets/img/tractor41.png", 
        game.path + "/assets/img/tractor42.png", 
        game.path + "/assets/img/tractor51.png", 
        game.path + "/assets/img/tractor52.png", 
        game.path + "/assets/img/tractor61.png", 
        game.path + "/assets/img/tractor62.png"
    	],
    function() {
        // show full progress bar
        $(".progress .bar").css("width", "100%");
     
        // show loading scene properly before moving along
        setTimeout(function() {
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
    /* TODO miten poistetaan audio instanssi paska kokonaan. Mutetukset eivat toimi kunnolla
    if(!_.isObject(Game.audio)) {
        Game.audio = Crafty.audio.play("march");
        Game.audio.MAX_CHANNELS = 1;
    } else {
        if(Game.audio._muted) {
            Game.audio.play("march", -1);
        }
    }
    */

    // background
    Crafty.background("url(" + game.path + "/assets/img/bg.png)");

    // generate farms
    Game.generateFarms();

    Game.sockets.dashboard = true;

    this.bind('SocketsReadyEvent', _.once(function() { // _.once = singleton pattern impl. 
        
        log('SocketsReadyEvent');

        _.each(Game.qrcodes.images, function(qrcode) {
            
            var ent = Crafty.e("2D, DOM, Image, QRCode")
            .attr({ x: qrcode._x, y: qrcode._y, z: 4 });

            // tid = teamID
            var json = { "action": qrcode.action, "roomId": Game.sockets.roomID, "tid": qrcode.id };

            $.ajax({
                type: "GET",
                url: 'http://sportti.dreamschool.fi/galaxy/api/qrcode/JSON',
                data: json,
                cache: true,
                success: function(data) {
                   var qr = $(data)[2];

                   ent.image( $(qr).attr('src') );
                   //
                   if(!_.isUndefined(qrcode.action)) {

                        ent.addComponent(qrcode.action.toUpperCase());
                        ent.addComponent("QRCode-"+qrcode.id);

                        Crafty.e("2D, DOM, Label, Text, QRCode-"+qrcode.id)
                            .attr({ x: qrcode._x, y: qrcode._ly, z: 4, w: 150, h: 20 })
                            .text("<strong>" + qrcode.label + "</strong>");
                   }
                }
            });
        });
    }));

    if(Game.dashboard.generated) {
        Crafty.trigger("SocketsReadyEvent");
    }

    // description for the game
    Crafty.e("2D, DOM, GameRules, Text")
        .attr({ x: 320, y: 455, z: 4, w: 640, h: 156 })
        .text("<strong>Tavoite: </strong>" + Game.description);

    Game.dashboard.generated = true;


    //Crafty.scene("Game");
});

//Game Scene
Crafty.scene("Game",
function() {
    // when loaded play sound and...
    // Crafty.audio.play("troot");

    // then picture when loaded
	Crafty.background("url(" + game.path + "/assets/img/bg.png)");

    Game.generateGame();

});
