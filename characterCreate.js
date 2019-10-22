function Character(name, profession, gender, age, strength, hp, weapon) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.weapon = weapon;
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
        var hitChance = Math.floor(Math.random()*10)+1;
        console.log(this.name + " used " + this.weapon + ".");
        console.log(hitChance);

        if (hitChance === 10) {
            enemy.hp -= (this.strength*3);
            console.log("Critical Hit!");
        } else if (hitChance > 3 && hitChance < 10) {
            enemy.hp -= this.strength;
            console.log("Good Hit");
        } else { 
            console.log("Miss");
        };

        console.log(enemy.name + " HP: " +enemy.hp);
    };
    this.levelUp = function () {
        console.log(this.name + " Has Leveled Up!");
        this.age++;
        this.strength += 5;
        this.hp += 25;

        console.log("Age: "+this.age);
        console.log("Strength: "+this.strength);
        console.log("HP: "+this.hp);
    };
}

var knight = new Character("Humphrey", "Knight", "Male", 25, 9, 200, "Sword");

var healer = new Character("Maria", "Healer", "Female", 21, 3, 500, "Ray of Light");

knight.printStats();
healer.printStats();

knight.attack(healer);
healer.attack(knight);

knight.isAlive();
healer.isAlive();

healer.levelUp();