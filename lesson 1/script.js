"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ''),
        time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    chooseExpenses: function () {
        let i = 0;
        do {
            i++;
            let a = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
                b = prompt("Во сколько обойдется?", "10000");

            if ((typeof (a) == 'string') && (a != '') && (b != '') && (typeof (a) != null) && (typeof (b) != null)
                && (a.length < 50)) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i--;
            }
        } while (i < 2);
    },
    chooseOptExpenses: function () {
        let y;
        for (y = 1; y < 4; y++) {
            let a = prompt("Статья необязательных расходов?", "Игры"),
                b = prompt("Во сколько обойдется?", "10000");
            if ((typeof (a) == 'string') && (a != '') && (b != '') && (typeof (a) != null) && (typeof (b) != null)
                && (a.length < 50)) {
                console.log('done optionalExpenses');
                appData.optionalExpenses[a] = b;
            } else {
                y--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный отчет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 1000) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка")
        } else {
            console.log("Произошла ошибка")
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", '');
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpress: function () {
        for (let i = 1;i < 3 ; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
     },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        while ((typeof(items) != 'string') && (items == '') && (typeof(items) == null) ) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '')
        };

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
    }
};

