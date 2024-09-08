// +++

// 1. Перепишите функцию echo таким образом,
// чтобы вместо any в ней использовался дженерик.

function echo<T>(something: T): T {
    return something;
  }
  
  // 2. Создайте стрелочную функцию echo2 c
  // аналогичным функционалом.
  
  let echo2 = <T, >(someting: T): T => someting;
