let num = 5;
console.log(num++);

// let: Объявляет переменную с областью видимости в блоке кода.
// num: Имя переменной, которая содержит значение 5.
// 5: Присвоенное значение типа Number.
// Тип данных: Number
// num++: Постфиксная инкрементация. Увеличивает значение переменной num на 1, но возвращает значение до увеличения.
// console.log(num++): Выводит в консоль значение переменной num до увеличения, то есть 5.
// Результат: 5
// После выполнения num становится 6.

let num2 = 5;
console.log(++num2);

// let: Объявляет переменную с областью видимости в блоке кода.
// num2: Имя переменной, которая содержит значение 5.
// 5: Присвоенное значение типа Number.
// Тип данных: Number
// ++num2: Префиксная инкрементация. Увеличивает значение переменной num2 на 1 и возвращает увеличенное значение.
// console.log(++num2): Выводит в консоль значение переменной num2 после увеличения, то есть 6.
// Результат: 6
// После выполнения num2 становится 6.

let num3 = 10;
console.log(num3--);

// let: Объявляет переменную с областью видимости в блоке кода.
// num3: Имя переменной, которая содержит значение 10.
// 10: Присвоенное значение типа Number.
// Тип данных: Number
// num3--: Постфиксная декрементация. Уменьшает значение переменной num3 на 1, но возвращает значение до уменьшения.
// console.log(num3--): Выводит в консоль значение переменной num3 до уменьшения, то есть 10.
// Результат: 10
// После выполнения num3 становится 9.

let num4 = 10;
console.log(--num4);

// let: Объявляет переменную с областью видимости в блоке кода.
// num4: Имя переменной, которая содержит значение 10.
// 10: Присвоенное значение типа Number.
// Тип данных: Number
// --num4: Префиксная декрементация. Уменьшает значение переменной num4 на 1 и возвращает уменьшенное значение.
// console.log(--num4): Выводит в консоль значение переменной num4 после уменьшения, то есть 9.
// Результат: 9
// После выполнения num4 становится 9.


// Архитектура и работа:
//     Переменные num, num2, num3 и num4 объявляются с помощью let и имеют блочную область видимости.
//     Постфиксная инкрементация (num++) увеличивает значение переменной на 1, но возвращает значение до увеличения.
//     Префиксная инкрементация (++num) увеличивает значение переменной на 1 и возвращает увеличенное значение.
//     Постфиксная декрементация (num--) уменьшает значение переменной на 1, но возвращает значение до уменьшения.
//     Префиксная декрементация (--num) уменьшает значение переменной на 1 и возвращает уменьшенное значение.
//     console.log используется для вывода текущего значения переменной в консоль.
