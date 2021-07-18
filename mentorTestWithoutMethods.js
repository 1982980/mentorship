// Бизнес требование:
// allValues это логи измерений от прибора. Cобрать статистику, отсеяв ошибочные измерения
// badValues - заранее известные ошибочные записии в логах
// loverBoundary и higherBoundary - границы данных для отсеивания погрешности измерений прибора

// После каждого этапа вывести данные в консоль.

// 1. Выбрать элементы из массива allValues, которые удовлетворяют условию:
// - не в массиве badValues
// - не меньше lowerBoundary
// - не больше higherBoundary
// резултат новый массив goodValues [25, 23, 19, 9, 12, 44, 61]

// 2. Вывести каких значений больше, четных или нечетных.
// результат - **нечетных**. (25, 23, 19, 9, 61). Четных всего два (12, 44)

// 3. Найти среднее значение элементов из получившегося массива
// (25 + 23 + 19 + 9 + 12 + 44 + 61) / 7(количество элементов) = 27.571428571428573

// 4. Найти средний элемент в отсортированном массиве
// - если массив четный, то это элемент в центре [2, 9, 35, 8, 11] -> [2, 8, 9, 11, 35] -> 9
// - если массив нечетный, то это сумма двух в центре пополам [2, 9, 8, 11] -> [2, 8, 9, 11] -> (8 + 9) / 2 -> 8.5

// 5. Сделать два решения
// - используя по максимуму встроенные функции массивов
// - не используя встроенные функции массивов

function runIt() {
  const allValues = [1, 25, 18, 36, 4, 99, 23, 19, 18, 9, 12, 44, 61],
    badValues = [18, 36],
    lowerBoundary = 5,
    higherBoundary = 95,
    odd = [],
    even = [];
  let goodValues = [],
    goodValues2 = [];

  console.log("Running calculations...");

  for (let value of allValues) {
    if (value > lowerBoundary && value < higherBoundary) {
      // for (let badValue of badValues) {
      //   if (badValue == value) {
      //     console.log(value);
      //   }
      // }
      goodValues.push(value);
    }
  }
  // не могу убрать из массива badValue, элементы нахожу, но не могу их удалить из массива
  for (let value of goodValues) {
    for (let badValue of badValues) {
      if (badValue == value) {
        goodValues2.push(value);
        continue;
      }
    }
  }
  // console.log(goodValues2);
  // console.log(goodValues);

  for (let elem of goodValues) {
    if (elem % 2 == 0) {
      odd.push(elem);
    } else {
      even.push(elem);
    }
  }
  if (odd.length >= even.length) {
    let a = odd.length - even.length;
    console.log(`Чётнных больше на ${a}`);
  } else {
    let b = even.length - odd.length;
    console.log(`Не чётнных больше на ${b}`);
  }
  console.log(`Четные = ${odd}`);
  console.log(`Не четные = ${even}`);

  function getAverageValue(arr) {
    let acc = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      acc += arr[i];
    }
    let averageValue = acc / arr.length;
    console.log(averageValue);
  }
  getAverageValue(goodValues);

  function getAverageElement (arr) {
    if(arr.length % 2 == 0){}
  }
}
runIt();
