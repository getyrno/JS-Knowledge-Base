/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Основы функций
 * Подглава: Возврат значений
 */

/**
 * Введение
 *
 * Возврат значений из функции позволяет функции передавать результат своей работы
 * обратно в место, откуда она была вызвана. Это делает функции более полезными и
 * гибкими. В этой главе мы рассмотрим, как возвращать значения из функций в JavaScript.
 */

/**
 * Оператор return
 *
 * В JavaScript для возврата значения из функции используется оператор `return`.
 * Когда функция достигает оператора `return`, она завершает выполнение и возвращает
 * указанное значение.
 *
 * Пример:
 */
function add(a, b) {
    return a + b;
}

let sum = add(2, 3); // sum будет равно 5
console.log(sum); // Вывод: 5

/**
 * Возврат без значения
 *
 * Если оператор `return` используется без значения, функция возвращает `undefined`.
 * Это также происходит, если функция завершает выполнение без явного оператора `return`.
 *
 * Пример:
 */
function noReturn() {
    console.log('Эта функция ничего не возвращает');
}

let result = noReturn(); // result будет равно undefined
console.log(result); // Вывод: undefined

/**
 * Множественные return операторы
 *
 * Функции могут содержать несколько операторов `return`, что позволяет завершать
 * выполнение функции и возвращать значения в разных условиях.
 *
 * Пример:
 */
function checkNumber(num) {
    if (num > 0) {
        return 'Положительное число';
    } else if (num < 0) {
        return 'Отрицательное число';
    } else {
        return 'Ноль';
    }
}

console.log(checkNumber(5));  // Вывод: Положительное число
console.log(checkNumber(-3)); // Вывод: Отрицательное число
console.log(checkNumber(0));  // Вывод: Ноль

/**
 * Возврат объектов
 *
 * Функции могут возвращать не только примитивные значения, но и объекты.
 *
 * Пример:
 */
function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let user = createUser('Алиса', 25);
console.log(user); // Вывод: { name: 'Алиса', age: 25 }

/**
 * Возврат функций
 *
 * Функции в JavaScript могут возвращать другие функции, что позволяет создавать
 * более сложные структуры и замыкания.
 *
 * Пример:
 */
function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

let double = createMultiplier(2);
console.log(double(5)); // Вывод: 10

/**
 * Замыкания и возврат значений
 *
 * Замыкания возникают, когда функция возвращает другую функцию, которая сохраняет
 * доступ к переменным внешней функции.
 *
 * Пример:
 */
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // Вывод: 1
console.log(counter()); // Вывод: 2

/**
 * Заключение
 *
 * Возврат значений из функции - это мощный инструмент, который позволяет функции
 * передавать результаты своей работы. Понимание различных способов возврата значений
 * помогает писать более эффективный и гибкий код.
 */

