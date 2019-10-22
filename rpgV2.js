function Character(name, profession, gender, age, strength, dodge, block, hp, weapon, critMod, levelProgress, progNeeded, level, originalHP) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.dodge = dodge;
    this.block = block;
    this.hp = hp;
    this.weapon = weapon;
    this.critMod = critMod;
    this.levelProgress = levelProgress;
    this.progNeeded = progNeeded;
    this.level = level;
    this.originalHP = originalHP;
    this.printStats = function () {
        console.log(this);
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            console.log(this.name+ " is Still in the Fight!");
            return true;
        } else {
            console.log(this.name + " has Perished!");
            return false;
        };
    };
    this.attack = function (enemy) {
        var hitChance = Math.floor(Math.random()*10)+this.critMod;
        console.log(this.name + " used " + this.weapon + ".");
        console.log(hitChance);
        if (this.hp < (this.originalHP/10)) {
            hitChance = Math.floor(Math.random()*10)+this.critMod+5;
        };

        if (hitChance >= 10) {
            enemy.hp -= (this.strength*3);
            console.log("Critical Hit! -" + (this.strength*3));
        } else if (hitChance > 3 && hitChance < 10) {
            enemy.hp -= this.strength;
            console.log("Good Hit -" + (this.strength));
        } else { 
            console.log("Miss");
        };

        console.log(enemy.name + " HP: " +enemy.hp);
    };
    this.dodgeHit = function (enemy) {
        if(this.dodge >= enemy.strength) {
            console.log(this.name + " Successfully Dodged!");
        } else {
            console.log(this.name + " Failed To Dodge!");
            this.hp = (this.hp - enemy.strength);
            console.log(enemy.name + " Hit! -" + enemy.strength);
            console.log(this.name + " HP: " + this.hp);
        }
    };
    this.blockHit = function (enemy) {
        if (this.block >= enemy.strength) {
            console.log(this.name + " Successfully Blocked!");
        } else if ((enemy.strength - this.block) >= 0) {
            console.log(this.name + " Blocked But Still Took " + (enemy.strength - this.block) + " Damage!");
            console.log(this.name + " HP: " + this.hp);
        } else {
            console.log(this.name + " Failed To Block");
            this.hp = (this.hp - enemy.strength);
            console.log(enemy.name + " Hit! -" + enemy.strength);
            console.log(this.name + " HP: " + this.hp);
        }
    }
    this.levelUp = function () {
        console.log(this.name + " Has Leveled Up!");
        this.level++;
        this.strength += 5;
        this.block += 5;
        this.dodge += 5;
        this.originalHP += 25;
        this.hp = this.originalHP;

        console.log("Level: "+this.level);
        console.log("Strength: "+this.strength);
        console.log("Block: "+this.block);
        console.log("Dodge: "+this.dodge);
        console.log("HP: "+this.hp);
    };
    this.sigLevel = function() {
        console.log(this.name + " Has Leveled Up Significantly!")
        this.level++;
        this.strength += 15;
        this.block += 15;
        this.dodge += 15;
        this.originalHP += 50;
        this.hp = this.originalHP;

        console.log("Level: "+this.level);
        console.log("Strength: "+this.strength);
        console.log("Block: "+this.block);
        console.log("Dodge: "+this.dodge);
        console.log("HP: "+this.hp);
    };
    this.changeStats = function() {
        this.name = emptyName;
        this.profession = emptyClass;
        this.gender = emptyGender;
        this.age = emptyAge;
        this.strength = userStrength;
        this.dodge = userDodge;
        this.block = userBlock;
        this.hp = userHP;
        this.weapon = userWeapon;
        this.critMod = userCrit;
        this.levelProgress = userLevelProg;
        this.progNeeded = userProgNeed;
        this.level = userLevel;
        this.originalHP = userOriginalHP;
    }
    this.mobRevive = function () {
        this.hp = this.originalHP;
    }
}

