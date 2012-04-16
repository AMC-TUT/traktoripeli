
Crafty.c("Tractor", {
    id: 0,
    farmId: 0,
    team: 0, // TURHA?
    number: 0, // TURHA?
    slot: 0, // TURHA?
    weightValue: 0, // value of the loaded weight
    _from: null, // tractor's previous x and y values
    init: function() {
        this.id = Crafty.math.randomInt(1000, 140000); // use roomID later when sockets
        this.farmId = 0,
        this.weightValue = 0,
        this.slot = 0,
        this.team = 1,
        this.number = 1,
        this.movement = {
            speed: 2,
            difference: 1,
            rotate: {
                sin: 0,
                cos: 0,
            }
        },
        this.addComponent("2D", "Canvas", "Collision", "SpriteAnimation", "Keyboard", "team1vechile1")
        .origin("bottom")
        .collision(new Crafty.polygon([16,0], [48,0], [48,64], [16,64]))
        // define tractor animations
        .animate("FrwdFrwd", [
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1]
        ])
        .animate("FrwdBrwd", [
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]
        ])
        .animate("BrwdBrwd", [
        [0, 1], [7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1]
        ])
        .animate("BrwdFrwd", [
        [0, 0], [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0]
        ])
        .bind("Moved", function(from) {

            this._from = from;

            /* Dont allow to move the tractor out of the Screen */
            if(this.x + this.w > Crafty.viewport.width ||
                this.x + this.w - 20 < this.w || 
                this.y + this.h < this.h || 
                this.y + this.h > Crafty.viewport.height || this.preparing){
                this.attr({ x:from.x, y:from.y });
            }

        })
        .bind("EnterFrame", function(frame) {

            var angle = this._rotation * (Math.PI / 180),
                vx = Math.sin(angle),
                vy = -Math.cos(angle);

            if(this.isDown(Crafty.keys.UP_ARROW)) {
                this.x += vx * 1.5;
                this.y += vy * 1.5;
            } else if(this.isDown(Crafty.keys.DOWN_ARROW)) {
                this.x += -vx * 0.5;
                this.y += -vy * 0.5;
            }
            
            //check for collision with houses

            var collision = this.hit("Wall"), 
              item, normal = {x: 0, y: 0};

            if(collision) {
                item = collision[0];
                this.x += Math.ceil(item.normal.x * -item.overlap);
                this.y += Math.ceil(item.normal.y * -item.overlap);
                log(item.normal.x);
                log(item.overlap);

            }
            
        })
        .bind('KeyDown', function(e) {
            /*
            if(this.isDown('RIGHT_ARROW')) {
                if (!this.isPlaying("FrwdBrwd")) {
                    this.stop().animate("FrwdBrwd", 10, -1);
                }
            } else if(this.isDown('LEFT_ARROW')) {
                if (!this.isPlaying("BrwdFrwd")) {
                    this.stop().animate("BrwdFrwd", 10, -1)
                }
            } else 
            */
            if(this.isDown('DOWN_ARROW')) {
                if (!this.isPlaying("FrwdFrwd")) {
                    this.stop().animate("FrwdFrwd", 10, -1)
                }
            
            } else if(this.isDown('UP_ARROW')) {
                if (!this.isPlaying("BrwdBrwd")) {
                    this.stop().animate("BrwdBrwd", 10, -1)
                } 
            }
        })
        .bind('KeyUp', function(e) {
            // stop * animations
            this.stop();
        })
        .onHit("Tractor",
            function(ent) {
                var obj = ent[0].obj;
                var hitType = 0;
                if (obj.weightValue > 0) {
                    hitType += 1;
                }
                if (this.weightValue > 0) {
                    hitType += 2;
                }
                if(this.firstHit) {
                    switch (hitType) {
                        case 0: // nothing
                            break;
                        case 1: // tractor drops weight
                            var entities = Crafty.map.search({_x: obj._x + 16, _y: obj._y, _w: 32, _h: 32 });
                            var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                            if (!_.isUndefined(weight)) {
                                weight.destroy();
                            }
                            this.weightValue = obj.weightValue;
                            obj.weightValue = 0;
                            var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: this._x + 20, y: this._y + 20, z: 3 });
                            break;
                        case 2: // tractor picks up weight
                            var entities = Crafty.map.search({_x: this._x + 16, _y: this._y, _w: 32, _h: 32 });
                            var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                            if (!_.isUndefined(weight)) {
                                weight.destroy();
                            }
                            obj.weightValue = this.weightValue;
                            this.weightValue = 0;
                            var e = Crafty.e("WeightOnWheels", "ww"+obj.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });
                            break;
                        case 3: // no access
                            var entities = Crafty.map.search({_x: obj._x + 16, _y: obj._y, _w: 32, _h: 32 });
                            var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                            if (!_.isUndefined(weight)) {
                                weight.destroy();
                            }
                            var entities = Crafty.map.search({_x: this._x + 16, _y: this._y, _w: 32, _h: 32 });
                            var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                            if (!_.isUndefined(weight)) {
                                weight.destroy();
                            }
                            var tmp = this.weightValue;
                            this.weightValue = obj.weightValue;
                            obj.weightValue = tmp;
                            var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: this._x + 20, y: this._y + 20, z: 3 });
                            var e = Crafty.e("WeightOnWheels", "ww"+obj.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });

                            break;
                    }
                    // Crafty.audio.play("weight-switch");
                    this.firstHit = 0;
                }

            }, function() {
                this.firstHit = 1;
            }
        )

        /*



        .onHit("Base",
            function(ent) {
                //log('Tractor osui Baseen!');
                // add WeightOnGround and run self destruction

                // get value
                var value = 400; //this.value;

                var weight;
                _.each(Game.weights[0], function(obj){
                    if(obj.value == value) {
                        weight = obj;
                    }
                });

                // create WeightOnGround
                var e = Crafty.e('WeightOnGround').attr({ x: ent[0].obj._x - 16, y: ent[0].obj._y - 16, z: 2 });
                // add sprite component
                e.addComponent(weight.c);
                // add value to entity
                e.value = weight.value;

                //this.destroy();
            }
        )
        */
    }
});

