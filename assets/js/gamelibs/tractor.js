// traktorin kääntäminen toimii tällä consolista
// var tractor = Crafty.map.search({_x: 310, _y: 150, _w: 64, _h: 64 })[1];
// tractor.multiway( 2, { UP_ARROW: (tractor._rotation - 90) % 360, DOWN_ARROW: (tractor._rotation + 90) % 360 });

var Game = {
    // teams
    teams: [
        {
            "id" : Crafty.math.randomInt(1, 12),
            "farmId" : 1,
            "tractors" : [
                {   
                    "id": Crafty.math.randomInt(1000, 2000),
                    "attr" : {
                        _x: 310,
                        _y: 150,
                        _z: 3,
                        _rotation: 140
                    },
                    "c": "team2vechile2",
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
            "homebases" : [
                { "c": "team11", "_x": 254, "_y": 76 },
                { "c": "team12", "_x": 328, "_y": 76 },
                { "c": "team13", "_x": 402, "_y": 76 },
                { "c": "team14", "_x": 476, "_y": 76 }
            ]
        },
        { 
            "id" : 2,
            "homebases" : [
                { "c": "team21", "_x": 772, "_y": 76 },
                { "c": "team22", "_x": 846, "_y": 76 },
                { "c": "team23", "_x": 920, "_y": 76 },
                { "c": "team24", "_x": 994, "_y": 76 },
            ]
        },
        { 
            "id" : 3,
            "homebases" : [
                { "c": "team31", "_x": 254, "_y": 692 },
                { "c": "team32", "_x": 328, "_y": 692 },
                { "c": "team33", "_x": 402, "_y": 692 },
                { "c": "team34", "_x": 476, "_y": 692 },
            ]
        },
        { 
            "id" : 4,
            "homebases" : [
                { "c": "team41", "_x": 772, "_y": 692 },
                { "c": "team42", "_x": 846, "_y": 692 },
                { "c": "team43", "_x": 920, "_y": 692 },
                { "c": "team44", "_x": 994, "_y": 692 },
            ]
        },
        { 
            "id" : 5,
            "homebases" : [
                { "c": "team51", "_x": 76, "_y": 273 },
                { "c": "team52", "_x": 76, "_y": 347 },
                { "c": "team53", "_x": 76, "_y": 421 },
                { "c": "team54", "_x": 76, "_y": 495 },
            ]
        },
        { 
            "id" : 6,
            "homebases" : [
                { "c": "team61", "_x": 1172, "_y": 273 },
                { "c": "team62", "_x": 1172, "_y": 347 },
                { "c": "team63", "_x": 1172, "_y": 421 },
                { "c": "team64", "_x": 1172, "_y": 495 },
            ]
        }
        
    ],
    generateFarm: function(farmId) {
        _.each(this.farms, function(farm){
            // if right farm
            if(farm.id == farmId) {
                // create farm
                Crafty.e('Farm').attr({ x: farm.attr._x, y: farm.attr._y, z: farm.attr._z, rotate: farm.attr._rotate });
                
                // create farm parts
                _.each(farm.homebases, function(homebase){
                    var ent = Crafty.e('Team').attr({ x: homebase._x, y: homebase._y, z: 1 });
                    // add image
                    ent.addComponent(homebase.c);
                });
                // find the team based on farmId
                var team = _.find(Game.teams, function(obj){ return obj.farmId == farmId; });

                // create tractors for farm
                _.each(team.tractors, function(tractor){
                    var ent = Crafty.e('Tractor').attr({ x: tractor.attr._x, y: tractor.attr._y, z: tractor.attr._z });
                    // add image
                    ent.addComponent(tractor.c);
                    // rotate
                    ent.rotation = tractor.attr._rotation;
                    // add farmId to know which farm the tracktor is from
                    ent.farmId = farmId;
                });
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