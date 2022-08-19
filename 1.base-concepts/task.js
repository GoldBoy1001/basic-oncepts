"use strict";

function solveEquation(a, b, c) {
   let arr = [];
   let d = (b ** 2 - 4 * a * c);
   let xOne = (-b + Math.sqrt(d)) / (2 * a);
   let xTwo = (-b - Math.sqrt(d)) / (2 * a);
   if (a === 0) {
      return `Зачение a = 0, не допустимо!`;
   } else if (d > 0) {
      arr.push(xOne);
      arr.push(xTwo);
   } else if (d === 0) {
      arr.push(-b / (2 * a));
   }
   return arr;
}


function calculateTotalMortgage(percent = 0, contribution = 0, amount, date) {
   let totalAmount;
   let actualDate = new Date();
   let P = percent / 100 / 12;
   let n = (date.getFullYear() - actualDate.getFullYear()) * 12 + date.getMonth() - actualDate.getMonth();
   let meaningСontribution = parseInt(contribution);
   let meaningAmount = parseInt(amount);
   let S = +amount - +contribution;
   if (Number.isNaN(P)) {
      return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
   } else if (Number.isNaN(meaningСontribution)) {
      return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
   } else if (Number.isNaN(meaningAmount)) {
      return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
   }
   let totalPayment = S * P * (1 + 1 / (Math.pow(1 + P, n) - 1));
   let totalAmountRound = totalPayment * n;
   totalAmount = Math.round(totalAmountRound * 100) / 100;
   return totalAmount;
}
