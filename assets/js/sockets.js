

(function($) {

    //==============================================================================
    // VARIABLES
    //==============================================================================
    var orbiter,
      msgManager,
      roomID,
      UPC = net.user1.orbiter.UPC;

    //==============================================================================
    // INITIALIZATION
    //==============================================================================
    function init() {
        // Create the Orbiter instance, used to connect to and communicate with Union
        orbiter = new net.user1.orbiter.Orbiter();

        // Enable logging to the browser's JavaScript console
         orbiter.getLog().setLevel("debug");
         orbiter.enableConsole();

        // If required JavaScript capabilities are missing, abort
        if (!orbiter.getSystem().isJavaScriptCompatible()) {
            alert("Sorry! Your browser is not supported.");
            return;
        }

        // Register for Orbiter's connection events
        orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.READY, readyListener, this);
        orbiter.addEventListener(net.user1.orbiter.OrbiterEvent.CLOSE, closeListener, this);

        // Connect to Union
        orbiter.connect("socket.dreamschool.fi", 443);

        displayChatMessage("Connecting to Union...");
    }

    function displayChatMessage(message) {
        console.log(message);
    }

    //==============================================================================
    // ORBITER EVENT LISTENERS
    //==============================================================================
    // Triggered when the connection is ready
    function readyListener(e) {
        // Register for incoming messages from Union
        msgManager = orbiter.getMessageManager();
        msgManager.addMessageListener(UPC.JOINED_ROOM, joinedRoomListener, this);
        msgManager.addMessageListener(UPC.CLIENT_ADDED_TO_ROOM, clientAddedListener, this);
        msgManager.addMessageListener(UPC.CLIENT_REMOVED_FROM_ROOM, clientRemovedListener, this);
        msgManager.addMessageListener("GAME_MESSAGE", gameMessageListener, this, [roomID]);
        msgManager.addMessageListener("MOVE_MESSAGE", moveMessageListener, this, [roomID]);
        msgManager.addMessageListener(UPC.CLIENT_ATTR_UPDATE, clientAttributeUpdateListener, this);

        displayChatMessage("Connected.");
        displayChatMessage("Joining room...");

        // set roomID same as init client own ID
        roomID = orbiter.clientID;

        displayChatMessage("Orbiter roomID: " + roomID);

        // Create the chat room
        msgManager.sendUPC(UPC.CREATE_ROOM, roomID);
        // Join the chat room
        msgManager.sendUPC(UPC.JOIN_ROOM, roomID);
    }

    // Triggered when the connection is closed
    function closeListener(e) {
        displayChatMessage("Orbiter connection closed.");
    }

    //==============================================================================
    // LOBBY ROOM EVENT LISTENER
    //==============================================================================
    // Triggered when a JOINED_ROOM message is received
    
    function joinedRoomListener() {
        displayChatMessage("Lobby ready!");

        Game.sockets.ready = true;
        Game.sockets.roomID = roomID;

        if(Game.sockets.dashboard) {
            log('SocketsReadyEvent FIRED');
            Crafty.trigger("SocketsReadyEvent");
        } else {
            var intervalID = setInterval( function() {
                if(Game.sockets.dashboard) {
                    log('SocketsReadyEvent FIRED');
                    Crafty.trigger("SocketsReadyEvent");
                    clearInterval(intervalID);
                }
            }, 500);
        }

    }

    // Triggered when another client joins the chat room
    function clientAddedListener(roomID, clientID) {
        displayChatMessage("User" + clientID + " joined the lobby.");
    }

    // Triggered when another client leaves the chat room
    function clientRemovedListener(roomID, clientID) {
        displayChatMessage("User" + clientID + " left the lobby.");
        displayChatMessage("function clientRemovedListener(roomID, clientID) ");
        // remove player from Game.teams[n].tyres
        _.each(Game.teams, function(team) {
            _.each(team.tractors, function(tractor) {
                if(tractor.tyres.left.id == clientID) tractor.tyres.left = 0;
                if(tractor.tyres.right.id == clientID) tractor.tyres.right = 0;
            });
        });

        // update view
        Game.updateDashBoardTextsAndTractors();

    }

    //==============================================================================
    // MESSAGE RECEIVING
    //==============================================================================
    // Triggered when a game message is received

    function moveMessageListener(fromClientID, message) {
        displayChatMessage("fromClientID: " + fromClientID + ", message: " + message);

        var attrs = message.split(";");
        // attrs[0] = action
        // attrs[1] = accelerometer value

        if(attrs[0] == "jump") {
            // toggle moving direction forward||reverse

            // find out right entity and

            // call ent.toggleDirection();
        }

        if(attrs[0] == "run") {
            // running value (accelerometer)
            var accValue = attrs[1];
            //
            log("run value: " + attrs[1]);
        }

    }

    // Triggered when a game message is received
    function gameMessageListener(fromClientID, message) {
        displayChatMessage("function gameMessageListener(fromClientID, message)")

        displayChatMessage("fromClientID" + fromClientID + ", message" + message);

        if(message == "START") {
            // go to Game scene
            Crafty.scene("Game");
        }

        if(message == "CLOSE") {
            window.location = game.path;
        }

    }

    function clientAttributeUpdateListener (attrScope, clientID, userID, attrName, attrVal, attrOptions) {
        // debug
        log('attrScope:' + attrScope + ', attrName:' + attrName + ', attrVal:' + attrVal + ', roomID:' + roomID + ', clientID:' + clientID);
        // when scope is gameRoom
        if (attrScope == roomID) {

            var addOk = false;
            if(attrName == "USERINFO") {
                var playerName = attrVal.split(";")[2];
                var teamId = attrVal.split(";")[3];
                var playerId = clientID;
                //log(teamId, playerId, playerName)
                addOk = addPlayerToTeam(teamId, playerId, playerName);
            }

            if(addOk) {
                //
                GameController['"'+clientID+'"'] = {};
                GameController['"'+clientID+'"']["tractorId"] = teamId;
                //GameController['"'+clientID+'"']["tractorTyre"] = tractorTyre;
                //
                _.each(Game.teams, function(team) {
                    _.each(team.tractors, function(tractor) {
                        if(tractor.tyres.left.id == clientID) {
                            GameController['"'+clientID+'"']["tractorTyre"] = "left";
                        } else if(tractor.tyres.right.id == clientID) {
                            GameController['"'+clientID+'"']["tractorTyre"] = "right";
                        }
                    });
                });
                //
                msgManager.sendUPC(UPC.SEND_MESSAGE_TO_CLIENTS, "STATE_MESSAGE", clientID, null, "play");
            }
        }
    }

    function addPlayerToTeam(teamId, playerId, playerName) {

        // join the team if exists
        var result = Game.joinTeam(teamId, playerId, playerName);

        //log("result:" + result)

        if(_.isNull(result)) {
            // create team
            if( Game.createTeam(teamId)) {
                // join to team
                Game.joinTeam(teamId, playerId, playerName);
            }
        } else if(result === false) {
            //
            return false;
            // ei ole mitään tapaa tällä hetkellä 
            // lähettää puhelimeen virhettä ettei liittyminen joukkueeseen onnistunut!
        } else if(result === true) {

            // check if farm is full and remove qr code if it does
            var team = _.find(Game.teams, function(obj) { return obj.id == teamId; });
            if(team.playersCount > 1) {
                // remove related qrcode entities from DOM when full
                $(".QRCode-"+teamId).hide();
            } else {
                $(".QRCode-"+teamId).show();
            } 
        }

        // update view
        Game.updateDashBoardTextsAndTractors();
            
        return true;
    }

        //var url = $("#" + gameId).closest('a').attr("href");

        // potkitaan clientti pois huoneesta
        //msgManager.sendUPC(UPC.KICK_CLIENT, fromClientID);
        // suljetaan huone
        //msgManager.sendUPC(UPC.REMOVE_ROOM, roomID);
        // suljetaan oma yhteys
        //orbiter.disconnect();
        // siirrytaan peliin
        //document.location = url;
        //}

    // init the room
    init();

})(window.jQuery);
