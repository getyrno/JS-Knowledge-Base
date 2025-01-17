const num = 11;

// const: Объявляет переменную с областью видимости в блоке кода, значение которой не может быть изменено.
// num: Имя переменной, которая содержит значение 11.
// 11: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной num присваивается числовое значение 11.
//     Переменные, объявленные с помощью const, имеют блочную область видимости и не могут быть изменены после инициализации.

const str = 'world';

// const: Объявляет переменную с областью видимости в блоке кода, значение которой не может быть изменено.
// str: Имя переменной, которая содержит строку 'world'.
// 'world': Присвоенное значение типа String.
// Тип данных: String
// Особенности:
//     Переменной str присваивается строка 'world'.
//     Переменные, объявленные с помощью const, имеют блочную область видимости и не могут быть изменены после инициализации.

const obj = { res: 'result' };

// const: Объявляет переменную с областью видимости в блоке кода, значение которой не может быть изменено.
// obj: Имя переменной, которая содержит объект { res: 'result' }.
// { res: 'result' }: Объект с одним свойством res, значение которого — строка 'result'.
// Тип данных: Object
// Особенности:
//     Переменной obj присваивается объект { res: 'result' }.
//     Объекты, объявленные с помощью const, могут изменяться (например, добавляться новые свойства), но сама переменная не может быть переприсвоена.

const arr = ['a', 'b', 'c', 1, 2, 3, 4, 5];

// const: Объявляет переменную с областью видимости в блоке кода, значение которой не может быть изменено.
// arr: Имя переменной, которая содержит массив ['a', 'b', 'c', 1, 2, 3, 4, 5].
// ['a', 'b', 'c', 1, 2, 3, 4, 5]: Массив, содержащий строки и числа.
// Тип данных: Array (массив)
// Особенности:
//     Переменной arr присваивается массив ['a', 'b', 'c', 1, 2, 3, 4, 5].
//     Массивы могут содержать элементы различных типов данных, таких как строки и числа.
//     Массивы, объявленные с помощью const, могут изменяться (например, добавляться или удаляться элементы), но сама переменная не может быть переприсвоена.

const fn1 = function (a) {
    console.log(a);
};

// const: Объявляет переменную с областью видимости в блоке кода, значение которой не может быть изменено.
// fn1: Имя переменной, которая содержит функцию.
// function (a) { console.log(a); }: Анонимная функция, принимающая один аргумент a и выводящая его в консоль.
// Тип данных: Function
// Особенности:
//     Переменной fn1 присваивается функция, которая принимает один аргумент и выводит его значение в консоль.
//     Функции в JavaScript являются объектами первого класса, что означает, что их можно присваивать переменным, передавать в качестве аргументов другим функциям и возвращать из других функций.

// Архитектура и работа:
//     Переменные num, str, obj, arr и fn1 объявляются с помощью const и имеют блочную область видимости.
//     Переменные, объявленные с помощью const, не могут быть изменены после инициализации, однако объекты и массивы, объявленные с помощью const, могут изменяться.
//     Переменная num содержит числовое значение.
//     Переменная str содержит строковое значение.
//     Переменная obj содержит объект с одним свойством.
//     Переменная arr содержит массив строк и чисел.
//     Переменная fn1 содержит функцию, которая принимает один аргумент и выводит его в консоль.
