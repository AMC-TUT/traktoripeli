var Levels = {
	level:[
		{
			id : 1,
			farms: [
				{
					id : 1,
					attr: { c: "farm", _x: 187, _y: 59, _rotate: 0 },
					homebases : [
						{ _x: 208, _y: 80 },
						{ _x: 272, _y: 80 },
						{ _x: 336, _y: 80 },
						{ _x: 400, _y: 80 }
					],
					nameplates : [
						{ _x: 192, _y: 12 },
						{ _x: 320, _y: 12 }
					],
					tractors : [
						{ c: "team1vechile1", _x: 256, _y: 64, "_rotate": 180, _keyForward: "Q", _keyReverse: "A", _keyLeft: "1", _keyRight: "Z" },
						{ c: "team1vechile2", _x: 320, _y: 64, "_rotate": 180, _keyForward: "W", _keyReverse: "S", _keyLeft: "2", _keyRight: "X" }
					]
				},
				{
					id : 2,
					attr: { c: "farm", _x: 507, _y: 59, _rotate: 0 },
					homebases : [
						{ _x: 528, _y: 80 },
						{ _x: 592, _y: 80 },
						{ _x: 656, _y: 80 },
						{ _x: 720, _y: 80 },
					],
					nameplates : [
						{ _x: 512, _y: 12 },
						{ _x: 640, _y: 12 }
					],
					tractors : [
						{ c: "team2vechile1", _x: 576, _y: 64, "_rotate": 180, _keyForward: "E", _keyReverse: "D", _keyLeft: "3", _keyRight: "C" },
						{ c: "team2vechile2", _x: 640, _y: 64, "_rotate": 180, _keyForward: "R", _keyReverse: "F", _keyLeft: "4", _keyRight: "V" }
					]
				},
				{
					id : 3,
					attr: { c: "farm", _x: 452, _y: 644, _rotate: 180 },
					homebases : [
						{ _x: 208, _y: 592 },
						{ _x: 272, _y: 592 },
						{ _x: 336, _y: 592 },
						{ _x: 400, _y: 592 },
					],	
					nameplates : [
						{ _x: 192, _y: 652 },
						{ _x: 320, _y: 652 }
					],
					tractors : [
						{ c: "team3vechile1", _x: 256, _y: 576, "_rotate": 0, _keyForward: "T", _keyReverse: "G", _keyLeft: "5", _keyRight: "B" },
						{ c: "team3vechile2", _x: 320, _y: 576, "_rotate": 0, _keyForward: "Y", _keyReverse: "H", _keyLeft: "6", _keyRight: "N" }
					]
				},
				{
					id : 4,
					attr: { c: "farm", _x: 772, _y: 644, _rotate: 180 },
					homebases : [
						{ _x: 528, _y: 592 },
						{ _x: 592, _y: 592 },
						{ _x: 656, _y: 592 },
						{ _x: 720, _y: 592 },
					],
					nameplates : [
						{ _x: 512, _y: 652 },
						{ _x: 640, _y: 652 }
					],
					tractors : [
						{ c: "team4vechile1", _x: 576, _y: 576, "_rotate": 0, _keyForward: "U", _keyReverse: "J", _keyLeft: "7", _keyRight: "M" },
						{ c: "team4vechile2", _x: 640, _y: 576, "_rotate": 0, _keyForward: "I", _keyReverse: "K", _keyLeft: "8", _keyRight: "DECIMAL" }
					]
				},
				{
					id : 5,
					attr: { c: "farm", _x: 91, _y: 484, _rotate: 270 },
					homebases : [
						{ _x: 112, _y: 240 },
						{ _x: 112, _y: 304 },
						{ _x: 112, _y: 368 },
						{ _x: 112, _y: 432 },
					],
					nameplates : [
						{ _x: 32, _y: 172 },
						{ _x: 32, _y: 492 }
					],
					tractors : [
						{ c: "team5vechile1", _x: 96, _y: 288, "_rotate": 90, _keyForward: "O", _keyReverse: "L", _keyLeft: "9", _keyRight: "COMMA" },
						{ c: "team5vechile2", _x: 96, _y: 352, "_rotate": 90, _keyForward: "NUMPAD_1", _keyReverse: "NUMPAD_2", _keyLeft: "NUMPAD_4", _keyRight: "NUMPAD_5" }
					]
				},
				{
					id : 6,
					attr: { c: "farm", _x: 868, _y: 219, _rotate: 90 },
					homebases : [
						{ _x: 816, _y: 240 },
						{ _x: 816, _y: 304 },
						{ _x: 816, _y: 368 },
						{ _x: 816, _y: 432 },
					],
					nameplates : [
						{ _x: 800, _y: 172 },
						{ _x: 800, _y: 492 }
					],
					tractors : [
						{ c: "team6vechile1", _x: 800, _y: 288, "_rotate": 270, _keyForward: "NUMPAD_6", _keyReverse: "NUMPAD_9", _keyLeft: "NUMPAD_3", _keyRight: "NUMPAD_0" },
						{ c: "team6vechile2", _x: 800, _y: 352, "_rotate": 270, _keyForward: "UP_ARROW", _keyReverse: "DOWN_ARROW", _keyLeft: "LEFT_ARROW", _keyRight: "RIGHT_ARROW" }
					]
				}
			],
			bases: [
				{ _x: 304, _y: 176 },
				{ _x: 432, _y: 176 },
				{ _x: 560, _y: 176 },
				{ _x: 688, _y: 176 },
				{ _x: 240, _y: 240 },
				{ _x: 368, _y: 240 },
				{ _x: 496, _y: 240 },
				{ _x: 624, _y: 240 },
				{ _x: 304, _y: 304 },
				{ _x: 432, _y: 304 },
				{ _x: 560, _y: 304 },
				{ _x: 688, _y: 304 },
				{ _x: 240, _y: 368 },
				{ _x: 368, _y: 368 },
				{ _x: 496, _y: 368 },
				{ _x: 624, _y: 368 },
				{ _x: 304, _y: 432 },
				{ _x: 432, _y: 432 },
				{ _x: 560, _y: 432 },
				{ _x: 688, _y: 432 },
				{ _x: 240, _y: 496 },
				{ _x: 368, _y: 496 },
				{ _x: 496, _y: 496 },
				{ _x: 624, _y: 496 }
			],
			weights: [
				[
					{ c: "wb100g", value: 100 },
					{ c: "wb200g", value: 200 },
					{ c: "wb300g", value: 300 },
					{ c: "wb400g", value: 400 }
				],
				[
					{ c: "wb100g", value: 100 },
					{ c: "wb300g", value: 300 },
					{ c: "wb300g", value: 300 },
					{ c: "wb300g", value: 300 }
				],
				[
					{ c: "wb200g", value: 200 },
					{ c: "wb200g", value: 200 },
					{ c: "wb200g", value: 200 },
					{ c: "wb400g", value: 400 }
				],
				[
					{ c: "wb200g", value: 200 },
					{ c: "wb200g", value: 200 },
					{ c: "wb300g", value: 300 },
					{ c: "wb300g", value: 300 }
				],
				[
					{ c: "wb100g", value: 100 },
					{ c: "wb100g", value: 100 },
					{ c: "wb400g", value: 400 },
					{ c: "wb400g", value: 400 }
				]
			]
		}
	],
	drawAllFarms: function(level) {
		for (var i = 0; i < Levels.level[level].farms.length; i++) {
			var ent = Crafty.e('Farm').attr({ x: Levels.level[level].farms[i].attr._x, y: Levels.level[level].farms[i].attr._y, z: 1, rotation: Levels.level[level].farms[i].attr._rotate });
			ent.addComponent(Levels.level[level].farms[i].attr.c);
		}
	},
	drawAllBases: function(level) {
		for (var i = 0; i < Levels.level[level].bases.length; i++) {
			var ent = Crafty.e('Base').attr({ x: Levels.level[level].bases[i]._x, y: Levels.level[level].bases[i]._y, z: 1, w: 32, h: 32 });
			ent.addComponent('Color').color('red');
		}
	},
	drawAllHomebases: function(level) {
		for (var i = 0; i < Levels.level[level].farms.length; i++) {
			for (var j = 0; j < 4; j++) {
				var ent = Crafty.e('Homebase').attr({ x: Levels.level[level].farms[i].homebases[j]._x, y: Levels.level[level].farms[i].homebases[j]._y, z: 1, w: 32, h: 32 });
				ent.addComponent('Color').color('blue');
			}
		}
	},
	drawAllNameplates: function(level) {
		for (var i = 0; i < Levels.level[level].farms.length; i++) {
			var ent = Crafty.e('Nameplate').attr({ x: Levels.level[level].farms[i].nameplates[0]._x, y: Levels.level[level].farms[i].nameplates[0]._y, z: 1 });
			ent.addComponent('nameplate1');
			var ent = Crafty.e('Nameplate').attr({ x: Levels.level[level].farms[i].nameplates[1]._x, y: Levels.level[level].farms[i].nameplates[1]._y, z: 1 });
			ent.addComponent('nameplate2');
		}
	},
	drawAllTractors: function(level) {
		for (var i = 0; i < Levels.level[level].farms.length; i++) {
			var ent = Crafty.e('Tractor').attr({ x: Levels.level[level].farms[i].tractors[0]._x, y: Levels.level[level].farms[i].tractors[0]._y, z: 1, rotation: Levels.level[level].farms[i].tractors[0]._rotate });
			ent.addComponent(Levels.level[level].farms[i].tractors[0].c);
			var ent = Crafty.e('Tractor').attr({ x: Levels.level[level].farms[i].tractors[1]._x, y: Levels.level[level].farms[i].tractors[1]._y, z: 1, rotation: Levels.level[level].farms[i].tractors[1]._rotate });
			ent.addComponent(Levels.level[level].farms[i].tractors[1].c);
		}
	},
	generateBases: function(level) {
		for (var i = 0; i < Levels.level[level].bases.length; i++) {
			var ent = Crafty.e('Base').attr({ x: Levels.level[level].bases[i]._x, y: Levels.level[level].bases[i]._y, z: 2, w: 32, h: 32 });
			ent.addComponent('Collision').collision(new Crafty.polygon([0,0], [32,0], [32,32], [0,32]));
			//ent.addComponent('Color').color('red');
		}
	},
	generateFarms: function(level) {
		for (var i = 0; i < Game.teams.length; i++) {
			for (var j = 0; j < Levels.level[level].farms.length; j++) {
				if (Game.teams[i].id == Levels.level[level].farms[j].id) {
					ent = Crafty.e('Farm').attr({ x: Levels.level[level].farms[j].attr._x, y: Levels.level[level].farms[j].attr._y, z: 2, rotation: Levels.level[level].farms[j].attr._rotate });
					ent.id = Game.teams[i].id;
					ent.addComponent(Levels.level[level].farms[j].attr.c);
					for (var k = 0; k < 4; k++) {
						var ent = Crafty.e('Homebase').attr({ x: Levels.level[level].farms[j].homebases[k]._x, y: Levels.level[level].farms[j].homebases[k]._y, z: 2, w: 32, h: 32 });
						ent.addComponent('Collision').collision(new Crafty.polygon([0,0], [32,0], [32,32], [0,32]));
						//ent.addComponent('Color').color('blue');
						ent.farmId = Game.teams[i].id;
					}
					for (var k = 0; k < Game.teams[i].tractors.length; k++) {
						var ent = Crafty.e('Nameplate').attr({ x: Levels.level[level].farms[j].nameplates[k]._x, y: Levels.level[level].farms[j].nameplates[k]._y, z: 4 });
						ent.addComponent('nameplate1');
						Crafty.e("2D, DOM, Text, NameplateText").attr({ x: Levels.level[0].farms[j].nameplates[k]._x+45, y: Levels.level[0].farms[j].nameplates[k]._y+21, z: 4 }).text(Game.teams[i].tractors[k].tyres.left.name);
						Crafty.e("2D, DOM, Text, NameplateText").attr({ x: Levels.level[0].farms[j].nameplates[k]._x+45, y: Levels.level[0].farms[j].nameplates[k]._y+2, z: 4 }).text(Game.teams[i].tractors[k].tyres.right.name);
						var ent = Crafty.e('Tractor').attr({x: Levels.level[level].farms[j].tractors[k]._x, y: Levels.level[level].farms[j].tractors[k]._y, z: 3, rotation: Levels.level[level].farms[j].tractors[k]._rotate});
						ent.farmId = Game.teams[i].id;
						ent.id = Game.teams[i].tractors[k].id;
						ent.addComponent(Levels.level[level].farms[j].tractors[k].c);
						ent._keyForward = Levels.level[level].farms[j].tractors[k]._keyForward;
						ent._keyReverse = Levels.level[level].farms[j].tractors[k]._keyReverse;
						ent._keyLeft = Levels.level[level].farms[j].tractors[k]._keyLeft;
						ent._keyRight = Levels.level[level].farms[j].tractors[k]._keyRight;
                        _.each(GameController, function(obj) {
                            if(obj.tractorId == Game.teams[i].tractors[k].id) {
                                obj["ent"] = ent;
                            }
                        });
/*						for (var m = 0; m < GameController.length; m++) {
							if(GameController[m].tractorId == Game.teams[i].tractors[k].id) {
								GameController[m]["ent"] = ent;
							}
						} */
					}
				}
			}
		}
	},
	generateWeights: function(level) {
		var prev_rnd = -1, next_rnd = -1;
		for (var i = 0; i < Game.teams.length; i++) {
			do {
				next_rnd = Crafty.math.randomInt(0, Levels.level[level].weights.length-1);
			} while (prev_rnd == next_rnd);
			prev_rnd = next_rnd;
			var weight_set = Levels.level[level].weights[next_rnd];
			for (var j = 0; j < weight_set.length; j++) {
				var not_taken = true;
				do {
					var rnd = Crafty.math.randomInt(0, Levels.level[level].bases.length-1);
					var entities = Crafty.map.search({_x: Levels.level[level].bases[rnd]._x - 8, _y: Levels.level[level].bases[rnd]._y - 8, _w: 48, _h: 48 });

					if (entities[0].weightValue == 0) {
						entities[0].weightValue = weight_set[j].value;
						var ent = Crafty.e('WeightOnGround').attr({ x: Levels.level[level].bases[rnd]._x - 8, y: Levels.level[level].bases[rnd]._y - 8, z: 2 });
						ent.addComponent(weight_set[j].c);
						not_taken = false;
					}
				} while (not_taken);
			}
		}
	}
}