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
    }

    isTriangle() {
        if (((this.sideA + this.sideB) <= this.sideC) || ((this.sideB + this.sideC) <= this.sideA) || ((this.sideC + this.sideA) <= this.sideB)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        try {
            this.isTriangle();
            return (this.sideA + this.sideB + this.sideC);
        } catch {
            return 'Ошибка! Неправильный треугольник';
        }
    }

    getArea() {
        try {
            this.isTriangle();
            const p = (this.sideA + this.sideB + this.sideC) / 2;
            const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
            return Number.parseFloat(area.toFixed(3));
        } catch {
            return 'Ошибка! Неправильный треугольник'; 
        }
    }

    getArea_getPerimeter() {
        return 'Ошибка! Неправильный треугольник';
    }
}

function getTriangle(a, b, c) {
    const triangle = new Triangle(a, b, c);
    return triangle;
}