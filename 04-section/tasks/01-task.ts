// +++

// 1. Ниже приведен список переменных из
// первого урока. На их основе создайте
// интерфейс IUser.

let firstName;
let lastName;
let sex;
let age;
let hometown;
let isMarried;
let hasPets;

enum Sex {
  male = 'male',
female = 'female'
}

let person: {
  readonly firstName: string,
  readonly lastName: string,
  readonly sex: Sex,
  age: number,
  hometown: string,
  isMarried: boolean,
  hasPets: boolean,
  hasCar?: boolean,

}
person = {
  firstName: 'vlad',
  lastName: 'bespal',
  sex: Sex.male,
  age: 32,
  hometown: 'qqq',
  isMarried: true,
  hasPets: true,
  hasCar: true
}
console.log(person.sex);

// 2. Не меняя написанный вами интерфейс
// IUser, добавьте в него опциональную
// переменную hasCar

interface IUser {
  readonly firstName: string,
  readonly lastName: string,
  readonly sex: Sex,
  age: number,
  hometown?: string,
  isMarried: boolean,
  hasPets?: boolean,
  hasCar?: boolean,
}

enum Payment {
  cash = 'cash',
  card = 'card',
  credit = 'credit',
}

interface ICustomer extends IUser {
  quantity: string | number,
  payment: Payment,
}
// 3. Создайте новый интерфейс ICustomer,
// поля которого будут наследоваться от IUser.
// ICustomer также должен содержать поля с
// количеством заказов, а также со способом оплаты
// (cash, card или credit)

let person1: ICustomer = {
  firstName: 'Vlad',
  lastName: 'Bespalyy',
  age: 32,
  sex: Sex.male,
  isMarried: true,
  quantity: 10,
  payment: Payment.cash,
}


