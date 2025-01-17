// Цикл for с переменной i, которая инициализируется значением 0 и увеличивается до 29 включительно
for (let i = 0; i < 30; i++) {
    // Вывод значения переменной i в консоль на каждой итерации
    console.log(i);
}

// Разбор цикла for

// for: Начало цикла for, который включает три части: инициализацию, условие и выражение после каждой итерации.

// Инициализация
// let i = 0:
//     let: Объявляет переменную с блочной областью видимости. Переменная i будет доступна только внутри этого цикла.
//     i = 0: Присваивает переменной i начальное значение 0.

// Условие продолжения цикла
// i < 30:
//     Условие, которое проверяется перед каждой итерацией. Если оно истинно (true), выполняется тело цикла.
//     i < 30: Переменная i должна быть меньше 30. Когда i достигнет 30, цикл завершится.

// Выражение после каждой итерации
// i++:
//     Оператор инкрементации, увеличивающий значение переменной i на 1 после каждой итерации.
//     i++: Эквивалентно i = i + 1.

// Тело цикла
{
    // console.log(i):
    //     console.log: Функция для вывода информации в консоль браузера.
    //     (i): Аргумент функции, значение переменной i, которое будет выведено в консоль.
}

// Архитектура и работа:
//     Цикл for состоит из трех частей: инициализация (let i = 0), условие продолжения (i < 30) и выражение после каждой итерации (i++).
//     На каждой итерации проверяется условие i < 30. Если условие истинно, выполняется тело цикла, где вызывается console.log(i).
//     После выполнения тела цикла значение i увеличивается на 1 с помощью оператора i++.
//     Цикл завершается, когда условие i < 30 становится ложным (false).

// Исключения и особенности:
//     Если в инициализации использовалось бы var вместо let, переменная i имела бы функциональную область видимости и была бы доступна за пределами цикла.
//     Если условие i < 30 изначально ложно, тело цикла не выполнится ни разу.
//     Если не использовать оператор инкрементации i++, цикл станет бесконечным, если условие всегда истинно.

