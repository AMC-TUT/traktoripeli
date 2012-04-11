

(function($) {

    //==============================================================================
    // VARIABLES
    //==============================================================================
    var orbiter;
    var msgManager;
    var UPC = net.user1.orbiter.UPC;
    var roomID = "game-" + Math.floor(Math.random() * 100000);

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
        // console.log(message);
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
        msgManager.addMessageListener("GAME_MESSAGE", chatMessageListener, this, [roomID]);

        displayChatMessage("Connected.");
        displayChatMessage("Joining room...");

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
            triggerEventForDashboard();
        } else {
            var intervalID = setInterval( function() {
                if(Game.sockets.dashboard) {
                    log('SocketsReadyEvent FIRED');
                    Crafty.trigger("SocketsReadyEvent");
                    clearInterval(intervalID);
                }
            }, 500);
    }

        // generate QR Codes
        /*
        var id,
        json;

        id = 'bug-qr';
        json = {
            "roomId": roomID,
            "action": "open",
            "gameId": id
        };
        qr(id, json);

        id = 'brain-qr';
        json = {
            "roomId": roomID,
            "action": "open",
            "gameId": id
        };
        qr(id, json);

        id = 'courier-qr';
        json = {
            "roomId": roomID,
            "action": "open",
            "gameId": id
        };
        qr(id, json);
        */
    }

    // Triggered when another client joins the chat room
    function clientAddedListener(roomID, clientID) {
        displayChatMessage("User" + clientID + " joined the lobby.");
    }

    // Triggered when another client leaves the chat room
    function clientRemovedListener(roomID, clientID) {
        displayChatMessage("User" + clientID + " left the lobby.");
    }

    //==============================================================================
    // MESSAGE RECEIVING
    //==============================================================================
    // Triggered when a game message is received
    function chatMessageListener(fromClientID, message) {

        var gameId = message;
        var url = $("#" + gameId).closest('a').attr("href");

        //  potkitaan clientti pois huoneesta
        msgManager.sendUPC(UPC.KICK_CLIENT, fromClientID);
        // suljetaan huone
        msgManager.sendUPC(UPC.REMOVE_ROOM, roomID);
        // suljetaan oma yhteys
        orbiter.disconnect();
        // siirrytaan peliin
        document.location = url;
    }

    // init the room
    init();



})(window.jQuery);