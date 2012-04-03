var Game = {
    jokinmuuttuja: null,
    jokinFunc: function(timer) {
        return 'tein jotain';
    },
    zeroPad: function(num, count) {
        var numZeropad = num + '';
        while (numZeropad.length < count) {
            numZeropad = "0" + numZeropad;
        }
        return numZeropad;
    },
    previousPos: function(current, direction) {

        return 'jokin arvo'

    },
    masunFunktio: function() {

        // global array of playernames should be elsewere
        var players = ["arttu", "teemu", "", "",
                       "marko", "kristian", "", "",
                       "", "", "", "",
                       "", "", "", "",
                       "", "", "", "",
                       "", "", "", ""];

        // http://documentcloud.github.com/underscore/
        // esim _.each([1, 2, 3], function(num){ alert(num); });
        for (i = 0;i<players.length;i+2) {
            if (players[i].length > 0 && players[i+1].length > 0) {
                switch (i) {
                    case 0: // Create farm1 and tractor1
                        break;
                    case 2: // Create tractor2
                        break;
                    case 4: // Create farm2 and tractor1
                        break;
                    case 6: // Create tractor2
                        break;
                    case 8: // Create farm3 and tractor1
                        break;
                    case 10: // Create tractor2
                        break;
                    case 12: // Create farm4 and tractor1
                        break;
                    case 14: // Create tractor2
                        break;
                    case 16: // Create farm5 and tractor1
                        break;
                    case 18: // Create tractor2
                        break;
                    case 20: // Create farm6 and tractor1
                        break;
                    case 22: // Create tractor2
                        break;
                }

            }
        }
    },
    teams: [
        {
            "id" : Crafty.math.randomInt(1, 12),
            "tractors" : [
                { 
                    "c": "team2vechile2",
                    "members": [
                        {
                            "name" : "matti",
                            "memberId" :  Crafty.math.randomInt(1000, 2000)
                        }
                    ] 
                }
            ]
        }
    ],
    weights: [
        {
            "weight1": 100,
            "weight2": 200,
            "weight3": 300,
            "weight4": 400
        },
        {
            "weight1": 100,
            "weight2": 300,
            "weight3": 300,
            "weight4": 300
        },
        {
            "weight1": 200,
            "weight2": 200,
            "weight3": 200,
            "weight4": 400
        },
        {
            "weight1": 200,
            "weight2": 200,
            "weight3": 300,
            "weight4": 300
        },
        {
            "weight1": 100,
            "weight2": 100,
            "weight3": 400,
            "weight4": 400
        }
    ],
    bases: [
        { "c": "Base01", "_x": 414, "_y": 184 },
        { "c": "Base02", "_x": 554, "_y": 184 },
        { "c": "Base03", "_x": 694, "_y": 184 },


/*
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
    */
    ] 
    












}