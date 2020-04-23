"use strict";

let money = +prompt("Ваш бюджет на месяц?", "60000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let i = 0;

do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
        b = prompt("Во сколько обойдется?", "10000");
    
    if ((typeof(a) == 'string') && (a != '') && (b !='') && (typeof(a) != null) && (typeof(b) != null)
    && (a.length < 50)) {
        console.log('done');
        appData.expenses[a] = b; 
    } else {
        i--;
    }
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert("Ежедневный отчет: " + appData.moneyPerDay);