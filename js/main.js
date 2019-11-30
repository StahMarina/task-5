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

let inputExpenses = document.getElementsByClassName('expenses-item');

let expensesBtn = document.getElementsByTagName('button')[0];
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('#income');
let checkSavings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let optionalButtons = document.querySelectorAll('.optional-buttons');

for(let i = 0; i < optionalButtons.length; i++){
    optionalButtons[i].disabled = true;
}

let sumPercentCount = function(){
    let sum = +chooseSum.value,
            persent = +choosePercent.value;

            appData.monthIncome = sum/100/12*persent;
            appData.yearIncome = sum/100*persent;

            monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

};



let money, time;


startBtn.addEventListener('click' , function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");  
    
    for(let i = 0; i < optionalButtons.length; i++){
        optionalButtons[i].disabled = false;
    }

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");     
    }
    appData.budjet = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click' , function(){
    let sum = 0;

    for (let i = 0; i < inputExpenses.length; i++) {
        let a = inputExpenses[i].value,
            b = inputExpenses[++i].value;

        if ( typeof(a)=== "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click' , function(){
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
});

countBudgetBtn.addEventListener('click' , function(){
    if(appData.budjet != undefined){
        appData.moneyPerDay = ((appData.budjet - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else{
            levelValue.textContent = "Произошла ошибка";
        }
    }else{
        dayBudgetValue.textContent = "Произошла ошибка"
    }
});

chooseIncome.addEventListener('input' , function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings =true;
    }
});

chooseSum.addEventListener('input', function(){
    if(appData.savings == true){
        sumPercentCount();
    }
});

choosePercent.addEventListener('input', function(){
    if(appData.savings == true){
        sumPercentCount();
    }
});

let appData = {            // создание объекста который будет свои свойства и их значения
    budjet: money,            
    timeData: time,               
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
  }





