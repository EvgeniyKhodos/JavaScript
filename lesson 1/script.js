"use strict";

let answer = prompt("Введите обязательную статью расходов в этом месяце", "Еда");

let money = prompt("Во сколько обойдется?", "1000");

let appData = {
    money: 2000,
    timeData: 0,
    expenses: {
        answer: money
    },
    optionalExpenses: 0,
    income: 0,
    savings: false
};

console.log(appData.expenses.answer);

alert("Расходы на день: " + appData.expenses.answer + (appData.expenses.answer / 30));