// traktorin kääntäminen toimii tällä consolista
// var tractor = Crafty.map.search({_x: 310, _y: 150, _w: 64, _h: 64 })[1];
// tractor.multiway( 2, { UP_ARROW: (tractor._rotation - 90) % 360, DOWN_ARROW: (tractor._rotation + 90) % 360 });

var Game = {
    // teams
    teams: [
        {
            "id" : Crafty.math.randomInt(1, 12),
            "farmId" : 4,
            "tractors" : [
                {   
                    "id": Crafty.math.randomInt(1000, 2000),
                    "tyres": [
                        {
                            "left": {
                                "name" : "Matti",
                                "id" :  Crafty.math.randomInt(1000, 2000)
                            },
                            "right": {
                                "name" : "Maija",
                                "id" :  Crafty.math.randomInt(1000, 2000)
                            }                            
                        }
                    ] 
                }
            ]
        }
    ],
    // weights
    weights: [
        [
            { "c": "wb100g", "value": 100 },
            { "c": "wb200g", "value": 200 },
            { "c": "wb300g", "value": 300 },
            { "c": "wb400g", "value": 400 }
        ],
        [
            { "c": "wb100g", "value": 100 },
            { "c": "wb300g", "value": 300 },
            { "c": "wb300g", "value": 300 },
            { "c": "wb300g", "value": 300 }
        ],
        [
            { "c": "wb200g", "value": 200 },
            { "c": "wb200g", "value": 200 },
            { "c": "wb200g", "value": 200 },
            { "c": "wb400g", "value": 400 }
        ],
        [
            { "c": "wb200g", "value": 200 },
            { "c": "wb200g", "value": 200 },
            { "c": "wb300g", "value": 300 },
            { "c": "wb300g", "value": 300 }
        ],
        [
            { "c": "wb100g", "value": 100 },
            { "c": "wb100g", "value": 100 },
            { "c": "wb400g", "value": 400 },
            { "c": "wb400g", "value": 400 }
        ]
    ],
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
    // farm locations
    farms:[
        { 
            "id" : 1,
            "attr": { _x: 228, _y: 50, _z: 3, _rotate: 0 },
            "shdw": { "c": "shadow1", _x: 228, _y: 50, _z: 2, _rotate: 0 },
            "homebases" : [
                { "c": "team11", "_x": 254, "_y": 76 },
                { "c": "team12", "_x": 328, "_y": 76 },
                { "c": "team13", "_x": 402, "_y": 76 },
                { "c": "team14", "_x": 476, "_y": 76 }
            ],
            "nameplates" : [
                { "c": "nameplate1", "_x": 162, "_y": 5, "_z":3 },
                { "c": "nameplate2", "_x": 381, "_y": 5, "_z":3 }
            ],
            "tractors" : [
                { "c": "team1vechile1", "_x": 312, "_y": 60, "_z":2, "_rotate": 180 },
                { "c": "team1vechile2", "_x": 386, "_y": 60, "_z":2, "_rotate": 180 }
            ]
        },
        { 
            "id" : 2,
            "attr": { _x: 746, _y: 50, _z: 3, _rotate: 0 },
            "shdw": { "c": "shadow1", _x: 746, _y: 50, _z: 2, _rotate: 0 },
            "homebases" : [
                { "c": "team21", "_x": 772, "_y": 76 },
                { "c": "team22", "_x": 846, "_y": 76 },
                { "c": "team23", "_x": 920, "_y": 76 },
                { "c": "team24", "_x": 994, "_y": 76 },
            ],
            "nameplates" : [
                { "c": "nameplate1", "_x": 680, "_y": 5, "_z":3 },
                { "c": "nameplate2", "_x": 899, "_y": 5, "_z":3 }
            ],
            "tractors" : [
                { "c": "team2vechile1", "_x": 830, "_y": 60, "_z":2, "_rotate": 180 },
                { "c": "team2vechile2", "_x": 904, "_y": 60, "_z":2, "_rotate": 180 }
            ]
        },
        { 
            "id" : 3,
            "attr": { _x: 534, _y: 750, _z: 3, _rotate: 180 },
            "shdw": { "c": "shadow1", _x: 564, _y: 780, _z: 2, _rotate: 180 },
            "homebases" : [
                { "c": "team31", "_x": 254, "_y": 692 },
                { "c": "team32", "_x": 328, "_y": 692 },
                { "c": "team33", "_x": 402, "_y": 692 },
                { "c": "team34", "_x": 476, "_y": 692 },
            ],
            "nameplates" : [
                { "c": "nameplate1", "_x": 162, "_y": 755, "_z":3 },
                { "c": "nameplate2", "_x": 381, "_y": 755, "_z":3 }
            ],
            "tractors" : [
                { "c": "team3vechile1", "_x": 312, "_y": 676, "_z":2, "_rotate": 0 },
                { "c": "team3vechile2", "_x": 386, "_y": 676, "_z":2, "_rotate": 0 }
            ]
        },
        { 
            "id" : 4,
            "attr": { _x: 1052, _y: 750, _z: 3, _rotate: 180 },
            "shdw": { "c": "shadow1", _x: 1082, _y: 780, _z: 2, _rotate: 180 },
            "homebases" : [
                { "c": "team41", "_x": 772, "_y": 692 },
                { "c": "team42", "_x": 846, "_y": 692 },
                { "c": "team43", "_x": 920, "_y": 692 },
                { "c": "team44", "_x": 994, "_y": 692 },
            ],
            "nameplates" : [
                { "c": "nameplate1", "_x": 680, "_y": 755, "_z":3 },
                { "c": "nameplate2", "_x": 899, "_y": 755, "_z":3 }
            ],
            "tractors" : [
                { "c": "team4vechile1", "_x": 830, "_y": 676, "_z":2, "_rotate": 0 },
                { "c": "team4vechile2", "_x": 904, "_y": 676, "_z":2, "_rotate": 0 }
            ]
        },
        { 
            "id" : 5,
            "attr": { _x: 50, _y: 553, _z: 3, _rotate: 270 },
            "shdw": { "c": "shadow2", _x: 50, _y: 583, _z: 2, _rotate: 270 },
            "homebases" : [
                { "c": "team51", "_x": 76, "_y": 273 },
                { "c": "team52", "_x": 76, "_y": 347 },
                { "c": "team53", "_x": 76, "_y": 421 },
                { "c": "team54", "_x": 76, "_y": 495 },
            ],
            "nameplates" : [
                { "c": "nameplate1", "_x": 0, "_y": 203, "_z":3 },
                { "c": "nameplate2", "_x": 0, "_y": 557, "_z":3 }
            ],
            "tractors" : [
                { "c": "team5vechile1", "_x": 60, "_y": 331, "_z":2, "_rotate": 90 },
                { "c": "team5vechile2", "_x": 60, "_y": 405, "_z":2, "_rotate": 90 }
            ]
        },
        { 
            "id" : 6,
            "attr": { _x: 1230, _y: 247, _z: 3, _rotate: 90 },
            "shdw": { "c": "shadow2", _x: 1260, _y: 247, _z: 2, _rotate: 90 },
            "homebases" : [
                { "c": "team61", "_x": 1172, "_y": 273 },
                { "c": "team62", "_x": 1172, "_y": 347 },
                { "c": "team63", "_x": 1172, "_y": 421 },
                { "c": "team64", "_x": 1172, "_y": 495 },
            ],
            "nameplates" : [
                { "c": "nameplate1", "_x": 1061, "_y": 203, "_z":3 },
                { "c": "nameplate2", "_x": 1061, "_y": 557, "_z":3 }
            ],
            "tractors" : [
                { "c": "team6vechile1", "_x": 1156, "_y": 331, "_z":2, "_rotate": 270 },
                { "c": "team6vechile2", "_x": 1156, "_y": 405, "_z":2, "_rotate": 270 }
            ]
        }
        
    ],
    generateFarm: function(farmId) {
        _.each(this.farms, function(farm){
            // if right farm
            if(farm.id == farmId) {
                // create farm
                Crafty.e('Farm').attr({ x: farm.attr._x, y: farm.attr._y, z: farm.attr._z, rotation: farm.attr._rotate });
                // create shadows
                var ent = Crafty.e('Shadow').attr({x: farm.shdw._x, y: farm.shdw._y, z: farm.shdw._z, rotation: farm.shdw._rotate});
                ent.addComponent(farm.shdw.c);
                // create farm parts
                _.each(farm.homebases, function(homebase){
                    var ent = Crafty.e('Team').attr({ x: homebase._x, y: homebase._y, z: 1 });
                    // add image
                    ent.addComponent(homebase.c);
                });
                // find the team based on farmId
                var team = _.find(Game.teams, function(obj){ return obj.farmId == farmId; });
                // create nameplates
                var ent = Crafty.e('Nameplate').attr({x: farm.nameplates[0]._x, y: farm.nameplates[0]._y, z: farm.nameplates[0]._z});
                ent.addComponent(farm.nameplates[0].c);
                Crafty.e("2D, Canvas, Text").attr({ x: farm.nameplates[0]._x+45, y: farm.nameplates[0]._y+16, z: 4 }).text(team.tractors[0].tyres[1].name).textColor('#FFFFFF', 1).textFont({ family: 'Arial', size: '16px', weight: 'bold' });
                Crafty.e("2D, Canvas, Text").attr({ x: farm.nameplates[0]._x+45, y: farm.nameplates[0]._y+36, z: 4 }).text(team.tractors[0].tyres[0].name).textColor('#FFFFFF', 1).textFont({ family: 'Arial', size: '16px', weight: 'bold' });
                if (team.tractors.length > 1) {
                    var ent = Crafty.e('Nameplate').attr({x: farm.nameplates[1]._x, y: farm.nameplates[1]._y, z: farm.nameplates[1]._z});
                    ent.addComponent(farm.nameplates[1].c);
                }
                // create tractors for farm
                var ent = Crafty.e('Tractor').attr({x: farm.tractors[0]._x, y: farm.tractors[0]._y, z: farm.tractors[0]._z, rotation: farm.tractors[0]._rotate});
                ent.addComponent(farm.tractors[0].c);
                if (team.tractors.length > 1) {
                    var ent = Crafty.e('Tractor').attr({x: farm.tractors[1]._x, y: farm.tractors[1]._y, z: farm.tractors[1]._z});
                    ent.addComponent(farm.tractors[1].c);
                }
/*
                _.each(team.tractors, function(tractor){
                    var ent = Crafty.e('Tractor').attr({ x: tractor.attr._x, y: tractor.attr._y, z: tractor.attr._z, rotation: tractor.attr._rotation });
                    // add image
                    ent.toggleComponent("team1vechile1", tractor.c);
                    // add farmId to know which farm the tracktor is from
                    ent.farmId = farmId;
                });
*/
            }
        });
    },
    generateFarms: function() {
        _.each(this.farms, function(farm){
            // create farm
            Crafty.e('Farm').attr({ x: farm.attr._x, y: farm.attr._y, z: farm.attr._z, rotate: farm.attr._rotate });
            // create farm parts
             _.each(farm.homebases, function(homebase){
                var ent = Crafty.e('Team').attr({ x: homebase._x, y: homebase._y, z: 1 });
                ent.addComponent(homebase.c);
            });
        });
    },
    // add bases to scene
    generateBases: function() {
        _.each(this.bases, function(base){
            var ent = Crafty.e('Base').attr({ x: base._x, y: base._y, z: 2 });
            ent.addComponent(base.c);
        });
    },
    generateWeightsOnGround: function() {
        var lastRndInt = -1, rndInt = -1;
        // generate weights for each team in game
        _.each(this.teams, function(team){
            // get random value which is differs from the one before
            do {
                // rnd 
                rndInt = Crafty.math.randomInt(0, Game.weights.length-1);
            } while (lastRndInt == rndInt);

            lastRndInt = rndInt;

            // get weight object based on rndInt
            var weights = Game.weights[rndInt];
            //log(weights);

            _.each(weights, function(weight){
                // search rnd place for each weight from the free bases. 
                // when base is used it is dynamically marked with var used = true;
                // get random base which is unused
                var base = null;
                do {
                    // rnd int
                    var rnd = Crafty.math.randomInt(0, Game.bases.length-1);
                    // get base obj if not used. if used return empty obj and continue iteration
                    if(_.isUndefined(Game.bases[rnd].used)) {
                        // get base
                        base = Game.bases[rnd];
                        // mark as used
                        base.used = true;
                    } else {
                        base = null;
                    }
                   
                } while (_.isNull(base));

                var ent = Crafty.e('WeightOnGround').attr({ x: base._x - 16, y: base._y - 16, z: 2 });
                // add sprite component
                ent.addComponent(weight.c);
                // add value to entity
                ent.weightValue = weight.value;
            });
        });
    },
    generateGame: function() {
        //
        Game.generateBases();
        //
        _.each(this.teams, function(team){
            Game.generateFarm( team.farmId );
        });
        //
        Game.generateWeightsOnGround();

    }
    
}