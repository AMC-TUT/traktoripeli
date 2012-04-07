
Crafty.c("Tractor", {
    id: 0,
    team: 0,
    number: 0,
    slot: 0,
    init: function() {
        this.id = Crafty.math.randomInt(1000, 140000); // use roomID later when sockets
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
    firstHit: 1,
    init: function() {
        this.firstHit = 1,
        this.addComponent("2D", "Canvas", "Collision")
        .collision(new Crafty.circle(16, 16, 16))
        .onHit("Tractor",
            function(ent) {

                if(this.firstHit) {
                    //
                    log('osu');

                    //
                    this.firstHit = 0;
                }

            }, function() {
                this.firstHit = 1;
            }
        )
    }
});

Crafty.c("WeightOnGround", {
    weightValue: 0, // weight value: 100,200,300,400
    onHomebase: false,
    init: function() {
        this.weightValue = 0,
        this.onHomebase = false,
        this.addComponent("2D", "Canvas", "Collision")
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
    }
});

Crafty.c("WeightOnWheels", {
    value: 0,
    firstHit: 1, // continuous hit detection, run hit action only first frame when hit is continuous
    init: function() {
        this.value = 0,
        this.firstHit = 1,
        this.addComponent("2D", "Canvas", "Collision")
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
    _weightValue: 0,
    init: function() {
        this._weightValue = 0,
        this.addComponent("2D", "Canvas", "Collision", "farm")
        .bind('CountWeights', function() {
            // trigger to count weight values on Farm
            // clear old value
            var weightValue = 0;
            // get farms weights
            var weights = this.hit("WeightOnGround");
            // loop weights and get the weightValues
            _.each(weights, function(weight){
                weightValue += weight.obj.weightValue;
            });
            // set as ent var
            this._weightValue = weightValue;
            // debug
            log('Kerattynä: ' + this._weightValue + ' \\o/ ');

            if(this._weightValue == 400) { // DEVAUSTA VARTEN 1000) {
                // do something crazy here when player win the game

                // stop tractors
                // STOP

                // play some inspirational music and cheer for winner
                // cheer first
                Crafty.audio.play("cheer");
                // march then
                setTimeout("Crafty.audio.play('march')", 4000);

                // show Roll of Honour 
                $('#scoreboard').modal('show');
            }
        })
    }
});

Crafty.c("Homebase", {   
    init: function() {
        this.addComponent("2D", "Collision")
        .collision(new Crafty.polygon([64,0], [64,64], [0,64]));
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

/*

Crafty.c("Player", {

    movementSpeed: 8,
    lives: 1,
    score: 0,
    limit: 1,
    collected: 0,

    init: function() {
        this.score = 0,
        this.collected = 0,
        this.limit = 1,
//        this.infos = {
//            lives :$('.lives'),
//            score: $('.score'),
//            hp:this.bars.hp.find('.text'),
//            heat:this.bars.heat.find('.text'),
//            shield:this.bars.shield.find('.text'),
//            alert:$('.alert')
//        }
        this
        .addComponent("2D", "Canvas", "Dash", "Keyboard", "Fourway", "Collision", "SpriteAnimation", "Solid")
        //Add needed Components
        .animate("StandingAnimation", [
        [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
        [7, 1], [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2],
        [6, 2], [7, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3]
        ])
        .animate('RightWalking', 0, 5, 7)
        .animate('LeftWalking', 0, 4, 7)
        .stop()
        .animate("StandingAnimation", 10, -1)
        .fourway(8)
        //change direction when a direction change event is received
        .bind("NewDirection",
        function(direction) {
            if (direction.x < 0) {
                if (!this.isPlaying("LeftWalking"))
                this.stop().animate("LeftWalking", 10, -1)
            }
            if (direction.x > 0) {
                if (!this.isPlaying("RightWalking"))
                this.stop().animate("RightWalking", 10, -1)
            }
            if (direction.y < 0) {
                if (!this.isPlaying("LeftWalking"))
                this.stop().animate("LeftWalking", 10, -1)
            }
            if (direction.y > 0) {
                if (!this.isPlaying("RightWalking"))
                this.stop().animate("RightWalking", 10, -1)
            }
            if (!direction.x && !direction.y) {
                this.stop().animate("StandingAnimation", 10, -1);
            }
        })
        .bind('KeyUp',
        function(e) {
            this.stop().animate("StandingAnimation", 10, -1);
        })
        .bind('Moved',
        function(from) {
            if (this.hit('Solid') && !this.hit('Diamond')) {
                this.attr({
                    x: from.x,
                    y: from.y
                });
            } else {
                Crafty.audio.play("movedirt");
            }
        })
        .onHit('Diamond',
        function(ent) {
            Crafty.audio.play("pickupdiamond");
            ent[0].obj.destroy();

            this.collected += 1;

            Crafty.e('Counter').destroy();
            Crafty.e('Counter').addComponent("ychar" + this.collected).attr({
                x: 15 * 32,
                y: 9,
                z: 2
            });
            Crafty.e('Score').destroy();
            Crafty.e('Score').addComponent("wchar1").attr({
                x: 36 * 32,
                y: 9,
                z: 2
            });

            if (this.collected == this.limit) {
                Crafty.audio.play("crack");
                Crafty.e("Finish").destroy();
                Crafty.e("FinishLine").attr({
                    x: 1216,
                    y: 544,
                    z: 3
                });
            }

            if (this.collected > this.limit) {
                this.score += 15;
            } else {
                this.score += 10;
            }

        })

});

Crafty.c('Timer', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});

*/
