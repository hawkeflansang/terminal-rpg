function Character(name, profession, gender, age, strength, dodge, block, hp, weapon, baseCrit, critMod, levelProgress, progNeeded, level, coins, originalHP) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.dodge = dodge;
    this.block = block;
    this.hp = hp;
    this.weapon = weapon;
    this.baseCrit = baseCrit;
    this.critMod = critMod;
    this.levelProgress = levelProgress;
    this.progNeeded = progNeeded;
    this.level = level;
    this.coins = coins;
    this.originalHP = originalHP;
    this.printStats = function () {
        console.log("Name: " + this.name + "\nClass: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nDodge: " + this.dodge + "\nBlock: " + this.block + "\nHP: " + this.hp + "\nWeapon: " + this.weapon + "\nCritMod: " + this.critMod +"\nLevel: " + this.level + "\nXP: " + this.levelProgress + "\nXP Needed For Next Level: " + this.progNeeded + "\nCoins: " + this.coins);
        console.log("\n---------------\n");
    };
    this.isAlive = function () {
        if (this.hp > 0) {
            console.log(this.name+ " The " + this.profession + " Is Still In The Fight!");
            console.log("\n---------------\n");
            return true;
        } else {
            console.log(this.name + " The " + this.profession + " Has Perished!");
            console.log("\n---------------\n");
            return false;
        };
    };
    this.attack = function (enemy) {
        var hitChance = Math.floor(Math.random()*10)+this.critMod;
        console.log(this.name + " used " + this.weapon + ".");
        if (this.hp < (this.originalHP/10)) {
            hitChance = Math.floor(Math.random()*10)+this.critMod+5;
        };

        if (hitChance >= 10) {
            enemy.hp -= (this.strength*3);
            console.log("Critical Hit! -" + (this.strength*3));
            console.log("\n---------------\n");
        } else if (hitChance > 3 && hitChance < 10) {
            enemy.hp -= this.strength;
            console.log("Good Hit -" + (this.strength));
            console.log("\n---------------\n");
        } else { 
            console.log("Miss");
            console.log("\n---------------\n");
        };

        console.log(enemy.name + " HP: " +enemy.hp);
        console.log("\n---------------\n");
    };
    this.dodgeHit = function (enemy) {
        if(this.dodge >= enemy.strength) {
            console.log(this.name + " Successfully Dodged!");
            console.log("\n---------------\n");
        } else {
            console.log(this.name + " Failed To Dodge!");
            this.hp = (this.hp - enemy.strength);
            console.log(enemy.name + " Hit! -" + enemy.strength);
            console.log(this.name + " HP: " + this.hp);
            console.log("\n---------------\n");
        }
    };
    this.blockHit = function (enemy) {
        if (this.block >= enemy.strength) {
            console.log(this.name + " Successfully Blocked!");
            console.log("\n---------------\n");
        } else if ((enemy.strength - this.block) >= 0) {
            console.log(this.name + " Blocked But Still Took " + (enemy.strength - this.block) + " Damage!");
            console.log(this.name + " HP: " + this.hp);
            console.log("\n---------------\n");
        } else {
            console.log(this.name + " Failed To Block");
            this.hp = (this.hp - enemy.strength);
            console.log(enemy.name + " Hit! -" + enemy.strength);
            console.log(this.name + " HP: " + this.hp);
            console.log("\n---------------\n");
        }
    }
    this.levelUp = function () {
        console.log(this.name + " Has Leveled Up!");
        console.log("\n---------------\n");
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
        console.log("\n---------------\n");
    };
    this.sigLevel = function() {
        console.log(this.name + " Has Leveled Up Significantly!")
        console.log("\n---------------\n");
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
        console.log("\n---------------\n");
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
        this.baseCrit = userBase;
        this.critMod = userCrit;
        this.levelProgress = userLevelProg;
        this.progNeeded = userProgNeed;
        this.level = userLevel;
        this.coins = userCoin;
        this.originalHP = userOriginalHP;
    };
    this.mobRevive = function () {
        this.hp = this.originalHP;
    };
}

