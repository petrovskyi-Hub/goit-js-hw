const orderPieces = prompt("Please enter quantity:"); //4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = pricePerDroid * orderPieces; // Write code in this line
let balanceСredit = credits - totalPrice; // Write code in this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (orderPieces >= 0) {
  if (balanceСredit >= 0) {
    message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
  } else {
    message = ACCESS_DENIED;
  }
}

console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
