"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
 a2 = prompt("Во сколько обойдется?", "10"),
 a3 = prompt("Введите обязательную статью расходов в этом месяце", "Одежда"),
 a4 = prompt("Во сколько обойдется?", "20");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

console.log (appData);

alert("Расходы на день: " + + (appData.budget / 30));