var ogre = new Character("Kerhs", "Eater of Men", "Male", 70, 20, 0, 0, 100, "Spiked Club", 1, 0, 0, 5, 100);
var troll = new Character("Grog", "Scavenger", "Male", 10, 1, 0, 0, 20, "Pointy Rock On A Stick", 1, 0, 0, 1, 20);
var harpy = new Character("Aegia", "Wind Weaver", "Female", 120, 50, 0, 0, 150, "Flurrying Feathers", 2, 0, 0, 10, 150);
var siren = new Character("Stellia", "Screaching Singer", "Female", 150, 70, 0, 0, 150, "Souless Song", 2, 0, 0, 10, 150);
var demon = new Character("Vicious Smithers", "Devourer of Souls", "Neutral", 1000, 300, 0, 0, 800, "Flaming Flamberge", 2, 0, 0, 20, 800);
var hellHound = new Character("Cerberus", "Hell's Hunter", "Male", 1, 5, 0, 0, 10, "Feral Fang", 3, 0, 0, 1, 10);
var phantom = new Character("Gerard", "Phantom of the Opera", "Male", 35, 10, 0, 0, 60, "Grotesque Face", 3, 0, 0, 3, 60);
var inquirer = require("inquirer");

var emptyName = "";
var emptyClass = "";
var emptyGender = "";
var emptyAge = 0;
var userWeapon = "";
var userStrength = 0;
var userDodge = 0;
var userBlock = 0;
var userHP = 0;
var userCrit = 1;
var userLevelProg = 0;
var userProgNeed = 3;
var userLevel = 1;
var userOriginalHP = 0
var user = new Character(emptyName, emptyClass, emptyGender, emptyAge, userStrength, userDodge, userBlock, userHP, userWeapon, userCrit, userLevelProg, userProgNeed, userLevel, userOriginalHP);

var createCharacter = function () {

inquirer
    .prompt([
        {
            type: "input",
            message: "Name Your Adventurer.",
            name: "userName"
        },
        {
            type: "list",
            message: "Gender",
            choices: ["Male", "Female", "Neutral"],
            name: "userGender"
        },
        {
            type: "number",
            message: "Age",
            name: "userAge"
        },
        {
            type: "list",
            message: "Choose Your Adventurer's Class.",
            choices: ["Knight", "Rogue", "Archer", "Mage"],
            name: "userClass"
        }
    ])
    .then(function(inquirerResponse) {
        if (inquirerResponse.userClass === "Knight") {
            emptyName = inquirerResponse.userName;
            emptyClass = inquirerResponse.userClass;
            emptyGender = inquirerResponse.userGender;
            emptyAge = inquirerResponse.userAge;
            userWeapon = "Swift Sword";
            userStrength = 20;
            userDodge = 2;
            userBlock = 20;
            userHP = 100;
            userCrit = 1;
            userLevelProg = 0;
            userProgNeed = 3;
            userLevel = 1;
            userOriginalHP = 100
        } else if (inquirerResponse.userClass === "Rogue"){
            emptyName = inquirerResponse.userName;
            emptyClass = inquirerResponse.userClass;
            emptyGender = inquirerResponse.userGender;
            emptyAge = inquirerResponse.userAge;
            userWeapon = "Deadly Daggers";
            userStrength = 10;
            userDodge = 30;
            userBlock = 10;
            userHP = 75;
            userCrit = 2;
            userLevelProg = 0;
            userProgNeed = 3;
            userLevel = 1;
            userOriginalHP = 75;
        } else if (inquirerResponse.userClass === "Archer") {
            emptyName = inquirerResponse.userName;
            emptyClass = inquirerResponse.userClass;
            emptyGender = inquirerResponse.userGender;
            emptyAge = inquirerResponse.userAge;
            userWeapon = "Balance Bow";
            userStrength = 20;
            userDodge = 50;
            userBlock = 2;
            userHP = 50;
            userCrit = 4;
            userLevelProg = 0;
            userProgNeed = 3;
            userLevel = 1;
            userOriginalHP = 50;
        } else if (inquirerResponse.userClass === "Mage") {
            emptyName = inquirerResponse.userName;
            emptyClass = inquirerResponse.userClass;
            emptyGender = inquirerResponse.userGender;
            emptyAge = inquirerResponse.userAge;
            userWeapon = "Staggering Staff";
            userStrength = 30;
            userDodge = 10;
            userBlock = 10;
            userHP = 50;
            userCrit = 3;
            userLevelProg = 0;
            userProgNeed = 3;
            userLevel = 1;
            userOriginalHP = 50;
        }
        user.changeStats();
        console.log(user.printStats());
        startAdventure();
    })

};
createCharacter();

