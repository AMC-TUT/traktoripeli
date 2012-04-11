
Crafty.c("Tractor", {
    id: 0,
    team: 0,
    number: 0,
    slot: 0,
    weightValue: 0,
    init: function() {
        this.id = Crafty.math.randomInt(1000, 140000); // use roomID later when sockets
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
        this.addComponent("2D", "Canvas", "Collision", "SpriteAnimation", "Keyboard", "Multiway", "team1vechile1")
        .origin("bottom")
        .collision(new Crafty.polygon([16,0], [48,0], [36,64], [28,64]))
        // define tractor animations
        .animate("FrwdFrwd", [
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2]
        ])
        .animate("FrwdBrwd", [
        [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]
        ])
        .animate("BrwdBrwd", [
        [0, 2], [7, 2], [6, 2], [5, 2], [4, 2], [3, 2], [2, 2], [1, 2]
        ])
        .animate("BrwdFrwd", [
        [0, 0], [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0]
        ])
        .multiway( this.movement.speed, {
            UP_ARROW: -90, 
            DOWN_ARROW: 90
        })
        //.bind("NewDirection", function(direction) { })
        .bind("Moved", function(from) {
            //log('from: ' + from.x + ' x ' + from.y + ' to: ' + this._x + ' x ' + this._y);
            /* Dont allow to move the player out of Screen */
            if(this.x + this.w > Crafty.viewport.width ||
                this.x + this.w - 20 < this.w || 
                this.y + this.h < this.h || 
                this.y + this.h > Crafty.viewport.height || this.preparing){
                this.attr({
                    x:from.x, 
                    y:from.y
                });
            }          
        })
        .bind("EnterFrame", function(frame) {

            if(this.isDown('RIGHT_ARROW')) {
                this.rotation = ( (this._rotation + this.movement.difference) % 360);
                //log('this._rotation: ' + this._rotation);
                //log('UP_ARROW: ' + (this._rotation - 90) % 360);
                //log('DOWN_ARROW: ' + (this._rotation + 90) % 360);
            } else if(this.isDown('LEFT_ARROW')) {
                this.rotation = ( (this._rotation - this.movement.difference) % 360);
                //log(this._rotation);
                //log('UP_ARROW: ' + (this._rotation - 90) % 360);
                //log('DOWN_ARROW: ' + (this._rotation + 90) % 360);
            } else if(this.isDown(Crafty.keys.UP_ARROW)) {
                //log(this.movement.rotate.sin + ' ' + this.movement.speed + ' ' + this.movement.rotate.cos)
                this.x += this.movement.rotate.sin * this.movement.speed;
                this.y += this.movement.rotate.cos * this.movement.speed;
            } else if(this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.DOWN_ARROW)) {
                this.x += -this.movement.rotate.sin * this.movement.speed;
                this.y += -this.movement.rotate.cos * this.movement.speed;
            }

        })
        .bind('KeyDown', function(e) {

            if(this.isDown('RIGHT_ARROW')) {
                if (!this.isPlaying("FrwdBrwd")) {
                    this.stop().animate("FrwdBrwd", 10, -1);
                }
                // 
                this.rotation = ( (this._rotation + this.movement.difference) % 360);
                //log('this._rotation: ' + this._rotation);
                //log('UP_ARROW: ' + (this._rotation - 90) % 360);
                //log('DOWN_ARROW: ' + (this._rotation + 90) % 360);
            } else if(this.isDown('LEFT_ARROW')) {
                if (!this.isPlaying("BrwdFrwd")) {
                    this.stop().animate("BrwdFrwd", 10, -1)
                }
                // 
                this.rotation = ( (this._rotation - this.movement.difference) % 360);
                //log(this._rotation);
                //log('UP_ARROW: ' + (this._rotation - 90) % 360);
                //log('DOWN_ARROW: ' + (this._rotation + 90) % 360);

            } else if(this.isDown('DOWN_ARROW')) {
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
        .onHit("Base",
            function(ent) {
                //log('Tractor osui Baseen!');
                // add WeightOnGround and run self destruction
/*
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
*/
                //
                //this.destroy();
            }
        )
        .bind('Rotate', function(rotate) {
/*
            // set new direction for movement
            this.multiway(1, {
                UP_ARROW: -90,
                DOWN_ARROW: 90
            });



*/
          //  log(rotate)


      //      this.movement.rotate.sin = rotate.sin;
      //      this.movement.rotate.cos = rotate.cos;
/*
            var angle = this._rotation * (Math.PI / 180),
                vx = Math.sin(angle),
                vy = -Math.cos(angle);

            log(angle + ' ' + vx + ' ' + vy);
            */
            /*
            if(this.isDown(Crafty.keys.W) || this.isDown(Crafty.keys.UP_ARROW)) {
                this.x += vx * 1.5;
                this.y += vy * 1.5;
            } else if(this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.DOWN_ARROW)) {
                this.x += -vx * 1.5;
                this.y += -vy * 1.5;
            }
            */

            /*
            this.multiway( this.movement.speed, {
                UP_ARROW: -90, 
                DOWN_ARROW: 90         
            });
            */
            /*
            this.multiway({
                UP_ARROW: (this._rotation - 90) % 360,
                DOWN_ARROW: (this._rotation + 90) % 360
            });

            /*
            var tractor = Crafty.map.search({_x: this._x, _y: this._y, _w: 64, _h: 64 })[0];
            log(tractor)
            */
            /*
            this.removeComponent('Multiway');
            this.addComponent('Multiway').multiway( this.movement.speed, {
                UP_ARROW: -90, 
                DOWN_ARROW: 90         
            })
            */
            /*
            this.multiway( this.movement.speed, {
                UP_ARROW: (this._rotation - 90) % 360, 
                DOWN_ARROW: (this._rotation + 90) % 360
            });
            */
        })
    }
});

Crafty.c("Base", {
    weightValue: 0, // weight value: 100,200,300,400
    firstHit: 1,
    init: function() {
        this.weightValue = 0,
        this.firstHit = 1,
        this.addComponent("2D", "Canvas", "Collision")
        .collision(new Crafty.circle(16, 16, 16))
        .onHit("Tractor",
            function(ent) {
                if(this.firstHit) {
                    var obj = ent[0].obj;
                    var hitType = 0;
                    if (obj.weightValue > 0) {
                        // destroy weight
                        var entities = Crafty.map.search({_x: obj._x + 16, _y: obj._y, _w: 32, _h: 64 });
                        var weight = _.find(entities, function(entity){ return entity.__c.WeightOnWheels == true; });
                        if (!_.isUndefined(weight)) {
                            weight.destroy();
                        }
                        hitType += 1;
                    }
                    if (this.weightValue > 0) {
                        // destroy weight
                        var entities = Crafty.map.search({_x: this._x, _y: this._y, _w: 32, _h: 32 });
                        var weight = _.find(entities, function(entity){ return entity.__c.WeightOnGround == true; });
                        if (!_.isUndefined(weight)) {
                            weight.destroy();
                        }
                        hitType += 2;
                    }
                    var tmp = obj.weightValue;
                    obj.weightValue = this.weightValue;
                    this.weightValue = tmp;

                    if (obj.weightValue > 0) {
                        // add weight
                        var e = Crafty.e("WeightOnWheels", "ww"+obj.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });
                    }
                    if (this.weightValue > 0) {
                        // add weight
                        var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: this._x - 16, y: this._y - 16, z: 3 });
                    }
                    switch (hitType) {
                        case 0: // nothing
                            break;
                        case 1: // tractor drops weight
                            // Crafty.audio.play("weight-down");
                            break;
                        case 2: // tractor picks up weight
                            // Crafty.audio.play("weight-up");
                            break;
                        case 3: // tractor switches weights
                            // Crafty.audio.play("weight-switch");
                            break;
                    }
                    this.firstHit = 0;
                }

            }, function() {
                //
                log('ohion');
                //
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
        .collision(new Crafty.polygon([0,0], [64,0], [64,64], [0,64]))
        .onHit("Tractor",
            function(ent) {
                if(this.firstHit) {
                    var obj = ent[0].obj;
                    // TODO: erottaa omat traktorit vieraista
                    var hitType = 0;
                    if (obj.weightValue > 0) {
                        hitType += 1;
                    }
                    if (this.weightValue > 0) {
                        hitType += 2;
                    }
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
                            var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: this._x, y: this._y, z: 3 });
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
                        case 3: // nothing
                            break;
                    }
                    // trigger Farm to check its current weightValue sum
                    var farm = obj.hit('Farm')[0].obj;
                    log(farm)
                    // pull the trigger
                    farm.trigger("CountBases");
                    this.firstHit = 0;
                }

            }, function() {
                //
                log('ohion');
                //
                this.firstHit = 1;
            }
        )
    }
});


