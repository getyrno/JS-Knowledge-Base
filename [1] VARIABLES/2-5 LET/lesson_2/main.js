let name = 'name'

// let: Объявляет переменную с областью видимости в блоке кода.
// name: Имя переменной, которая содержит строку 'name'.
// 'name': Присвоенное значение типа String.
// Тип данных: String
// Особенности:
//     let объявляет переменную с блочной областью видимости.
//     Переменной name присваивается строка 'name'.
//     Переменные, объявленные с помощью let, могут быть изменены, но не могут быть повторно объявлены в той же области видимости.

let name2 = name

// let: Объявляет переменную с областью видимости в блоке кода.
// name2: Имя новой переменной, которая получает значение переменной name.
// name: Переменная, значение которой присваивается переменной name2.
// Тип данных: String (значение 'name' копируется из переменной name)
// Особенности:
//     name2 получает значение переменной name, что создает копию строки 'name'.
//     name2 будет также иметь тип String.

let name3;

// let: Объявляет переменную с областью видимости в блоке кода.
// name3: Имя переменной, которая объявляется без инициализации, ее значение будет undefined.
// Тип данных: undefined
// Особенности:
//     Переменная name3 объявляется, но не инициализируется, поэтому ее значение по умолчанию будет undefined.
//     Тип данных переменной name3 на данный момент undefined.

let name4 = name + name2 + name3

// let: Объявляет переменную с областью видимости в блоке кода.
// name4: Имя новой переменной, которой присваивается результат конкатенации (объединения) строк.
// name + name2 + name3: Операция сложения строк. name и name2 содержат строку 'name', поэтому результатом будет 'namenameundefined'.
// name3: Так как переменная name3 не была инициализирована, ее значение будет undefined, что при конкатенации с другими строками приводит к строковому значению 'undefined'.
// Тип данных: String
// Особенности:
//     Операция конкатенации (объединения) строк с использованием оператора +.
//     При конкатенации строки и undefined, undefined преобразуется в строку 'undefined'.
//     Итоговое значение переменной name4 будет строкой 'namenameundefined'.

// Архитектура и работа:
//     Переменные объявляются с помощью ключевого слова let, что ограничивает их область видимости текущим блоком кода.
//     Переменные могут быть инициализированы сразу при объявлении или позже.
//     Переменные, которые не были инициализированы, имеют значение undefined.
//     При сложении (конкатенации) строк переменные приводятся к строковому типу. Значение undefined при конкатенации преобразуется в строку 'undefined'.
//     Типы данных в JavaScript динамические, т.е. переменные могут содержать данные различных типов в разное время исполнения программы.
