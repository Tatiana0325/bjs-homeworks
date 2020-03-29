'use strict';

//Задание 1
function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c; 

    if (d < 0) {
        return {
                D: d, 
                roots: []
               };
    } else if (d == 0) {
            let x1 = (-b) / (2 * a);
            
            return {
                    D: d, 
                    roots: [x1]
                   };
        } else {
                let x1 = (-b + Math.sqrt(d)) / (2 * a);
                let x2 = (-b - Math.sqrt(d)) / (2 * a);
            
                return {
                        D: d, 
                        roots: [x1, x2]
                       };
            }   
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }else if (result.D == 0) {
            console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
        } else {
                console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
            }
};

//Задание 2
function getAverageMark(marks) {
    let summ = 0;
    let averageRating;

    if (marks.length == 0) {
        averageRating = 0;
    } else {
        for(let i = 0; i < marks.length; i++) {
            summ += marks[i];
        }

        averageRating = summ / marks.length;
    }

    return averageRating;
}

function getAverageScore(data) {
    let kol = 0;
    let sum = 0;
    let result = {};

    for (let key in data) {
        result[key] = getAverageMark(data[key]);
        sum += result[key];
        kol++;
    }

    if (kol == 0) {
        result.average = 0;
    } else {
        result.average = sum / kol;
    }

    console.log(result);
}

//Задание 3
function getPersonData(secretData) {
    let decryption = {};

    for (let key in secretData) {
        if (key == 'aaa') {
            decryption['firstName'] = getDecodedValue(secretData[key]);
        } else {
            decryption['lasttName'] = getDecodedValue(secretData[key]);
        }        
    }

    console.log(decryption);
}

function getDecodedValue(secret) {
    if (secret == 0) {
       secret = 'Родриго';
    } else {
       secret = 'Эмильо';
    }

    return secret;
}