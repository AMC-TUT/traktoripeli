Crafty.c("Team1Vechile1", {
	slot: 0,
    init: function() {
		this.slot = 0,
        this.addComponent("2D", "Canvas", "Collision", "SpriteAnimation", "Keyboard", "Fourway", "team1vechile1")
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
		.fourway(0.5)
        .bind("NewDirection",
        function(direction) {
            if (direction.x < 0) {
                if (!this.isPlaying("BrwdFrwd"))
                this.stop().animate("BrwdFrwd", 10, -1)
            }
            if (direction.x > 0) {
                if (!this.isPlaying("FrwdBrwd"))
                this.stop().animate("FrwdBrwd", 10, -1)
            }
            if (direction.y < 0) {
                if (!this.isPlaying("FrwdFrwd"))
                this.stop().animate("FrwdFrwd", 10, -1)
            }
            if (direction.y > 0) {
                if (!this.isPlaying("BrwdBrwd"))
                this.stop().animate("BrwdBrwd", 10, -1)
            }
            if (!direction.x && !direction.y) {
                this.stop();
            }
        })

	}
});

Crafty.c("Base01", {
	slot: 0,
    init: function() {
		this.slot = 0,
        this.addComponent("2D", "Canvas", "Collision", "base01")
		.onHit("Team1Vechile1",
			function(ent) {
				log('before:' + this.slot)
				tmp = ent.slot;
				ent.slot = this.slot;
				this.slot = tmp;
				log('before:' + this.slot)
			}
		)
    }
});

Crafty.c("Base02", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base02");
    }
});

Crafty.c("Base03", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base03");
    }
});

Crafty.c("Base04", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base04");
    }
});

Crafty.c("Base05", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base05");
    }
});

Crafty.c("Base06", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base06");
    }
});

Crafty.c("Base07", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base07");
    }
});

Crafty.c("Base08", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base08");
    }
});

Crafty.c("Base09", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base09");
    }
});

Crafty.c("Base10", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base10");
    }
});

Crafty.c("Base11", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base11");
    }
});

Crafty.c("Base12", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base12");
    }
});

Crafty.c("Base13", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base13");
    }
});

Crafty.c("Base14", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base14");
    }
});

Crafty.c("Base15", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base15");
    }
});

Crafty.c("Base16", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base16");
    }
});

Crafty.c("Base17", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base17");
    }
});

Crafty.c("Base18", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base18");
    }
});

Crafty.c("Base19", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base19");
    }
});

Crafty.c("Base20", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base20");
    }
});

Crafty.c("Base21", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base21");
    }
});

Crafty.c("Base22", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base22");
    }
});

Crafty.c("Base23", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base23");
    }
});

Crafty.c("Base24", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "base24");
    }
});

Crafty.c("Team11", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team11");
    }
});

Crafty.c("Team12", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team12");
    }
});

Crafty.c("Team13", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team13");
    }
});

Crafty.c("Team14", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team14");
    }
});

Crafty.c("Team21", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team21");
    }
});

Crafty.c("Team22", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team22");
    }
});

Crafty.c("Team23", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team23");
    }
});

Crafty.c("Team24", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team24");
    }
});

Crafty.c("Team31", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team31");
    }
});

Crafty.c("Team32", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team32");
    }
});

Crafty.c("Team33", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team33");
    }
});

Crafty.c("Team34", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team34");
    }
});

Crafty.c("Team41", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team41");
    }
});

Crafty.c("Team42", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team42");
    }
});

Crafty.c("Team43", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team43");
    }
});

Crafty.c("Team44", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team44");
    }
});

Crafty.c("Team51", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team51");
    }
});

Crafty.c("Team52", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team52");
    }
});

Crafty.c("Team53", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team53");
    }
});

Crafty.c("Team54", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team54");
    }
});

Crafty.c("Team61", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team61");
    }
});

Crafty.c("Team62", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team62");
    }
});

Crafty.c("Team63", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team63");
    }
});

Crafty.c("Team64", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "team64");
    }
});

Crafty.c("Farm1", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm1");
    }
});

Crafty.c("Farm2", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm2");
    }
});

Crafty.c("Farm3", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm3");
    }
});

Crafty.c("Farm4", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm4");
    }
});

Crafty.c("Farm5", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm5");
    }
});

Crafty.c("Farm6", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "farm6");
    }
});


/*
function timer() {

    var timeleft = 150;

    setInterval(function() {

        timeleft -= 1;

        if (timeleft == 0) {
            Crafty.e("Player").die();
        }

        var s = timeleft.toString();
        var a = s.split("");

        if (timeleft < 10) {
            a.unshift("0", "0");
        } else if (timeleft < 100) {
            a.unshift("0");
        }

        Crafty.e("Timer1").destroy();
        Crafty.e("Timer1").addComponent("wchar" + a[0]).attr({
            x: 25 * 32,
            y: 9,
            z: 2
        });

        Crafty.e("Timer2").destroy();
        Crafty.e("Timer2").addComponent("wchar" + a[1]).attr({
            x: 26 * 32,
            y: 9,
            z: 2
        });

        Crafty.e("Timer3").destroy();
        Crafty.e("Timer3").addComponent("wchar" + a[2]).attr({
            x: 27 * 32,
            y: 9,
            z: 2
        });

        if (timeleft == 11) {
            Crafty.audio.play("runningoutoftime");
        }


    },
    1000);

}

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

Crafty.c("Diamond", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "Gravity", "SpriteAnimation", "diamond1", "Solid", "Platform")
        .stop()
        .animate("DiamondAnimation", 0, 10, 7)
        .animate("DiamondAnimation", 8, -1)
        .gravity("Platform")
        .gravityConst(1)
        .onHit("Player",
        function(ent) {
            ent[0].obj.die();
        })
        .bind('Move',
        function(from) {
            Crafty.audio.play("diamond1");
        })
    }
});

Crafty.c("Door", {
    init: function() {
        this.start = 1,
        this.addComponent("2D", "Canvas", "SpriteAnimation", "door")
        .stop()
        .animate("DoorAnimation", 1, 6, 0)
        .animate("DoorAnimation", 16, 6)
        .bind('EnterFrame',
        function(frame) {
            if (!this.isPlaying('DoorAnimation') && this.start) {
                this.start = 0;
                //Create the player
                Crafty.e("Player").attr({
                    x: 3 * 32,
                    y: 3 * 32,
                    z: 3
                });

                timer();
            }
        })
    }
});

Crafty.c("Explosion", {
    init: function() {
        this.addComponent("2D", "Canvas", "SpriteAnimation", "explosion1")
        .stop()
        .animate("ExplosionAnimation", 2, 7, 7)
        .animate("ExplosionAnimation", 16, -1)
    }
});

Crafty.c("Brick", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "brick", "Solid", "Platform");
    }
});

Crafty.c("Steel", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "steel", "Solid", "Platform");
    }
});

Crafty.c('Colon', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});

Crafty.c('Counter', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});

Crafty.c('Score', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});

Crafty.c('Timer1', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});

Crafty.c('Timer2', {
    init: function() {
        this.addComponent("2D", "Canvas");
    },
    set: function(char) {
        this.addComponent(char);
    }
});

Crafty.c('Timer3', {
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


Crafty.c("FinishLine", {
    init: function() {
        this.addComponent("2D", "Canvas", "Collision", "SpriteAnimation", "door", "Solid", "Platform")
        .stop()
        .animate("FinishAnimation", 1, 6, 2)
        .animate("FinishAnimation", 32, -1)
    }
});
*/