Crafty.c("Base", {
    weightValue: 0, // weight value: 100, 200, 300, 400
    firstHit: 1,
    init: function() {
        this.weightValue = 0,
        this.firstHit = 1,
        this.addComponent("2D", "Canvas", "Collision")
        .collision(new Crafty.circle(16, 16, 16))
        .onHit("Tractor",
            function(ent) {
                var obj = ent[0].obj;
                var hitType = 0;
                if (obj.weightValue > 0) {
                    hitType += 1;
                }
                if (this.weightValue > 0) {
                    hitType += 2;
                }
                if(this.firstHit) {
                    switch (hitType) {
                        case 0: // nothing
                            break;
                        case 1: // tractor drops weight
                            var entities = Crafty.map.search({_x: obj._x + 16, _y: obj._y, _w: 32, _h: 64 });
                            var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                            if (!_.isUndefined(weight)) {
                                weight.destroy();
                            }
                            this.weightValue = obj.weightValue;
                            obj.weightValue = 0;
                            var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: this._x - 16, y: this._y - 16, z: 3 });
                            // Crafty.audio.play("weight-down");
                            break;
                        case 2: // tractor picks up weight
                            var entities = Crafty.map.search({_x: this._x, _y: this._y, _w: 32, _h: 32 });
                            var weight = _.find(entities, function(entity){ return entity.__c.WeightOnGround == true; });
                            if (!_.isUndefined(weight)) {
                                weight.destroy();
                            }
                            obj.weightValue = this.weightValue;
                            this.weightValue = 0;
                            var e = Crafty.e("WeightOnWheels", "ww"+obj.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });
                            // Crafty.audio.play("weight-up");
                            break;
                        case 3: // no access  // BUGI
/*
                            obj.attr({
                                x: obj._from.x,
                                y: obj._from.y
                            });
*/
                            break;
                    }
                    this.firstHit = 0;
                } else {
                    if (hitType == 3) {
/*
                        obj.attr({
                            x: obj._from.x,
                            y: obj._from.y
                        });
*/
                    }
                }

            }, function() {
                this.firstHit = 1;
            }
        )
    }
});

