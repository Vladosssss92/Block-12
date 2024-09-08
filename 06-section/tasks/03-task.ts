// ???

// Ниже описана функция getLength. Доработайте
// ее дженерик таким образом чтобы код не вызывал
// ошибок.

type Lengthw = {
  length: number;
}

function getLength<T extends Lengthw>(arg: T): number {
    return arg.length;
  }

  getLength('000')
  