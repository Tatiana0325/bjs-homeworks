'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    let per = parseFloat(percent);
    if (isNaN(per)) {
        return `Параметр \"Процент\" содержит неправильное значение ${percent}.`;
    }

    let initialFee = parseFloat(contribution);
    if (isNaN(initialFee)) {
        return `Параметр \"Начальный взнос\" содержит неправильное значение ${contribution}.`;
    }
    
    let credit = parseFloat(amount);
    if (isNaN(credit)) {
        return `Параметр \"Общая стоимость\" содержит неправильное значение ${amount}.`;
    }
    
    let loanBody = credit - initialFee;

    let dateNow = new Date();
    
    let month = (date.getFullYear() - dateNow.getFullYear()) * 12;
    let paymentTerm = 0;

    if (date.getMonth() <= dateNow.getMonth()) {
        paymentTerm = month - (dateNow.getMonth() - date.getMonth());
    } else {
            paymentTerm = month + (date.getMonth() - dateNow.getMonth());
        }
        
    let interestRate = per / 1200;
    
    let monthlyFee = loanBody * (interestRate + interestRate / (Math.pow((1 + interestRate), paymentTerm)-1));
        
    let totalAmount = monthlyFee * paymentTerm;
    
    if (isNaN(totalAmount)) {
        return `Расчет не может быть закочен, некорректно введены данные`
    } else {
            console.log(`Общая сумма выплаты ипотеки клиента = ${parseFloat(totalAmount.toFixed(2))}`);
            return parseFloat(totalAmount.toFixed(2));
        }
}

function getGreeting(name) {
    if ((name ===  "") || (typeof(name) == 'undefined') || (name == null)) {
        console.log(`Привет, мир! Меня зовут Аноним`);
        return `Привет, мир! Меня зовут Аноним`;
    } else {
            console.log(`Привет, мир! Меня зовут ${name}`);
            return `Привет, мир! Меня зовут ${name}`;  
        }   
}