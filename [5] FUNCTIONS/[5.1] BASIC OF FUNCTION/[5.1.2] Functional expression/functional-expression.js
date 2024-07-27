/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Основы функций
 * Подглава: Функциональное выражение
 */

/**
 * Введение
 *
 * Функциональные выражения в JavaScript – это способ создания функций, который позволяет
 * более гибко управлять их объявлением и использованием. В отличие от объявлений функций,
 * функциональные выражения не поднимаются (hoisted), и они могут быть анонимными.
 */

/**
 * Объявление функционального выражения
 *
 * Функциональные выражения создают функции внутри выражений. Эти функции не
 * поднимаются наверх области видимости, как объявления функций. Они могут быть
 * анонимными или иметь имя.
 *
 * Пример:
 */
const sum = function(a, b) {
    return a + b;
};

// Вызов функции
let result = sum(3, 5); // результат: 8

/**
 * Анонимные функции
 *
 * Функциональные выражения могут быть анонимными (без имени функции). Это особенно полезно
 * при передаче функций как аргументов другим функциям.
 *
 * Пример:
 */
setTimeout(function() {
    console.log('Время вышло!');
}, 1000);

/**
 * Разница между объявлением функции и функциональным выражением
 *
 * Важно понимать разницу между объявлением функции и функциональным выражением.
 *
 * Объявление функции:
 *
 * function имяФункции(параметры) {
 *     // тело функции
 * }
 *
 * Функциональное выражение:
 *
 * const имя_функции = function(параметры) {
 *     // тело функции
 * };
 *
 * Главные различия:
 * 1. Hoisting (Поднятие):
 *    Объявления функций поднимаются на вершину их области видимости. Это означает, что их можно
 *    вызывать до того, как они объявлены в коде.
 *
 * Пример:
 */
foo(); // Работает
function foo() {
    console.log('Hello');
}

/**
 * Однако, при использовании функциональных выражений, это невозможно.
 *
 * Пример:
 */
try {
    bar(); // Ошибка: bar не является функцией
} catch (error) {
    console.log(error.message); // Вывод: bar is not a function
}
const bar = function() {
    console.log('Hello');
};

/**
 * 2. Анонимность:
 *    Функциональные выражения могут быть анонимными, в то время как объявления функций всегда имеют имя.
 *
 * 3. Область видимости:
 *    Объявления функций видны в пределах всей области видимости, в которой они объявлены, тогда как
 *    функциональные выражения доступны только после их определения.
 */

/**
 * Именованные функциональные выражения
 *
 * Хотя функциональные выражения часто анонимны, они могут иметь имена. Именованные функциональные выражения
 * полезны для рекурсивных вызовов или для лучшей отладки.
 *
 * Пример:
 */
const funcFact = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(funcFact(5)); // результат: 120

/**
 * Заключение
 *
 * Функциональные выражения предоставляют гибкость и удобство в JavaScript, позволяя создавать функции
 * динамически и передавать их как аргументы. Понимание разницы между функциональными выражениями и объявлениями функций
 * помогает лучше использовать возможности языка и избегать ошибок.
 */
