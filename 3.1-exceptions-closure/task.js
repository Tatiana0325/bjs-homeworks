//Задание 1
function parseCount(num) {
    if (isNaN(Number.parseInt(num))) {  
        throw new Error('Невалидное значение');
    }
};

function validateCount(num) {
    try {
        parseCount(num);
        return num
    } catch {
        return(`Ошибка! Что-то не так с числом ${num}`);
    }
}

//Задание 2
class Triangle {
    constructor(a, b, c) {
        this.side1 = a;
        this.side2 = b;
        this.side3 = c;
    }

    isTriangle() {
        if (((this.side1 + this.side2) <= this.side3) || ((this.side2 + this.side3) <= this.side1) || ((this.side3 + this.side1) <= this.side2)) {
            throw new Error('Треугольник с такими сторонами не существует');
       }
    }

    getPerimeter() {
        try {
            this.isTriangle();
            return (this.side1 + this.side2 + this.side3);
        } catch {
            return 'Ошибка! Неправильный треугольник'
        }
    }

    getArea() {
        try{
            this.isTriangle();
            const p = this.getPerimeter() / 2;
            return (Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)));
        } catch {
            return 'Ошибка! Неправильный треугольник'
        } 
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;        
    } catch {
        return triangle; 
    }
}