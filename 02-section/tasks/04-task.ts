
// +++

enum model{
  mercedes = 'mercedes',
  bmw = 'bmw',
  tesla = 'tesla',

}



let cars: model | null = null;
// Используя Enum укажите переменной cars
// такой тип при котором она может принимать
// следующие значения: "mercedes", "bmw", "tesla",
// null.
// Код ниже должен вызвать ошибку
console.log(model);
cars = model.bmw;
console.log(cars); 
