console.log(2 > 1 ? console.log(true) : console.error(false));

// console.log: Выводит сообщение в консоль браузера.
// 2 > 1: Оператор сравнения, проверяющий, больше ли 2, чем 1.
// ? (тернарный оператор): Оператор, который принимает три операнда.
//     Синтаксис: условие ? выражение1 : выражение2.
//     Если условие истинно (true), возвращается выражение1. Если ложно (false), возвращается выражение2.
// console.log(true): Вложенный вызов console.log, который выводит true в консоль.
// console.error(false): Вложенный вызов console.error, который выводит false в консоль с уровнем ошибки.

// Архитектура и работа:
//     Условие 2 > 1 проверяет, больше ли 2, чем 1. Поскольку это условие истинно, тернарный оператор возвращает выражение console.log(true).
//     console.log(true) выполняется и выводит true в консоль.
//     console.log(2 > 1 ? console.log(true) : console.error(false)) выводит результат вызова console.log(true), который является undefined.
