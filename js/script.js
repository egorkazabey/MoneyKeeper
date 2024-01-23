"use strict";

const budgetAsk = prompt("Какой твой доход?");
const data = prompt('Введите дату в формате: месяц/день/год:')

// Дата
function date() {
	const yearValue = document.querySelector(".year-value");
	const dayValue = document.querySelector(".day-value");
	const monthValue = document.querySelector(".month-value");
  
	let formater = new Date(data);
	yearValue.value = formater.getFullYear();
	dayValue.value = formater.getDay();
	monthValue.value = formater.getMonth() + 1;
  }

// Весь бюджет
function budget() {
  const budgetValue = document.querySelector(".budget-value");

  budgetValue.innerHTML = budgetAsk;
}

// Дневной бюджет
document.querySelector(".count-budget-btn").addEventListener("click", function () {
    const dayBudget = document.querySelector(".daybudget-value");

    dayBudget.innerHTML = (budgetAsk / 30).toFixed();
  });

// Уровень дохода
function incomeLevel() {
  const levelValue = document.querySelector(".level-value");

  const low = "Низкий",
    medium = "Средний",
    high = "Высокий";

  if (budgetAsk < 30000) {
    levelValue.innerHTML = low;
  } else if (budgetAsk <= 60000) {
    levelValue.innerHTML = medium;
  } else if (budgetAsk > 60000) {
    levelValue.innerHTML = high;
  } else if ((budgetAsk <= 0) & (budgetAsk != isNaN)) {
    console.log("Произошла ошибка!");
  }
}


// Обязательный расходы
document.querySelector('.expenses-item-btn').addEventListener('click', function() {
	const exp2 = document.querySelector('#expenses_1').value,
	      exp4 = document.querySelector('#expenses_3').value,
		  expValue = document.querySelector('.expenses-value');
	
	expValue.innerHTML = `${exp2}, ${exp4}`;
	console.log(exp2);
})

// Вызов функций
incomeLevel();
budget();
date();