Crafty.c("Homebase", {   
    weightValue: 0, // weight value: 100,200,300,400
    firstHit: 1,
    init: function() {
        this.weightValue = 0,
        this.firstHit = 1,
        this.addComponent("2D", "Collision")
        .collision(new Crafty.polygon([0,0], [32,0], [32,32], [0,32]))
        .onHit("Tractor",
            function(ent) {
                var obj = ent[0].obj;
                var hitType = 0;
                if (obj.weightValue > 0) {
                    hitType += 1;
                }
                if (this.weightValue > 0) {
                    hitType += 2;
                }
                if(this.firstHit) {
                    var farm = this.hit('Farm')[0].obj;
                    if (farm.id == obj.farmId) {
                        switch (hitType) {
                            case 0: // nothing
                                break;
                            case 1: // tractor drops weight
                                var entities = Crafty.map.search({_x: obj._x + 16, _y: obj._y, _w: 32, _h: 64 });
                                var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                                if (!_.isUndefined(weight)) {
                                    weight.destroy();
                                }
                                this.weightValue = obj.weightValue;
                                obj.weightValue = 0;
                                var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: this._x - 16, y: this._y - 16, z: 3 });
                                // Crafty.audio.play("weight-down");
                                break;
                            case 2: // tractor picks up weight
                                var entities = Crafty.map.search({_x: this._x, _y: this._y, _w: 32, _h: 32 });
                                var weight = _.find(entities, function(entity){ return entity.__c.WeightOnGround == true; });
                                if (!_.isUndefined(weight)) {
                                    weight.destroy();
                                }
                                obj.weightValue = this.weightValue;
                                this.weightValue = 0;
                                var e = Crafty.e("WeightOnWheels", "ww"+obj.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });
                                // Crafty.audio.play("weight-up");
                                break;
                            case 3: // no access
                                obj.attr({
                                    x: obj._from.x, 
                                    y: obj._from.y
                                });
                                break;
                        }
                        // trigger Farm to check its current weightValue sum
                        farm.trigger("CountBases");                        
                    } else {
                        log("kaverin farmi");
                    }
                    this.firstHit = 0;
                } else {
                    if (hitType == 3) {
                        obj.attr({
                            x: obj._from.x,
                            y: obj._from.y
                        });
                    }
                }

            }, function() {

                log('ohi on');

                this.firstHit = 1;
            }
        )
    }
});

Crafty.c("WeightOnGround", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision")
    }
});

Crafty.c("WeightOnWheels", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision")
        .collision(new Crafty.polygon([0,0], [16,0], [16,16], [0,16]))
        .onHit("Tractor", function(ent) {
            this.x = ent[0].obj._x + 16;
            this.y = ent[0].obj._y + 16;
        })
    }
});


