
Crafty.c("Tractor", {
    id: 0,
    farmId: 0,
    weightValue: 0, // value of the loaded weight
    firstHit: 1,
    cargo_x: 0,
    cargo_y: 0,
    _reverse: 0,
    _speed: 0,
    _accRight: 0,
    _accLeft: 0,
    toggleDirection: function() {
        //log("--- toggleDirection: function()");
        this._reverse = this._reverse ? 0 : 1; // change direction between forward (0) and reverse (1)
    },
    init: function() {
        this.id = 0, // use roomID later when sockets
        this.farmId = 0,
        this.weightValue = 0,
        this.firstHit = 0,
        this.slot = 0,
        this.team = 1,
        this.number = 1,
        /* default values */
        this._keyForward = "UP_ARROW",
        this._keyReverse = "DOWN_ARROW",
        this._keyLeft = "LEFT_ARROW",
        this._keyRight = "RIGHT_ARROW",
        /* --- */
        this._reverse = 0,
        this._speed = 0,
        this._accLeft = 0,
        this._accRight = 0,
        this.cargo_x = 0,
        this.cargo_y = 0,

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
        .bind("EnterFrame", function(frame) {

            this._accDiff = this._accLeft - this._accRight;
            this._speed = (this._accLeft == 0 || this._accRight == 0) ? 0 : 2; //this._speed; //(( this._accLeft + this._accRight ) / 2);
            // accDiff < -4 turn left
            // accDiff > 4 turn right
            // log("this._accDiff:" + this._accDiff + ",this._accLeft:" + this._accLeft + ", this._accRight:" + this._accRight);

            if(this._speed > 0) {
                if(this._accLeft > 20 && this._accRight > 20) {
                    this._speed = this._speed + 0.5
                }

                if(Math.abs(this._accDiff) < 2) {
                    this._speed = this._speed + 0.5;
                }
            } /*else {
                this.stop();
            }*/

            this._speed = this._speed < 3 ? this._speed : 3; // max speed = 3 

            var angle = this._rotation * (Math.PI / 180),
                vx = Math.sin(angle),
                vy = -Math.cos(angle);

            // log("_speed:" + this._speed + ", _accDiff:" + this._accDiff + ", this._accLeft:" + this._accLeft + ", this._accRight:" + this._accRight);
            this.cargo_x = this.x + 20 - (vx*10);
            this.cargo_y = this.y + 20 - (vy*10);

            if(this._speed > 0) {
                if (!this.isPlaying("FrwdFrwd")) {
                    this.stop().animate("FrwdFrwd", 10, -1)
                }
            } else if(this._accDiff > 7) {
                if (!this.isPlaying("FrwdBrwd")) {
                    this.stop().animate("FrwdBrwd", 10, -1);
                }                
            } else if(this._accDiff < -7) {
                if (!this.isPlaying("BrwdFrwd")) {
                    this.stop().animate("BrwdFrwd", 10, -1);
                }                
            } else {
                this.stop();
            }

            if(this.isDown(this._keyForward) || (this._speed > 0 && !this._reverse)) {
                if(this._speed == 0) { this._speed = 1.5; }
                
                this.x += vx * this._speed;
                this.y += vy * this._speed;

            } else if(this.isDown(this._keyReverse) || (this._speed > 0 && this._reverse)) {
                this.x += -vx * 0.8;
                this.y += -vy * 0.8;
            }

            if( this.isDown(this._keyLeft) || this._accDiff < -7 ) {
                this.rotation = this._speed == 0 ? this.rotation-1.5 : this.rotation-1;
            }

            else if( this.isDown(this._keyRight) || this._accDiff > 7 ) {
                this.rotation = this._speed == 0 ? this.rotation+1.5 : this.rotation+1;

            } 

            // drop acc values on each frame so that tractor tyre 
            // will stop pretty fast it it does not get new values 
            // through accelerometer
            this._accLeft = this._accLeft < 0.5 ? 0 : this._accLeft-0.5;
            this._accRight = this._accRight < 0.5 ? 0 : this._accRight-0.5;

            //check for collision with base
            var hitBase = this.hit("Base"), 
              item, normal = {x: 0, y: 0};

            if(hitBase) {
                //item = hitBase[0];
                //if (this.weightValue > 0 && item.obj.weightValue > 0) {
                //    this.x += Math.ceil(item.normal.x * -item.overlap);
                //    this.y += Math.ceil(item.normal.y * -item.overlap);
                //}
                var entities = Crafty.map.search({_x: this.cargo_x -8, _y: this.cargo_y - 8, _w: 32, _h: 32 });
                var weights = _.filter(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                if (!_.isUndefined(weights)) {
                    for (var i = 0; i < weights.length; i++) {
                        weights[i].destroy();
                    }
                }
                if (this.weightValue > 0) {
                    var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: this.cargo_x, y: this.cargo_y, z: 3 });
                }
            }

            //check for collision with homebase
            var hitHomebase = this.hit("Homebase"), 
              item, normal = {x: 0, y: 0};

            if(hitHomebase) {
                //item = hitHomebase[0];
                //if (this.weightValue > 0 && item.obj.weightValue > 0) {
                //    this.x += Math.ceil(item.normal.x * -item.overlap);
                //    this.y += Math.ceil(item.normal.y * -item.overlap);
                //}
                var entities = Crafty.map.search({_x: this.cargo_x -8, _y: this.cargo_y - 8, _w: 32, _h: 32 });
                var weights = _.filter(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                if (!_.isUndefined(weights)) {
                    for (var i = 0; i < weights.length; i++) {
                        weights[i].destroy();
                    }
                }
                if (this.weightValue > 0) {
                    var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: this.cargo_x, y: this.cargo_y, z: 3 });
                }
            }

            //check for collision with other tractors
            var hitTractor = this.hit("Tractor"), 
              item, normal = {x: 0, y: 0};

            if(hitTractor) {
                item = hitTractor[0];
                this.x += Math.ceil(item.normal.x * -item.overlap);
                this.y += Math.ceil(item.normal.y * -item.overlap);
            }

            // set game area
            if (this.x < 5) {
                this.x = 5;
            }
            if (this.x > 960) {
                this.x = 960;
            }
            if (this.y < 5) {
                this.y = 5;
            }
            if (this.y > 704) {
                this.y = 704;
            }

        })
        .bind('KeyUp', function(e) {
            // stop * animations
            this.stop();
        })

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
                        case 1: // tractor drops weight
                         //   this.weightValue = obj.weightValue;
                         //   obj.weightValue = 0;
                         //   Crafty.audio.play("weight-down-base");
                            break;
                        case 2: // tractor picks up weight
                            obj.weightValue = this.weightValue;
                            this.weightValue = 0;
                            Crafty.audio.play("weight-up");
                            break;
                        case 3: 
                            var tmp = obj.weightValue;
                            obj.weightValue = this.weightValue;
                            this.weightValue = tmp;
                            Crafty.audio.play("weight-up");
                            break;
                    }
                    this.firstHit = 0;
                    var entities = Crafty.map.search({_x: this._x, _y: this._y, _w: 32, _h: 32 });
                    var weights = _.filter(entities, function(entity){ return entity.__c.WeightOnGround == true; });
                    if (!_.isUndefined(weights)) {
                        for (var i = 0; i < weights.length; i++) {
                            weights[i].destroy();
                        }
                    }
                    if (this.weightValue > 0) {
                        var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: this._x - 16, y: this._y - 16, z: 3 });
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
                            case 1: // tractor drops weight
                                this.weightValue = obj.weightValue;
                                obj.weightValue = 0;
                                Crafty.audio.play("weight-down-homebase");
                                break;
                            case 2: // tractor picks up weight
                                obj.weightValue = this.weightValue;
                                this.weightValue = 0;
                                Crafty.audio.play("weight-up");
                                break;
                            case 3: 
                                var tmp = obj.weightValue;
                                obj.weightValue = this.weightValue;
                                this.weightValue = tmp;
                                Crafty.audio.play("weight-up");
                                break;
                        }
                        // trigger Farm to check its current weightValue sum
                        farm.trigger("CountBases");                        
                    }
                    this.firstHit = 0;
                    var entities = Crafty.map.search({_x: this._x, _y: this._y, _w: 32, _h: 32 });
                    var weights = _.filter(entities, function(entity){ return entity.__c.WeightOnGround == true; });
                    if (!_.isUndefined(weights)) {
                        for (var i = 0; i < weights.length; i++) {
                            weights[i].destroy();
                        }
                    }
                    if (this.weightValue > 0) {
                        var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: this._x - 16, y: this._y - 16, z: 3 });
                    }
                }

            }, function() {
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
            this.x = ent[0].obj.cargo_x;
            this.y = ent[0].obj.cargo_y;
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
                if (weight.obj.weightValue > 0) {
                    weightCount += 1;
                }
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
                _.each(GameController, function(controller) {
                    controller.ent = null;
                })
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
                setTimeout(function() { Crafty.audio.play("cheer"); }, 3000);

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

Crafty.c("Nameplate", {
    init: function() {
        this.addComponent("2D", "DOM");
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
