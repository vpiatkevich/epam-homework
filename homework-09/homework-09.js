// 1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandomTimeout() {
    return Math.floor(Math.random() * 4000) + 1000;
}

let p1 = new Promise((resolve) => {
    setTimeout(resolve, getRandomTimeout(), '1');
});

let p2 = new Promise((resolve) => {
    setTimeout(resolve, getRandomTimeout(), '2')
});

let p3 = new Promise((resolve) => {
    setTimeout(resolve, getRandomTimeout(), '3')
});

Promise.race([p1, p2, p3]).then((data) => {
    console.log(data);
});


// 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum(){
    function getRandomNumber(){
        return Math.floor(Math.random() * 4) + 1};

    return new Promise((resolve) => {
        setTimeout(resolve, 3000, getRandomNumber());
    });
};

async function getNumResultPowered(){
    const result = await getNum();
    console.log(Math.pow(result, 2));
    return Math.pow(result, 2);
};

getNumResultPowered();

// 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.

function getRandomNumber(){
    return Math.floor(Math.random() * 4) + 1};

function getNum1(){
    return new Promise((resolve) => {
        setTimeout(resolve, 3000, getRandomNumber());
    });
};

function getNum2(){
    return new Promise((resolve) => {
        setTimeout(resolve, 5000, getRandomNumber());
    });
};

async function getNumResultsSum(){
    const getNum1Result = await getNum1();
    const getNum2Result = await getNum2();
    console.log(getNum1Result + getNum2Result);
    return getNum1Result + getNum2Result;
};

getNumResultsSum();