var startAdventure = function() {
    inquirer
    .prompt([
        {
            type: "confirm",
            message: "Are You Ready To Start Your Adventure?",
            name: "start"
        }
    ])
    .then(function(startResponse){
        if(startResponse.start) {
            console.log("The Adventure Begins!");
            chooseEnemy();
        } else {
            console.log("The Hero Reluctantly Starts Their Journey!");
            chooseEnemy();
        }
    })
};


var chooseEnemy = function() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Choose An Enemy To Slay!",
            choices: ["Hell Hound", "Troll", "Phantom", "Ogre", "Harpy", "Siren", "Demon"],
            name: "chosenEnemy"
        }
    ])
    .then(function(chooseResponse){
        if (chooseResponse.chosenEnemy === "Hell Hound"){
            if(user.level >= hellHound.level) {
                console.log("Prepare To Fight " + hellHound.name);
                fight(hellHound);
            } else {
                console.log(hellHound.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Troll"){
            if(user.level >= troll.level) {
                console.log("Prepare To Fight " + troll.name);
                fight(troll);
            } else {
                console.log(troll.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Phantom"){
            if(user.level >= phantom.level) {
                console.log("Prepare To Fight " + phantom.name);
                fight(phantom);
            } else {
                console.log(phantom.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Ogre"){
            if(user.level >= ogre.level) {
                console.log("Prepare To Fight " + ogre.name);
                fight(ogre);
            } else {
                console.log(ogre.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Harpy"){
            if(user.level >= harpy.level) {
                console.log("Prepare To Fight " + harpy.name);
                fight(harpy);
            } else {
                console.log(harpy.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Siren"){
            if(user.level >= siren.level) {
                console.log("Prepare To Fight " + siren.name);
                fight(siren);
            } else {
                console.log(siren.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Demon"){
            if(user.level >= demon.level) {
                console.log("Prepare To Fight " + demon.name);
                fight(demon);
            } else {
                console.log(demon.name + " Is Too Strong For You. Choose Someone Else!");
                chooseEnemy();
            };

        };
    })
    };

var fight = function(enemy){
        if (enemy.isAlive() && user.isAlive()) {
            inquirer
            .prompt([
                {
                    type: "list",
                    message: "Choose An Action",
                    choices: ["Attack", "Dodge", "Block"],
                    name: "actionChoice"
                }
            ])
            .then(function(action){
                if (action.actionChoice === "Attack") {
                    user.attack(enemy);
                    if (enemy.isAlive()){
                    enemy.attack(user);
                    };
                    fight(enemy);
                } else if (action.actionChoice === "Dodge") {
                    user.dodgeHit(enemy);
                    fight(enemy);
                } else if (action.actionChoice === "Block") {
                    user.blockHit(enemy);
                    fight(enemy);
                };
            })
        } else if (!enemy.isAlive()) {
            enemy.isAlive();
            enemy.mobRevive();
            console.log("The Fight Is Won!");
            user.levelProgress += enemy.level;
            if (user.levelProgress >= user.progNeeded) {
                user.levelProgress = (user.levelProgress - user.progNeeded);
                user.progNeeded += (enemy.level*2);
                if (((user.level + 1)%5) === 0) {
                    user.sigLevel();
                } else {
                    user.levelUp();
                }
            }
            user.printStats();
            chooseEnemy();
        } else if (!user.isAlive()) {
            user.isAlive();
            console.log("Game Over");
        }
}

