// Бизнес требование:
// allValues это логи измерений от прибора. Cобрать статистику, отсеяв ошибочные измерения
// badValues - заранее известные ошибочные записии в логах
// loverBoundary и higherBoundary - границы данных для отсеивания погрешности измерений прибора

// После каждого этапа вывести данные в консоль.

// 1. Выбрать элементы из массива allValues, которые удовлетворяют условию:
// - не в массиве badValues
// - не меньше loverBoundary
// - не больше higherBoundary
// резултат новый массив goodValues [25, 23, 19, 9, 12, 44, 61]

// 2. Вывести каких значений больше, четных или нечетных.
// результат - **нечетных**. (25, 23, 19, 9, 61). Четных всего два (12, 44)

// 3. Найти среднее значение элементов из получившегося массива
// (25 + 23 + 19 + 9 + 12 + 44 + 61) / 7(количество элементов) = 27.571428571428573

// 4. Найти средний элемент в отсортированном массиве
// - если массив четный, то это элемент в центре [2, 9, 35, 8, 11] -> [2, 8, 9, 11, 35] -> 9
// - если массив нечетный, то это сумма двух в центре пополам [2, 9, 8, 11] -> [2, 8, 9, 11] -> (8 + 9) / 2 -> 4.5

// 5. Сделать два решения
// - используя по максимуму встроенные функции массивов
// - не используя встроенные функции массивов

function runIt() {
  const allValues = [1, 25, 18, 36, 4, 99, 23, 19, 18, 9, 12, 44, 61];
  const badValues = [18, 36];
  const loverBoundary = 5;
  const higherBoundary = 99;

  console.log("Running calculations...");

  const goodValues = allValues
    .filter((e) => e > loverBoundary)
    .filter((e) => e < higherBoundary)
    .map((elem) => {
      if (!badValues.includes(elem)) {
        return elem;
      }
    })
    .filter((e) => e != undefined);
  console.log(goodValues);
  const getEven = [];
  const getOdd = [];
  const getOddOrEven = goodValues.map(function (e) {
    if (e % 2 == 0) {
      return getOdd.push(e);
    } else {
      return getEven.push(e);
    }
  });
  console.log(`Odd(${getOdd}), Even(${getEven})`);

  function getAverageValue(arr) {
    const e = arr.reduce((e, acc) => acc + e) / arr.length;
    console.log(e);
    return e;
  }
  getAverageValue(goodValues);

  function averageElement(arr) {
    let newArr;
    let result;
    if (arr.length % 2 != 0) {
      newArr = arr.sort((a, b) => a - b);
      result = newArr[Math.floor(arr.length / 2)];
      return console.log(result);
    } else {
      newArr = arr.sort((a, b) => a - b);
      result =
        (newArr[Math.floor(arr.length / 2)] +
          newArr[Math.floor(arr.length / 2) - 1]) /
        2;
      console.log(result);
    }
  }
  averageElement(allValues);
}

runIt();
