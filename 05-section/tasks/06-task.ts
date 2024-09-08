// +++

interface IPerson {
    readonly firstName: string;
    readonly lastName: string;
    age: number;
    readonly hometown: string;
    isMarried: boolean;
  }
  
type Writeble<T> = { -readonly [P in keyof T]: T[P]}

  const somePerson: Writeble<IPerson> = {
    firstName: "Антон",
    lastName: "Иванов",
    age: 33,
    hometown: "Москва",
    isMarried: false
  };
  
  // Не меняя интерфейс IPerson измените тип somePerson
  // таким образом чтобы код ниже не вызывал ошибок.
  
  somePerson.firstName = "Семен";
  somePerson.lastName = "Журавлев";
  somePerson.hometown = "Петербург";
  