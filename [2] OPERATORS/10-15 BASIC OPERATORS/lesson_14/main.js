console.log(true);

// console.log: Выводит сообщение в консоль браузера.
// true: Булево значение true.
// Результат: true
// Тип данных: Boolean
// Особенности:
//     Булево значение true.

console.log(!true);

// console.log: Выводит сообщение в консоль браузера.
// !true: Логический оператор НЕ (NOT). Инвертирует булево значение.
// Результат: false
// Тип данных: Boolean
// Особенности:
//     Логический оператор НЕ (!) инвертирует значение true в false.

console.log(!9 || 10);

// console.log: Выводит сообщение в консоль браузера.
// !9 || 10: Логический оператор НЕ (NOT) инвертирует значение 9, затем логический оператор ИЛИ (OR) возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
// !9: Логический оператор НЕ (NOT) инвертирует значение 9 (truthy) в false (falsy).
// false || 10: Логический оператор ИЛИ (OR) возвращает первый истинный (truthy) операнд, которым является 10.
// Результат: 10
// Тип данных: Number
// Особенности:
//     Логический оператор НЕ (!) инвертирует значение 9 (truthy) в false (falsy).
//     Логический оператор ИЛИ (||) возвращает 10, так как это первый истинный (truthy) операнд.

console.log(!9 && 10);

// console.log: Выводит сообщение в консоль браузера.
// !9 && 10: Логический оператор НЕ (NOT) инвертирует значение 9, затем логический оператор И (AND) возвращает первый ложный (falsy) операнд или последний, если все операнды истинные (truthy).
// !9: Логический оператор НЕ (NOT) инвертирует значение 9 (truthy) в false (falsy).
// false && 10: Логический оператор И (AND) возвращает первый ложный (falsy) операнд, которым является false.
// Результат: false
// Тип данных: Boolean
// Особенности:
//     Логический оператор НЕ (!) инвертирует значение 9 (truthy) в false (falsy).
//     Логический оператор И (&&) возвращает false, так как это первый ложный (falsy) операнд.

console.log(!!true);

// console.log: Выводит сообщение в консоль браузера.
// !!true: Двойное применение логического оператора НЕ (NOT) инвертирует значение дважды, возвращая исходное значение.
// !true: Логический оператор НЕ (NOT) инвертирует значение true в false.
// !!true: Логический оператор НЕ (NOT) инвертирует значение false обратно в true.
// Результат: true
// Тип данных: Boolean
// Особенности:
//     Двойное применение логического оператора НЕ (NOT) (!!) возвращает исходное значение.
//     В данном случае, двойное инвертирование true возвращает true.

// Архитектура и работа:
//     Логический оператор НЕ (!) инвертирует булевые значения (true становится false, и наоборот).
//     Логический оператор ИЛИ (||) возвращает первый истинный (truthy) операнд или последний, если все операнды ложные (falsy).
//     Логический оператор И (&&) возвращает первый ложный (falsy) операнд или последний, если все операнды истинные (truthy).
//     Двойное применение оператора НЕ (!!) инвертирует значение дважды, возвращая исходное значение.
//     console.log используется для вывода текущего значения выражения в консоль.
