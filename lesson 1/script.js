"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "60000");
    }

}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function chooseOptExpenses (){
    let y;
    for (y = 1; y < 4; y++){
        let a = prompt("Статья необязательных расходов?", "Игры"),
            b = prompt("Во сколько обойдется?", "10000");
        if ((typeof(a) == 'string') && (a != '') && (b !='') && (typeof(a) != null) && (typeof(b) != null)
            && (a.length < 50)) {
            console.log('done optionalExpenses');
            appData.optionalExpenses[a] = b;
        } else {
            y--;
        }
    }
}

chooseOptExpenses();

console.log(appData);

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный отчет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
        console.log( "Минимальный уровень достатка")
    } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay <2000) {
        console.log( "Средний уровень достатка")
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка")
    } else {
        console.log ("Произошла ошибка")
    };
}

detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", '');
        appData.monthIncome = save/100/12*percent;
        alert ("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

