'use strict';

let startBtn = document.getElementById("start");
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let inputExpensesOne = document.getElementsByClassName('expenses-item')[0];
let inputExpensesTwo = document.getElementsByClassName('expenses-item')[1];
let inputExpensesThree = document.getElementsByClassName('expenses-item')[2];
let inputExpensesFour = document.getElementsByClassName('expenses-item')[3];

let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];

let optionalExpensesItemOne = document.querySelectorAll('.optionalexpenses-item')[0];
let optionalExpensesItemTwo = document.querySelectorAll('.optionalexpenses-item')[1];
let optionalExpensesItemThree = document.querySelectorAll('.optionalexpenses-item')[2];

let chooseIncome = document.querySelector('#income');
let checkSavings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value')[0];
let monthValue = document.querySelector('.month-value')[0];
let dayValue = document.querySelector('.day-value');

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");                                         
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");     
    }
}
start();

let appData = {            // создание объекста который будет свои свойства и их значения
    budjet: money,            
    timeData: time,               
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
    
            if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budjet/30).toFixed();
    alert("Ежедневний бюджет: " + appData.moneyPerDay);
    },
detectLeve: function(){
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else{
        console.log("Произошла ошибка");
    }
    },
checkSavings: function(){
    if (appData.savings == true){
        let save = +prompt("какова сумма накоплений?"),
            persent = +prompt("под какой процент?");

        appData.monthIncome = save/100/12*persent;
        alert("Доход с месяца с ващего депозита" + appData.monthIncome);
    }
    },
chooseOptExpenses: function(){
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", ""),
            b = prompt("Во сколько обойдется?");

        if ( typeof(a)=== "string" && typeof(a) != null && a != "" && a.length < 50) {
            appData.optionalExpenses[a] = b;
        } else {
            i--;
        }
    }
    },
    chooseIncome: function(){

        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    },
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
  }