Crafty.c("WeightOnGround", {
    weightValue: 0, // weight value: 100,200,300,400
    onHomebase: false,
    firstHit: 1,
    init: function() {
        this.weightValue = 0,
        this.onHomebase = false,
        this.addComponent("2D", "Canvas", "Collision")
/*
        .onHit("Tractor",
        function(ent) {

            // find way to disable hit for a while
            if(!this.onHomebase) {
                // tractor
                var obj = ent[0].obj;
                // create ent
                var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });
                // add weight value to WeightOnWheels
                e.weightValue = this.weightValue;
                // play some nice sound
                Crafty.audio.play("weight-up");
                // destroy self
                this.destroy();
            }

        }, function(ent) {
            // Callback method executed once as soon as collision stops
        })
*/
    }
});

Crafty.c("WeightOnWheels", {
    weightValue: 0, // weight value: 100,200,300,400
    firstHit: 1, // continuous hit detection, run hit action only first frame when hit is continuous
    init: function() {
        this.weightValue = 0,
        this.firstHit = 1,
        this.addComponent("2D", "Canvas", "Collision")
        .collision(new Crafty.polygon([0,0], [16,0], [16,16], [0,16]))
/*
        .onHit("Homebase",
        function(ent) {
            log('osui Wheels 2 Homebase');

            if(this.firstHit) {
                // team
                var obj = ent[0].obj;
                // create ent
                var e = Crafty.e("WeightOnGround", "wb"+this.weightValue+"g").attr({ x: obj._x - 16, y: obj._y - 16, z: 3 });
                // add weight value to WeightOnGround
                e.weightValue = this.weightValue;
                // add weight value to Homebase
                obj.weightValue = this.weightValue;
                // mark that WeightOnGround is on Homebase entity
                e.onHomebase = true;
                // play some nice sound
                Crafty.audio.play("drop-on-farm");
                // destroy self
                this.destroy();
                // trigger Farm to check its current weightValue sum
                var farm = obj.hit('Farm')[0].obj;
                log(farm)
                // pull the trigger
                farm.trigger("CountWeights");

                // set continuous hit true
                this.firstHit = 0;
            }

        }, function() { 
            this.firstHit = 1;
        })
*/
        .onHit("Tractor", function(ent) {
            this.x = ent[0].obj._x + 16;
            this.y = ent[0].obj._y + 16;
        })
        /*
        .onHit("Base",
            function(ent) {
                log('WeightOnWheels osui Baseen!');
                // add WeightOnGround and run self destruction

                // get value
                var value = this.value;
                var weight;

                _.each(Game.weights, function(obj){
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

                //
                this.destroy();
            }
        )
        */
      
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
            // get farms weights
            var weights = this.hit("Homebase");
            // loop weights and get the weightValues
            _.each(weights, function(weight){
                weightValue += weight.obj.weightValue;
                log(weight.obj.weightValue)
            });
            // set as ent var
            this.weightValue = weightValue;

            //
            log(this)
            var farmId = this.id;
            log('farmId')
            log(farmId)
            var team = _.find(Game.teams, function(team){ return team.farmId == farmId; });

            team.score += this.weightValue;

            log('team')    
            log(team)

            // debug
            log('Kerattynä: ' + team.score + ' \\o/ ');

            if(team.score == 100) { // DEVAUSTA VARTEN 1000) {
                // do something crazy here when player win the game

                // stop tractors
                // STOP

                // play some inspirational music and cheer for winner
                // cheer first
                Crafty.audio.play("cheer");
                // march then
                setTimeout("Crafty.audio.play('march')", 4000);

                var dom = "";

                // asc order
                Crafty.teams = _.sortBy(Crafty.teams, function(team){ return team.score; });

                // käännä toisin päin

                // collect scores from each team's farms to Game.teams array
                _.each(Game.teams, function(team) {

                    log("weightValue " + weightValue);
                    var counter = 1
                    var players = "Matti, Maija";
                    dom += "<tr><td>" + counter + "</td><td>" + team.score + "</td><td>" + "laske" + "</td><td>" + "laske" +"</td><td>" + players + "</td></tr>";

                    counter += 1;


                });

                $("#scoreboard tbody").empty().append(dom);

                // set team and score info to scoreboard table

                $('#scoreboard').on('shown', function () {
                  var $seconds = $(".seconds");

                  var intervalID = window.setInterval(function() {
                    //
                    var s = parseInt($seconds.text()) - 1 ;

                    if(s < 0) {
                        clearInterval(intervalID);
                        $('#scoreboard').modal('hide');
                    } else {
                        $seconds.text(s);
                    }

                  }, 1000);
                });

                $('#scoreboard').on('hidden', function () {
                  $('#scoreboard').remove();
                  // open DashBoard
                  Crafty.scene("DashBoard");
                });

                // show scoreboard
                $('#scoreboard').modal('show');


            }
        })
    }
});

Crafty.c("Shadow", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision");
    }
});
Crafty.c("Nameplate", {
    init: function() {
        this.addComponent("2D", "DOM");
    }
});

Crafty.c('Timer', {
    interval: null,
    timeLimit: 0,
    timeLeft: 0,
    init: function() {
        this.timeLimit = 5 * 60000, // set in settings 1 minute = 60000 millisecond
        this.timeLeft = this.timeLimit,
        this.addComponent("2D", "DOM", "Text")
        this.interval = setInterval('Crafty.trigger("Tick")', 1000);

        this.bind("StopTimer", function() {
            clearInterval(this.interval);
        })
        .bind("Tick", function() {
            // update time
            this.timeLeft -= 1;
            // set new time to timer
            this.text("Aika: " + this.timeLeft); // TODO convert to minutes and seconds
            // this.text("Aika: " + Math.floor(this.timeLeft/60000) );
        });
    }
});
