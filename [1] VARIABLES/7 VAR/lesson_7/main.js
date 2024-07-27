var num = 200;

// var: Объявляет переменную с функцией или глобальной областью видимости.
// num: Имя переменной, которая содержит значение 200.
// 200: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной num присваивается числовое значение 200.
//     Переменные, объявленные с помощью var, имеют функцию или глобальную область видимости и могут быть повторно объявлены.

{
    let score = 0;
}

// let: Объявляет переменную с областью видимости в блоке кода.
// score: Имя переменной, которая содержит значение 0.
// 0: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной score присваивается числовое значение 0.
//     Переменные, объявленные с помощью let, имеют блочную область видимости и не могут быть доступны за пределами блока, в котором они объявлены.

console.log(score);

// console.log: Выводит сообщение в консоль браузера.
// score: Переменная, объявленная внутри блока с помощью let.
// Ошибка: ReferenceError: score is not defined
// Особенности:
//     Поскольку переменная score объявлена внутри блока с помощью let, она недоступна за пределами этого блока.
//     Попытка доступа к переменной score вне блока приведет к ошибке ReferenceError.

{
    const score2 = 0;
}

// const: Объявляет переменную с областью видимости в блоке кода, значение которой не может быть изменено.
// score2: Имя переменной, которая содержит значение 0.
// 0: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной score2 присваивается числовое значение 0.
//     Переменные, объявленные с помощью const, имеют блочную область видимости и не могут быть доступны за пределами блока, в котором они объявлены.
//     Значение переменной, объявленной с помощью const, не может быть изменено после инициализации.

console.log(score2);

// console.log: Выводит сообщение в консоль браузера.
// score2: Переменная, объявленная внутри блока с помощью const.
// Ошибка: ReferenceError: score2 is not defined
// Особенности:
//     Поскольку переменная score2 объявлена внутри блока с помощью const, она недоступна за пределами этого блока.
//     Попытка доступа к переменной score2 вне блока приведет к ошибке ReferenceError.

{
    var score3 = 0;
}

// var: Объявляет переменную с функцией или глобальной областью видимости.
// score3: Имя переменной, которая содержит значение 0.
// 0: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной score3 присваивается числовое значение 0.
//     Переменные, объявленные с помощью var, имеют функцию или глобальную область видимости и доступны за пределами блока, в котором они объявлены.

console.log(score3);

// console.log: Выводит сообщение в консоль браузера.
// score3: Переменная, объявленная внутри блока с помощью var.
// Результат: 0
// Тип данных: Number
// Особенности:
//     Поскольку переменная score3 объявлена с помощью var, она доступна за пределами блока, в котором была объявлена.
//     Значение переменной score3 будет 0.


// Архитектура и работа:
//     Переменная num объявляется с помощью var и имеет глобальную область видимости.
//     Переменная score объявляется с помощью let и имеет блочную область видимости, поэтому недоступна за пределами блока, в котором объявлена.
//     Переменная score2 объявляется с помощью const и имеет блочную область видимости, поэтому недоступна за пределами блока, в котором объявлена.
//     Переменная score3 объявляется с помощью var и имеет глобальную область видимости, поэтому доступна за пределами блока, в котором объявлена.