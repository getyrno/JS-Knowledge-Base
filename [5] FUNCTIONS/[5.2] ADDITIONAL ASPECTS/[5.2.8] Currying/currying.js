/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Дополнительные аспекты
 * Подглава: Каррирование
 */

/**
 * Введение
 *
 * Каррирование (Currying) - это техника в функциональном программировании, при которой функция, принимающая
 * несколько аргументов, преобразуется в последовательность функций, каждая из которых принимает один аргумент.
 * Каррирование позволяет создавать более специализированные и гибкие функции.
 */

/**
 * Основы каррирования
 *
 * Функция, принимающая несколько аргументов, может быть преобразована в каррированную функцию, которая возвращает
 * новую функцию для каждого аргумента до тех пор, пока не будут переданы все аргументы.
 *
 * Пример:
 */
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

/**
 * Пример функции для каррирования
 *
 * Рассмотрим функцию, которая принимает три аргумента.
 *
 * Пример:
 */
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // Вывод: 6
console.log(curriedSum(1, 2)(3)); // Вывод: 6
console.log(curriedSum(1)(2, 3)); // Вывод: 6
console.log(curriedSum(1, 2, 3)); // Вывод: 6

/**
 * Частичное применение (Partial Application)
 *
 * Каррирование можно использовать для частичного применения функций, что позволяет фиксировать
 * некоторые аргументы функции и создавать новые функции с меньшим количеством аргументов.
 *
 * Пример:
 */
const add = (a, b) => a + b;
const curriedAdd = curry(add);

const addFive = curriedAdd(5);
console.log(addFive(10)); // Вывод: 15

/**
 * Каррирование с помощью стрелочных функций
 *
 * Каррирование также можно реализовать с использованием стрелочных функций для более компактного синтаксиса.
 *
 * Пример:
 */
const curryArrow = func => (...args) =>
    args.length >= func.length
        ? func(...args)
        : (...args2) => curryArrow(func)(...args, ...args2);

const curriedSumArrow = curryArrow(sum);

console.log(curriedSumArrow(1)(2)(3)); // Вывод: 6
console.log(curriedSumArrow(1, 2)(3)); // Вывод: 6
console.log(curriedSumArrow(1)(2, 3)); // Вывод: 6

/**
 * Примеры использования каррирования
 *
 * Каррирование полезно в различных сценариях, таких как создание специализированных функций и
 * функциональное программирование с методами массивов.
 *
 * Пример:
 */
const multiply = (a, b) => a * b;
const curriedMultiply = curry(multiply);

const double = curriedMultiply(2);
const triple = curriedMultiply(3);

console.log(double(5)); // Вывод: 10
console.log(triple(5)); // Вывод: 15

/**
 * Заключение
 *
 * Каррирование - это мощная техника в функциональном программировании, которая позволяет создавать
 * специализированные и гибкие функции. Понимание каррирования и его использования помогает писать
 * более чистый и адаптируемый код.
 */