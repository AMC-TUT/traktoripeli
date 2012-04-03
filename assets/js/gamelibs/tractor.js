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
    // add weight to scene
    generateWeights: function() {
        _.each(Game.teams, function(team){
            
            var ent = Crafty.e('Base').attr({ x: base._x, y: base._y, z: 2 });
            ent.addComponent(base.c);
        });
    },
    // base locations
    bases: [
        { "c": "base01", "_x": 414, "_y": 184 },
        { "c": "base02", "_x": 554, "_y": 184 },
        { "c": "base03", "_x": 694, "_y": 184 },
        { "c": "base04", "_x": 834, "_y": 184 },
        { "c": "base05", "_x": 344, "_y": 284 },
        { "c": "base06", "_x": 484, "_y": 284 },
        { "c": "base07", "_x": 624, "_y": 284 },
        { "c": "base08", "_x": 764, "_y": 284 },
        { "c": "base09", "_x": 904, "_y": 284 },
        { "c": "base10", "_x": 274, "_y": 384 },
        { "c": "base11", "_x": 414, "_y": 384 },
        { "c": "base12", "_x": 554, "_y": 384 },
        { "c": "base13", "_x": 694, "_y": 384 },
        { "c": "base14", "_x": 834, "_y": 384 },

        { "c": "base15", "_x": 974, "_y": 384 },
        { "c": "base16", "_x": 344, "_y": 484 },
        { "c": "base17", "_x": 484, "_y": 484 },
        { "c": "base18", "_x": 624, "_y": 484 },
        { "c": "base19", "_x": 764, "_y": 484 },

        { "c": "base20", "_x": 904, "_y": 484 },
        { "c": "base21", "_x": 414, "_y": 584 },
        { "c": "base22", "_x": 554, "_y": 584 },
        { "c": "base23", "_x": 694, "_y": 584 },
        { "c": "base24", "_x": 834, "_y": 584 },
    ],
    // add bases to scene
    generateBases: function() {
        _.each(this.bases, function(base){
            var ent = Crafty.e('Base').attr({ x: base._x, y: base._y, z: 2 });
            ent.addComponent(base.c);
        });
    },
    // homebase locations
    homebases:[
        { "c": "team11", "_x": 254, "_y": 76 },
        { "c": "team12", "_x": 328, "_y": 76 },
        { "c": "team13", "_x": 402, "_y": 76 },
        { "c": "team14", "_x": 476, "_y": 76 },
        { "c": "team21", "_x": 772, "_y": 76 },
        { "c": "team22", "_x": 846, "_y": 76 },
        { "c": "team23", "_x": 920, "_y": 76 },
        { "c": "team24", "_x": 994, "_y": 76 },
        { "c": "team31", "_x": 254, "_y": 692 },
        { "c": "team32", "_x": 328, "_y": 692 },
        { "c": "team33", "_x": 402, "_y": 692 },
        { "c": "team34", "_x": 476, "_y": 692 },
        { "c": "team41", "_x": 772, "_y": 692 },
        { "c": "team42", "_x": 846, "_y": 692 },
        { "c": "team43", "_x": 920, "_y": 692 },
        { "c": "team44", "_x": 994, "_y": 692 },
        { "c": "team51", "_x": 76, "_y": 273 },
        { "c": "team52", "_x": 76, "_y": 347 },
        { "c": "team53", "_x": 76, "_y": 421 },
        { "c": "team54", "_x": 76, "_y": 495 },
        { "c": "team61", "_x": 1172, "_y": 273 },
        { "c": "team62", "_x": 1172, "_y": 347 },
        { "c": "team63", "_x": 1172, "_y": 421 },
        { "c": "team64'", "_x": 1172, "_y": 495 },
    ],
    generateHomebases: function() {
        _.each(this.homebases, function(team){
            var ent = Crafty.e('Team').attr({ x: team._x, y: team._y, z: 1 });
            ent.addComponent(team.c);
        });
    }
    
}