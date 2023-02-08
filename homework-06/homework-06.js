// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

function func1(s){

numSum1 = Number(s[0])+Number(s[1])+Number(s[2]);
numSum2 = Number(s[3])+Number(s[4])+Number(s[5]);

if (numSum1 === numSum2) {
    console.log('Yes')
} else {
    console.log('No')
}
}

func1('123456');

// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let n = 1000;
let num = 0;

while (n/2 > 50) {
    n = n/2
    num++
}

console.log (`Total number of iterations: ${num}`);

// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let arr = [12, 15, 20, 25, 59, 79];

function averageInArray(){
let sum = 0;
for (let value of arr) {
    sum = sum + value
}
console.log(sum / arr.length)
return sum / arr.length
}

averageInArray(arr);

// 4. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3,0,'a','b','c');
console.log(arr1);

// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1,0,'a','b');
arr2.splice(6,0,'c');
arr2.push('e');
console.log(arr2);

// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arr3 = [3, 4, 1, 2, 7, 10, 20, 30];
arr3.sort((a,b) => a-b);
console.log(arr3);
