// +++
const city = "London";
const country = "Great Britain";
const region = 161;

// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes

// let isSameTypes = (typeof city === typeof country)

let isSameTypes = (typeof city === typeof (String(region)))
console.log(isSameTypes);
console.log(typeof city);
console.log(region);