Crafty.c("Farm", {
    weightValue: 0,
    id: 0,
    init: function() {
        this.weightValue = 0,
        this.id = 0,
        this.addComponent("2D", "Canvas", "Collision", "farm")
        .bind('CountBases', function() {
            // trigger to count weight values on Farm
            // clear old value
            var weightValue = 0;
            var weightCount = 0;
            // get farms weights
            var weights = this.hit("Homebase");
            // loop weights and get the weightValues
            _.each(weights, function(weight){
                weightValue += weight.obj.weightValue;
                weightCount += 1;
            });
            // set as ent var
            this.weightValue = weightValue;
            //
            var farmId = this.id;
            //
            var team = _.find(Game.teams, function(team){ return team.farmId == farmId; });
            //
            team.score = this.weightValue;
            //
            if(team.score == 1000 && weightCount == 4) {

                // stop tractors
                // STOP

                // timer stop and get the value for bonus points
                Crafty.trigger("StopTimer");
                // get full text
                var timerText = $(".Timer").text();
                // time part of the text
                var timeText = timerText.replace("Aika: ", "");

                //log("timeText:" + timeText);

                var bonusTime = parseInt(timeText);
                // multiplier to give time bonus
                var multiplier = 1;
                if (bonusTime > 0) {
                    multiplier = 1 + bonusTime/60;
                }
                // calculate total score for each team
                _.each(Game.teams, function(team) {
                    team.total = Math.floor(multiplier * team.score);
                });
                // play some unspirational music and cheer for winner
                // cheer first
                Crafty.audio.play("cheer");
                // march then
                /*
                setTimeout(function() {
                    if(Game.audio._muted) {
                        Game.audio.play("march", -1);
                    }
                }, 4000);
                */
                var dom = "";

                // asc order
                //Crafty.teams = _.sortBy(Crafty.teams, function(team){ return Math.abs(team.total-10); });

                // sort teams
                Game.teams = Game.teams.sort( function(a, b) { return b.total - a.total});

                // TODO laske tama arvo jotenkin timeText merkkijonosta
                //var multiplier = 3.39;
                
                // play some inspirational music and cheer for winner
                // cheer first
                //Crafty.audio.play("cheer");

                // asc order
                //Crafty.teams = _.sortBy(Crafty.teams, function(obj){ return obj.score; }).reverse();

                // collect scores from each team's farms to Game.teams array
                var counter = 1;
                //
                var dom = '<div class="scoreboard modal fade in"> <div class="modal-header"> <a class="close" data-dismiss="modal">×</a> <h3>Tulokset</h3> </div> <div class="modal-body"> <table class="table"> <thead> <tr> <th>#</th> <th>Pisteet</th> <th>Aikabonus</th> <th>Kokonaispisteet</th> <th>Pelaajat</th> </tr> </thead> <tbody>'; 
                //
                _.each(Game.teams, function(team) {
                    // total points
                    var total = multiplier * team.score;
                    // time points
                    var timebonus = total - team.score;
                    //

                    var players = "";
                    _.each(team.tractors, function(tractor) {
                        if (players.length > 0) {
                            players += ", ";
                        }
                        players += tractor.tyres.left.name + ", " + tractor.tyres.right.name;

                    })
                    // time points
                    var timebonus = team.total - team.score;

                    //
                    dom += "<tr><td>" + counter + "</td><td>" + team.score + "</td><td>" + timebonus + "</td><td>" + team.total +"</td><td>" + players + "</td></tr>";
                    //
                    counter += 1;
                });

                dom += '</tbody> </table> </div> <div class="modal-footer"> <strong>Ikkuna sulkeutuu <span class="seconds">10</span> sekunnin kuluttua</strong> </div> </div>';

                $("#scoreboard").append(dom);

                // set team and score info to scoreboard table
                $('.scoreboard').on('show', function () {
                  var $seconds = $(".seconds");

                  var intervalID = window.setInterval( function() {
                    //
                    var s = parseInt($seconds.text()) - 1 ;

                    if(s < 0) {
                        clearInterval(intervalID);

                        $('.scoreboard').remove();

                        // open DashBoard
                        Crafty.scene("DashBoard");
                    } else {
                        $seconds.text(s);
                    }

                  }, 1000);
                });
                /*
                $('.scoreboard').on('hidden', function () {
                  log(" .scoreboard' .on 'hidden'");
                  // stop playing audio 
                  // Game.audio.mute();
                  //
                  $('#scoreboard').empty();
                  // open DashBoard
                  Crafty.scene("DashBoard");
                });
                */
                $('.scoreboard').modal({ backdrop: false, show: true, keyboard: false });

                // show scoreboard
                $('.scoreboard').modal('show');

                // Reset game
                _.each(Game.teams, function(team) {

                    team.score = 0;

                    _.each(team.tractors, function(tractor) {
                        tractor.ent = null;
                    });

                });


            }
        })
    }
});

/*
Crafty.c("Shadow", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision");
    }
});
*/
Crafty.c("Nameplate", {
    init: function() {
        this.addComponent("2D", "DOM");
    }
});

Crafty.c("Wall", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision")
        .collision(new Crafty.polygon([0,0], [64,0], [64,10], [0,10]))
    }
});

Crafty.c('Timer', {
    interval: null,
    timeWas: 0,
    timeNow: 0,
    timeLeft: 0,
    init: function() {
        this.timeWas = 0,
        this.timeNow = 0,
        this.timeLeft = 300,
        this.addComponent("2D", "DOM", "Text")
        this.interval = setInterval('Crafty.trigger("Tick")', 1000);
        this.text("Aika: " + this.timeLeft);
        this.bind("StopTimer", function() {
            clearInterval(this.interval);
        })
        .bind("Tick", function() {
            var kello = new Date();
            this.timeNow = Math.floor(kello.getTime()/1000);
            if (this.timeNow > this.timeWas) {
                if (this.timeLeft > 0) {
                    this.timeLeft -= 1;
                }
                this.text("Aika: " + this.timeLeft);
            }
            this.timeWas = this.timeNow;
        });
    }
});
