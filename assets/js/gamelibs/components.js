
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
        this.addComponent("2D", "Canvas", "Collision", "SpriteAnimation", "Keyboard", "Multiway")
        .addComponent('team2vechile2')
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
                log(this.movement.rotate.sin + ' ' + this.movement.speed + ' ' + this.movement.rotate.cos)
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
    init: function() {
        this.addComponent("2D", "Canvas", "Collision")
        .onHit("Tractor",
            function(ent) {
                //
            }
        )
    }
});

Crafty.c("WeightOnGround", {
    weightValue: 0, // weight value: 100,200,300,400
    init: function() {
        this.weightValue = 0,
        this.addComponent("2D", "Canvas", "Collision")
        .onHit("Tractor",
        function(ent) {
            // tractor
            var obj = ent[0].obj;
            // create ent
            var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: obj._x + 20, y: obj._y + 20, z: 3 });
            // add weight value to WeightOnWheels
            e.weightValue = this.weightValue;
            // destroy self
            this.destroy();
        })
    }
});

Crafty.c("WeightOnWheels", {
    value: 0,
    init: function() {
        this.value = 0,
        this.addComponent("2D", "Canvas", "Collision")
        .onHit("Team",
            function(ent) {
                log('WeightOnWheels osui Teamiin!');
                this.destroy();
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

Crafty.c("Team", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision");
    }
});

Crafty.c("Farm", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm");
    }
});

Crafty.c("Shadow", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "shadow");
    }
});

Crafty.c("Nameplate11", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate11");
    }
});

Crafty.c("Nameplate12", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate12");
    }
});

Crafty.c("Nameplate21", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate21");
    }
});

Crafty.c("Nameplate22", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate22");
    }
});

Crafty.c("Nameplate31", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate31");
    }
});

Crafty.c("Nameplate32", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate32");
    }
});

Crafty.c("Nameplate41", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate41");
    }
});

Crafty.c("Nameplate42", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate42");
    }
});

Crafty.c("Nameplate51", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate51");
    }
});

Crafty.c("Nameplate52", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate52");
    }
});

Crafty.c("Nameplate61", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate61");
    }
});

Crafty.c("Nameplate62", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "nameplate62");
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
        .onHit('FinishLine',
        function(ent) {
            Crafty.audio.play("bonuspoints");
            //Crafty.pause();
        })
        .bind("EnterFrame",
        function(frame) {})
        .bind("Move", function(old) {
            
            log('move nyt' + this._x + ' ' + this._y + ' vanha' + old._x + ' ' + old._y );
        })
        .bind("Change", function(old) {
            
          //  log(' cahnge nyt' + this.x + ' ' + this.y  );
          //  if(!!old.x || !!old.y) log(' vanha' + old.x + ' ' + old.y );
        })


        return this;
    },
    die: function() {
      
        // explosion effect voice
        Crafty.audio.play("explosion");
        
        // explosion effect to surrounding cells
        for (var i=this.x-32; i <= this.x+32; i+=32) {
          log('i' + i)
          for (var j=this.x-32; j <= this.x+32; j+=32) {
            log('j' + j)
            Crafty.e("Explosion").attr({
                x: i,
                y: j,
                z: 3
            });
          };
        };

        // background music for result view
        Crafty.audio.play("music", -1);

        var $stage = $('#cr-stage');
        var h = $stage.css('height');
        var w = $stage.css('width');

        $('body').append('<div style="position: absolute; left: 0; top: 0; width: ' + w + '; height : ' + h + '; font-family: Lucida Grande; text-align: center; box-sizing: border-box; padding: 200px; background: rgba(0,0,0,.7); font-size: 4em; color: yellow; z-index: 888;">Sait ' + this.score + ' pistettä</div>');

        // destroy player
        this.destroy();
        
        // 
        Crafty.pause();

    }

});

Crafty.c("Dirt", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "dirt", "Platform")
        .onHit("Player",
        function(ent) {
            this.destroy();
        });
    }
});

Crafty.c("Stone", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "stone", "Gravity", "Solid", "Platform")
        .gravity("Platform")
        .gravityConst(1)
        .bind('Move',
        function(from) {
            Crafty.audio.play("boulder");
        })
        .onHit("Player",
        function(ent) {
            log(ent[0].obj);

         //   ent[0].obj.die();
        })
        .bind("EnterFrame", function(frame) {
            if(this.hit("Player")) log('player' + this.hit("Player"));
            if(this.hit("Diamond")) log('diamond' + this.hit("Diamond"));
        });

    }
});

Crafty.c('Timer', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});


Crafty.c("Finish", {
    init: function() {
        this.start = 1,
        this.addComponent("2D", "Canvas", "Collision", "steel", "Solid", "Platform")
        .bind('EnterFrame',
        function(frame) {
            if (this.start) {
                // ugly skit with numbers
                Crafty.e("Colon").addComponent("ychar1").attr({
                    x: 2 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("ychar2").attr({
                    x: 3 * 32,
                    y: 9,
                    z: 2
                });
                Crafty.e("Colon").addComponent("wnote").attr({
                    x: 4 * 32,
                    y: 9,
                    z: 2
                });
                Crafty.e("Colon").addComponent("wchar1").attr({
                    x: 5 * 32,
                    y: 9,
                    z: 2
                });
                Crafty.e("Colon").addComponent("wchar0").attr({
                    x: 6 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("ychar0").attr({
                    x: 14 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Counter").addComponent("ychar0").attr({
                    x: 15 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Timer1").addComponent("wchar1").attr({
                    x: 25 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Timer2").addComponent("wchar5").attr({
                    x: 26 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Timer3").addComponent("wchar0").attr({
                    x: 27 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("wchar0").attr({
                    x: 32 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("wchar0").attr({
                    x: 33 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("wchar0").attr({
                    x: 34 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("wchar0").attr({
                    x: 35 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Score").addComponent("wchar0").attr({
                    x: 36 * 32,
                    y: 9,
                    z: 2
                });

                Crafty.e("Colon").addComponent("wchar0").attr({
                    x: 37 * 32,
                    y: 9,
                    z: 2
                });


                this.start = 0;
            }
        })
    }
});
*/