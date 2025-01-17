/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Дополнительные аспекты
 * Подглава: Немедленно вызываемые функциональные выражения (IIFE)
 */

/**
 * Введение
 *
 * Немедленно вызываемые функциональные выражения (Immediately Invoked Function Expressions, IIFE)
 * – это функции, которые выполняются сразу после их определения. Они используются для создания
 * изолированных областей видимости и предотвращения загрязнения глобального пространства имен.
 */

/**
 * Синтаксис IIFE
 *
 * IIFE обычно заключаются в круглые скобки, за которыми следуют еще одни круглые скобки для вызова функции.
 *
 * Пример:
 */
(function() {
    console.log('Это IIFE!');
})();

/**
 * Альтернативный синтаксис IIFE
 *
 * Существует несколько способов создания IIFE, включая использование оператора `!` или `+` перед функцией.
 *
 * Пример:
 */
!function() {
    console.log('Это IIFE с оператором "!"');
}();

+function() {
    console.log('Это IIFE с оператором "+"');
}();

/**
 * Передача аргументов в IIFE
 *
 * В IIFE можно передавать аргументы, как и в обычные функции.
 *
 * Пример:
 */
(function(name) {
    console.log('Привет, ' + name + '!');
})('Алиса');

/**
 * Возврат значения из IIFE
 *
 * IIFE могут возвращать значения, которые могут быть использованы в дальнейшем коде.
 *
 * Пример:
 */
const result = (function(a, b) {
    return a + b;
})(3, 4);

console.log(result); // Вывод: 7

/**
 * Использование IIFE для создания изолированной области видимости
 *
 * IIFE часто используются для создания локальной области видимости и предотвращения
 * конфликтов с глобальными переменными.
 *
 * Пример:
 */
(function() {
    var localVariable = 'Это локальная переменная';
    console.log(localVariable); // Вывод: Это локальная переменная
})();

// console.log(localVariable); // Ошибка: localVariable не определена

/**
 * Модульный паттерн с использованием IIFE
 *
 * IIFE часто используются в модульном паттерне для инкапсуляции и организации кода.
 *
 * Пример:
 */
const Module = (function() {
    let privateVar = 'Приватная переменная';

    function privateMethod() {
        console.log(privateVar);
    }

    return {
        publicMethod: function() {
            privateMethod();
        }
    };
})();

Module.publicMethod(); // Вывод: Приватная переменная

/**
 * Заключение
 *
 * Немедленно вызываемые функциональные выражения (IIFE) – это мощный инструмент в JavaScript,
 * позволяющий создавать изолированные области видимости и предотвращать загрязнение глобального
 * пространства имен. Они широко используются для инкапсуляции кода и реализации модульных паттернов.
 */

