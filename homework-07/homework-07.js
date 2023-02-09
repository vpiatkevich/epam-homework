// 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

function throwKubik(){
    let result = Math.floor(Math.random() * 5) + 1;
    return result;
}

function play(){
    let playResult = 0

    for (let i = 1; i < 4; i++) {
        throwResult = throwKubik();
        playResult += throwResult;
    }

    return playResult;
}

let player1Result = play();
console.log (`Player 1 result is ${player1Result}`);
let player2Result = play();
console.log (`Player 2 result is ${player2Result}`);

if (player1Result > player2Result) {
    console.log("Player 1 wins");
} else if (player1Result < player2Result) {
    console.log("Player 2 wins");
} else {
    console.log("It's a tie.");
}

// 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

function countFriday13ths() {
    let count = 0;
    let today = new Date();
    
    for (let year = 2000; year <= today.getFullYear(); year ++) {
        for (let month = 0; month < 12; month++ ) {
            let day13 = new Date(year, month, 13);
            if (day13.getDay() === 5) { 
                count++;
            }
        }
    }
    return count;
}

console.log(countFriday13ths());

// 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

function divideIntoRandomPartsUsingIntegers(num, parts) {
    let result = [];
    let remaining = num;
  
    for (let i = 1; i < parts; i++) {
      let randomNum = Math.floor(Math.random() * remaining);
      result.push(randomNum);
      remaining = remaining - randomNum;
    }
  
    result.push(remaining);
    return result;
  }

console.log(divideIntoRandomPartsUsingIntegers(15,3))

// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

function divideIntoRandomPartsUsingFloats(num, parts) {
    let result = [];
    let remaining = num;
  
    for (let i = 1; i < parts; i++) {
      let randomNum = (Math.random() * remaining).toFixed(2);
      result.push(randomNum);
      remaining = (remaining - randomNum).toFixed(2);
    }
  
    result.push(remaining);
    return result;
  }

console.log(divideIntoRandomPartsUsingFloats(15,3))
