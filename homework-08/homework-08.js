// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1,2,3,4,5,6]));

// // 2. найти максимальное значение числа в массиве ([3,67,15...])

function findMax(arr1) {
    return Math.max.apply(null, arr1);
}

console.log(findMax([3,67,15,14,2,23,74,24]));

// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M

function getFibonachi(n) {
    return n <= 1 ? n : getFibonachi(n - 1) + getFibonachi(n - 2);
}

function arrayFibonachi(n,m) {
    const arrF = [];

    for (i = 0; arrF.length < m; i++ ) {
        arrF.push(getFibonachi(n));
        n++
    }

    return arrF;
}

console.log(arrayFibonachi(3,5));

// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function findMatchingDigits(num1, num2){
    let matchingValue = [];
    let matchingValueAndPosition = [];
    num1 = num1.toString();
    num2 = num2.toString();

    for (i = 0; i < num1.length; i++){
        if (num1[i] === num2[i]) {
            matchingValueAndPosition.push(num1[i])
        } else if (num2.includes(num1[i])) {
            matchingValue.push(num1[i]);
        }
    }

    console.log(`Digits with matching value and position: ${matchingValueAndPosition.length}`)
    console.log(`Digits with matching value: ${matchingValue.length}`)
}

findMatchingDigits(3487,3794);

// 5. сортировка массива по возрастанию/убыванию

function sortArrayAscending(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }

console.log(sortArrayAscending([3,7,4,9]))

  function sortArrayDescending(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }

console.log(sortArrayDescending([3,7,4,9]))

// 6. удалить из массива все повторяющиеся элементы

function removeDuplicatesFromArray(arr) {
    newArr = [];

    for (i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

arr3 = [32, 4, 5, 32, 4, 7, 8, 9];
console.log(removeDuplicatesFromArray(arr3));

// * все действия и переборы стараться выполнять методами конструктора Array и Object
// ** все примеры должны быть решены функция, функция должна принимать параметры и работать с любыми заданными атрибутами.
// макс 10
