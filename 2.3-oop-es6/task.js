//Задание 1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
    
    takeDamage(damage) {
        this.durability -= damage;

        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if ((this.durability == 0) || (this.durability == 0)) {
            return 0;
        }

        if (this.durability == 'Infinity') {
            return 1;
        }

        if (this.durability >= (this.durability * 0.3)) {
            return this.attack;
        } else {
                return this.attack / 2;
            }
    }

    isBroken() {
       return (((this.durability > 0) || (this.durability == 'Infinity')) ? false : true);
    }
}

const hand = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const swordOrdinary = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, 200, 4);
longBow['version'] = 'Лук';

const poleax = new Weapon('Секира', 27, 800, 1);
poleax['version'] = 'Меч';

const staffStorm = new Weapon('Посох Бури', 10, 300, 3);
staffStorm['version'] = 'Посох';

//Задание 2
class Bow extends Weapon {
    constructor () {
        super ('Лук', 10, 200, 3);
    }
}

class LongBow extends Weapon {
    constructor () {
        super ('Длинный лук', 15, 200, 4);
        this['version'] = 'Лук';
    }
}

class Hand extends Weapon {
    constructor () {
        super ('Рука', 1, Infinity, 1);
    }
}

class Sword extends Weapon {
    constructor () {
        super ('Меч', 25, 500, 1);
    }
}

class Poleax extends Weapon {
    constructor () {
        super ('Секира', 27, 800, 1);
        this['version'] = 'Меч';
    }
}

class Knife extends Weapon {
    constructor () {
        super ('Нож', 5, 300, 1);
    }
}

class Staff extends Weapon {
    constructor () {
        super ('Посох', 8, 300, 2);
    }
}

class StormStaff extends Weapon {
    constructor () {
        super ('Посох Бури', 10, 300, 3);
        this['version'] = 'Посох';
    }
}

const bow1 = new Bow();
console.log(bow1.name);
console.log(bow1.attack);
console.log(bow1.durability);
console.log(bow1.range);

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