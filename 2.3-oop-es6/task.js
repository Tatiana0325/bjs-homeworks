//Задание 1
class Weapon {
    constructor(obj) {
        this.name = obj.name;
        this.attack = obj.attack;
        this.range = obj.range;
        this.initialDurability = obj.durability;
        this.durability = this.initialDurability;
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

        if (this.durability >= (this.initialDurability * 0.3)) {
            return this.attack;
        } else {
                return this.attack / 2;
            }
    }

    isBroken() {
       return (((this.durability > 0) || (this.durability == 'Infinity')) ? false : true);
    }
}

const arm = new Weapon({name: 'Рука', 
                        attack: 1, 
                        durability: Infinity, 
                        range: 1});
                        
const bow = new Weapon({name: 'Лук',
                        attack:  10,
                        durability: 200, 
                        range: 3});
                      
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

class LongBow extends Bow {
    constructor () {
        super ({
                durability: 200,
               });
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
        this['version'] = 'Лук';
    }
}

class Arm extends Weapon {
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

class Axe extends Sword {
    constructor () {
        super ({
               range: 1
              });
        
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
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

class StormStaff extends Staff {
    constructor () {
        super ({
               durability: 300,
              });

        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
        this['version'] = 'Посох';
    }
}

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