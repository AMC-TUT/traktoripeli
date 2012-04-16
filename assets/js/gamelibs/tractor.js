
var Game = {
    // add this description to level obj
    sockets: { 
        ready: false, 
        roomID: 0, 
        dashboard: false },
    dashboard: { 
        generated: false },
    // TODO tama kuuluu kentan yhteyteen
    description: "Kerää kentältä farmisi neljään karsinaan traktorilla neljä punnusta niin, että punnusten yhteenlaskettu summa on 1000. Nopein farmi voittaa. Traktoria liikutetaan niin että toisen pelaajan juoksu pyörittää vasenta rengasta ja toisen pelaajan juoksu oikeaa rengasta. Hyppäämällä vaihdetaan renkaan pyörimissuuntaa.",
    qrcodes: {
        generated: 0,
        images: [
        { _x: 95, _y: 5, action: 'join', id: 1, _ly: 135, label: 'Liity farmiin' }, // 1
        { _x: 610, _y: 5, action: 'join', id: 2, _ly: 135, label: 'Liity farmiin' }, // 2
        { _x: 1067, _y: 674, action: 'join', id: 3, _ly: 644, label: 'Liity farmiin' }, // 3
        { _x: 550, _y: 674, action: 'join', id: 4, _ly: 644, label: 'Liity farmiin' }, // 4
        { _x: 20, _y: 608, action: 'join', id: 5, _ly: 738, label: 'Liity farmiin' }, // 5
        { _x: 1140, _y: 70, action: 'join', id: 6, _ly: 40, label: 'Liity farmiin' }, // 6
        { _x: 440, _y: 280, action: 'start', _ly: 410, label: 'Aloita peli' }, // start
        { _x: 720, _y: 280, action: 'close', _ly: 410, label: 'Sulje peli' } // close
        ]
    },
    teams: [], // add teams when players join to union
    // teams
    teams: [
        {
            "id" : 1, // sama kuin farm id, tarvitaanko siis lainkaan?
            "farmId" : 1,
            "score" : 0,
            "total" : 0,
            "tractors" : [
                {
                    "id": 1,
                    "tyres": 
                        {
                            "left": {
                                "name" : "Matti",
                                "id" : Crafty.math.randomInt(1000, 2000)
                            },
                            "right": {
                                "name" : "Maija",
                                "id" : Crafty.math.randomInt(1000, 2000)
                            }                            
                        }
                },
                {
                    "id": 2,
                    "tyres":
                        {
                            "left": {
                                "name" : "Jarmo",
                                "id" :  Crafty.math.randomInt(1000, 2000)
                            },
                            "right": {
                                "name" : "Leena",
                                "id" :  Crafty.math.randomInt(1000, 2000)
                            }                            
                        }
                }
            ]
        },
        {
            "id" : Crafty.math.randomInt(1, 12),
            "farmId" : 2,
            "score" : 0,
            "total" : 0,
            "tractors" : [
                {
                    "id": Crafty.math.randomInt(1000, 2000),
                    "tyres": 
                        {
                            "left": {
                                "name" : "Risto",
                                "id" : Crafty.math.randomInt(1000, 2000)
                            },
                            "right": {
                                "name" : "Reijo",
                                "id" : Crafty.math.randomInt(1000, 2000)
                            }                            
                        }
                    
                }
            ]
        }
    ],
    
    // weights
    weights: [
        [
            { c: "wb100g", "value": 100 },
            { c: "wb200g", "value": 200 },
            { c: "wb300g", "value": 300 },
            { c: "wb400g", "value": 400 }
        ],
        [
            { c: "wb100g", "value": 100 },
            { c: "wb300g", "value": 300 },
            { c: "wb300g", "value": 300 },
            { c: "wb300g", "value": 300 }
        ],
        [
            { c: "wb200g", "value": 200 },
            { c: "wb200g", "value": 200 },
            { c: "wb200g", "value": 200 },
            { c: "wb400g", "value": 400 }
        ],
        [
            { c: "wb200g", "value": 200 },
            { c: "wb200g", "value": 200 },
            { c: "wb300g", "value": 300 },
            { c: "wb300g", "value": 300 }
        ],
        [
            { c: "wb100g", "value": 100 },
            { c: "wb100g", "value": 100 },
            { c: "wb400g", "value": 400 },
            { c: "wb400g", "value": 400 }
        ]
    ],
    // base locations
    bases: [
        { _x: 414, _y: 184 },
        { _x: 554, _y: 184 },
        { _x: 694, _y: 184 },
        { _x: 834, _y: 184 },
        { _x: 344, _y: 284 },
        { _x: 484, _y: 284 },
        { _x: 624, _y: 284 },
        { _x: 764, _y: 284 },
        { _x: 904, _y: 284 },
        { _x: 274, _y: 384 },
        { _x: 414, _y: 384 },
        { _x: 554, _y: 384 },
        { _x: 694, _y: 384 },
        { _x: 834, _y: 384 },
        { _x: 974, _y: 384 },
        { _x: 344, _y: 484 },
        { _x: 484, _y: 484 },
        { _x: 624, _y: 484 },
        { _x: 764, _y: 484 },
        { _x: 904, _y: 484 },
        { _x: 414, _y: 584 },
        { _x: 554, _y: 584 },
        { _x: 694, _y: 584 },
        { _x: 834, _y: 584 },
    ],
    // farm locations
    farms:[
        { 
            "id" : 1,
            "attr": { c: "farm1", _x: 228, _y: 50, _rotate: 0 },
            "homebases" : [
                { _x: 254, _y: 76 },
                { _x: 328, _y: 76 },
                { _x: 402, _y: 76 },
                { _x: 476, _y: 76 }
            ],
            "walls" : [
                { _x: 228, _y: 50, _rotate: 0 },
                { _x: 302, _y: 50, _rotate: 0 },
                { _x: 396, _y: 50, _rotate: 0 },
                { _x: 470, _y: 50, _rotate: 0 },
                { _x: 238, _y: 60, _rotate: 90 },
                { _x: 312, _y: 60, _rotate: 90 },
                { _x: 386, _y: 60, _rotate: 90 },
                { _x: 460, _y: 60, _rotate: 90 },
                { _x: 534, _y: 60, _rotate: 90 },
            ],
            "nameplates" : [
                { _x: 228, _y: 5 },
                { _x: 381, _y: 5 }
            ],
            "tractors" : [
                { c: "team1vechile1", _x: 312, _y: 60, "_rotate": 180, _keyForward: Crafty.keys.Q, _keyReverse: Crafty.keys.A },
                { c: "team1vechile2", _x: 386, _y: 60, "_rotate": 180, _keyForward: Crafty.keys.W, _keyReverse: Crafty.keys.S }
            ]
        },
        {
            "id" : 2,
            "attr": { c: "farm1", _x: 746, _y: 50, _rotate: 0 },
            "homebases" : [
                { _x: 772, _y: 76 },
                { _x: 846, _y: 76 },
                { _x: 920, _y: 76 },
                { _x: 994, _y: 76 },
            ],
            "walls" : [
                { _x: 746, _y: 50, _rotate: 0 },
                { _x: 820, _y: 50, _rotate: 0 },
                { _x: 914, _y: 50, _rotate: 0 },
                { _x: 988, _y: 50, _rotate: 0 },
                { _x: 756, _y: 60, _rotate: 90 },
                { _x: 830, _y: 60, _rotate: 90 },
                { _x: 904, _y: 60, _rotate: 90 },
                { _x: 978, _y: 60, _rotate: 90 },
                { _x: 1052, _y: 60, _rotate: 90 },
            ],
            "nameplates" : [
                { _x: 746, _y: 5 },
                { _x: 899, _y: 5 }
            ],
            "tractors" : [
                { c: "team2vechile1", _x: 830, _y: 60, "_rotate": 180 },
                { c: "team2vechile2", _x: 904, _y: 60, "_rotate": 180 }
            ]
        },
        { 
            "id" : 3,
            "attr": { c: "farm2", _x: 228, _y: 676, _rotate: 0 },
            "homebases" : [
                { _x: 254, _y: 692 },
                { _x: 328, _y: 692 },
                { _x: 402, _y: 692 },
                { _x: 476, _y: 692 },
            ],
            "walls" : [
                { _x: 228, _y: 740, _rotate: 0 },
                { _x: 302, _y: 740, _rotate: 0 },
                { _x: 396, _y: 740, _rotate: 0 },
                { _x: 470, _y: 740, _rotate: 0 },
                { _x: 238, _y: 676, _rotate: 90 },
                { _x: 312, _y: 676, _rotate: 90 },
                { _x: 386, _y: 676, _rotate: 90 },
                { _x: 460, _y: 676, _rotate: 90 },
                { _x: 534, _y: 676, _rotate: 90 },
            ],
            "nameplates" : [
                { _x: 228, _y: 755 },
                { _x: 381, _y: 755 }
            ],
            "tractors" : [
                { c: "team3vechile1", _x: 312, _y: 676, "_rotate": 0 },
                { c: "team3vechile2", _x: 386, _y: 676, "_rotate": 0 }
            ]
        },
        { 
            "id" : 4,
            "attr": { c: "farm2", _x: 746, _y: 676, _rotate: 0 },
            "homebases" : [
                { _x: 772, _y: 692 },
                { _x: 846, _y: 692 },
                { _x: 920, _y: 692 },
                { _x: 994, _y: 692 },
            ],
            "walls" : [
                { _x: 746, _y: 740, _rotate: 0 },
                { _x: 820, _y: 740, _rotate: 0 },
                { _x: 914, _y: 740, _rotate: 0 },
                { _x: 988, _y: 740, _rotate: 0 },
                { _x: 756, _y: 676, _rotate: 90 },
                { _x: 830, _y: 676, _rotate: 90 },
                { _x: 904, _y: 676, _rotate: 90 },
                { _x: 978, _y: 676, _rotate: 90 },
                { _x: 1052, _y: 676, _rotate: 90 },
            ],
            "nameplates" : [
                { _x: 745, _y: 755 },
                { _x: 899, _y: 755 }
            ],
            "tractors" : [
                { c: "team4vechile1", _x: 830, _y: 676, "_rotate": 0 },
                { c: "team4vechile2", _x: 904, _y: 676, "_rotate": 0 }
            ]
        },
        { 
            "id" : 5,
            "attr": { c: "farm4", _x: 154, _y: 247, _rotate: 90 },
            "homebases" : [
                { _x: 76, _y: 273 },
                { _x: 76, _y: 347 },
                { _x: 76, _y: 421 },
                { _x: 76, _y: 495 },
            ],
            "walls" : [
                { _x: 60, _y: 247, _rotate: 90 },
                { _x: 60, _y: 321, _rotate: 90 },
                { _x: 60, _y: 415, _rotate: 90 },
                { _x: 60, _y: 489, _rotate: 90 },
                { _x: 60, _y: 247, _rotate: 0 },
                { _x: 60, _y: 321, _rotate: 0 },
                { _x: 60, _y: 395, _rotate: 0 },
                { _x: 60, _y: 469, _rotate: 0 },
                { _x: 60, _y: 543, _rotate: 0 },
            ],
            "nameplates" : [
                { _x: 0, _y: 203 },
                { _x: 0, _y: 557 }
            ],
            "tractors" : [
                { c: "team5vechile1", _x: 60, _y: 331, "_rotate": 90 },
                { c: "team5vechile2", _x: 60, _y: 405, "_rotate": 90 }
            ]
        },
        { 
            "id" : 6,
            "attr": { c: "farm3", _x: 1256, _y: 247, _rotate: 90 },
            "homebases" : [
                { _x: 1172, _y: 273 },
                { _x: 1172, _y: 347 },
                { _x: 1172, _y: 421 },
                { _x: 1172, _y: 495 },
            ],
            "walls" : [
                { _x: 1230, _y: 247, _rotate: 90 },
                { _x: 1230, _y: 321, _rotate: 90 },
                { _x: 1230, _y: 415, _rotate: 90 },
                { _x: 1230, _y: 489, _rotate: 90 },
                { _x: 1156, _y: 247, _rotate: 0 },
                { _x: 1156, _y: 321, _rotate: 0 },
                { _x: 1156, _y: 395, _rotate: 0 },
                { _x: 1156, _y: 469, _rotate: 0 },
                { _x: 1156, _y: 543, _rotate: 0 },
            ],
            "nameplates" : [
                { _x: 1128, _y: 203 },
                { _x: 1128, _y: 557 }
            ],
            "tractors" : [
                { c: "team6vechile1", _x: 1156, _y: 331, "_rotate": 270 },
                { c: "team6vechile2", _x: 1156, _y: 405, "_rotate": 270 }
            ]
        }
        
    ],
    createTeam: function(id) {
        var team =
        {
            "id": id, // sama kuin farm id, toinen siis turha?
            "farmId": id,
            "score": 0,
            "total": 0,
            "tractors": [],
            "playersCount": 0 // keep track how many players has joined to the team
        };

        // add team to game teams array as a new team
        var teams = Game.teams;
        teams.push(team);

        return true;
    },
    joinTeam: function(teamId, playerId, playerName) {
        // get the right team from array
        var team = _.find(Game.teams, function(obj) { return obj.id == teamId; });

        _.each(Game.teams, function(obj) {
            _.each(obj.tractors, function(tractor) {
                if(tractor.tyres.left.id == playerId) {
                    tractor.tyres.left = 0; 
                    obj.playersCount = obj.playersCount-1;
                }
                if(tractor.tyres.right.id == playerId) {
                    tractor.tyres.right = 0;
                    obj.playersCount = obj.playersCount-1;
                } 
            });
        });
        //log(team)
        // check that teamId was right 
        // and team was found
        // and that team is not full already (max 4 players)
        if(_.isUndefined(team)) { return null; }

        if(team.playersCount > 3 ) { return false; }

        // jos ei ole vielä traktoreita niin luo 1. ja liity vasemmaksi renkaaksi
        var tractorCount = team.tractors.length;

        var playerAdded = false;

        // == 0
        if(tractorCount == 0) {
            var tractor = {
                "id": 1,
                "tyres": {
                    "left": 0,
                    "right": 0
                },
            }

            var left = {
                "id": parseInt(playerId),
                "name": playerName
            }

            tractor.tyres.left = left;

            team.tractors.push(tractor);

            playerAdded = true;

        }
        // == 1
        else if(tractorCount == 1) {
            //log("else if(tractorCount == 1)")
            //log(team.tractors[0]);

            // jos on traktoreita hae ensimmäinen vapaa paikka eli 
            // tarkista 1. traktorin rengaspaikat ja rekisteröidy siihen jos vapaana
            //if(!_.isUndefined(team.tractors[0])) {
            if(team.tractors[0].tyres.left == 0) {
                //log("team.tractors[0].left == 0")
                team.tractors[0].tyres.left = { "id": playerId, "name": playerName };
                playerAdded = true;

            } else if(team.tractors[0].tyres.right == 0) {
                //log("team.tractors[0].right == 0")
                team.tractors[0].tyres.right = { "id": playerId, "name": playerName };
                playerAdded = true;
            }

            // 1. traktori täynnä tarkista onko toista traktoria olemassa
            // luo toinen traktori jos ei ole olemassa ja rekisteröidy sen vasemmaksi renkaaksi

            // if there is no free tyres left in 1. tractor - create a new one
            if(!playerAdded) {
                // taa on sama kuin == 0 kohdassa joten refactoroitava myohemmin!!
                var tractor = {
                    "id": 2,
                    "tyres": {
                        "left": 0,
                        "right": 0
                    },
                }

                var left = {
                    "id": parseInt(playerId),
                    "name": playerName
                }

                tractor.tyres.left = left;

                team.tractors.push(tractor);

                playerAdded = true;
            }

            //}
        }
        // jos 2. traktori on olemassa niin tarkista 2. traktorin vapaat paikatniin luo toinen traktori

        // > 1 and player has not yeat added
        else if(tractorCount == 2 && !playerAdded) {
            if(team.tractors[1].tyres.left == 0) {
                team.tractors[1].tyres.left = { "id": playerId, "name": playerName };
                playerAdded = true;
            } else if(team.tractors[1].tyres.right == 0) {
                team.tractors[1].tyres.right = { "id": playerId, "name": playerName };
                playerAdded = true;
            }
        }

        // if adding player has failed
        if(!playerAdded) {
            return false;
        }

        team.playersCount += 1;

        // default
        return true;

    },
    generateFarm: function(farmId) {
        _.each(this.farms, function(farm){
            // if right farm
            if(farm.id == farmId) {
                // create farm
                farmEnt = Crafty.e('Farm').attr({ x: farm.attr._x, y: farm.attr._y, z: 3, rotation: farm.attr._rotate });
                farmEnt.id = farmId;
                farmEnt.addComponent(farm.attr.c);

                // create shadows DISABLED - JOIN TO FARM ???
                // var ent = Crafty.e('Shadow').attr({x: farm.shdw._x, y: farm.shdw._y, z: 2, rotation: farm.shdw._rotate});
                // ent.addComponent(farm.shdw.c);

                // create farm parts
                _.each(farm.homebases, function(homebase){
                    var ent = Crafty.e('Homebase').attr({ x: homebase._x, y: homebase._y, z: 2, w: 64, h: 64 });
                });

                // create farm walls
                _.each(farm.walls, function(wall){
                    var ent = Crafty.e('Wall').attr({ x: wall._x, y: wall._y, z: 2, rotation: wall._rotate, w: 64, h: 64 });
                });

                // add nameplates to farm
                Game.generateFarmNameplates(farm);
                
                // find the team based on farmId
                var team = _.find(Game.teams, function(obj){ return obj.farmId == farmId; });
                // create nameplates, names and tractors
                for (var i = 0; i < team.tractors.length; i++) {
                    //var ent = Crafty.e('Nameplate').attr({x: farm.nameplates[i]._x, y: farm.nameplates[i]._y, z: 2});
                    //ent.addComponent(farm.nameplates[i].c);
                    Crafty.e("2D, DOM, Text, NameplateText").attr({ x: farm.nameplates[i]._x+45, y: farm.nameplates[i]._y+2, z: 3 }).text(team.tractors[i].tyres.right.name);
                    Crafty.e("2D, DOM, Text, NameplateText").attr({ x: farm.nameplates[i]._x+45, y: farm.nameplates[i]._y+21, z: 3 }).text(team.tractors[i].tyres.left.name);
                    
                    var ent = Crafty.e('Tractor').attr({x: farm.tractors[i]._x, y: farm.tractors[i]._y, z: 3, rotation: farm.tractors[i]._rotate});
                    ent.farmId = farmId;
                    ent.addComponent(farm.tractors[i].c);

                    ent._keyForward = farm.tractors[i]._keyForward;
                    ent._keyReverse = farm.tractors[i]._keyReverse;

                    // ent to game obj
                    team.tractors[i].ent = ent;

                    //Game.testTractor = ent;
                    //Crafty.addEvent(this, "mousemove", function(e) {
                        //var pos = Crafty.DOM.translate(e.clientX, e.clientY);
                        //log(pos)
                        //Game.testTractor.rotation = ~~(Math.atan2(pos.y - Game.testTractor._y, pos.x - Game.testTractor._x) * (180 / Math.PI)) + 90;
                    //});

                }
            }
        });

        // add game timer to top right corner
        Game.addTimer();

    },
    addTimer: function() {
        Crafty.e('Timer').attr({ x: 1100, y: 5, z: 4 });
    },
    generateFarms: function() {
        _.each(this.farms, function(farm){
            // create farm
            var ent = Crafty.e('Farm').attr({ x: farm.attr._x, y: farm.attr._y, z: farm.attr._z, rotation: farm.attr._rotate });
            ent.addComponent(farm.attr.c);
            // add nameplates
            Game.generateFarmNameplates(farm);
        });
    },
    generateFarmNameplates: function(farm) {
        // if undefined
        var farm = farm || {};
        // odd | even counter
        var i = 0;

        // each plate
        _.each(farm.nameplates, function(nameplate) {
            // add entity
            var ent = Crafty.e('Nameplate').attr({ x: farm.nameplates[i]._x, y: farm.nameplates[i]._y, z: 2 });
            // add farmId
            ent.farmId = farm.id;
            // tractor and nameplate
            var j = i + 1;
            // add tractorId
            ent.tractorId = j;
            // add image
            ent.addComponent('nameplate' + j );
            // odd | even switcher
            i = i ? 0 : 1;
        });
    },
    updateDashBoardTextsAndTractors: function() {
        // find the team based on farmId
        _.each(Game.teams, function(team) {

            var farm = _.find(Game.farms, function(obj){ return obj.id == team.id; });

//            $(".NameplateText").remove();
/*
            _.each(Game.farms, function(obj) {
                log("OBJ")
                log(obj)
                _.each(obj.nameplates, function(nameplate) { // _.filter
                    log(nameplate)
                    var entities = Crafty.map.search({_x: nameplate._x, y: nameplate._y, _w: 400, _h: 200 });
                    log("removeplates entities")
                    log(entities)
                    _.each(entities, function(ent) {
                        log(ent)
                        log(ent.__c.NameplateText)
                        if(ent.__c.NameplateText) ent.destroy();
                    });
                });
            });
*/
            // create nameplatetexts
            for (var i = 0; i < team.tractors.length; i++) {
                Crafty.e("2D, DOM, Text, NameplateText").attr({ x: farm.nameplates[i]._x+45, y: farm.nameplates[i]._y+2, z: 3 }).text(team.tractors[i].tyres.right.name);
                Crafty.e("2D, DOM, Text, NameplateText").attr({ x: farm.nameplates[i]._x+45, y: farm.nameplates[i]._y+21, z: 3 }).text(team.tractors[i].tyres.left.name);
            }

            // tractors
            var i = 0;
            _.each(team.tractors, function(tractor) {
                var entities = Crafty.map.search({_x: tractor._x + 16, _y: tractor._y, _w: 64, _h: 64 });
                log("remove tractors")
                log(entities)
                _.each(entities, function(ent) {
                    if(ent.__c.Tractor) ent.destroy();
                });

                if(tractor.tyres.left != 0 && tractor.tyres.right != 0) {
                    var ent = Crafty.e('Tractor').attr({x: farm.tractors[i]._x, y: farm.tractors[i]._y, z: 3, rotation: farm.tractors[i]._rotate});
                    ent.addComponent(farm.tractors[i].c);
                }
                i++;
            });
        });

        return false;
    },
    // add bases to scene
    generateBases: function() {
        _.each(this.bases, function(base){
            Crafty.e('Base').attr({ x: base._x, y: base._y, z: 2, w: 32, h: 32 });
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
                var basement = ent.hit('Base')[0].obj;
                basement.weightValue = weight.value;
                // add value to entity
                // ent.weightValue = weight.value;
            });
        });
    },
    generateGame: function() {
        Game.generateBases();
        //
        _.each(this.teams, function(team){
            Game.generateFarm( team.farmId ); //, team.id );
        });
        //
        Game.generateWeightsOnGround();

        $('#results').modal('show');

    }
}