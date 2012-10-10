Crafty.c("Farm", {
	init: function() {
		this.addComponent("2D", "Canvas", "farm")
	}
});

Crafty.c("Nameplate", {
    init: function() {
        this.addComponent("2D", "DOM")
    }
});

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
			.animate("FrwdFrwd", [ [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1] ])
			.animate("FrwdBrwd", [ [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0] ])
			.animate("BrwdBrwd", [ [0, 1], [7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1] ])
			.animate("BrwdFrwd", [ [0, 0], [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0] ])
			.bind("EnterFrame", function(frame) {
				this._accDiff = this._accLeft - this._accRight;
				this._speed = (this._accLeft == 0 || this._accRight == 0) ? 0 : 2; //this._speed; //(( this._accLeft + this._accRight ) / 2);
				// accDiff < -4 turn left
				// accDiff > 4 turn right
				// log("this._accDiff:" + this._accDiff + ",this._accLeft:" + this._accLeft + ", this._accRight:" + this._accRight);
				if (this._speed > 0) {
					if (this._accLeft > 20 && this._accRight > 20) {
						this._speed = this._speed + 0.5
					}
					if (Math.abs(this._accDiff) < 2) {
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
				if (this._speed > 0) {
					if (!this.isPlaying("FrwdFrwd")) {
						this.stop().animate("FrwdFrwd", 10, -1)
					}
				} else if (this._accDiff > 7) {
					if (!this.isPlaying("FrwdBrwd")) {
						this.stop().animate("FrwdBrwd", 10, -1);
					}
				} else if (this._accDiff < -7) {
					if (!this.isPlaying("BrwdFrwd")) {
						this.stop().animate("BrwdFrwd", 10, -1);
					}
				} else {
					this.stop();
				}
				if (this.isDown(this._keyForward) || (this._speed > 0 && !this._reverse)) {
					if (this._speed == 0) {
						this._speed = 1.5;
					}
					this.x += vx * this._speed;
					this.y += vy * this._speed;
				} else if (this.isDown(this._keyReverse) || (this._speed > 0 && this._reverse)) {
					this.x += -vx * 0.8;
					this.y += -vy * 0.8;
				}
				if (this.isDown(this._keyLeft) || this._accDiff < -7) {
					this.rotation = this._speed == 0 ? this.rotation-1.5 : this.rotation-1;
				} else if ( this.isDown(this._keyRight) || this._accDiff > 7 ) {
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
				if (hitBase) {
					var entities = Crafty.map.search({_x: this.cargo_x -8, _y: this.cargo_y -8, _w: 32, _h: 32 });
					for (var i = 0; i < entities.length; i++) {
						if (entities[i].__c.WeightOnWheels == true) {
							entities[i].destroy();
						}
					}
					if (this.weightValue > 0) {
						var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: this.cargo_x, y: this.cargo_y, z: 3 });
					}
				}
				//check for collision with homebase
				var hitHomebase = this.hit("Homebase"), 
				item, normal = {x: 0, y: 0};
				if (hitHomebase) {
					var entities = Crafty.map.search({_x: this.cargo_x -8, _y: this.cargo_y -8, _w: 32, _h: 32 });
					for (var i = 0; i < entities.length; i++) {
						if (entities[i].__c.WeightOnWheels == true) {
							entities[i].destroy();
						}
					}
					if (this.weightValue > 0) {
						var e = Crafty.e("WeightOnWheels", "ww"+this.weightValue+"g").attr({ x: this.cargo_x, y: this.cargo_y, z: 3 });
					}
				}
				//check for collision with other tractors
				var hitTractor = this.hit("Tractor"), 
				item, normal = {x: 0, y: 0};
				if (hitTractor) {
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
	weightValue: 0,
	firstHit: 1,
	init: function() {
		this.weightValue = 0,
		this.firstHit = 1,
		this.addComponent("2D", "Canvas", "Collision")
			.collision(new Crafty.circle(16, 16, 16))
			.onHit("Tractor", function(ent) {
				if (this.firstHit) {
					var obj = ent[0].obj;
					var hitType = 0;
					if (obj.weightValue > 0) {
						hitType += 1;
					}
					if (this.weightValue > 0) {
						hitType += 2;
					}
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
					for (var i = 0; i < entities.length; i++) {
						if (entities[i].__c.WeightOnGround == true) {
							entities[i].destroy();
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
	farmId: 0,
	tractorId: 0,
	init: function() {
		this.weightValue = 0,
		this.firstHit = 1,
		this.farmId = 0,
		this.tractorId = 0,
		this.addComponent("2D", "Canvas", "Collision")
			.collision(new Crafty.polygon([0,0], [32,0], [32,32], [0,32]))
			.onHit("Tractor", function(ent) {
				if (this.firstHit) {
					var obj = ent[0].obj;
					var hitType = 0;
					if (obj.weightValue > 0) {
						hitType += 1;
					}
					if (this.weightValue > 0) {
						hitType += 2;
					}
					if (this.farmId == obj.farmId) {
						switch (hitType) {
							case 1: // tractor drops weight
								this.tractorId = obj.id;
								this.weightValue = obj.weightValue;
								obj.weightValue = 0;
								Crafty.audio.play("weight-down-homebase");
								break;
							case 2: // tractor picks up weight
								this.tractorId = 0;
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
						Crafty.trigger("CountBases");
					}
					this.firstHit = 0;
					var entities = Crafty.map.search({_x: this._x, _y: this._y, _w: 32, _h: 32 });
					for (var i = 0; i < entities.length; i++) {
						if (entities[i].__c.WeightOnGround == true) {
							entities[i].destroy();
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

Crafty.c("Engine", {
	init: function() {
		this.bind('CountBases', function() {
			var entities = Crafty.map.search({_x: 0, _y: 0, _w: Game.width, _h: Game.height });
			for (var i = 0; i < Game.teams.length; i++) {
				Game.teams[i].weight = 0;
				Game.teams[i].weights = 0;
				for (var k = 0; k < Game.teams[i].tractors.length; k++) {
					Game.teams[i].tractors[k].weights = 0;
				}
				for (var j = 0; j < entities.length; j++) {
					if (entities[j].__c.Homebase == true) {
						if (entities[j].farmId == Game.teams[i].id) {
							Game.teams[i].weight += entities[j].weightValue;
							if (entities[j].weightValue > 0) {
								Game.teams[i].weights += 1;
								for (var k = 0; k < Game.teams[i].tractors.length; k++) {
									if (Game.teams[i].tractors[k].id == entities[j].tractorId) {
										Game.teams[i].tractors[k].weights += 1;
									}
								}
							}
						}
					}
				}
			}
			var level_over = false;
			for (var i = 0; i < Game.teams.length; i++) {
				if (Game.teams[i].weights == 4 && Game.teams[i].weight == 1000) {
					level_over = true;
				}
			}
			if (level_over) {
				Game.hiScore = [];
				for (var i = 0; i < GameController.length; i++) {
					GameController[i].ent = null;
				}
				Crafty.trigger("StopTimer");
				var timerText = $(".Timer").text();
				var bonusTime = parseInt(timerText.replace("Aika: ", ""));
				var multiplier = 1;
				if (bonusTime > 0) {
					multiplier = 1 + bonusTime/60;
				}
				for (var i = 0; i < Game.teams.length; i++) {
					var teamBonus = Game.teams[i].weight;
					for (var j = 0; j < Game.teams[i].tractors.length; j++) {
						var tractorScore = Math.floor((teamBonus * Game.teams[i].tractors[j].weights)/4);
						var timeBonus = Math.floor((multiplier * tractorScore) - tractorScore);
						var player = {
							name: Game.teams[i].tractors[j].tyres.left.name,
							score: tractorScore,
							teamBonus: teamBonus,
							timeBonus: timeBonus,
							totalScore: tractorScore + teamBonus + timeBonus
						}
						Game.hiScore.push(player);
						player = {
							name: Game.teams[i].tractors[j].tyres.right.name,
							score: tractorScore,
							teamBonus: teamBonus,
							timeBonus: timeBonus,
							totalScore: tractorScore + teamBonus + timeBonus
						}
						Game.hiScore.push(player);
						
					}
				}
				Game.hiScore = Game.hiScore.sort( function(a, b) { return b.totalScore - a.totalScore});
				var entities = Crafty.map.search({_x: 0, _y: 0, _w: Game.width, _h: Game.height });
				for (var i = 0; i < entities.length; i++) {
					entities[i].destroy();
				}
				this.destroy();
				Crafty.scene("GameOver");
			}
		})
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
						if (this.timeLeft < 11) {
							if (this.timeLeft > 0) {
								Crafty.audio.play("time_running");
							} else {
								Crafty.audio.play("time_out");
							}
						}
					}
					this.text("Aika: " + this.timeLeft);
				}
				this.timeWas = this.timeNow;
			});
	}
});
