window.onload = function() {
	Crafty.init(Game.width, Game.height);
	Crafty.scene("Loading");
};

var GameController = {
/*
	929: { // mobiles socket clientID for direct & fast access
		ent: null, // viittaus entiteettiin, jonka ohjaukseen osallistuu
		tyre: null, // left or right tyre
	},
	3: { //  id
		ent: null, // viittaus entiteettiin
		tyres: {
			left: 9, // left player id
			right: 13 // right player id
		},
		acc: {
			left: 5, // accelerometer value for left tyre set by socket
			right: 6, // accelerometer value for left tyre set by socket
		}
	}
*/
};


var Game = {  
	width: 960,
	height: 704,
	path: "/traktoripeli",
	on: false, // game is ongoing, true when the game is on
	sockets: {
		ready: false,
		roomID: 0, 
		dashboard: false
	},
	dashboard: {
		generated: false
	},
	description: "Ker&auml;&auml; traktorilla kent&auml;lt&auml; farmisi ruutuihin nelj&auml; punnusta niin, ett&auml; punnusten yhteenlaskettu summa on 1000. Nopein farmi voittaa. Traktoria liikutetaan niin ett&auml; toisen pelaajan juoksu py&ouml;ritt&auml;&auml; vasenta rengasta ja toisen pelaajan juoksu oikeaa rengasta.",
	qrcodes: {
		generated: 0,
		images: [
			{ _x: 324, _y: 132, action: 'join', id: 1, _ly: 256, label: 'Liity farmiin' }, // 1
			{ _x: 516, _y: 132, action: 'join', id: 2, _ly: 256, label: 'Liity farmiin' }, // 2
			{ _x: 324, _y: 420, action: 'join', id: 3, _ly: 544, label: 'Liity farmiin' }, // 3
			{ _x: 516, _y: 420, action: 'join', id: 4, _ly: 544, label: 'Liity farmiin' }, // 4
			{ _x: 164, _y: 292, action: 'join', id: 5, _ly: 416, label: 'Liity farmiin' }, // 5
			{ _x: 676, _y: 292, action: 'join', id: 6, _ly: 416, label: 'Liity farmiin' }, // 6
			{ _x: 804, _y: 36, action: 'start', _ly: 160, label: 'Aloita peli' }, // start
			{ _x: 804, _y: 548, action: 'close', _ly: 672, label: 'Sulje peli' } // close
		]
	},
	teams: [], // add teams when players join to union
/*
	teams: [
		{
			id : 1,
			weight: 0,
			weights: 0,
			tractors : [
				{
					id: 1,
					weights: 0,
					tyres: 
						{
							left: {
								name : "Matti",
								id : Crafty.math.randomInt(1000, 2000)
							},
							right: {
								name : "Maija",
								id : Crafty.math.randomInt(1000, 2000)
							}                            
						}
				},
				{
					id: 2,
					weights: 0,
					tyres: 
						{
							left: {
								name : "Marti",
								id : Crafty.math.randomInt(1000, 2000)
							},
							right: {
								name : "Marja",
								id : Crafty.math.randomInt(1000, 2000)
							}                            
						}
				}
			]
		},
		{
			id : 2,
			weight: 0,
			weights: 0,
			tractors : [
				{
					id: 1,
					weights: 0,
					tyres: 
						{
							left: {
								name : "Reijo",
								id : Crafty.math.randomInt(1000, 2000)
							},
							right: {
								name : "Raija",
								id : Crafty.math.randomInt(1000, 2000)
							}                            
						}
				}
			]
		}
	],
*/
	hiScore: [],
	playersInTeam: function(teamId) {
		var counter = 0;
		for (var i = 0; i < Game.teams.length; i++) {
			if (Game.teams[i].id == teamId) {
				for (var j = 0; j < Game.teams[i].tractors.length; j++) {
					if (Game.teams[i].tractors[j].tyres.left.id > 0) {
						counter++;
					}
					if (Game.teams[i].tractors[j].tyres.right.id > 0) {
						counter++;
					}
				}
			}
		}
		return counter
	},
	createTeam: function(teamId) {
		var team =
			{
				id: teamId,
				weight: 0,
				weights: 0,
				tractors: [],
			};
		Game.teams.push(team);
		return true;
	},
	createTractor: function(teamId, playerId, playerName) {
		var success = false;
		for (var i = 0; i < Game.teams.length; i++) {
			if (Game.teams[i].id == teamId) {
				var tractor = {
					id: parseInt(playerId),
					weights: 0,
					tyres: {
						left: 0,
						right: 0
					}
				}
				var left = {
					id: parseInt(playerId),
					name: playerName
				}
				tractor.tyres.left = left;
				Game.teams[i].tractors.push(tractor);
				success = true;
			}
		}
		return success;
	},
	joinTractor: function(tractor, teamId, playerId, playerName) {
		var success = false;
		for (var i = 0; i < Game.teams.length; i++) {
			if (Game.teams[i].id == teamId) {
				var right = {
					id: parseInt(playerId),
					name: playerName
				}
				Game.teams[i].tractors[tractor].tyres.right = right;
				success = true;
			}
		}
		return success;
	},
	drawNameplate: function(tractor, teamId, playerName) {
		for (var i = 0; i < Levels.level[0].farms.length; i++) {
			if (Levels.level[0].farms[i].id == teamId) {
				var ent = Crafty.e('Nameplate').attr({ x: Levels.level[0].farms[i].nameplates[tractor]._x, y: Levels.level[0].farms[i].nameplates[tractor]._y, z: 2 });
				ent.addComponent('nameplate' + (tractor + 1));
				Crafty.e("2D, DOM, Text, NameplateText").attr({ x: Levels.level[0].farms[i].nameplates[tractor]._x+45, y: Levels.level[0].farms[i].nameplates[tractor]._y+21, z: 3 }).text(playerName);
			}
		}
	},
	drawTractor: function(tractor, teamId, playerName) {
		for (var i = 0; i < Levels.level[0].farms.length; i++) {
			if (Levels.level[0].farms[i].id == teamId) {
				Crafty.e("2D, DOM, Text, NameplateText").attr({ x: Levels.level[0].farms[i].nameplates[tractor]._x+45, y: Levels.level[0].farms[i].nameplates[tractor]._y+2, z: 3 }).text(playerName);
				var ent = Crafty.e('Tractor').attr({ x: Levels.level[0].farms[i].tractors[tractor]._x, y: Levels.level[0].farms[i].tractors[tractor]._y, z: 1, rotation: Levels.level[0].farms[i].tractors[tractor]._rotate });
				ent.addComponent(Levels.level[0].farms[i].tractors[tractor].c);
			}
		}
	},
	generateGame: function(level) {
		Levels.generateBases(level);
		Levels.generateFarms(level);
		Levels.generateWeights(level);
		Crafty.e('Engine');
		Crafty.e('Timer').attr({ x: 804, y: 10, z: 4 });
	}

}