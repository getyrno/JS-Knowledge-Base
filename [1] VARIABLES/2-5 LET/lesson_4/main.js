let name = 'Platon';

// let: Объявляет переменную с областью видимости в блоке кода.
// name: Имя переменной, которая содержит строку 'Platon'.
// 'Platon': Присвоенное значение типа String.
// Тип данных: String
// Особенности:
//     Переменной name присваивается строка 'Platon'.
//     Переменные, объявленные с помощью let, могут быть изменены, но не могут быть повторно объявлены в той же области видимости.

let age = 18;

// let: Объявляет переменную с областью видимости в блоке кода.
// age: Имя переменной, которая содержит значение 18.
// 18: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной age присваивается числовое значение 18.
//     Числовой тип данных (Number) используется для представления как целых чисел, так и чисел с плавающей точкой.

let favorite_color = 'white';

// let: Объявляет переменную с областью видимости в блоке кода.
// favorite_color: Имя переменной, которая содержит строку 'white'.
// 'white': Присвоенное значение типа String.
// Тип данных: String
// Особенности:
//     Переменной favorite_color присваивается строка 'white'.
//     Переменные, объявленные с помощью let, могут быть изменены, но не могут быть повторно объявлены в той же области видимости.

let info = {
    name: name,
    age: age,
    favorite_color: favorite_color
};

// let: Объявляет переменную с областью видимости в блоке кода.
// [5.0] info-functions.md: Имя переменной, которая содержит объект.
// {name: name, age: age, favorite_color: favorite_color}: Объект с тремя свойствами.
//     name: Свойство объекта, которому присваивается значение переменной name ('Platon').
//     age: Свойство объекта, которому присваивается значение переменной age (18).
//     favorite_color: Свойство объекта, которому присваивается значение переменной favorite_color ('white').
// Тип данных: Object
// Особенности:
//     Объект [5.0] info-functions.md содержит три свойства: name, age и favorite_color, значения которых берутся из соответствующих переменных.
//     Объекты в JavaScript используются для хранения коллекций ключ-значение.

let info2 = [
    {
        name: name,
    },
    {
        age: age
    },
    {
        favorite_color: favorite_color
    }
];

// let: Объявляет переменную с областью видимости в блоке кода.
// info2: Имя переменной, которая содержит массив объектов.
// [
//     {name: name},
//     {age: age},
//     {favorite_color: favorite_color}
// ]: Массив из трех объектов.
//     {name: name}: Объект с одним свойством name, которому присваивается значение переменной name ('Platon').
//     {age: age}: Объект с одним свойством age, которому присваивается значение переменной age (18).
//     {favorite_color: favorite_color}: Объект с одним свойством favorite_color, которому присваивается значение переменной favorite_color ('white').
// Тип данных: Array (массив объектов)
// Особенности:
//     Массив info2 содержит три объекта, каждый из которых имеет одно свойство: name, age или favorite_color.
//     Массивы в JavaScript используются для хранения упорядоченных коллекций данных.


// Архитектура и работа:
//     Переменные объявляются с помощью ключевого слова let, что ограничивает их область видимости текущим блоком кода.
//     Переменные могут быть инициализированы сразу при объявлении или позже.
//     Переменные могут содержать данные различных типов, таких как String и Number.
//     Объекты в JavaScript используются для хранения коллекций ключ-значение.
//     Массивы в JavaScript используются для хранения упорядоченных коллекций данных.
//     При создании объектов и массивов значениями их свойств могут быть другие переменные.
