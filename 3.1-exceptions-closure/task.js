//Задание 1
function parseCount(num) {
    if (isNaN(Number.parseInt(num)) || (typeof(num) == 'undefined')) {  
        throw new Error('Невалидное значение');
    }else {
        return Number.parseInt(num);
    }
};

function validateCount(num) {
    try {
        return parseCount(num);
    } catch(err) {
        return err;
    }
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;

        if (((this.sideA + this.sideB) <= this.sideC) || ((this.sideB + this.sideC) <= this.sideA) || ((this.sideC + this.sideA) <= this.sideB)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }

    getArea() {
        const p = (this.sideA + this.sideB + this.sideC) / 2;
        const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return Number.parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return obj = {
            getArea() {
               return 'Ошибка! Неправильный треугольник';
            },

            getPerimeter() {
                return 'Ошибка! Неправильный треугольник';
            }
        }
    }
}