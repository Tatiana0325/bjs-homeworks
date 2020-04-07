//Задание 1
class Weapon {
    constructor(obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.durability = obj.durability;
        this.range = obj.range;
        this._durabilitu = obj.durability;
    }
    
    takeDamage(damage) {
        if (isNaN(parseInt(damage))) {
            return 'Ошибка! Неверный формат введеного значения.'
        }

        this.durability -= damage;

        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability == 0){
            return 0;
        }

        if (this.durability == 'Infinity') {
            return 1;
        }

        if (this.durability >= (this._durability * 0.3)) {
            return this.attack;
        } else {
                return this.attack / 2;
            }
    }

    isBroken() {
       return (((this.durability > 0) || (this.durability == 'Infinity')) ? false : true);
    }
}

const sword = new Weapon({name: 'Старый меч',
                          attack: 20,
                          durability: 10,
                          range: 1});

sword.takeDamage(5);
console.log(sword.durability);
                        
sword.takeDamage(50);
console.log(sword.durability);

const hand = new Weapon({name: 'Рука', 
                        attack: 1, 
                        durability: Infinity, 
                        range: 1});
                        
hand.takeDamage(20);
console.log(hand.durability);

const bow = new Weapon({name: 'Лук',
                        attack:  10,
                        durability: 200, 
                        range: 3});

bow.takeDamage(20);
console.log(bow.durability);
                       
bow.takeDamage(200);
console.log(bow.durability);

console.log(bow.durability); 
console.log(bow.getDamage());

console.log(hand.durability); 
console.log(hand.getDamage());

console.log(bow.durability);
console.log(bow.isBroken());

console.log(hand.durability);
console.log(hand.isBroken());

const swordOrdinary = new Weapon({name: 'Меч',
                        attack:  25,
                        durability: 500,
                        range: 1});

const knife = new Weapon({name: 'Нож',
                        attack: 5,
                        durability: 300,
                        range: 1});

const staff = new Weapon({name: 'Посох',
                        attack: 8,
                        durability: 300,
                        range: 2});

const longBow = new Weapon({name: 'Длинный лук',
                        attack: 15,
                        durability: 200,
                        range: 4});
longBow['version'] = 'Лук';

const poleax = new Weapon({name: 'Секира',
                        attack: 27,
                        durability: 800,
                        range: 1});
poleax['version'] = 'Меч';

const staffStorm = new Weapon({name: 'Посох Бури',
                            attack: 10,
                            durability: 300,
                            range: 3});
staffStorm['version'] = 'Посох';

//Задание 2
class Bow extends Weapon {
    constructor () {
        super ({name: 'Лук',
                attack:  10,
                durability: 200, 
                range: 3});
    }
}

class LongBow extends Weapon {
    constructor () {
        super ({name: 'Длинный лук',
                attack: 15,
                durability: 200,
                range: 4});

        this['version'] = 'Лук';
    }
}

class Hand extends Weapon {
    constructor () {
        super ({name: 'Рука', 
               attack: 1, 
               durability: Infinity, 
               range: 1});
    }
}

class Sword extends Weapon {
    constructor () {
        super ({name: 'Меч',
               attack:  25,
               durability: 500,
               range: 1});
    }
}

class Poleax extends Weapon {
    constructor () {
        super ({name: 'Секира',
               attack: 27,
               durability: 800,
               range: 1});

        this['version'] = 'Меч';
    }
}

class Knife extends Weapon {
    constructor () {
        super ({name: 'Нож',
               attack: 5,
               durability: 300,
               range: 1});
    }
}

class Staff extends Weapon {
    constructor () {
        super ({name: 'Посох',
               attack: 8,
               durability: 300,
               range: 2});
    }
}

class StormStaff extends Weapon {
    constructor () {
        super ({name: 'Посох Бури',
               attack: 10,
               durability: 300,
               range: 3});

        this['version'] = 'Посох';
    }
}

const bow2 = new Bow();
console.log(bow2.name);
console.log(bow2.attack);
console.log(bow2.durability);
console.log(bow2.range);

//Задание 3
class StudentLog {
    constructor (name) {
        this.name = name;
        this.items = {};
    }

    getName() {
        if ((this.name === '') || (this.name == null) || (typeof(this.name) == 'undefined')) {
            return 'Ошибка! Введите имя студента.';
        } else {
            return this.name;
        }
    }

    addGrade(grade, subject) {
        let quantity = 0;

        for (let key in this.items) {
            if (key == subject) {            
                if ((grade >= 1) && (grade <=5)) { 
                    this.items[key].push(grade);
                } else {
                    console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5`);
                }

                return this.items[key].length;
            } else {
                quantity++;
            }  
        }

        if ((Object.keys(this.items).length === 0) || (quantity == Object.keys(this.items).length)) {
            this.items[subject] = [];
             
            if ((grade >= 1) && (grade <=5)) { 
                this.items[subject].push(grade);
                return 1;
            } else {
                console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5`);
                return 0;
            }
        }    
    }

    getAverageBySubject(subject) { 
        let quantity = 0;      
        for (let key in this.items) {
            if (key === subject) {       
                let marks = this.items[subject];

                if (marks.length > 0) {
                    let sum = 0; 
                    for (let i = 0; i < marks.length; i++) {
                        sum += marks[i];
                    }

                    return sum / marks.length;
                } else {
                    return 0;
                }
            } else {
                quantity++;
            }
        }

        if (quantity == Object.keys(this.items).length) {
            return 0;
        }
    }

    getTotalAverage() {
        let quantity = 0;
        let sum = 0;
        
        for (let key in this.items) {
            let average = this.getAverageBySubject(key);
            sum += average;
            quantity++;
        }

        if (quantity == 0) {
            return 0
        } else {
            return sum / quantity;
        }
    }
}