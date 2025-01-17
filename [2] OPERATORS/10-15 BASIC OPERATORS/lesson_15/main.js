let xp;

// let: Объявляет переменную с областью видимости в блоке кода.
// xp: Имя переменной, которая объявлена, но не инициализирована.
// Тип данных: undefined
// Особенности:
//     Переменная xp объявлена, но не инициализирована, поэтому ее значение по умолчанию будет undefined.

xp = 100;

// xp: Переменная, которая теперь инициализирована значением 100.
// 100: Присвоенное значение типа Number.
// Тип данных: Number
// Особенности:
//     Переменной xp присваивается числовое значение 100.

xp = xp + 50;

// xp + 50: Арифметическая операция сложения текущего значения переменной xp и числа 50.
// Результат: 150
// xp: Переменной xp присваивается результат выражения xp + 50.
// Тип данных: Number
// Особенности:
//     Текущему значению переменной xp (100) добавляется 50, результат (150) присваивается обратно переменной xp.

xp += 75;

// xp += 75: Сокращенная запись для xp = xp + 75.
// xp: Переменной xp присваивается результат выражения xp + 75.
// Тип данных: Number
// Особенности:
//     К текущему значению переменной xp (150) добавляется 75, результат (225) присваивается обратно переменной xp.

xp -= 90;

// xp -= 90: Сокращенная запись для xp = xp - 90.
// xp: Переменной xp присваивается результат выражения xp - 90.
// Тип данных: Number
// Особенности:
//     Из текущего значения переменной xp (225) вычитается 90, результат (135) присваивается обратно переменной xp.


// Архитектура и работа:
//     Переменная xp объявляется с помощью let и имеет блочную область видимости.
//     Переменная xp сначала инициализируется значением 100.
//     Оператор присваивания (xp = xp + 50) добавляет 50 к текущему значению переменной xp и присваивает результат обратно переменной xp.
//     Сокращенный оператор присваивания (xp += 75) добавляет 75 к текущему значению переменной xp и присваивает результат обратно переменной xp.
//     Сокращенный оператор присваивания (xp -= 90) вычитает 90 из текущего значения переменной xp и присваивает результат обратно переменной xp.
//     В результате выполнения всех операций переменная xp будет иметь значение 135.
