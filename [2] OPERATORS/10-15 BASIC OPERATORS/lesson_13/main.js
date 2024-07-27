console.log(false || true);

// console.log: Выводит сообщение в консоль браузера.
// false || true: Логический оператор ИЛИ (OR). Возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
// Результат: true
// Тип данных: Boolean
// Особенности:
//     Логический оператор ИЛИ (||) возвращает первый истинный (truthy) операнд.
//     Поскольку true является истинным значением, результатом выражения будет true.

console.log(0 || 4);

// console.log: Выводит сообщение в консоль браузера.
// 0 || 4: Логический оператор ИЛИ (OR). Возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
// Результат: 4
// Тип данных: Number
// Особенности:
//     Поскольку 0 является ложным значением (falsy), а 4 — истинным (truthy), результатом выражения будет 4.

let n1;

// let: Объявляет переменную с областью видимости в блоке кода.
// n1: Имя переменной, которая объявлена, но не инициализирована.
// Тип данных: undefined
// Особенности:
//     Переменная n1 объявлена, но не инициализирована, поэтому ее значение по умолчанию будет undefined.

console.log(n1 || 9 || 0);

// console.log: Выводит сообщение в консоль браузера.
// n1 || 9 || 0: Логический оператор ИЛИ (OR). Возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
// Результат: 9
// Тип данных: Number
// Особенности:
//     Поскольку n1 имеет значение undefined (falsy), оператор || переходит к следующему операнду, который равен 9 (truthy).
//     Результатом выражения будет 9.

console.log('' || 7 || 9 || false);

// console.log: Выводит сообщение в консоль браузера.
// '' || 7 || 9 || false: Логический оператор ИЛИ (OR). Возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
// Результат: 7
// Тип данных: Number
// Особенности:
//     Пустая строка ('') является ложным значением (falsy), поэтому оператор || переходит к следующему операнду.
//     7 является истинным значением (truthy), поэтому результатом выражения будет 7.

// Архитектура и работа:
//     Логический оператор ИЛИ (||) возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
//     В JavaScript falsy значения включают false, 0, '', null, undefined и NaN. Все остальные значения являются truthy.
//     Переменные, объявленные с помощью let, могут быть не инициализированы, в этом случае их значение будет undefined.
//     console.log используется для вывода текущего значения выражения в консоль.
