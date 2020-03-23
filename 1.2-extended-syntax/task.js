'use strict';

function getResult(a,b,c){

    let D = Math.pow(b, 2) - 4 * a *c;
    let x = [];

    if (D > 0) {
        x[0] = (Math.sqrt(D) - b) / (2 * a);
        x[1] = (-b - Math.sqrt(D)) / (2 * a);
    } else if (D === 0) {
        x[0] = (-b) / (2 * a); 
        }

    return x;
}

function getAverageMark(marks){

    let summ = 0;
    let averageMark;

    if (marks.length === 0) {
        return 0;
    } else if (marks.length >= 5) {
        console.log('Количество оценок привышает 5 значений');
        marks.splice(5); 
    }

    for (let i = 0; i < marks.length; i++) {
        summ += marks[i];
    }

    averageMark = summ / marks.length;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let result;

    if (age < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    }

    return result;
}