var ogre = new Character("Kerhs", "Eater of Men", "Male", 70, 20, 0, 0, 100, "Spiked Club", 1, 1, 0, 0, 5, 0,100);
var troll = new Character("Grog", "Scavenger", "Male", 10, 1, 0, 0, 20, "Pointy Rock On A Stick", 1, 1, 0, 0, 1, 0, 20);
var harpy = new Character("Aegia", "Wind Weaver", "Female", 120, 50, 0, 0, 150, "Flurrying Feathers", 2, 2, 0, 0, 10, 0, 150);
var siren = new Character("Stellia", "Screaching Singer", "Female", 150, 70, 0, 0, 150, "Souless Song", 2, 2, 0, 0, 10, 0, 150);
var demon = new Character("Vicious Smithers", "Devourer of Souls", "Neutral", 1000, 300, 0, 0, 800, "Flaming Flamberge", 2, 2, 0, 0, 20, 0, 800);
var hellHound = new Character("Cerberus", "Hell's Hunter", "Male", 1, 5, 0, 0, 10, "Feral Fang", 3, 3, 0, 0, 1, 0, 10);
var phantom = new Character("Gerard", "Phantom of the Opera", "Male", 35, 10, 0, 0, 60, "Grotesque Face", 3, 3, 0, 0, 3, 0, 60);
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
var userBase = 1;
var userCrit = 1;
var userLevelProg = 0;
var userProgNeed = 3;
var userLevel = 1;
var userCoin = 0;
var userOriginalHP = 0
var user = new Character(emptyName, emptyClass, emptyGender, emptyAge, userStrength, userDodge, userBlock, userHP, userWeapon, userBase, userCrit, userLevelProg, userProgNeed, userLevel, userCoin, userOriginalHP);

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
            userBase = 1;
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
            userBase = 2;
            userCrit = 2;
            userLevelProg = 0;
            userProgNeed = 3;
            userLevel = 1;
            userCoin = 5;
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
            userBase = 4;
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
            userBase = 3;
            userCrit = 3;
            userLevelProg = 0;
            userProgNeed = 3;
            userLevel = 1;
            userOriginalHP = 50;
        }
        user.changeStats();
        user.printStats();
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
            console.log("\n---------------\n");
            chooseEnemy();
        } else {
            console.log("The Hero Reluctantly Starts Their Journey!");
            console.log("\n---------------\n");
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
                console.log("\n---------------\n");
                fight(hellHound);
            } else {
                console.log(hellHound.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Troll"){
            if(user.level >= troll.level) {
                console.log("Prepare To Fight " + troll.name);
                console.log("\n---------------\n");
                fight(troll);
            } else {
                console.log(troll.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Phantom"){
            if(user.level >= phantom.level) {
                console.log("Prepare To Fight " + phantom.name);
                console.log("\n---------------\n");
                fight(phantom);
            } else {
                console.log(phantom.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Ogre"){
            if(user.level >= ogre.level) {
                console.log("Prepare To Fight " + ogre.name);
                console.log("\n---------------\n");
                fight(ogre);
            } else {
                console.log(ogre.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Harpy"){
            if(user.level >= harpy.level) {
                console.log("Prepare To Fight " + harpy.name);
                console.log("\n---------------\n");
                fight(harpy);
            } else {
                console.log(harpy.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Siren"){
            if(user.level >= siren.level) {
                console.log("Prepare To Fight " + siren.name);
                console.log("\n---------------\n");
                fight(siren);
            } else {
                console.log(siren.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
                chooseEnemy();
            };

        } else if (chooseResponse.chosenEnemy === "Demon"){
            if(user.level >= demon.level) {
                console.log("Prepare To Fight " + demon.name);
                console.log("\n---------------\n");
                fight(demon);
            } else {
                console.log(demon.name + " Is Too Strong For You. Choose Someone Else!");
                console.log("\n---------------\n");
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
        } else if (enemy.isAlive() === false) {
            enemy.mobRevive();
            console.log("The Fight Is Won!");
            console.log("\n---------------\n");
            user.coins += enemy.level;
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
            buyOrBattle();
        } else if (user.isAlive() === false) {
            user.isAlive();
            console.log("Game Over");
        }
}

var shop = function(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "What Would You Like To Do?",
            choices: ["Shop Weapons", "Shop Health", "Return To Battle"],
            name: "shopChoice"
        }
    ])
    .then(function(chooseShop) {
        if (chooseShop.shopChoice === "Shop Weapons") {
            weaponSale();
        } else if (chooseShop.shopChoice === "Shop Health") {
            healthSale();
        } else if (chooseShop.shopChoice === "Return To Battle"){
            chooseEnemy();
        };
    })
}

var healthSale = function() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Choose A Health Item To Purchase",
            choices: ["Holy Water: Restore 10HP, Cost 5c", "Pixie Dust: Restore 25HP, Cost 10c", "Vampiric Ashes: Restore 50HP, Cost 25c", "Purify Soul: Restore 100HP, Cost 50c", "Blood Sacrifice: Restore 200HP, Cost 100c"],
            name: "healthChoice"
        }
    ])
    .then(function(buyHealth) {
        if (buyHealth.healthChoice === "Holy Water: Restore 10HP, Cost 5c") {
            if(user.coins >= 5) {
                user.hp += 10;
                user.coins -= 5;
                user.printStats();
                shop();
            } else { 
                console.log("You Cannot Afford This Health Item");
                console.log("Choose Another");
                console.log("\n---------------\n");
                weaponSale();
            };

        } else if (buyHealth.healthChoice === "Pixie Dust: Restore 25HP, Cost 10c") {
            if(user.coins >= 10) {
                user.hp += 25;
                user.coins -= 10;
                user.printStats();
                shop();
            } else { 
                console.log("You Cannot Afford This Health Item");
                console.log("Choose Another");
                console.log("\n---------------\n");
                weaponSale();
            };

        } else if (buyHealth.healthChoice === "Vampiric Ashes: Restore 50HP, Cost 25c") {
            if(user.coins >= 25) {
                user.hp += 50;
                user.coins -= 25;
                user.printStats();
                shop();
            } else { 
                console.log("You Cannot Afford This Health Item");
                console.log("Choose Another");
                console.log("\n---------------\n");
                weaponSale();
            };

        } else if (buyHealth.healthChoice === "Purify Soul: Restore 100HP, Cost 50c") {
            if(user.coins >= 50) {
                user.hp += 100;
                user.coins -= 50;
                user.printStats();
                shop();
            } else { 
                console.log("You Cannot Afford This Health Item");
                console.log("Choose Another");
                console.log("\n---------------\n");
                weaponSale();
            };

        } else if (buyHealth.healthChoice === "Blood Sacrifice: Restore 200HP, Cost 100c") {
            if(user.coins >= 100) {
                user.hp += 200;
                user.coins -= 100;
                user.printStats();
                shop();
            } else { 
                console.log("You Cannot Afford This Health Item");
                console.log("Choose Another");
                console.log("\n---------------\n");
                weaponSale();
            };

        }
        
})
}

var weaponSale = function(){
    if (user.profession === "Rogue") {
        inquirer
        .prompt([
            {
                type: "list",
                message: "Choose A Weapon To Purchase",
                choices: ["Destructive Daggers: Strength +50, CritMod +1, Cost 10c", "Dragon's Tooth Daggers: Strength +100, CritMod +3, Cost 50c", "Daggers Of Demonic Darkness: Strength +200, CritMod +5, Cost 100c", "Return To Shop"],
                name: "weaponChoice"

            }
        ])
        .then(function(buyWeapon) {
            if (buyWeapon.weaponChoice === "Destructive Daggers: Strength +50, CritMod +1, Cost 10c") {
                if(user.coins >= 10) {
                    user.weapon = "Destructive Daggers"
                    user.critMod = (user.baseCrit + 1);
                    user.strength = (user.strength + 50);
                    user.coins -= 10;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };

            } else if (buyWeapon.weaponChoice === "Dragon's Tooth Daggers: Strength +100, CritMod +3, Cost 50c") {
                if(user.coins >= 50) {
                    user.weapon = "Dragon's Tooth Daggers"
                    user.critMod = (user.baseCrit + 3);
                    user.strength = (user.strength + 100);
                    user.coins -= 50;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if(buyWeapon.weaponChoice === "Daggers Of Demonic Darkness: Strength +200, CritMod +5, Cost 100c") {
                if(user.coins >= 100) {
                    user.weapon = "Daggers Of Demonic Darkness"
                    user.critMod = (user.baseCrit + 5);
                    user.strength = (user.strength + 200);
                    user.coins -= 100;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if (buyWeapon.weaponChoice === "Return To Shop") {
                shop();
            }
        })
    } else if (user.profession === "Knight") {
        inquirer
        .prompt([
            {
                type: "list",
                message: "Choose A Weapon To Purchase",
                choices: ["Great Sword: Strength +50, CritMod +1, Cost 10c", "Flaming Flamberge: Strength +100, CritMod +3, Cost 50c", "Blade Of Bloodlust: Strength +200, CritMod +5, Cost 100c", "Return To Shop"],
                name: "weaponChoice"

            }
        ])
        .then(function(buyWeapon) {
            if (buyWeapon.weaponChoice === "Great Sword: Strength +50, CritMod +1, Cost 10c") {
                if(user.coins >= 10) {
                    user.weapon = "Great Sword"
                    user.critMod = (user.baseCrit + 1);
                    user.strength = (user.strength + 50);
                    user.coins -= 10;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };

            } else if (buyWeapon.weaponChoice === "Flaming Flamberge: Strength +100, CritMod +3, Cost 50c") {
                if(user.coins >= 50) {
                    user.weapon = "Flaming Flamberge"
                    user.critMod = (user.baseCrit + 3);
                    user.strength = (user.strength + 100);
                    user.coins -= 50;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if(buyWeapon.weaponChoice === "Blade Of Bloodlust: Strength +200, CritMod +5, Cost 100c") {
                if(user.coins >= 100) {
                    user.weapon = "Blade Of Bloodlust"
                    user.critMod = (user.baseCrit + 5);
                    user.strength = (user.strength + 200);
                    user.coins -= 100;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if (buyWeapon.weaponChoice === "Return To Shop") {
                shop();
            }
        })
    } else if (user.profession === "Archer") {
        inquirer
        .prompt([
            {
                type: "list",
                message: "Choose A Weapon To Purchase",
                choices: ["Strong Bow: Strength +50, CritMod +1, Cost 10c", "Burning Bow: Strength +100, CritMod +3, Cost 50c", "Bow Of Disembowlment: Strength +200, CritMod +5, Cost 100c", "Return To Shop"],
                name: "weaponChoice"

            }
        ])
        .then(function(buyWeapon) {
            if (buyWeapon.weaponChoice === "Strong Bow: Strength +50, CritMod +1, Cost 10c") {
                if(user.coins >= 10) {
                    user.weapon = "Strong Bow"
                    user.critMod = (user.baseCrit + 1);
                    user.strength = (user.strength + 50);
                    user.coins -= 10;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };

            } else if (buyWeapon.weaponChoice === "Burning Bow: Strength +100, CritMod +3, Cost 50c") {
                if(user.coins >= 50) {
                    user.weapon = "Burning Bow"
                    user.critMod = (user.baseCrit + 3);
                    user.strength = (user.strength + 100);
                    user.coins -= 50;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if(buyWeapon.weaponChoice === "Bow Of Disembowlment: Strength +200, CritMod +5, Cost 100c") {
                if(user.coins >= 100) {
                    user.weapon = "Bow Of Disembowlment"
                    user.critMod = (user.baseCrit + 5);
                    user.strength = (user.strength + 200);
                    user.coins -= 100;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if (buyWeapon.weaponChoice === "Return To Shop") {
                shop();
            }
        })
    } else if (user.profession === "Mage") {
        inquirer
        .prompt([
            {
                type: "list",
                message: "Choose A Weapon To Purchase",
                choices: ["Wizard's Wand: Strength +50, CritMod +1, Cost 10c", "Book Of Necromancy: Strength +100, CritMod +3, Cost 50c", "Orb Of Obliteration: Strength +200, CritMod +5, Cost 100c", "Return To Shop"],
                name: "weaponChoice"

            }
        ])
        .then(function(buyWeapon) {
            if (buyWeapon.weaponChoice === "Wizard's Wand: Strength +50, CritMod +1, Cost 10c") {
                if(user.coins >= 10) {
                    user.weapon = "Wizard's Wand"
                    user.critMod = (user.baseCrit + 1);
                    user.strength = (user.strength + 50);
                    user.coins -= 10;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };

            } else if (buyWeapon.weaponChoice === "Book Of Necromancy: Strength +100, CritMod +3, Cost 50c") {
                if(user.coins >= 50) {
                    user.weapon = "Book Of Necromancy"
                    user.critMod = (user.baseCrit + 3);
                    user.strength = (user.strength + 100);
                    user.coins -= 50;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if(buyWeapon.weaponChoice === "Orb Of Obliteration: Strength +200, CritMod +5, Cost 100c") {
                if(user.coins >= 100) {
                    user.weapon = "Orb Of Obliteration"
                    user.critMod = (user.baseCrit + 5);
                    user.strength = (user.strength + 200);
                    user.coins -= 100;
                    user.printStats();
                    shop();
                } else { 
                    console.log("You Cannot Afford This Weapon");
                    console.log("Choose Another");
                    console.log("\n---------------\n");
                    weaponSale();
                };
            } else if (buyWeapon.weaponChoice === "Return To Shop") {
                shop();
            }
        })
    }
}

var buyOrBattle = function() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Visit Shop Or Continue To Battle?",
            choices: ["Visit Shop", "Continue Carnage"],
            name: "continueChoice"
        }
    ])
    .then(function(bOB){
        if(bOB.continueChoice === "Visit Shop"){
            shop();
        } else if (bOB.continueChoice === "Continue Carnage") {
            chooseEnemy();
        }
    })
}
