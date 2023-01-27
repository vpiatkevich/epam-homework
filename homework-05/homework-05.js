let s = 'hello';
let b = true;
let n = 3;

console.log(`\n1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)\n`)
console.log(`string+boolean: ${s+b}`);
console.log(`string+number: ${s+n}`);
console.log(`number+boolean: ${n+b}`);

console.log(`\n2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)\n`)

console.log(`string*boolean: ${s*b}`);
console.log(`string*number: ${s*n}`);
console.log(`number*boolean: ${n*b}`);

console.log(`\n3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)\n`)

console.log(`string/boolean: ${s/b}`);
console.log(`string/number: ${s/n}`);
console.log(`number/boolean: ${n/b}`);

console.log(`\n4) Выполнить явное преобразование(number, string, boolean):\n`)

b = Number(n);
console.log(typeof b)

n = String(n);
console.log(typeof n)

s = Boolean(s);
console.log(typeof s)
