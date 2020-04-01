function getAnimalSound(animal) {
    let sound;

    if (typeof(animal) == 'undefined') {
        sound = null;
    } else {        
            sound = animal.sound;
        }
    return sound;
}

function getAverageMark(marks) {
    let summ = 0;
    for (let i = 0; i < marks.length; i++) {
        summ += Number(marks[i]);
    }

    let roundedAverage;

    if (marks.length == 0) { 
        roundedAverage = 0;
    }
    else {
        let average = summ / marks.length;
        roundedAverage = Math.round(average);
    }
       
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = Date.now();
    let date = birthday;
    
    birthday = Date.parse(date);

    let diff = now - birthday;
    
    let age = diff / 31557600000;

    return (age > 18);
}