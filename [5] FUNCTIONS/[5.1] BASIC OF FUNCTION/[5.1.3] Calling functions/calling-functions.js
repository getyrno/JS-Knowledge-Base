/**
 * Полное руководство по функциям для Junior JS Developer
 *
 * Глава: Основы функций
 * Подглава: Вызов функций
 */

/**
 * Введение
 *
 * Вызов функций в JavaScript - это основное действие, которое позволяет выполнять код,
 * заключенный в функцию. Функции могут быть вызваны разными способами в зависимости от
 * контекста и назначения. В этой главе мы рассмотрим различные способы вызова функций.
 */

/**
 * Простой вызов функции
 *
 * Вызов функции происходит с использованием имени функции, за которым следуют круглые скобки.
 * Если функция принимает параметры, они передаются внутрь круглых скобок.
 *
 * Пример:
 */
function greet(name) {
    console.log('Привет, ' + name + '!');
}

// Вызов функции
greet('Алиса'); // Вывод: Привет, Алиса!

/**
 * Вызов функции с использованием функции-конструктора
 *
 * В JavaScript функции могут быть использованы как конструкторы для создания объектов.
 * Для этого используется ключевое слово `new`.
 *
 * Пример:
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Алиса', 25);
console.log(person1.name); // Вывод: Алиса
console.log(person1.age);  // Вывод: 25

/**
 * Вызов функции как метода объекта
 *
 * Функции, присвоенные свойствам объекта, называются методами. Они вызываются через
 * объект с использованием нотации точки.
 *
 * Пример:
 */
const user = {
    name: 'Боб',
    greet: function() {
        console.log('Привет, ' + this.name + '!');
    }
};

// Вызов метода объекта
user.greet(); // Вывод: Привет, Боб!

/**
 * Вызов функции с использованием метода call
 *
 * Метод `call` позволяет вызывать функцию с указанным `this` и передавать аргументы
 * по отдельности.
 *
 * Пример:
 */
function introduce(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person2 = { name: 'Чарли' };

// Вызов функции с использованием call
introduce.call(person2, 'Привет', '!'); // Вывод: Привет, Чарли!

/**
 * Вызов функции с использованием метода apply
 *
 * Метод `apply` похож на `call`, но аргументы передаются в виде массива.
 *
 * Пример:
 */
introduce.apply(person2, ['Здравствуйте', '!!!']); // Вывод: Здравствуйте, Чарли!!!

/**
 * Вызов функции с использованием метода bind
 *
 * Метод `bind` создает новую функцию, которая при вызове устанавливает
 * значение `this` на указанное значение.
 *
 * Пример:
 */
const boundIntroduce = introduce.bind(person2);
boundIntroduce('Приветствую', '!!'); // Вывод: Приветствую, Чарли!!

/**
 * Рекурсивный вызов функции
 *
 * Функция может вызывать саму себя, что называется рекурсией. Это полезно для
 * решения задач, которые могут быть разбиты на подзадачи того же типа.
 *
 * Пример:
 */
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Вывод: 120

/**
 * Заключение
 *
 * Вызов функций - это фундаментальная часть работы с функциями в JavaScript. Понимание
 * различных способов вызова функций и их применений помогает писать более гибкий и
 * эффективный код.
 */

