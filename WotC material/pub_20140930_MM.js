var iFileName = "pub_20140930_MM.js";
RequiredSheetVersion(12.999);
// This file adds all the player-material from the Monster Manual to MPMB's Character Record Sheet

// Define the source
SourceList.M={
	name : "Monster Manual",
	abbreviation : "MM",
	group : "Primary Sources",
	url : "http://dnd.wizards.com/products/tabletop-games/rpg-products/monster-manual",
	date : "2014/09/30"
};

// Dinosaurs not in the SRD
CreatureList["allosaurus"] = {
	name : "Allosaurus",
	source : ["M", 79],
	size : 2, //Large
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 51,
	hd : [6, 10], //[#, die]
	speed : "60 ft",
	scores : [19, 13, 17, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 5
	},
	senses : "",
	passivePerception : 15,
	languages : "",
	challengeRating : "2",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 8, "slashing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "If used after moving 30 ft straight in the same round, see Pounce trait"
		}, {
			name : "Bite",
			ability : 1,
			damage : [2, 10, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Can be used in combination with claw while pouncing (see Pounce trait)"
		}
	],
	traits : [{
			name : "Pounce",
			description : "If the allosaurus moves at least 30 ft straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
		}
	]
};
CreatureList["ankylosaurus"] = {
	name : "Ankylosaurus",
	source : ["M", 79],
	size : 1, //Huge
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 15,
	hp : 68,
	hd : [8, 12], //[#, die]
	speed : "30 ft",
	scores : [19, 11, 15, 2, 12, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "3",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Tail",
			ability : 1,
			damage : [4, 6, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (10 ft)",
			description : "Target must succeed on a DC 14 Strength saving throw or be knocked prone",
			modifiers : [1, "", ""], //[to hit, to damage, add ability to damage] "" means ignore
		}
	]
};
CreatureList["pteranodon"] = {
	name : "Pteranodon",
	source : ["M", 79],
	size : 3, //Medium
	type : "Beast",
	subtype : "",
	alignment : "Unaligned",
	ac : 13,
	hp : 13,
	hd : [3, 8], //[#, die]
	speed : "10 ft, fly 60 ft",
	scores : [12, 15, 10, 2, 9, 5], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"perception" : 1
	},
	senses : "",
	passivePerception : 11,
	languages : "",
	challengeRating : "1/4",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 1,
			damage : [1, 6, "piercing"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : ""
		}
	],
	traits : [{
			name : "Flyby",
			description : "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
		}
	]
};

// Special familiars not in the SRD
CreatureList["faerie dragon"] = { // With contributions by Patrick O.
	name : "Faerie Dragon",
	source : ["M", 133],
	size : 5, //Tiny
	type : "Dragon",
	subtype : "",
	alignment : "Chaotic Good",
	ac : 15,
	hp : 14,
	hd : [4, 4],
	speed : "10 ft, fly 60 ft",
	scores : [3, 20, 13, 14, 12, 16], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	skills : {
		"arcana" : 4,
		"perception" : 3,
		"stealth" : 7
	},
	senses : "Darkvision 60 ft",
	passivePerception : 13,
	languages : "Draconic, Sylvan",
	challengeRating : "1",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Bite",
			ability : 2,
			damage : [1, "", "piercing"],
			range : "Melee (5 ft)",
			description : "",
			modifiers : ["", "", false]
		}, {
			name : "Euphoria Breath (Recharge 5-6)",
			ability : 3,
			damage : ["Wis save", "", "Euphoria"],
			range : "5 ft",
			description : "For 1 min, target rolls d6 at turn start: 1-4 move random (no actions), 5-6 save again (no actions/move)",
			dc : true,
			modifiers : ["", "", false],
			tooltip : "The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a d6 at the start of each of its turns to determine its behavior during the turn: 1-4 - the target takes no action or bonus action and uses all its movment to move in a random direction. 5-6 - the target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success."
		}
	],
	traits : [{
			name : "Superior Invisibility",
			description : "As a bonus action, the dragon can magically turn invisible until its concentration ends (as with a spell). Anything it wears or carries is invisible with it."
		}, {
			name : "Limited Telepathy",
			description : "Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it."
		}, {
			name : "Magic Resistance",
			description : "The dragon has advantage on saves against spells and magical effects."
		}, {
			name : "Euphoria Breath (Recharge 5-6)",
			description : "Exhale a puff of euphoria gas at a creature within 5 ft. It must succeed on a DC 11 Wisdom save, or for 1 minute, it can't take reactions and must roll a d6 at the start of each of its turns:\n 1-4 - No action or bonus action, using all movment to move in a random direction.\n 5-6 - The target does nothing except attempt another save to try end the effect on itself."
		}
	],
	features : [{
			name : "Innate Spellcasting",
			description : "Cast spells using Charisma (save DC 13), requiring no material components. The spells it knows depends on its age (and stack):\n Red: 1/day - Dancing Lights, Mage Hand, Minor Illusion\n Orange (6-10 years): 1/day - Color Spray\n Yellow (11-20 years): 1/day - Mirror Image\n Green (21-30 years): 1/day - Suggestion\n Blue (31-40 years): 1/day - Major Image\n Indigo (41-50 years): 1/day - Hallucinatory Terrain\n Violet (51+ years): 1/day - Polymorph"
		}
	]
};
CreatureList["crawling claw"] = {
	name : "Crawling Claw",
	source : ["M", 44],
	size : 5, //Tiny
	type : "Undead",
	subtype : "",
	alignment : "Neutral Evil",
	ac : 12,
	hp : 2,
	hd : [1, 4], //[#, die]
	speed : "20 ft, climb 20 ft",
	scores : [13, 14, 11, 5, 10, 4], //[Str, Dex, Con, Int, Wis, Cha]
	saves : ["", "", "", "", "", ""], //[Str, Dex, Con, Int, Wis, Cha]
	senses : "Blindsight 30 ft (blind beyond this radius)",
	damage_immunities : "poison",
	condition_immunities : "charmed, exhaustion, poisoned",
	passivePerception : 10,
	languages : "understands Common but can't speak",
	challengeRating : "0",
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
			name : "Claw",
			ability : 1,
			damage : [1, 4, "bludgeoning"], //[#, die, type] "" for die is allowed
			range : "Melee (5 ft)",
			description : "Does bludgeoning or slashing damage (claw's choice)"
		}
	],
	traits : [{
			name : "Turn Immunity",
			description : "The claw is immune to effects that turn undead."
		}
	]
};